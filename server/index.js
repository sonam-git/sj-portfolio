import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ============================================
// SECURITY CONFIGURATION
// ============================================

// Rate limiting storage
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

// Spam patterns to detect
const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|lottery|winner|bitcoin|crypto|investment)\b/i,
  /\b(click here|act now|limited time|free money|earn \$|make money)\b/i,
  /\b(nigerian|prince|inheritance|million dollars)\b/i,
  /(http[s]?:\/\/.*){3,}/i,
  /(.)\1{10,}/i,
  /\[url=|<a\s+href|<script/i,
];

// Disposable email domains
const DISPOSABLE_DOMAINS = [
  'tempmail', 'throwaway', 'guerrillamail', 'mailinator',
  '10minutemail', 'fakeinbox', 'trashmail', 'tempinbox',
  'getnada', 'maildrop', 'sharklasers', 'spam4.me'
];

// ============================================
// SECURITY FUNCTIONS
// ============================================

function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
    .slice(0, 10000);
}

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  let requests = rateLimitMap.get(ip) || [];
  requests = requests.filter(time => time > windowStart);
  
  if (requests.length >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }
  
  requests.push(now);
  rateLimitMap.set(ip, requests);
  
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - requests.length };
}

function isDisposableEmail(email) {
  const domain = (email.split('@')[1] || '').toLowerCase();
  return DISPOSABLE_DOMAINS.some(d => domain.includes(d));
}

function containsSpam(text) {
  return SPAM_PATTERNS.some(pattern => pattern.test(text));
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

function calculateSpamScore(data) {
  let score = 0;
  const reasons = [];

  if (data._honeypot && data._honeypot.trim() !== '') {
    score += 100;
    reasons.push('Honeypot triggered');
    return { score, reasons };
  }

  if (data._timestamp) {
    const elapsed = (Date.now() - data._timestamp) / 1000;
    if (elapsed < 3) {
      score += 50;
      reasons.push('Submitted too quickly');
    }
  }

  if (isDisposableEmail(data.from_email)) {
    score += 30;
    reasons.push('Disposable email');
  }

  if (containsSpam(data.message)) {
    score += 40;
    reasons.push('Spam patterns in message');
  }
  if (containsSpam(data.subject || '')) {
    score += 30;
    reasons.push('Spam patterns in subject');
  }

  const urlCount = (data.message.match(/https?:\/\//gi) || []).length;
  if (urlCount > 2) {
    score += 25;
    reasons.push('Too many URLs');
  }

  if (data.message.trim().length < 10) {
    score += 15;
    reasons.push('Message too short');
  }

  return { score: Math.min(100, score), reasons };
}

// ============================================
// MIDDLEWARE
// ============================================

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json({ limit: '10kb' })); // Limit request size

// Rate limiting middleware
app.use('/api/send-email', (req, res, next) => {
  const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
  const rateLimit = checkRateLimit(clientIp);
  
  if (!rateLimit.allowed) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait a minute before trying again.'
    });
  }
  
  req.clientIp = clientIp;
  req.rateLimitRemaining = rateLimit.remaining;
  next();
});

// ============================================
// ROUTES
// ============================================

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Email server is running',
    timestamp: new Date().toISOString()
  });
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { 
    from_name, 
    from_email, 
    subject, 
    message,
    _honeypot,
    _formToken,
    _recaptchaToken,
    _timestamp
  } = req.body;

  const clientIp = req.clientIp;

  // Validate required fields
  if (!from_name || !from_email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: name, email, and message are required'
    });
  }

  // Validate email format
  if (!isValidEmail(from_email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  // Validate lengths
  if (from_name.length > 100 || from_email.length > 254 || 
      (subject && subject.length > 200) || message.length > 10000) {
    return res.status(400).json({
      success: false,
      message: 'Input exceeds maximum length'
    });
  }

  // Spam detection
  const spamCheck = calculateSpamScore({
    from_name,
    from_email,
    subject,
    message,
    _honeypot,
    _timestamp
  });

  if (spamCheck.score >= 50) {
    console.warn(`Spam detected from ${clientIp}:`, spamCheck.reasons);
    return res.status(400).json({
      success: false,
      message: 'Your message was flagged as potential spam. Please try again or contact directly.'
    });
  }

  try {
    // Sanitize all inputs
    const safeName = sanitizeInput(from_name);
    const safeEmail = sanitizeInput(from_email);
    const safeSubject = sanitizeInput(subject || 'No subject');
    const safeMessage = sanitizeInput(message);

    const transporter = createTransporter();

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 3px solid #667eea; }
          .message-box { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #667eea; white-space: pre-wrap; }
          .footer { margin-top: 20px; font-size: 12px; color: #888; text-align: center; }
          .security-info { margin-top: 15px; padding: 10px; background: #e8f4e8; border-radius: 5px; font-size: 11px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">📬 New Contact Form Message</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">From your portfolio website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${safeName}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
            </div>
            <div class="field">
              <div class="label">📝 Subject:</div>
              <div class="value">${safeSubject}</div>
            </div>
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="message-box">${safeMessage}</div>
            </div>
            <div class="security-info">
              <strong>🔒 Security Info:</strong><br>
              IP: ${clientIp}<br>
              Spam Score: ${spamCheck.score}/100<br>
              Received: ${new Date().toLocaleString()}
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Contact Form Message
========================

Name: ${safeName}
Email: ${safeEmail}
Subject: ${safeSubject}

Message:
${safeMessage}

---
Security Info:
IP: ${clientIp}
Spam Score: ${spamCheck.score}/100
Received: ${new Date().toLocaleString()}
    `;

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: safeEmail,
      subject: `Portfolio Contact: ${safeSubject} - from ${safeName}`,
      text: textContent,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent from ${clientIp}:`, info.messageId);

    res.json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);

    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check server configuration.';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Network error. Please check your connection.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Test email configuration endpoint
app.get('/api/test-config', async (req, res) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    
    res.json({
      success: true,
      message: 'Email configuration is valid!',
      config: {
        user: process.env.GMAIL_USER ? '✓ Set' : '✗ Missing',
        password: process.env.GMAIL_APP_PASSWORD ? '✓ Set' : '✗ Missing',
        receiver: process.env.RECEIVER_EMAIL ? '✓ Set' : '✗ Missing'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Email configuration is invalid',
      error: error.message,
      hint: 'Make sure you\'re using a Gmail App Password, not your regular password.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║   📧 Portfolio Email Server (Secured)              ║
║   Running on http://localhost:${PORT}                ║
║                                                    ║
║   Security Features:                               ║
║   ✓ Rate Limiting (${MAX_REQUESTS_PER_WINDOW} req/min)               ║
║   ✓ Spam Detection                                 ║
║   ✓ Input Sanitization                             ║
║   ✓ Honeypot Protection                            ║
║   ✓ Disposable Email Blocking                      ║
║                                                    ║
║   Endpoints:                                       ║
║   • GET  /api/health      - Health check           ║
║   • GET  /api/test-config - Test email config      ║
║   • POST /api/send-email  - Send contact email     ║
║                                                    ║
╚════════════════════════════════════════════════════╝
  `);
});

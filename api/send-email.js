import nodemailer from 'nodemailer';

// ============================================
// SECURITY CONFIGURATION
// ============================================

// Rate limiting storage (in-memory for serverless)
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

/**
 * Sanitize input to prevent XSS
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
    .slice(0, 10000); // Max length limit
}

/**
 * Check rate limiting
 */
function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  // Get or create entry for this IP
  let requests = rateLimitMap.get(ip) || [];
  
  // Filter out old requests
  requests = requests.filter(time => time > windowStart);
  
  if (requests.length >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }
  
  requests.push(now);
  rateLimitMap.set(ip, requests);
  
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - requests.length };
}

/**
 * Check if email is from a disposable service
 */
function isDisposableEmail(email) {
  const domain = (email.split('@')[1] || '').toLowerCase();
  return DISPOSABLE_DOMAINS.some(d => domain.includes(d));
}

/**
 * Check for spam patterns
 */
function containsSpam(text) {
  return SPAM_PATTERNS.some(pattern => pattern.test(text));
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Verify reCAPTCHA token with Google
 */
async function verifyRecaptcha(token) {
  if (!token || !process.env.RECAPTCHA_SECRET_KEY) {
    return { success: true, score: 1 }; // Skip if not configured
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, score: 0 };
  }
}

/**
 * Calculate spam score
 */
function calculateSpamScore(data) {
  let score = 0;
  const reasons = [];

  // Honeypot filled
  if (data._honeypot && data._honeypot.trim() !== '') {
    score += 100;
    reasons.push('Honeypot triggered');
    return { score, reasons };
  }

  // Form submitted too fast (less than 3 seconds)
  if (data._timestamp) {
    const elapsed = (Date.now() - data._timestamp) / 1000;
    if (elapsed < 3) {
      score += 50;
      reasons.push('Submitted too quickly');
    }
  }

  // Disposable email
  if (isDisposableEmail(data.from_email)) {
    score += 30;
    reasons.push('Disposable email');
  }

  // Spam patterns
  if (containsSpam(data.message)) {
    score += 40;
    reasons.push('Spam patterns in message');
  }
  if (containsSpam(data.subject || '')) {
    score += 30;
    reasons.push('Spam patterns in subject');
  }
  if (containsSpam(data.from_name)) {
    score += 25;
    reasons.push('Spam patterns in name');
  }

  // Excessive URLs
  const urlCount = (data.message.match(/https?:\/\//gi) || []).length;
  if (urlCount > 2) {
    score += 25;
    reasons.push('Too many URLs');
  }

  // Message too short
  if (data.message.trim().length < 10) {
    score += 15;
    reasons.push('Message too short');
  }

  return { score: Math.min(100, score), reasons };
}

// ============================================
// MAIN HANDLER
// ============================================

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Get client IP for rate limiting
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || 
                   req.headers['x-real-ip'] || 
                   req.connection?.remoteAddress || 
                   'unknown';

  // Check rate limit
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait a minute before trying again.'
    });
  }

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

  // ============================================
  // INPUT VALIDATION
  // ============================================

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

  // ============================================
  // SPAM DETECTION
  // ============================================

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

  // ============================================
  // reCAPTCHA VERIFICATION
  // ============================================

  if (_recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
    const recaptchaResult = await verifyRecaptcha(_recaptchaToken);
    
    if (!recaptchaResult.success || (recaptchaResult.score && recaptchaResult.score < 0.3)) {
      console.warn(`reCAPTCHA failed for ${clientIp}:`, recaptchaResult);
      return res.status(400).json({
        success: false,
        message: 'Security verification failed. Please try again.'
      });
    }
  }

  // ============================================
  // SEND EMAIL
  // ============================================

  try {
    // Sanitize all inputs
    const safeName = sanitizeInput(from_name);
    const safeEmail = sanitizeInput(from_email);
    const safeSubject = sanitizeInput(subject || 'No subject');
    const safeMessage = sanitizeInput(message);

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Email content with HTML formatting
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

    // Plain text fallback
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

    // Send email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: safeEmail,
      subject: `Portfolio Contact: ${safeSubject} - from ${safeName}`,
      text: textContent,
      html: htmlContent
    });

    console.log(`✅ Email sent from ${clientIp}:`, info.messageId);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Email error:', error);

    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact the site owner.';
    }

    return res.status(500).json({
      success: false,
      message: errorMessage
    });
  }
}

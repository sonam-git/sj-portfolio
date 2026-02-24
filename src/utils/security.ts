/**
 * Security utilities for contact form protection
 * Includes spam detection, input sanitization, and validation
 */

// Common spam keywords and patterns
const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|lottery|winner|bitcoin|crypto|investment)\b/i,
  /\b(click here|act now|limited time|free money|earn \$|make money)\b/i,
  /\b(nigerian|prince|inheritance|million dollars)\b/i,
  /(http[s]?:\/\/.*){3,}/i, // More than 2 URLs is suspicious
  /(.)\1{10,}/i, // Repeated characters
  /\[url=|<a\s+href|<script/i, // HTML/BBCode injection attempts
];

// Suspicious email domains often used by bots
const SUSPICIOUS_DOMAINS = [
  'tempmail.com',
  'throwaway.email',
  'guerrillamail.com',
  'mailinator.com',
  '10minutemail.com',
  'fakeinbox.com',
  'trashmail.com',
  'tempinbox.com',
];

// Blocked disposable email domains
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail', 'throwaway', 'guerrillamail', 'mailinator', 
  '10minutemail', 'fakeinbox', 'trashmail', 'tempinbox',
  'getnada', 'maildrop', 'sharklasers', 'spam4.me'
];

/**
 * Sanitize input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * Check if content contains spam patterns
 */
export const containsSpamPatterns = (text: string): boolean => {
  return SPAM_PATTERNS.some(pattern => pattern.test(text));
};

/**
 * Check if email is from a disposable/temporary email service
 */
export const isDisposableEmail = (email: string): boolean => {
  const domain = email.split('@')[1]?.toLowerCase() || '';
  return DISPOSABLE_EMAIL_DOMAINS.some(d => domain.includes(d)) ||
         SUSPICIOUS_DOMAINS.some(d => domain.includes(d));
};

/**
 * Validate email format with strict regex
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Check for excessive links (spam indicator)
 */
export const hasExcessiveLinks = (text: string, maxLinks: number = 2): boolean => {
  const urlPattern = /https?:\/\/[^\s]+/gi;
  const matches = text.match(urlPattern) || [];
  return matches.length > maxLinks;
};

/**
 * Check if message is too short (likely bot/spam)
 */
export const isMessageTooShort = (message: string, minLength: number = 10): boolean => {
  return message.trim().length < minLength;
};

/**
 * Check if name contains only valid characters
 */
export const isValidName = (name: string): boolean => {
  // Allow letters, spaces, hyphens, apostrophes, and common accented characters
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,100}$/;
  return nameRegex.test(name.trim());
};

/**
 * Generate a simple honeypot field name (obfuscated)
 */
export const getHoneypotFieldName = (): string => {
  return 'website_url'; // Looks legitimate to bots
};

/**
 * Calculate minimum time (in seconds) for a human to fill the form
 */
export const getMinimumFormTime = (): number => {
  return 3; // 3 seconds minimum (bots fill instantly)
};

/**
 * Generate a form token for CSRF-like protection
 */
export const generateFormToken = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}`;
};

/**
 * Validate form token (check if it's recent enough)
 */
export const isValidFormToken = (token: string, maxAgeSeconds: number = 3600): boolean => {
  try {
    const [timestampPart] = token.split('-');
    const timestamp = parseInt(timestampPart, 36);
    const age = Date.now() - timestamp;
    return age > 0 && age < maxAgeSeconds * 1000;
  } catch {
    return false;
  }
};

/**
 * Rate limiting check (client-side, for UX)
 */
const SUBMISSION_KEY = 'contact_form_submissions';

export const canSubmitForm = (cooldownSeconds: number = 60): boolean => {
  try {
    const stored = localStorage.getItem(SUBMISSION_KEY);
    if (!stored) return true;
    
    const lastSubmission = parseInt(stored, 10);
    const elapsed = (Date.now() - lastSubmission) / 1000;
    return elapsed >= cooldownSeconds;
  } catch {
    return true;
  }
};

export const recordSubmission = (): void => {
  try {
    localStorage.setItem(SUBMISSION_KEY, Date.now().toString());
  } catch {
    // Ignore localStorage errors
  }
};

export const getRemainingCooldown = (cooldownSeconds: number = 60): number => {
  try {
    const stored = localStorage.getItem(SUBMISSION_KEY);
    if (!stored) return 0;
    
    const lastSubmission = parseInt(stored, 10);
    const elapsed = (Date.now() - lastSubmission) / 1000;
    return Math.max(0, Math.ceil(cooldownSeconds - elapsed));
  } catch {
    return 0;
  }
};

/**
 * Comprehensive spam score calculation
 * Returns a score from 0 (safe) to 100 (definitely spam)
 */
export const calculateSpamScore = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  formStartTime?: number;
}): { score: number; reasons: string[] } => {
  let score = 0;
  const reasons: string[] = [];

  // Honeypot filled (instant spam)
  if (data.honeypot && data.honeypot.trim() !== '') {
    score += 100;
    reasons.push('Honeypot field filled');
    return { score: Math.min(100, score), reasons };
  }

  // Form submitted too fast
  if (data.formStartTime) {
    const timeElapsed = (Date.now() - data.formStartTime) / 1000;
    if (timeElapsed < getMinimumFormTime()) {
      score += 50;
      reasons.push('Form submitted too quickly');
    }
  }

  // Disposable email
  if (isDisposableEmail(data.email)) {
    score += 30;
    reasons.push('Disposable email address');
  }

  // Spam patterns in message
  if (containsSpamPatterns(data.message)) {
    score += 40;
    reasons.push('Spam keywords detected');
  }

  // Spam patterns in subject
  if (containsSpamPatterns(data.subject)) {
    score += 30;
    reasons.push('Spam keywords in subject');
  }

  // Excessive links
  if (hasExcessiveLinks(data.message)) {
    score += 25;
    reasons.push('Too many links');
  }

  // Message too short
  if (isMessageTooShort(data.message)) {
    score += 15;
    reasons.push('Message too short');
  }

  // Invalid name format
  if (!isValidName(data.name)) {
    score += 20;
    reasons.push('Invalid name format');
  }

  return { score: Math.min(100, score), reasons };
};

export default {
  sanitizeInput,
  containsSpamPatterns,
  isDisposableEmail,
  isValidEmail,
  hasExcessiveLinks,
  isMessageTooShort,
  isValidName,
  getHoneypotFieldName,
  getMinimumFormTime,
  generateFormToken,
  isValidFormToken,
  canSubmitForm,
  recordSubmission,
  getRemainingCooldown,
  calculateSpamScore,
};

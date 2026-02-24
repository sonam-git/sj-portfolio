# Contact Form Security Implementation

This document describes all security measures implemented for the portfolio contact form.

## Security Features

### 1. 🍯 Honeypot Field
A hidden field that catches bots. Legitimate users won't see it, but automated bots will fill it out.

**How it works:**
- Hidden field named `website_url` (looks legitimate to bots)
- If filled, request is immediately rejected with 100% spam score

### 2. ⏱️ Time-Based Validation
Detects submissions that happen too quickly (bots fill forms instantly).

**Configuration:**
- Minimum form fill time: 3 seconds
- Forms submitted faster get +50 spam points

### 3. 🚫 Rate Limiting
Prevents spam attacks by limiting requests per IP.

**Configuration:**
- Max 3 requests per minute per IP
- Returns 429 (Too Many Requests) when exceeded
- Client-side cooldown indicator shows remaining time

### 4. 🧹 Input Sanitization
All user inputs are sanitized to prevent XSS attacks.

**Sanitization includes:**
- HTML entity encoding (`<`, `>`, `&`, `"`, `'`)
- Input length limits (name: 100, email: 254, subject: 200, message: 10000)
- Whitespace trimming

### 5. 📧 Email Validation
Strict email validation with disposable email blocking.

**Blocked domains include:**
- tempmail, throwaway, guerrillamail
- mailinator, 10minutemail, fakeinbox
- And more...

### 6. 🔍 Spam Pattern Detection
Content is scanned for common spam indicators.

**Detected patterns:**
- Spam keywords (viagra, casino, lottery, etc.)
- Excessive URLs (>2 links = suspicious)
- Repeated characters (e.g., "aaaaaaaaaaaa")
- HTML/BBCode injection attempts
- Too short messages (<10 characters)

### 7. 🤖 Google reCAPTCHA v3 (Optional)
Invisible CAPTCHA that scores users based on behavior.

**Setup required:**
1. Get keys from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Add `VITE_RECAPTCHA_SITE_KEY` to frontend `.env`
3. Add `RECAPTCHA_SECRET_KEY` to server `.env`

**Score threshold:** Requests with score < 0.3 are rejected

### 8. 🔐 CSRF-Like Protection
Form tokens help prevent cross-site request forgery.

**How it works:**
- Unique token generated when form loads
- Token includes timestamp for freshness validation
- Tokens older than 1 hour are rejected

## Spam Score System

Each submission receives a spam score from 0-100:

| Score | Result |
|-------|--------|
| 0-49  | ✅ Allowed |
| 50+   | ❌ Blocked |

### Score Breakdown:
| Trigger | Points |
|---------|--------|
| Honeypot filled | +100 (instant block) |
| Form submitted < 3s | +50 |
| Spam patterns in message | +40 |
| Disposable email | +30 |
| Spam patterns in subject | +30 |
| Too many URLs | +25 |
| Invalid name format | +20 |
| Message too short | +15 |

## Environment Variables

### Frontend (`.env`)
```env
VITE_RECAPTCHA_SITE_KEY=your-site-key  # Optional
VITE_API_URL=http://localhost:3001      # Optional
```

### Backend (`server/.env`)
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
RECEIVER_EMAIL=recipient@gmail.com
PORT=3001
RECAPTCHA_SECRET_KEY=your-secret-key   # Optional
```

### Vercel Environment Variables
```
GMAIL_USER
GMAIL_APP_PASSWORD
RECEIVER_EMAIL
RECAPTCHA_SECRET_KEY  # Optional
```

## Security Email Headers

Each email you receive includes security information:
- Sender's IP address
- Spam score
- Timestamp

This helps you identify potentially suspicious messages.

## Testing Security Features

### Test Honeypot
Using browser dev tools, find and fill the hidden `website_url` field. The submission should be blocked.

### Test Rate Limiting
Submit 4+ forms quickly from the same IP. After 3 submissions, you'll see a rate limit error.

### Test Spam Detection
Try submitting a message with spam keywords like "free money" or "click here". It should be flagged.

### Test Disposable Email
Use an email from mailinator.com or similar. Points will be added to spam score.

## Best Practices

1. **Monitor your inbox** for the spam score in received emails
2. **Review blocked messages** in server logs
3. **Adjust thresholds** if legitimate users are being blocked
4. **Enable reCAPTCHA** for additional protection in high-traffic scenarios
5. **Keep patterns updated** - add new spam patterns as needed

## Future Enhancements

Consider adding:
- IP blacklist/whitelist
- Geographic filtering
- Email verification (double opt-in)
- Machine learning spam detection
- More sophisticated bot detection (mouse movements, typing patterns)

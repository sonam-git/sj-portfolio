# Portfolio Email Server - Nodemailer SMTP Setup

This backend server handles contact form submissions using Nodemailer with Gmail SMTP.

## Prerequisites

- Node.js 18+ installed
- A Gmail account with 2-Factor Authentication enabled
- A Gmail App Password (NOT your regular password)

## Setup Instructions

### 1. Generate Gmail App Password

1. Go to your [Google Account Security](https://myaccount.google.com/security)
2. Make sure **2-Step Verification** is enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" as the app and your device
5. Click **Generate**
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### 2. Configure Environment Variables

Edit the `.env` file in the `server` directory:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop  # Your 16-character app password (no spaces)
RECEIVER_EMAIL=sherpa.sjs@gmail.com  # Email to receive messages
PORT=3001
```

### 3. Install Dependencies

```bash
cd server
npm install
```

### 4. Start the Server

```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

### 5. Test the Configuration

Visit `http://localhost:3001/api/test-config` in your browser to verify your email setup.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check - returns server status |
| `/api/test-config` | GET | Tests email configuration validity |
| `/api/send-email` | POST | Sends an email from contact form |

### Send Email Request Body

```json
{
  "from_name": "John Doe",
  "from_email": "john@example.com",
  "subject": "Hello!",
  "message": "This is a test message."
}
```

## Running Both Frontend and Backend

You'll need two terminal windows:

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend (Vite):**
```bash
npm run dev
```

## Troubleshooting

### "Authentication Failed" Error
- Make sure you're using an **App Password**, not your regular Gmail password
- Ensure 2-Factor Authentication is enabled on your Gmail account
- Remove any spaces from the App Password in `.env`

### "Connection Refused" Error
- Verify the server is running on the correct port
- Check that the frontend `VITE_API_URL` matches the server URL

### Emails Not Arriving
- Check your spam folder
- Verify `RECEIVER_EMAIL` is set correctly in `.env`
- Look at server console logs for error messages

## Security Notes

- **Never commit `.env` to version control** - it contains sensitive credentials
- The `.env.example` file shows required variables without actual values
- Use environment variables in production deployments
- Consider rate limiting for production use

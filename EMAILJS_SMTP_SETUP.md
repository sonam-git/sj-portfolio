# EmailJS SMTP Alternative Setup

If Gmail API continues having scope issues, here's how to set up SMTP instead:

## Option 1: Gmail SMTP (Recommended)

1. **Go to EmailJS Dashboard** → Services
2. **Add New Service** → Select "Gmail SMTP" (not "Gmail API")
3. **Enter Gmail SMTP settings:**
   - SMTP Server: smtp.gmail.com
   - Port: 587
   - Username: sherpa.sjs@gmail.com
   - Password: [Use App Password - see below]
   - Security: STARTTLS

## Option 2: Create Gmail App Password

1. **Go to Google Account Settings**: https://myaccount.google.com/
2. **Security** → **2-Step Verification** (must be enabled)
3. **App passwords** → **Generate app password**
4. **Select app**: Mail
5. **Select device**: Other (custom name) → "EmailJS Portfolio"
6. **Copy the 16-character password**
7. **Use this password in EmailJS SMTP settings**

## Option 3: Use Outlook/Hotmail SMTP

If you have a Microsoft account:
- SMTP Server: smtp-mail.outlook.com
- Port: 587
- Security: STARTTLS

## Why SMTP is Better

- ✅ More reliable than API
- ✅ No scope/permission issues
- ✅ Works consistently
- ✅ Better for contact forms

## After Setting Up SMTP

1. Get your new Service ID
2. Update your .env file with the new Service ID
3. Keep the same Template ID and Public Key
4. Test the contact form

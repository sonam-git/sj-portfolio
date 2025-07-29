# EmailJS Troubleshooting Guide

## Common Issues and Solutions

### 1. **Template Configuration Issues**

Your EmailJS template must include these **exact variable names**:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{to_email}}`
- `{{reply_to}}`

### 2. **Template Settings**

In your EmailJS template settings, make sure:
- **To Email**: `sherpa.sjs@gmail.com` (hardcoded)
- **From Name**: `Portfolio Contact Form` (or any name you prefer)
- **Reply To**: `{{reply_to}}` (this will be the sender's email)

### 3. **Service Configuration**

Your EmailJS service must be:
- **Connected to Gmail account**: sherpa.sjs@gmail.com
- **Status**: Active/Connected
- **Service Type**: Gmail (recommended)

### 4. **Template Example**

Here's what your EmailJS template should look like:

**Subject:**
```
Portfolio Contact: {{subject}} - From {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
You can reply directly to this email.
```

### 5. **Environment Variables**

Double-check your `.env` file has the correct format:
```
VITE_EMAILJS_SERVICE_ID=service_opeuut7
VITE_EMAILJS_TEMPLATE_ID=template_z9sfx8o
VITE_EMAILJS_PUBLIC_KEY=wnsoVU544GzkN2dTc
```

### 6. **EmailJS Dashboard Checklist**

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check **Services** - Your Gmail service should be "Connected"
3. Check **Email Templates** - Your template should exist and have the right variables
4. Check **Account** - Make sure you're not over the free tier limits

### 7. **Browser Console Errors**

Common error messages and solutions:

- **"Invalid user"**: Public key is wrong or service is not connected
- **"Template not found"**: Template ID is wrong or template was deleted
- **"Service not found"**: Service ID is wrong or service is disconnected
- **"Network error"**: Internet connection issue or CORS problem

### 8. **Testing Steps**

1. Use the debugger panel on your site
2. Check browser console for detailed errors
3. Verify all EmailJS dashboard settings
4. Test with a simple template first
5. Check spam folder for test emails

### 9. **Free Tier Limits**

EmailJS free tier allows:
- 200 emails per month
- 50 emails per day

If you've hit the limit, you'll get errors until the limit resets.

## Need Help?

If none of these solve the issue, the debugger panel will show you the exact error message to help identify the problem.

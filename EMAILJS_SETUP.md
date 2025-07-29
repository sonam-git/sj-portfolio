# EmailJS Setup Guide

Your portfolio is now configured to send emails directly from the contact forms to your email address using EmailJS. Follow these steps to complete the setup:

## 1. Create EmailJS Account

1. Visit [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## 2. Create Email Service

1. Go to the "Services" section in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (sherpa.sjs@gmail.com)
5. Copy the **Service ID** (looks like `service_xxxxxxx`)

## 3. Create Email Template

1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Use this template content:

**Subject Line:**
```
{{subject}} - From {{from_name}}
```

**Email Body:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. In the template settings:
   - **To Email**: xxxxx@gmail.com
   - **From Name**: Portfolio Contact Form
   - **Reply To**: {{reply_to}}
5. Save the template and copy the **Template ID** (looks like `template_xxxxxxx`)

## 4. Get Public Key

1. Go to "Account" > "General"
2. Copy your **Public Key** (looks like a long string of characters)

## 5. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your actual values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=template_your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

## 6. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the contact form:
   - Navigate to the Technical Skills section and click "Get In Touch"
   - Fill out the contact modal form
   - Submit the form
   - Check your email (sherpa.sjs@gmail.com) for the message

3. You can also test the contact section directly by scrolling to the bottom of the page

## Features

✅ **Contact Modal**: Triggered from multiple places (Technical Skills, Footer)
✅ **Direct Contact Form**: Full contact section at the bottom of the page
✅ **Email Integration**: All messages sent to sherpa.sjs@gmail.com
✅ **Form Validation**: Client-side validation for all required fields
✅ **File Attachments**: Support for file uploads (handled by form, not sent via email)
✅ **Responsive Design**: Works on all devices
✅ **Success Feedback**: Clear confirmation when messages are sent
✅ **Error Handling**: Graceful error handling if EmailJS fails

## Available Contact Options

1. **Contact Modal** (Technical Skills "Get In Touch" button)
2. **Footer "Get In Touch"** (Contact modal)
3. **Footer "Direct Email"** (mailto link)
4. **Contact Section** (Full form at bottom of page)

## Troubleshooting

- **No emails received**: Check your EmailJS service is connected and template is correct
- **Build errors**: Make sure all environment variables are set
- **Template errors**: Ensure all template variables match the ones in the code

Your portfolio now has a fully functional email contact system! 🎉

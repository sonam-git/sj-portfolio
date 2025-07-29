# Contact Forms Testing Checklist

Your portfolio now has **TWO** contact forms that both send emails to `sherpa.sjs@gmail.com` using EmailJS. Here's how to test both:

## ✅ **Contact Form Locations:**

### 1. **Contact Modal** (Popup Form)
**How to access:**
- Go to the **Technical Skills** section
- Click the **"Get In Touch"** button at the bottom
- A modal popup will appear with the contact form

**OR**

- Scroll to the **Footer**
- Click the **"Get In Touch"** button (blue gradient button)

### 2. **Contact Section** (Full Page Form)
**How to access:**
- Scroll to the very bottom of the page
- Find the **"Get In Touch"** section
- Use the full contact form there

## 🧪 **Testing Steps:**

### For BOTH forms, test the following:

1. **Form Validation:**
   - Try submitting empty form → Should show validation errors
   - Enter invalid email → Should show email format error
   - Fill all required fields → Should allow submission

2. **Email Sending:**
   - Fill out the form with:
     - Your name
     - A valid email address
     - A subject
     - A test message
   - Click "Send Message"
   - Should show "Sending..." state
   - Should show success message after sending
   - **Check your email at sherpa.sjs@gmail.com** for the message

3. **Error Handling:**
   - If EmailJS fails, should show error message
   - Error message suggests direct email as backup

4. **Form Reset:**
   - After successful submission, form should reset
   - Modal should close automatically after 3 seconds
   - Contact section should reset after 5 seconds

## 🔍 **What to Verify:**

✅ **Technical Skills "Get In Touch" button** opens contact modal  
✅ **Footer "Get In Touch" button** opens contact modal  
✅ **Contact section form** works directly on page  
✅ **Both forms send emails** to sherpa.sjs@gmail.com  
✅ **Form validation** works on both forms  
✅ **Success messages** appear after sending  
✅ **Error messages** appear if sending fails  
✅ **Forms reset** after successful submission  

## 📧 **Email Template Expected:**

When someone sends a message, you should receive an email with:
- **Subject:** "Portfolio Contact: [their subject] - From [their name]"
- **From:** Portfolio Contact Form
- **Reply-To:** Their email address
- **Body:** Their name, email, subject, and message

## 🛠️ **Troubleshooting:**

- **No emails received:** Check EmailJS dashboard, verify template setup
- **Console errors:** Check browser developer tools for detailed errors
- **Form not submitting:** Check network tab for failed requests
- **Modal not opening:** Check browser console for JavaScript errors

## 🎯 **Quick Test:**

1. Open http://localhost:5175/
2. Scroll to Technical Skills section
3. Click "Get In Touch" 
4. Fill out and submit the modal form
5. Check sherpa.sjs@gmail.com for the email
6. Scroll to Contact section at bottom
7. Fill out and submit the full form
8. Check email again

Both forms should work identically and send emails to your inbox! 🚀

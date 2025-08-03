import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_0lhfkgg';
const TEMPLATE_ID = 'template_1yq6yzm';
const PUBLIC_KEY = 'UE6-2wGFT4pfGt0FS';

export interface EmailData {
  from_name: string;
  from_email: string;
  subject?: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Initialize EmailJS with public key
    emailjs.init(PUBLIC_KEY);
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        to_email: 'sherpa.sjs@gmail.com', // Your email
      }
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact me directly.'
    };
  }
};

export default { sendEmail };

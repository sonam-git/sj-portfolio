import emailjs from '@emailjs/browser';

export interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}

export const sendEmail = async (emailData: EmailData): Promise<void> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Configuration is validated at startup

    if (!serviceId || !templateId || !publicKey) {
      const missingVars = [];
      if (!serviceId) missingVars.push('VITE_EMAILJS_SERVICE_ID');
      if (!templateId) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
      if (!publicKey) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
      
      throw new Error(`EmailJS configuration is missing: ${missingVars.join(', ')}. Please check your .env file.`);
    }

    const templateParams = {
      from_name: emailData.from_name,
      from_email: emailData.from_email,
      subject: emailData.subject,
      message: emailData.message,
      to_email: emailData.to_email,
      reply_to: emailData.from_email,
    };

    // Send email via EmailJS

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('EmailJS Response:', response);

    if (response.status !== 200) {
      throw new Error(`Failed to send email. Status: ${response.status}, Text: ${response.text}`);
    }

    console.log('Email sent successfully!');    } catch (error) {
      console.error('Detailed email error:', error);
      
      // Provide more specific error messages
      if (error instanceof Error) {
        if (error.message.includes('configuration is missing')) {
          throw new Error('EmailJS is not properly configured. Please contact sherpa.sjs@gmail.com directly.');
        } else if (error.message.includes('Invalid user') || error.message.includes('insufficient authentication scopes')) {
          throw new Error('Email service authentication issue. Please contact sherpa.sjs@gmail.com directly.');
        } else if (error.message.includes('Template')) {
          throw new Error('Email template error. Please contact sherpa.sjs@gmail.com directly.');
        } else if (error.message.includes('Network')) {
          throw new Error('Network error. Please check your internet connection and try again.');
        } else if (error.message.includes('412')) {
          throw new Error('Email service needs re-authentication. Please contact sherpa.sjs@gmail.com directly.');
        }
      }
      
      throw new Error('Email service temporarily unavailable. Please contact sherpa.sjs@gmail.com directly.');
    }
};

// Initialize EmailJS
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  if (publicKey) {
    try {
      // Initialize with enhanced configuration for better reliability
      emailjs.init({
        publicKey: publicKey,
        blockHeadless: true,
        blockList: {
          list: ['localhost'],
          watchVariable: 'userAgent',
        },
        limitRate: {
          id: 'app',
          throttle: 10000,
        },
      });
      console.log('✅ EmailJS initialized successfully');
    } catch (error) {
      console.warn('Failed to initialize EmailJS with enhanced config, trying simple init:', error);
      try {
        emailjs.init(publicKey);
        console.log('✅ EmailJS initialized successfully (simple mode)');
      } catch (simpleError) {
        console.error('❌ Failed to initialize EmailJS:', simpleError);
      }
    }
  } else {
    console.error('❌ EmailJS public key is missing from environment variables');
  }
};

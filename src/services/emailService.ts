// Backend API URL for sending emails via Nodemailer/SMTP
// In production (Vercel), use relative path. Locally, use the Express server.
const API_URL = import.meta.env.PROD ? '' : (import.meta.env.VITE_API_URL || 'http://localhost:3001');

export interface EmailData {
  from_name: string;
  from_email: string;
  subject?: string;
  message: string;
  // Security fields
  _honeypot?: string;
  _formToken?: string;
  _recaptchaToken?: string;
  _timestamp?: number;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

/**
 * Send email via backend Nodemailer/SMTP server
 */
export const sendEmail = async (formData: EmailData): Promise<EmailResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        // Security data for server-side validation
        _honeypot: formData._honeypot,
        _formToken: formData._formToken,
        _recaptchaToken: formData._recaptchaToken,
        _timestamp: formData._timestamp,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return {
      success: true,
      message: data.message || 'Message sent successfully! I\'ll get back to you soon.',
      messageId: data.messageId,
    };
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Check if it's a network error (server not running)
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        message: 'Unable to connect to email server. Please try again later or use the email fallback option.',
      };
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send message. Please try again or contact me directly.',
    };
  }
};

/**
 * Check if the email server is running and configured correctly
 */
export const checkEmailServerHealth = async (): Promise<{ healthy: boolean; message: string }> => {
  try {
    const response = await fetch(`${API_URL}/api/health`);
    const data = await response.json();
    
    return {
      healthy: data.status === 'ok',
      message: data.message,
    };
  } catch {
    return {
      healthy: false,
      message: 'Email server is not responding',
    };
  }
};

/**
 * Test email configuration (development only)
 */
export const testEmailConfig = async (): Promise<{ valid: boolean; message: string; config?: Record<string, string> }> => {
  try {
    const response = await fetch(`${API_URL}/api/test-config`);
    const data = await response.json();
    
    return {
      valid: data.success,
      message: data.message,
      config: data.config,
    };
  } catch {
    return {
      valid: false,
      message: 'Unable to test email configuration',
    };
  }
};

export default { sendEmail, checkEmailServerHealth, testEmailConfig };

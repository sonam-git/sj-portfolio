// EmailJS Integration Test
// This file can be used to test the EmailJS integration

import { sendEmail } from '../services/emailService';

export const testEmailIntegration = async () => {
  try {
    console.log('Testing EmailJS integration...');
    
    await sendEmail({
      from_name: 'Portfolio Test',
      from_email: 'test@example.com',
      subject: 'EmailJS Integration Test',
      message: 'This is a test message to verify EmailJS integration is working correctly.',
      to_email: 'sherpa.sjs@gmail.com'
    });
    
    console.log('✅ EmailJS integration test successful!');
    return true;
  } catch (error) {
    console.error('❌ EmailJS integration test failed:', error);
    return false;
  }
};

// Uncomment the line below to run the test (only for development)
// testEmailIntegration();

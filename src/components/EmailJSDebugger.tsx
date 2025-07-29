import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

const EmailJSDebugger: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const runTest = async () => {
    setIsLoading(true);
    setTestResult('');
    
    try {
      console.log('🧪 Starting EmailJS Debug Test...');
      
      // Test with minimal data
      await sendEmail({
        from_name: 'Debug Test',
        from_email: 'debug@test.com',
        subject: 'EmailJS Debug Test',
        message: 'This is a debug test to check EmailJS integration.',
        to_email: 'sherpa.sjs@gmail.com'
      });
      
      setTestResult('✅ SUCCESS: EmailJS test completed! Check your email.');
    } catch (error) {
      console.error('🚨 EmailJS test failed:', error);
      setTestResult(`❌ FAILED: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const checkConfig = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('📋 EmailJS Configuration:', {
      VITE_EMAILJS_SERVICE_ID: serviceId || '❌ MISSING',
      VITE_EMAILJS_TEMPLATE_ID: templateId || '❌ MISSING',
      VITE_EMAILJS_PUBLIC_KEY: publicKey || '❌ MISSING',
    });

    setTestResult(`
📋 Configuration Check:
Service ID: ${serviceId ? '✅ Present' : '❌ MISSING'}
Template ID: ${templateId ? '✅ Present' : '❌ MISSING'}
Public Key: ${publicKey ? '✅ Present' : '❌ MISSING'}

${!serviceId || !templateId || !publicKey ? 
  '⚠️ Some configuration is missing. Check your .env file.' : 
  '✅ All configuration present.'}
    `);
  };

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border z-50 max-w-md">
      <h3 className="font-bold mb-2 text-gray-900 dark:text-white">EmailJS Debugger</h3>
      
      <div className="space-y-2 mb-4">
        <button
          onClick={checkConfig}
          className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          Check Configuration
        </button>
        
        <button
          onClick={runTest}
          disabled={isLoading}
          className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 text-sm"
        >
          {isLoading ? 'Testing...' : 'Run Email Test'}
        </button>
      </div>

      {testResult && (
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono whitespace-pre-wrap text-gray-900 dark:text-white">
          {testResult}
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500">
        Check browser console for detailed logs
      </div>
    </div>
  );
};

export default EmailJSDebugger;

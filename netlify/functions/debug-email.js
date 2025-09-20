const emailjs = require('@emailjs/nodejs');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    console.log('=== EMAIL DEBUG START ===');
    console.log('Environment variables check:');
    console.log('EMAILJS_SERVICE_ID:', process.env.EMAILJS_SERVICE_ID ? 'SET' : 'NOT SET');
    console.log('EMAILJS_USER_ID:', process.env.EMAILJS_USER_ID ? 'SET' : 'NOT SET');
    console.log('EMAILJS_CLIENT_TEMPLATE_ID:', process.env.EMAILJS_CLIENT_TEMPLATE_ID ? 'SET' : 'NOT SET');
    console.log('EMAILJS_AUTORESPONSE_TEMPLATE_ID:', process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID ? 'SET' : 'NOT SET');

    // Test simple email
    console.log('Testing simple email send...');

    const testEmailContent = {
      from_email: 'info@warehouselocating.com',
      from_name: 'Warehouse Locating Debug',
      to_email: 'info@warehouselocating.com',
      to_name: 'Debug Test',
      subject: 'DEBUG: Email Test from Claude',
      message: 'This is a test email to debug the EmailJS configuration.',
      test_time: new Date().toISOString()
    };

    console.log('Email content:', JSON.stringify(testEmailContent, null, 2));
    console.log('Service ID:', process.env.EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.EMAILJS_CLIENT_TEMPLATE_ID);
    console.log('User ID:', process.env.EMAILJS_USER_ID);

    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_CLIENT_TEMPLATE_ID,
      testEmailContent,
      process.env.EMAILJS_USER_ID
    );

    console.log('EmailJS result:', result);
    console.log('=== EMAIL DEBUG SUCCESS ===');

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Debug email sent successfully',
        result: result,
        config: {
          serviceId: process.env.EMAILJS_SERVICE_ID,
          userId: process.env.EMAILJS_USER_ID,
          templateId: process.env.EMAILJS_CLIENT_TEMPLATE_ID
        }
      })
    };

  } catch (error) {
    console.error('=== EMAIL DEBUG ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('=== EMAIL DEBUG END ===');

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Debug email failed',
        error: error.message,
        errorDetails: error.toString(),
        config: {
          serviceId: process.env.EMAILJS_SERVICE_ID ? 'SET' : 'NOT SET',
          userId: process.env.EMAILJS_USER_ID ? 'SET' : 'NOT SET',
          templateId: process.env.EMAILJS_CLIENT_TEMPLATE_ID ? 'SET' : 'NOT SET'
        }
      })
    };
  }
};
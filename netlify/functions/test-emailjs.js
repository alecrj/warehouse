const emailjs = require('@emailjs/nodejs');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    console.log('Testing EmailJS configuration...');
    console.log('Service ID:', process.env.EMAILJS_SERVICE_ID);
    console.log('User ID:', process.env.EMAILJS_USER_ID);
    console.log('Client Template ID:', process.env.EMAILJS_CLIENT_TEMPLATE_ID);
    console.log('Auto Response Template ID:', process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID);

    // Test client notification
    const clientEmailContent = {
      from_email: 'info@warehouselocating.com',
      from_name: 'Warehouse Locating',
      to_email: 'info@warehouselocating.com',
      to_name: 'Warehouse Locating Team',
      subject: '🚨 Test Lead: Claude Test',
      lead_name: 'Claude Test',
      lead_email: 'claude@test.com',
      lead_phone: '555-123-4567',
      warehouse_interest: 'Test Warehouse',
      message: 'This is a test from Claude'
    };

    console.log('Sending client notification test...');
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_CLIENT_TEMPLATE_ID,
      clientEmailContent,
      process.env.EMAILJS_USER_ID
    );
    console.log('Client notification sent successfully');

    // Test auto-response
    const autoResponseContent = {
      from_email: 'info@warehouselocating.com',
      from_name: 'Warehouse Locating',
      to_email: 'claude@test.com',
      to_name: 'Claude Test',
      subject: 'Thank you for your warehouse inquiry!',
      lead_name: 'Claude Test',
      company_name: 'Test Company',
      message: 'This is a test inquiry'
    };

    console.log('Sending auto-response test...');
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID,
      autoResponseContent,
      process.env.EMAILJS_USER_ID
    );
    console.log('Auto-response sent successfully');

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'EmailJS test completed successfully',
        config: {
          serviceId: process.env.EMAILJS_SERVICE_ID,
          userId: process.env.EMAILJS_USER_ID,
          clientTemplateId: process.env.EMAILJS_CLIENT_TEMPLATE_ID,
          autoResponseTemplateId: process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID
        }
      })
    };

  } catch (error) {
    console.error('EmailJS test error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'EmailJS test failed',
        error: error.message,
        config: {
          serviceId: process.env.EMAILJS_SERVICE_ID ? 'SET' : 'NOT SET',
          userId: process.env.EMAILJS_USER_ID ? 'SET' : 'NOT SET',
          clientTemplateId: process.env.EMAILJS_CLIENT_TEMPLATE_ID ? 'SET' : 'NOT SET',
          autoResponseTemplateId: process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID ? 'SET' : 'NOT SET'
        }
      })
    };
  }
};
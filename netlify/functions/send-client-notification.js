const emailjs = require('emailjs-com');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { leadData, leadId } = JSON.parse(event.body);
    
    // Format the notification email content
    const emailContent = {
      to_email: process.env.CLIENT_EMAIL,
      to_name: process.env.CLIENT_NAME || 'Warehouse Manager',
      subject: `🚨 New Lead: ${leadData.name} - ${leadData.warehouse_interest || 'General Inquiry'}`,
      lead_name: leadData.name,
      lead_email: leadData.email,
      lead_phone: leadData.phone || 'Not provided',
      lead_company: leadData.company || 'Not provided',
      warehouse_interest: leadData.warehouse_interest || 'General inquiry',
      budget_range: leadData.budget_range || 'Not specified',
      timeline: leadData.timeline || 'Not specified',
      message: leadData.message || 'No additional message',
      submitted_date: new Date().toLocaleString(),
      lead_id: leadId,
      cms_link: `${process.env.URL}/admin/#/collections/leads`
    };

    // Send email using EmailJS
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_CLIENT_TEMPLATE_ID,
      emailContent,
      process.env.EMAILJS_USER_ID
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Client notification sent successfully' })
    };

  } catch (error) {
    console.error('Error sending client notification:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Failed to send client notification',
        error: error.message 
      })
    };
  }
};
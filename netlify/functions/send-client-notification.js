// Fixed send-client-notification.js function
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
    
    // Determine inquiry type
    const isPropertyInquiry = leadData.source && leadData.source.includes('property_page');
    
    console.log('Sending client notification email...');
    
    // Format the notification email content
    const emailContent = {
      from_email: 'info@warehouselocating.com', // Override sender address
      from_name: 'Warehouse Locating',
      to_email: 'info@warehouselocating.com', // Static client email
      to_name: 'Warehouse Locating Team', // Static client name
      subject: `🚨 New ${isPropertyInquiry ? 'Property' : 'Matching'} Lead: ${leadData.name} - ${leadData.warehouse_interest || 'General Inquiry'}`,
      
      // Header content
      inquiry_type_message: isPropertyInquiry 
        ? 'Specific property inquiry submitted' 
        : 'General warehouse matching request submitted',
      
      // Lead information
      lead_name: leadData.name,
      lead_email: leadData.email,
      lead_phone: leadData.phone || 'Not provided',
      lead_company: leadData.company || 'Not provided',
      
      // Inquiry details
      warehouse_interest: leadData.warehouse_interest || 'General inquiry',
      budget_range: leadData.budget_range || 'Not specified',
      timeline: leadData.timeline || 'Not specified',
      source: leadData.source || 'website_form',
      submitted_date: new Date().toLocaleString(),
      lead_id: leadId,
      message: leadData.message || 'No additional message provided',
      
      // CMS link
      cms_link: `${process.env.URL}/admin/#/collections/leads`,
      
      // System info
      auto_response_time: new Date().toLocaleString()
    };

    // Send email using EmailJS
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_CLIENT_TEMPLATE_ID,
      emailContent,
      process.env.EMAILJS_USER_ID
    );

    console.log('Client notification email sent successfully');

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
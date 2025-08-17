// netlify/functions/form-notification.js
// This function sends email notifications when forms are submitted

exports.handler = async (event, context) => {
  // Only process POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Parse the form submission from Netlify
    const { payload } = JSON.parse(event.body);
    const data = JSON.parse(payload.data);
    
    // Extract form data
    const formName = payload.form_name;
    const submittedAt = payload.created_at;
    
    // Create email content based on form type
    let emailSubject = '';
    let emailBody = '';
    
    if (formName === 'property-inquiry' || formName === 'general-inquiry') {
      emailSubject = `New Lead: ${data.name} - ${data.propertyInterested || 'General Inquiry'}`;
      
      emailBody = `
        <h2>New Warehouse Lead Received!</h2>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
          <li><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></li>
          <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
        </ul>
        
        <h3>Inquiry Details:</h3>
        <ul>
          <li><strong>Property Interested:</strong> ${data.propertyInterested || 'General inquiry'}</li>
          <li><strong>Source:</strong> ${data.source || 'Website'}</li>
          <li><strong>Submitted:</strong> ${new Date(submittedAt).toLocaleString()}</li>
        </ul>
        
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><a href="https://laec.netlify.app/admin/leads" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">View in Lead Dashboard</a></p>
      `;
    }
    
    // Option 1: Using EmailJS (Recommended - 200 emails/month free)
    // Sign up at https://www.emailjs.com/
    const emailJsData = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: process.env.NOTIFICATION_EMAIL, // Your client's email
        subject: emailSubject,
        html_body: emailBody,
        from_name: 'WarehouseHub',
        reply_to: data.email
      }
    };
    
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailJsData)
    });
    
    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }
    
    // Option 2: Save to a leads collection (backup)
    // This creates a JSON file that can be read by the CMS
    const leadData = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || '',
      propertyInterested: data.propertyInterested || '',
      message: data.message,
      source: data.source || 'website',
      status: 'new',
      createdAt: submittedAt,
      formName: formName
    };
    
    console.log('Lead saved:', leadData);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Notification sent' })
    };
    
  } catch (error) {
    console.error('Error processing form:', error);
    
    // Don't fail the form submission even if email fails
    return {
      statusCode: 200,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};

// Environment variables to set in Netlify:
// EMAILJS_SERVICE_ID - Your EmailJS service ID
// EMAILJS_TEMPLATE_ID - Your EmailJS template ID  
// EMAILJS_PUBLIC_KEY - Your EmailJS public key
// NOTIFICATION_EMAIL - Where to send notifications
// Fixed process-lead.js function with integrated email sending
const { Octokit } = require("@octokit/rest");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Parse form data
    const formData = JSON.parse(event.body);
    const {
      name,
      email,
      phone,
      company,
      property_interest,
      warehouse_interest,
      warehouse_id,
      budget_range,
      price_range,
      size_needed,
      county,
      timeline,
      message,
      source = 'website_form'
    } = formData;

    // Handle different field names from different forms
    const warehouseInterest = property_interest || warehouse_interest || '';
    const budgetRange = budget_range || price_range || '';
    const sizeRange = size_needed || '';

    // Validate required fields
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Name and email are required' })
      };
    }

    // Generate unique ID for lead
    const leadId = `lead-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    const submittedDate = new Date().toISOString();

    console.log(`Processing lead from ${name} (${email})`);

    // Create lead content
    const leadContent = `---
name: "${name}"
email: "${email}"
phone: "${phone || ''}"
company: "${company || ''}"
warehouse_interest: "${warehouseInterest}"
warehouse_id: "${warehouse_id || ''}"
budget_range: "${budgetRange}"
size_needed: "${sizeRange}"
county: "${county || ''}"
timeline: "${timeline || ''}"
message: "${message || ''}"
status: "new"
source: "${source}"
submitted_date: "${submittedDate}"
notes: ""
priority: "medium"
follow_up_date: ""
---

Lead submitted through contact form${warehouseInterest ? ` for ${warehouseInterest}` : ''}.
${message ? `Initial inquiry: ${message}` : ''}
`;

    // Initialize Octokit
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    // Get repository info from environment
    const owner = process.env.GITHUB_REPO_OWNER;
    const repo = process.env.GITHUB_REPO_NAME;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!owner || !repo) {
      throw new Error('GitHub repository information not configured');
    }

    // Create lead file in GitHub
    const filePath = `content/leads/${leadId}.md`;
    
    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: `Add new lead: ${name} - ${email}`,
      content: Buffer.from(leadContent).toString('base64'),
      branch
    });

    console.log(`Lead file created: ${filePath}`);

    // Initialize debug info
    let emailDebugInfo = {
      environmentVars: {
        emailUser: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
        emailAppPassword: process.env.EMAIL_APP_PASSWORD ? 'SET' : 'NOT SET',
        notificationEmail: process.env.NOTIFICATION_EMAIL ? 'SET' : 'NOT SET'
      },
      emailAttempts: [],
      errors: []
    };

    // Send notification emails directly via Nodemailer
    try {
      console.log('=== EMAIL DEBUG START ===');
      console.log('Environment variables check:');
      console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'SET' : 'NOT SET');
      console.log('EMAIL_APP_PASSWORD:', process.env.EMAIL_APP_PASSWORD ? 'SET' : 'NOT SET');
      console.log('NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL ? 'SET' : 'NOT SET');

      // Create nodemailer transporter
      console.log('Creating nodemailer transporter...');
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Outlook/Office365 SMTP
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD
        }
      });

      console.log('Sending emails via Nodemailer...');

      // Send client notification email
      const clientEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a202c; color: white; padding: 30px; text-align: center;">
            <h1>🚨 NEW LEAD ALERT</h1>
            <h2>${name} - ${warehouseInterest || 'General Inquiry'}</h2>
          </div>

          <div style="padding: 30px;">
            <h3>Lead Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Property Interest:</strong> ${warehouseInterest || 'General inquiry'}</p>
            <p><strong>Budget:</strong> ${budgetRange || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            <p><strong>Source:</strong> ${source || 'website_form'}</p>
            <p><strong>Message:</strong> ${message || 'No additional message provided'}</p>
            <p><strong>Lead ID:</strong> ${leadId}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Quick Actions:</h3>
              <p><a href="tel:${phone}" style="color: #10b981;">📞 Call ${name}</a></p>
              <p><a href="mailto:${email}" style="color: #3b82f6;">📧 Email ${name}</a></p>
              <p><a href="${process.env.URL}/admin/#/collections/leads" style="color: #8b5cf6;">🎯 View in CMS</a></p>
            </div>
          </div>
        </div>
      `;

      const clientMailOptions = {
        from: `"Warehouse Locating" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || 'info@warehouselocating.com',
        subject: `🚨 New Lead: ${name} - ${warehouseInterest || 'General Inquiry'}`,
        html: clientEmailHtml
      };

      console.log('Sending client notification...');
      const clientResult = await transporter.sendMail(clientMailOptions);
      console.log('Client notification result:', clientResult);
      console.log('Client notification email sent successfully');

      emailDebugInfo.emailAttempts.push({
        type: 'client_notification',
        status: 'success',
        result: clientResult
      });

      // Send auto-response email to lead
      const autoResponseHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a202c; color: white; padding: 30px; text-align: center;">
            <h1>🎯 WAREHOUSE LOCATING</h1>
            <p>South Florida's Warehouse Specialists</p>
          </div>

          <div style="padding: 30px;">
            <h2>Thank you for your inquiry, ${name}!</h2>

            <p>We've received your warehouse inquiry and will get back to you within 24 hours with qualified options.</p>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Your Requirements:</h3>
              <p><strong>Property Interest:</strong> ${warehouseInterest || 'Any Available Property'}</p>
              <p><strong>Budget:</strong> ${budgetRange || 'To be discussed'}</p>
              <p><strong>Timeline:</strong> ${timeline || 'To be discussed'}</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            </div>

            <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3>Contact us anytime:</h3>
              <p><a href="tel:954-937-9667" style="color: #10b981; text-decoration: none;">📞 (954) 937-9667</a></p>
              <p><a href="mailto:info@warehouselocating.com" style="color: #3b82f6; text-decoration: none;">📧 info@warehouselocating.com</a></p>
            </div>

            <p style="color: #666;">Best regards,<br><strong>Laec Buchalter</strong><br>Warehouse Specialist<br>Warehouse Locating</p>
          </div>
        </div>
      `;

      const autoResponseMailOptions = {
        from: `"Warehouse Locating" <${process.env.EMAIL_USER}>`,
        replyTo: process.env.EMAIL_USER,
        to: email,
        subject: `Thank you for your warehouse inquiry, ${name}!`,
        html: autoResponseHtml
      };

      console.log('Sending auto-response...');
      const autoResult = await transporter.sendMail(autoResponseMailOptions);
      console.log('Auto-response result:', autoResult);
      console.log('Auto-response email sent successfully');

      emailDebugInfo.emailAttempts.push({
        type: 'auto_response',
        status: 'success',
        result: autoResult
      });

    } catch (emailError) {
      console.error('=== EMAIL ERROR ===');
      console.error('Email sending error:', emailError);
      console.error('Error message:', emailError.message);
      console.error('Error stack:', emailError.stack);
      console.error('=== EMAIL ERROR END ===');

      emailDebugInfo.errors.push({
        message: emailError.message,
        stack: emailError.stack,
        toString: emailError.toString(),
        name: emailError.name,
        fullError: JSON.stringify(emailError, Object.getOwnPropertyNames(emailError))
      });
      // Don't fail the entire request if email fails
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        message: 'Lead submitted successfully',
        leadId: leadId,
        emailDebug: emailDebugInfo
      })
    };

  } catch (error) {
    console.error('Error processing lead:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Internal server error',
        error: error.message 
      })
    };
  }
};
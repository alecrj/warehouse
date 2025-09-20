// Fixed process-lead.js function with integrated email sending
const { Octokit } = require("@octokit/rest");
const crypto = require('crypto');
const emailjs = require('@emailjs/nodejs');

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

    // Send notification emails directly via EmailJS
    try {
      console.log('Sending emails via EmailJS...');

      // Send client notification email
      const clientEmailContent = {
        from_email: 'info@warehouselocating.com',
        from_name: 'Warehouse Locating',
        to_email: 'info@warehouselocating.com',
        to_name: 'Warehouse Locating Team',
        subject: `🚨 New Lead: ${name} - ${warehouseInterest || 'General Inquiry'}`,

        // Lead information
        lead_name: name,
        lead_email: email,
        lead_phone: phone || 'Not provided',
        lead_company: company || 'Not provided',

        // Inquiry details
        warehouse_interest: warehouseInterest || 'General inquiry',
        budget_range: budgetRange || 'Not specified',
        timeline: timeline || 'Not specified',
        source: source || 'website_form',
        submitted_date: new Date().toLocaleString(),
        lead_id: leadId,
        message: message || 'No additional message provided',

        // CMS link
        cms_link: `${process.env.URL}/admin/#/collections/leads`
      };

      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_CLIENT_TEMPLATE_ID,
        clientEmailContent,
        process.env.EMAILJS_USER_ID
      );
      console.log('Client notification email sent successfully');

      // Send auto-response email to lead
      const autoResponseContent = {
        from_email: 'info@warehouselocating.com',
        from_name: 'Warehouse Locating',
        to_email: email,
        to_name: name,
        subject: `Thank you for your warehouse inquiry, ${name}!`,

        lead_name: name,
        company_name: company || 'your company',
        warehouse_interest: warehouseInterest || 'warehouse space',
        budget_range: budgetRange || 'To be discussed',
        timeline: timeline || 'Flexible',
        message: message || 'No additional requirements specified'
      };

      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID,
        autoResponseContent,
        process.env.EMAILJS_USER_ID
      );
      console.log('Auto-response email sent successfully');

    } catch (emailError) {
      console.error('Email sending error:', emailError);
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
        leadId: leadId
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
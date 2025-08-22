const { Octokit } = require("@octokit/rest");
const crypto = require('crypto');

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
      warehouse_interest,
      warehouse_id,
      budget_range,
      timeline,
      message,
      source = 'website_form'
    } = formData;

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

    // Create lead content
    const leadContent = `---
name: "${name}"
email: "${email}"
phone: "${phone || ''}"
company: "${company || ''}"
warehouse_interest: "${warehouse_interest || ''}"
warehouse_id: "${warehouse_id || ''}"
budget_range: "${budget_range || ''}"
timeline: "${timeline || ''}"
message: "${message || ''}"
status: "new"
source: "${source}"
submitted_date: "${submittedDate}"
notes: ""
priority: "medium"
follow_up_date: ""
---

Lead submitted through contact form${warehouse_interest ? ` for ${warehouse_interest}` : ''}.
${message ? `Initial inquiry: ${message}` : ''}
`;

    // Initialize Octokit
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    // Get repository info from environment or set defaults
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

    // Trigger notification functions
    const baseUrl = event.headers.origin || process.env.URL;
    
    // Send client notification
    try {
      await fetch(`${baseUrl}/.netlify/functions/send-client-notification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadData: formData, leadId })
      });
    } catch (error) {
      console.error('Client notification failed:', error);
    }

    // Send auto-response
    try {
      await fetch(`${baseUrl}/.netlify/functions/send-auto-response`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadData: formData, leadId })
      });
    } catch (error) {
      console.error('Auto-response failed:', error);
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
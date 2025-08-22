// Updated send-auto-response.js - Works with your existing template
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
    
    // Determine if this is a property-specific inquiry
    const isPropertyInquiry = leadData.source && leadData.source.includes('property_page');
    
    // Generate content based on form type
    let emailContent = {
      to_email: leadData.email,
      to_name: leadData.name,
      lead_name: leadData.name,
      company_name: leadData.company || 'your company',
      message: leadData.message || 'No additional requirements specified',
      timeline: leadData.timeline || 'Flexible',
      client_name: process.env.CLIENT_NAME || 'Our Team',
      client_phone: process.env.CLIENT_PHONE || '',
      client_email: process.env.CLIENT_EMAIL || '',
      whatsapp_number: process.env.WHATSAPP_NUMBER || ''
    };
    
    if (isPropertyInquiry) {
      // Property-specific inquiry content
      emailContent = {
        ...emailContent,
        subject: `Thank you for your interest in ${leadData.warehouse_interest || 'our warehouse property'}!`,
        email_subject: "Thank you for your property inquiry",
        
        // Header
        header_title: "🏢 Property Inquiry Received",
        header_subtitle: "Your Warehouse Tour Awaits",
        
        // Greeting and opening
        greeting_message: `Thank you for your interest, ${leadData.name}! 🎯`,
        opening_message: `Thank you for your inquiry about ${leadData.warehouse_interest || 'our warehouse property'}. We've received your request and are excited to show ${leadData.company || 'your company'} this exceptional warehouse opportunity.`,
        
        // Details section
        details_section_title: "Property You're Interested In:",
        inquiry_focus: `📍 ${leadData.warehouse_interest || 'Warehouse Property'}`,
        size_label: "Size",
        size_value: `${leadData.property_size || 'Contact for details'} SF`,
        location_label: "Location", 
        location_value: leadData.property_location || 'South Florida',
        budget_label: "Rate",
        budget_value: leadData.budget_range || leadData.property_price || 'Contact for pricing',
        
        // Personalized response
        personalized_response: `Thank you for your interest in ${leadData.warehouse_interest}. This property appears to be an excellent match for your ${leadData.timeline || 'timeline'} and requirements. We'll provide you with complete details, current availability, and can schedule a tour at your convenience.`,
        
        // Process section
        process_title: "What happens next:",
        process_content: `✅ <strong>Property Verification:</strong> We'll confirm current availability and terms<br><br>📞 <strong>Personal Call:</strong> Our specialist will contact you within 24 hours<br><br>📅 <strong>Tour Scheduling:</strong> We'll arrange a convenient viewing time<br><br>📋 <strong>Detailed Information:</strong> You'll receive complete property specs and pricing<br><br>🤝 <strong>Lease Assistance:</strong> We'll help negotiate the best terms`,
        
        // Contact section
        contact_title: "Want to Tour This Property Today?",
        contact_subtitle: "Call us now to schedule an immediate viewing!",
        contact_subtitle_weight: "bold",
        
        // WhatsApp message
        whatsapp_message: encodeURIComponent(`Hi, I'm ${leadData.name} and I'm interested in touring ${leadData.warehouse_interest}. When can we schedule a viewing?`),
        
        // Value proposition
        value_prop_title: "🎯 Want to See Similar Properties?",
        value_prop_content: `We have several other warehouses that might match your needs:<br><br>• Properties in the same area with similar specs<br>• Alternative budget-friendly options<br>• Larger/smaller spaces if your needs are flexible<br>• Properties available for immediate move-in<br><br><strong>Ask us about additional options during our call!</strong>`,
        
        // Signature
        specialist_title: "Senior Leasing Specialist",
        
        // Footer
        footer_line1: "This is an automated response confirming we received your property inquiry.",
        footer_line2: `For immediate assistance regarding ${leadData.warehouse_interest || 'this property'}, call ${process.env.CLIENT_PHONE}.`
      };
    } else {
      // General matching service content (keeps your current style)
      emailContent = {
        ...emailContent,
        subject: `We're finding your perfect warehouse space, ${leadData.name}!`,
        email_subject: "We're finding your perfect warehouse space",
        
        // Header (keeps your current header)
        header_title: "🎯 Warehouse Locating",
        header_subtitle: "Finding Your Perfect South Florida Warehouse",
        
        // Greeting and opening (keeps your current greeting)
        greeting_message: `Great news, ${leadData.name}! We're on it! 🚀`,
        opening_message: `Thank you for using our warehouse matching service! We've received your requirements and our team is already searching our database to find the perfect warehouse options for ${leadData.company || 'your company'} in South Florida.`,
        
        // Details section (keeps your current structure)
        details_section_title: "Your Warehouse Requirements:",
        inquiry_focus: `🔍 Searching for: ${leadData.size_needed || 'Warehouse space'} in ${leadData.county || 'South Florida'}`,
        size_label: "Size Needed",
        size_value: leadData.size_needed || 'To be determined',
        location_label: "Preferred Location",
        location_value: leadData.county || 'Any location in South Florida', 
        budget_label: "Budget Range",
        budget_value: leadData.budget_range || 'To be discussed',
        
        // Personalized response
        personalized_response: `Thank you for using our warehouse matching service. Based on your requirements, we're already searching our database of 500+ properties in South Florida.${leadData.budget_range ? ` We have several excellent options within your ${leadData.budget_range} budget range.` : ''}${leadData.timeline ? ` Given your ${leadData.timeline} timeline, we'll prioritize properties that can accommodate your schedule.` : ''} Our specialist will contact you within 24 hours with 3-5 curated warehouse options that match your specific needs.`,
        
        // Process section (keeps your current process)
        process_title: "How our matching process works:",
        process_content: `🔍 <strong>Database Search:</strong> We're scanning 500+ warehouses in our exclusive database<br><br>📋 <strong>Requirements Matching:</strong> Filtering options that meet your specific needs<br><br>💰 <strong>Pricing Analysis:</strong> Ensuring options fit within your budget range<br><br>📞 <strong>Personal Consultation:</strong> Our specialist will call you within 24 hours<br><br>📧 <strong>Curated Options:</strong> You'll receive 3-5 qualified warehouse matches`,
        
        // Contact section (keeps your current contact style)
        contact_title: "Can't Wait? Contact Us Now!",
        contact_subtitle: "", // No subtitle for general form
        contact_subtitle_weight: "normal",
        
        // WhatsApp message
        whatsapp_message: encodeURIComponent(`Hi, I'm ${leadData.name} and I just submitted warehouse requirements. I'd like to discuss my options.`),
        
        // Value proposition (keeps your current value prop)
        value_prop_title: "🌟 Why Our Matching Service Works",
        value_prop_content: `• <strong>Exclusive Access</strong> - Many properties aren't publicly listed<br>• <strong>No Cost to You</strong> - Landlords pay our fees, always<br>• <strong>Time Saving</strong> - We do the searching, you do the choosing<br>• <strong>Expert Negotiation</strong> - We get you the best terms`,
        
        // Signature (keeps your current title)
        specialist_title: "Senior Warehouse Specialist",
        
        // Footer (keeps your current footer)
        footer_line1: "This is an automated confirmation. Our specialist will contact you within 24 hours.",
        footer_line2: `For immediate assistance, call ${process.env.CLIENT_PHONE} or reply to this email.`
      };
    }

    console.log(`Sending auto-response for ${isPropertyInquiry ? 'property inquiry' : 'general matching'} to ${leadData.email}`);

    // Send auto-response email using your existing template
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_AUTORESPONSE_TEMPLATE_ID, // Your existing template ID
      emailContent,
      process.env.EMAILJS_USER_ID
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Auto-response sent successfully',
        inquiry_type: isPropertyInquiry ? 'property' : 'general' 
      })
    };

  } catch (error) {
    console.error('Error sending auto-response:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Failed to send auto-response',
        error: error.message 
      })
    };
  }
};
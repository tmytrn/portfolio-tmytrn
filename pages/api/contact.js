export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'tommy@tmytrn.com';
  const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'TMYTRN Contact <onboarding@resend.dev>';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ 
      error: 'Email service is not configured. Please contact me directly at tommy@tmytrn.com' 
    });
  }

  const {
    firstName,
    lastName,
    company,
    title,
    email,
    budgetMin,
    budgetMax,
    details,
    honeypot,
  } = req.body;

  if (honeypot) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First name and last name are required' });
  }

  if (firstName?.length > 100 || lastName?.length > 100) {
    return res.status(400).json({ error: 'Name fields are too long' });
  }

  if (company?.length > 200 || title?.length > 200) {
    return res.status(400).json({ error: 'Company or title field is too long' });
  }

  if (email?.length > 200) {
    return res.status(400).json({ error: 'Email is too long' });
  }

  if (details?.length > 5000) {
    return res.status(400).json({ error: 'Details field is too long' });
  }

  const formatBudget = (value) => {
    if (value >= 50000) return '$50k+';
    return `$${value / 1000}k`;
  };

  const budgetRange = `${formatBudget(budgetMin)} - ${formatBudget(budgetMax)}`;
  const subject = `New Contact from ${firstName} ${lastName} (${budgetRange})`;

  const textBody = `
New contact form submission from tmytrn.com

Name: ${firstName} ${lastName}
Email: ${email}
${company ? `Company: ${company}` : ''}
${title ? `Title: ${title}` : ''}
Budget Range: ${budgetRange}

${details ? `Message:\n${details}` : 'No additional details provided.'}
`.trim();

  const htmlBody = `
<html>
  <body style="font-family: 'EB Garamond', Georgia, serif; color: #152057; line-height: 1.6;">
    <h2 style="margin-bottom: 20px;">New contact form submission from tmytrn.com</h2>
    
    <table style="margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 12px 8px 0; font-weight: bold;">Name:</td>
        <td style="padding: 8px 0;">${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px 8px 0; font-weight: bold;">Email:</td>
        <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
      </tr>
      ${company ? `
      <tr>
        <td style="padding: 8px 12px 8px 0; font-weight: bold;">Company:</td>
        <td style="padding: 8px 0;">${company}</td>
      </tr>
      ` : ''}
      ${title ? `
      <tr>
        <td style="padding: 8px 12px 8px 0; font-weight: bold;">Title:</td>
        <td style="padding: 8px 0;">${title}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="padding: 8px 12px 8px 0; font-weight: bold;">Budget Range:</td>
        <td style="padding: 8px 0;">${budgetRange}</td>
      </tr>
    </table>
    
    ${details ? `
    <div style="margin-top: 20px;">
      <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
      <p style="white-space: pre-wrap;">${details}</p>
    </div>
    ` : '<p style="color: #666;">No additional details provided.</p>'}
  </body>
</html>
`.trim();

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return res.status(500).json({ 
        error: 'Failed to send email. Please try again or contact me directly at tommy@tmytrn.com' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email. Please try again or contact me directly at tommy@tmytrn.com' 
    });
  }
}

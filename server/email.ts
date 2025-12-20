import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
  // For Gmail, you'll need to use an App Password
  // Go to: https://myaccount.google.com/apppasswords
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER || 'thoratenterprises27@gmail.com',
      pass: process.env.SMTP_PASS, // Gmail App Password
    },
  });
};

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.SMTP_USER || 'thoratenterprises27@gmail.com',
      to: 'thoratghanshyam4@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${data.message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Bajrang Pumps contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}

export async function sendEnquiryEmail(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  pumpType: string;
  quantity: string;
  message?: string;
}) {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.SMTP_USER || 'thoratenterprises27@gmail.com',
      to: 'thoratghanshyam4@gmail.com',
      subject: `New Product Enquiry from ${data.name} - ${data.pumpType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Product Enquiry
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
            ${data.company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${data.company}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0; background-color: #eff6ff; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
            <p style="margin: 10px 0;"><strong>Pump Type:</strong> ${data.pumpType}</p>
            <p style="margin: 10px 0;"><strong>Quantity:</strong> ${data.quantity}</p>
          </div>
          
          ${data.message ? `
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Additional Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${data.message}
            </div>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Bajrang Pumps enquiry form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      text: `
New Product Enquiry

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}

Pump Type: ${data.pumpType}
Quantity: ${data.quantity}

${data.message ? `Additional Message:\n${data.message}` : ''}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}
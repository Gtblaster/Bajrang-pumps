import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: 'xHEHIJNR2TG6A2VMo',
});

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_4mtq60a'; // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_id_here'; // You'll need to get this from EmailJS dashboard

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface EnquiryEmailData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  pumpType: string;
  quantity: string;
  message?: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_email: 'thoratghanshyam4@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Email sent successfully via EmailJS:', response);
    return { success: true, response };
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return { success: false, error };
  }
}

export async function sendEnquiryEmail(data: EnquiryEmailData) {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company || 'Not specified',
      pump_type: data.pumpType,
      quantity: data.quantity,
      message: data.message || 'No additional message',
      to_email: 'thoratghanshyam4@gmail.com',
      subject: `New Product Enquiry from ${data.name} - ${data.pumpType}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Enquiry email sent successfully via EmailJS:', response);
    return { success: true, response };
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return { success: false, error };
  }
}
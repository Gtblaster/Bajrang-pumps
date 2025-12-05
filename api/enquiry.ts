import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertEnquirySchema } from '../shared/schema';
import { sendEnquiryEmail } from '../server/email';
import { z } from 'zod';
import { fromError } from 'zod-validation-error';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const validatedData = insertEnquirySchema.parse(req.body);
    const enquiry = await storage.createEnquiry(validatedData);
    
    // Send email notification
    await sendEnquiryEmail(validatedData);
    
    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully. Our sales team will contact you shortly.',
      data: enquiry
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationError = fromError(error);
      return res.status(400).json({
        success: false,
        message: validationError.toString()
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

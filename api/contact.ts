import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertContactSchema } from '../shared/schema';
import { sendContactEmail } from '../server/email';
import { saveContactToExcel } from '../server/excel';
import { saveContactToGoogleSheets } from '../server/googleSheets';
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
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    
    // Send email notification
    await sendContactEmail(validatedData);
    
    // Prepare data for saving
    const saveData = {
      id: contact.id,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      message: validatedData.message,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };
    
    // Save to Excel file
    saveContactToExcel(saveData);
    
    // Save to Google Sheets
    await saveContactToGoogleSheets(saveData);
    
    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact
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

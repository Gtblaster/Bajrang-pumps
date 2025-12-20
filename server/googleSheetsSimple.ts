// Simple Google Sheets integration using API Key
// This approach is simpler but requires the sheet to be publicly accessible

interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

interface EnquiryData {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  pumpType: string;
  quantity: string;
  message?: string;
  submittedAt: string;
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID || '';

export async function saveContactToGoogleSheetsSimple(data: ContactData) {
  try {
    if (!GOOGLE_API_KEY || !SPREADSHEET_ID) {
      console.log('⚠️ Google Sheets not configured, skipping');
      return { success: false, error: 'Not configured' };
    }

    // Prepare the row data
    const values = [
      [
        data.id,
        data.name,
        data.email,
        data.phone,
        data.message,
        data.submittedAt
      ]
    ];

    // Use Google Sheets API to append data
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Contact Forms!A:F:append?valueInputOption=RAW&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: values,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('❌ Google Sheets API error:', error);
      return { success: false, error };
    }

    const result = await response.json();
    console.log(`✅ Contact form data saved to Google Sheets: ${result.updates?.updatedCells} cells updated`);
    return { success: true, result };
  } catch (error) {
    console.error('❌ Error saving contact data to Google Sheets:', error);
    return { success: false, error };
  }
}

export async function saveEnquiryToGoogleSheetsSimple(data: EnquiryData) {
  try {
    if (!GOOGLE_API_KEY || !SPREADSHEET_ID) {
      console.log('⚠️ Google Sheets not configured, skipping');
      return { success: false, error: 'Not configured' };
    }

    // Prepare the row data
    const values = [
      [
        data.id,
        data.name,
        data.email,
        data.phone,
        data.company || '',
        data.pumpType,
        data.quantity,
        data.message || '',
        data.submittedAt
      ]
    ];

    // Use Google Sheets API to append data
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Product Enquiries!A:I:append?valueInputOption=RAW&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: values,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('❌ Google Sheets API error:', error);
      return { success: false, error };
    }

    const result = await response.json();
    console.log(`✅ Enquiry data saved to Google Sheets: ${result.updates?.updatedCells} cells updated`);
    return { success: true, result };
  } catch (error) {
    console.error('❌ Error saving enquiry data to Google Sheets:', error);
    return { success: false, error };
  }
}
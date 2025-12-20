import { google } from 'googleapis';

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID || '';
const CONTACT_SHEET_NAME = 'Contact Forms';
const ENQUIRY_SHEET_NAME = 'Product Enquiries';

// Create Google Sheets client
function createSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

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

export async function saveContactToGoogleSheets(data: ContactData) {
  try {
    if (!SPREADSHEET_ID) {
      console.log('⚠️ Google Sheets ID not configured, skipping Google Sheets save');
      return { success: false, error: 'Google Sheets not configured' };
    }

    const sheets = createSheetsClient();

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

    // Append data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${CONTACT_SHEET_NAME}!A:F`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values,
      },
    });

    console.log(`✅ Contact form data saved to Google Sheets: ${response.data.updates?.updatedCells} cells updated`);
    return { success: true, response: response.data };
  } catch (error) {
    console.error('❌ Error saving contact data to Google Sheets:', error);
    return { success: false, error };
  }
}

export async function saveEnquiryToGoogleSheets(data: EnquiryData) {
  try {
    if (!SPREADSHEET_ID) {
      console.log('⚠️ Google Sheets ID not configured, skipping Google Sheets save');
      return { success: false, error: 'Google Sheets not configured' };
    }

    const sheets = createSheetsClient();

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

    // Append data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${ENQUIRY_SHEET_NAME}!A:I`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values,
      },
    });

    console.log(`✅ Enquiry data saved to Google Sheets: ${response.data.updates?.updatedCells} cells updated`);
    return { success: true, response: response.data };
  } catch (error) {
    console.error('❌ Error saving enquiry data to Google Sheets:', error);
    return { success: false, error };
  }
}

export async function initializeGoogleSheets() {
  try {
    if (!SPREADSHEET_ID) {
      console.log('⚠️ Google Sheets ID not configured, skipping initialization');
      return { success: false, error: 'Google Sheets not configured' };
    }

    const sheets = createSheetsClient();

    // Check if sheets exist and create headers if needed
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheetNames = spreadsheet.data.sheets?.map(sheet => sheet.properties?.title) || [];

    // Initialize Contact Forms sheet
    if (!sheetNames.includes(CONTACT_SHEET_NAME)) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [{
            addSheet: {
              properties: {
                title: CONTACT_SHEET_NAME,
              },
            },
          }],
        },
      });

      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${CONTACT_SHEET_NAME}!A1:F1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [['ID', 'Name', 'Email', 'Phone', 'Message', 'Submitted At']],
        },
      });
    }

    // Initialize Product Enquiries sheet
    if (!sheetNames.includes(ENQUIRY_SHEET_NAME)) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [{
            addSheet: {
              properties: {
                title: ENQUIRY_SHEET_NAME,
              },
            },
          }],
        },
      });

      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${ENQUIRY_SHEET_NAME}!A1:I1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [['ID', 'Name', 'Email', 'Phone', 'Company', 'Pump Type', 'Quantity', 'Message', 'Submitted At']],
        },
      });
    }

    console.log('✅ Google Sheets initialized successfully');
    return { success: true };
  } catch (error) {
    console.error('❌ Error initializing Google Sheets:', error);
    return { success: false, error };
  }
}
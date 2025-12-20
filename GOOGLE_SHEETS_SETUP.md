# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration so that form submissions are automatically saved to a Google Sheet accessible by thoratenterprises27@gmail.com.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with thoratenterprises27@gmail.com
3. Click "Create Project" or select an existing project
4. Give your project a name (e.g., "Bajrang Pumps Website")
5. Click "Create"

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Enter details:
   - **Service account name**: bajrang-pumps-website
   - **Service account ID**: bajrang-pumps-website (auto-generated)
   - **Description**: Service account for Bajrang Pumps website form submissions
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Service Account Key

1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" → "Create New Key"
5. Choose "JSON" format
6. Click "Create"
7. **Save the downloaded JSON file securely** - you'll need it for environment variables

## Step 5: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Sign in with thoratenterprises27@gmail.com
3. Create a new blank spreadsheet
4. Name it "Bajrang Pumps - Form Submissions"
5. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   ```

## Step 6: Share Sheet with Service Account

1. In your Google Sheet, click "Share" button
2. Add the service account email (from the JSON file, looks like: `bajrang-pumps-website@your-project.iam.gserviceaccount.com`)
3. Give it "Editor" permissions
4. Click "Send"

## Step 7: Update Environment Variables

Open your `.env` file and update these values from the downloaded JSON file:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_ID=your-actual-sheet-id-from-url
GOOGLE_PROJECT_ID=your-project-id-from-json
GOOGLE_PRIVATE_KEY_ID=private-key-id-from-json
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nactual-private-key-from-json\n-----END PRIVATE KEY-----"
GOOGLE_CLIENT_EMAIL=service-account-email-from-json
GOOGLE_CLIENT_ID=client-id-from-json
GOOGLE_CLIENT_CERT_URL=client-cert-url-from-json
```

**Important Notes:**
- Replace `your-actual-sheet-id-from-url` with the actual Sheet ID from Step 5
- For `GOOGLE_PRIVATE_KEY`, copy the entire private key including the BEGIN/END lines
- Make sure to keep the quotes around the private key
- Replace `\\n` with actual line breaks in the private key

## Step 8: Update Vercel Environment Variables

For production deployment, add these same environment variables in your Vercel dashboard:

1. Go to your Vercel project
2. Click "Settings" → "Environment Variables"
3. Add all the Google Sheets variables from your `.env` file
4. Redeploy your project

## Step 9: Test the Integration

1. Restart your development server
2. Submit a test form on your website
3. Check the terminal for success messages:
   ```
   ✅ Contact form data saved to Google Sheets: 6 cells updated
   ```
4. Check your Google Sheet - you should see the form data appear automatically!

## What You'll Get

### Sheet Structure:
- **Sheet 1**: "Contact Forms"
  - Columns: ID, Name, Email, Phone, Message, Submitted At
- **Sheet 2**: "Product Enquiries" 
  - Columns: ID, Name, Email, Phone, Company, Pump Type, Quantity, Message, Submitted At

### Features:
- **Real-time Updates**: Form submissions appear instantly in Google Sheets
- **Accessible**: thoratenterprises27@gmail.com can access and manage the sheet
- **Organized**: Separate sheets for contact forms and product enquiries
- **Timestamped**: All submissions include Indian timezone timestamps
- **Backup**: Data is saved to both database and Google Sheets

## Troubleshooting

### "Google Sheets ID not configured" message?
- Make sure `GOOGLE_SHEETS_ID` is set in your `.env` file
- Restart your development server after updating environment variables

### "Permission denied" errors?
- Ensure the service account email has "Editor" access to your Google Sheet
- Double-check that you shared the sheet with the correct service account email

### "Invalid credentials" errors?
- Verify all environment variables are correctly copied from the JSON file
- Make sure the private key includes the full BEGIN/END certificate block
- Check that there are no extra spaces or characters in the environment variables

### Sheet not updating?
- Check the terminal logs for error messages
- Verify the Sheet ID is correct
- Ensure the Google Sheets API is enabled in your Google Cloud project

## Security Notes

- ⚠️ Never commit the service account JSON file to Git
- ⚠️ Keep your private key secure and never share it publicly
- ⚠️ The `.env` file is already in `.gitignore` to protect your credentials
- ⚠️ You can revoke and regenerate service account keys anytime from Google Cloud Console

## Support

If you need help with setup, refer to:
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Cloud Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
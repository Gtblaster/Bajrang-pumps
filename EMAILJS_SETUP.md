# EmailJS Setup Guide

EmailJS allows you to send emails directly from the browser without a backend server. This is a great backup/alternative to server-side email sending.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with **thoratenterprises27@gmail.com**
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your **thoratenterprises27@gmail.com** account
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

### Contact Form Template:
```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Sent from Bajrang Pumps Website
```

### Template Variables:
- `{{from_name}}` - Contact person's name
- `{{from_email}}` - Contact person's email
- `{{phone}}` - Contact person's phone
- `{{message}}` - Contact message
- `{{to_email}}` - Your email (thoratghanshyam4@gmail.com)

4. Set "To Email" to: `{{to_email}}`
5. Save the template and note the **Template ID** (e.g., `template_xyz789`)

## Step 4: Update Configuration

Update the EmailJS configuration in `client/src/lib/emailjs.ts`:

```typescript
// Replace these with your actual IDs from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_abc123'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your Template ID
```

## Step 5: Test the Integration

1. Restart your development server
2. Go to `http://localhost:5000/contact`
3. Submit a test form
4. Check thoratghanshyam4@gmail.com for the email

## Current Configuration

✅ **Public Key**: `xHEHIJNR2TG6A2VMo` (already configured)
⚠️ **Service ID**: Needs to be updated
⚠️ **Template ID**: Needs to be updated

## Benefits of EmailJS

- ✅ **Direct Email Sending**: Emails sent directly from browser
- ✅ **No Server Required**: Works even if server email fails
- ✅ **Reliable Delivery**: Uses Gmail's infrastructure
- ✅ **Real-time**: Instant email delivery
- ✅ **Backup Method**: Works alongside server-side email

## How It Works Now

When a user submits a contact form:

1. **Server API**: Saves to database + Excel file + server email
2. **EmailJS**: Sends email directly from browser to thoratenterprises27@gmail.com
3. **Dual Delivery**: You get emails from both methods for reliability

## Troubleshooting

### "Service ID not found" error?
- Make sure you've created an email service in EmailJS dashboard
- Update the `EMAILJS_SERVICE_ID` in the code

### "Template not found" error?
- Make sure you've created an email template
- Update the `EMAILJS_TEMPLATE_ID` in the code

### Emails not received?
- Check spam folder
- Verify the template has correct "To Email" field
- Make sure Gmail service is properly connected

## Security Notes

- ✅ Public key is safe to expose (it's meant to be public)
- ✅ EmailJS handles authentication securely
- ✅ No sensitive credentials in frontend code
- ✅ Rate limiting built-in to prevent abuse

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/tutorial/creating-email-template/)
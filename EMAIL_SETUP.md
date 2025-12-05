# Email Notification Setup Guide

This guide will help you set up email notifications for contact form and enquiry submissions.

## Gmail App Password Setup

Since you're using Gmail (thoratghanshyam4@gmail.com), you need to create an App Password:

### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "How you sign in to Google", click on "2-Step Verification"
4. Follow the steps to enable 2-Step Verification if not already enabled

### Step 2: Create App Password
1. Go to: https://myaccount.google.com/apppasswords
2. You may need to sign in again
3. In the "Select app" dropdown, choose "Mail"
4. In the "Select device" dropdown, choose "Other (Custom name)"
5. Enter "Bajrang Pumps Website" as the name
6. Click "Generate"
7. Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)
8. **Copy this password** - you won't be able to see it again!

### Step 3: Update Environment Variables

#### For Local Development:
1. Open the `.env` file in your project root
2. Update the `SMTP_PASS` variable with your App Password:
   ```
   SMTP_USER=thoratghanshyam4@gmail.com
   SMTP_PASS=abcdefghijklmnop
   ```
   (Remove spaces from the App Password)

#### For Vercel Production:
1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add these variables:
   - `SMTP_USER` = `thoratghanshyam4@gmail.com`
   - `SMTP_PASS` = `your-app-password-without-spaces`
4. Click "Save"
5. Redeploy your project for changes to take effect

## How It Works

When a user submits:

### Contact Form
- User fills out: Name, Email, Phone, Message
- Form data is saved to database
- Email is sent to: **thoratghanshyam4@gmail.com**
- Email includes all form details with formatted HTML

### Product Enquiry Form
- User fills out: Name, Email, Phone, Company, Pump Type, Quantity, Message
- Form data is saved to database
- Email is sent to: **thoratghanshyam4@gmail.com**
- Email includes all enquiry details with formatted HTML

## Email Format

Both emails include:
- Professional HTML formatting
- All submitted information
- Timestamp (India timezone)
- Clear subject lines for easy filtering

## Testing

After setup:
1. Restart your development server
2. Go to the Contact page
3. Submit a test form
4. Check thoratghanshyam4@gmail.com inbox
5. You should receive an email within seconds

## Troubleshooting

### Email not received?
1. Check spam/junk folder
2. Verify App Password is correct (no spaces)
3. Ensure 2-Step Verification is enabled
4. Check server logs for error messages

### "Invalid login" error?
- Your App Password might be incorrect
- Regenerate a new App Password and update .env

### Emails going to spam?
- This is normal for new sending addresses
- Mark the first email as "Not Spam"
- Future emails should arrive in inbox

## Security Notes

- ⚠️ Never commit `.env` file to Git (it's already in .gitignore)
- ⚠️ Never share your App Password publicly
- ⚠️ Use different App Passwords for different applications
- ⚠️ You can revoke App Passwords anytime from Google Account settings

## Support

If you need help with setup, contact your developer or refer to:
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
- Nodemailer Documentation: https://nodemailer.com/

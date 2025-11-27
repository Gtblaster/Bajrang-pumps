# Quick Upload to GitHub Guide

## Your Git is Ready!
- Username: Gtblaster
- Email: 141501841+Gtblaster@users.noreply.github.com
- All changes are committed ✓

## Step 1: Create GitHub Repository

1. **Open this link in your browser:**
   https://github.com/new

2. **Fill in the details:**
   - Repository name: `bajrang-pumps-website`
   - Description: `Modern website for Bajrang Pumps - showcasing industrial, agricultural, and residential pump solutions`
   - Visibility: Choose **Public** (so you can deploy to Vercel for free)
   - **IMPORTANT**: Do NOT check any boxes (no README, no .gitignore, no license)

3. **Click "Create repository"**

## Step 2: Copy Your Repository URL

After creating, GitHub will show you a page with commands. You'll see a URL like:
```
https://github.com/Gtblaster/bajrang-pumps-website.git
```
Copy this URL!

## Step 3: Run These Commands

Open PowerShell in the BajrangPumpsSite folder and run:

```powershell
# Remove old remote if exists
git remote remove origin

# Add your new GitHub repository (replace with YOUR actual URL from Step 2)
git remote add origin https://github.com/Gtblaster/bajrang-pumps-website.git

# Push to GitHub
git push -u origin main
```

If it asks for credentials:
- Username: Gtblaster
- Password: Use a **Personal Access Token** (not your GitHub password)

### How to Create Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: "Bajrang Pumps Deploy"
4. Select scopes: Check "repo" (full control)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

## Step 4: Verify Upload

After pushing, go to:
```
https://github.com/Gtblaster/bajrang-pumps-website
```

You should see all your files there!

## Step 5: Deploy to Vercel

1. Go to: https://vercel.com/
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel
5. Click "Add New..." → "Project"
6. Find "bajrang-pumps-website" and click "Import"
7. Keep all default settings
8. Click "Deploy"
9. Wait 2-3 minutes
10. Your site is LIVE! 🚀

## Troubleshooting

**If push fails with authentication error:**
- You need a Personal Access Token (see above)
- Don't use your GitHub password

**If it says "remote origin already exists":**
```powershell
git remote remove origin
git remote add origin https://github.com/Gtblaster/bajrang-pumps-website.git
git push -u origin main
```

**If you want to use GitHub Desktop instead:**
1. Download: https://desktop.github.com/
2. Install and login
3. File → Add Local Repository → Browse to BajrangPumpsSite
4. Click "Publish repository"
5. Choose name and click "Publish Repository"

---

## Quick Command Summary

```powershell
# Navigate to project
cd BajrangPumpsSite

# Add GitHub remote (use YOUR repository URL)
git remote add origin https://github.com/Gtblaster/bajrang-pumps-website.git

# Push to GitHub
git push -u origin main
```

That's it! Your project will be on GitHub and ready to deploy! 🎉

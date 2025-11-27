# Deployment Guide - GitHub & Vercel

## Step 1: Upload to GitHub

### Option A: Using Git Command Line

1. **Initialize Git (if not already done)**
   ```bash
   cd BajrangPumpsSite
   git init
   ```

2. **Add all files**
   ```bash
   git add .
   ```

3. **Commit your changes**
   ```bash
   git commit -m "Initial commit: Bajrang Pumps website"
   ```

4. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `bajrang-pumps-website` (or your preferred name)
   - Description: "Modern website for Bajrang Pumps"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

5. **Connect to GitHub and push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bajrang-pumps-website.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username

### Option B: Using GitHub Desktop

1. Download and install GitHub Desktop from https://desktop.github.com/
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Browse to the BajrangPumpsSite folder
5. Click "Publish repository"
6. Choose repository name and visibility
7. Click "Publish Repository"

## Step 2: Deploy to Vercel

### Method 1: Using Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com/
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import your repository**
   - Click "Add New..." → "Project"
   - Click "Import" next to your repository
   - If you don't see it, click "Adjust GitHub App Permissions"

3. **Configure your project**
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables (Optional)**
   Add these if needed:
   - `NODE_ENV` = `production`
   - `DATABASE_URL` = (your database URL if using database)

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-5 minutes)
   - Your site will be live at: `https://your-project-name.vercel.app`

### Method 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd BajrangPumpsSite
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy? Yes
   - Which scope? (Choose your account)
   - Link to existing project? No
   - What's your project's name? bajrang-pumps-website
   - In which directory is your code located? ./
   - Want to override the settings? No

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Step 3: Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Automatic Deployments

Once connected, Vercel will automatically:
- Deploy every push to the `main` branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

## Environment Variables for Production

If your app needs environment variables:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add variables:
   - `DATABASE_URL` (if using database)
   - `SESSION_SECRET` (for sessions)
   - Any other API keys or secrets

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify build command works locally: `npm run build`

### Site shows 404
- Check Output Directory is set to `dist`
- Verify build completed successfully

### Environment variables not working
- Make sure they're added in Vercel dashboard
- Redeploy after adding variables

## Monitoring Your Site

- **Vercel Dashboard**: View deployments, analytics, and logs
- **GitHub**: Track commits and pull requests
- **Custom Domain**: Monitor DNS and SSL status

## Updating Your Site

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel automatically deploys the changes

---

Your Bajrang Pumps website will be live and accessible worldwide! 🚀

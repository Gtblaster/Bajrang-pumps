# Requirements to Run Bajrang Pumps Website

## What You Need to Install

### 1. Node.js (Required)
- **Version**: 18 or higher
- **Download**: https://nodejs.org/
- **Check if installed**:
  ```bash
  node --version
  ```
  Should show v18.x.x or higher

### 2. npm (Comes with Node.js)
- **Version**: 9 or higher
- **Check if installed**:
  ```bash
  npm --version
  ```
  Should show 9.x.x or higher

### 3. Git (Optional)
- Only needed if cloning from repository
- **Download**: https://git-scm.com/

## System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: 4 GB minimum
- **Disk Space**: 500 MB free space
- **Internet**: Required for downloading packages

## Installation Steps

1. **Install Node.js**
   - Go to https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Run the installer
   - npm will be installed automatically with Node.js

2. **Verify Installation**
   ```bash
   node --version
   npm --version
   ```

3. **Install Project Dependencies**
   ```bash
   cd BajrangPumpsSite
   npm install
   ```

4. **Run the Project**
   
   **Windows (PowerShell)**:
   ```powershell
   $env:NODE_ENV="development"
   node --import tsx server/index.ts
   ```
   
   **Windows (Command Prompt)**:
   ```cmd
   set NODE_ENV=development && node --import tsx server/index.ts
   ```
   
   **macOS/Linux**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   ```
   http://localhost:5000
   ```

## That's It!

You only need Node.js and npm to run this project. Everything else will be installed automatically when you run `npm install`.

## Troubleshooting

**If you get "node is not recognized":**
- Restart your terminal/command prompt after installing Node.js
- Make sure Node.js installation completed successfully

**If you get "port 5000 already in use":**
- Change the port:
  ```bash
  # Windows PowerShell
  $env:PORT="3000"
  
  # macOS/Linux
  PORT=3000 npm run dev
  ```

**If npm install fails:**
- Clear cache and try again:
  ```bash
  npm cache clean --force
  npm install
  ```

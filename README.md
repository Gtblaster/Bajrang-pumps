# Bajrang Pumps Website

A modern, responsive website for Bajrang Pumps - showcasing industrial, agricultural, and residential pump solutions.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + Node.js
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter
- **State Management**: TanStack Query

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)

## Getting Started

Follow these steps to run the website locally:

### 1. Clone or Download the Repository

```bash
git clone <repository-url>
cd BajrangPumpsSite
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages. It may take a few minutes.

### 3. Start the Development Server

#### On Windows (PowerShell):
```powershell
$env:NODE_ENV="development"
node --import tsx server/index.ts
```

#### On Windows (Command Prompt):
```cmd
set NODE_ENV=development && node --import tsx server/index.ts
```

#### On macOS/Linux:
```bash
npm run dev
```

### 4. Access the Website

Once the server starts, you'll see:
```
serving on port 5000
```

Open your browser and navigate to:
```
http://localhost:5000
```

## Available Scripts

- `npm run dev` - Start development server (Unix/Mac/Linux)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Project Structure

```
BajrangPumpsSite/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── vite.ts           # Vite dev server setup
├── shared/               # Shared types and schemas
└── attached_assets/      # Images and media files
```

## Features

- 🏠 Modern landing page with hero section
- 📦 Product catalog with detailed specifications
- 🏭 About us section with company information
- 📞 Contact form for inquiries
- 📱 Fully responsive design
- ⚡ Fast page loads with Vite
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui

## Troubleshooting

### Port Already in Use

If port 5000 is already in use, you can change it:

```bash
# Windows PowerShell
$env:PORT="3000"
$env:NODE_ENV="development"
node --import tsx server/index.ts

# macOS/Linux
PORT=3000 npm run dev
```

### Dependencies Installation Issues

If you encounter issues during `npm install`:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete `node_modules` and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Reinstall:
   ```bash
   npm install
   ```

### TypeScript Errors

Run type checking to see detailed errors:
```bash
npm run check
```

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory for custom configuration:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=your_database_url_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

Built with ❤️ for Bajrang Pumps

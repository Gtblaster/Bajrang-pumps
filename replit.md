# Bajrang Pumps Website

## Overview
A modern, responsive multi-page website for Bajrang Pumps - a pump manufacturing company. The website features a professional industrial design with blue/white theme and orange accent highlights.

## Tech Stack
- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: Express.js with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: CSS animations with Intersection Observer for scroll reveals

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navigation.tsx    # Responsive navigation bar
│   │   │   ├── footer.tsx        # Site footer
│   │   │   └── layout.tsx        # Main layout wrapper
│   │   └── ui/                   # Shadcn UI components
│   ├── hooks/
│   │   ├── use-scroll-reveal.ts  # Scroll animation hook
│   │   ├── use-mobile.tsx        # Mobile detection hook
│   │   └── use-toast.ts          # Toast notifications
│   ├── pages/
│   │   ├── home.tsx              # Landing page
│   │   ├── products.tsx          # Product catalog
│   │   ├── about.tsx             # Company information
│   │   ├── contact.tsx           # Contact form & info
│   │   ├── enquiry.tsx           # Product enquiry form
│   │   └── not-found.tsx         # 404 page
│   └── App.tsx                   # Main app with routing
server/
├── routes.ts                     # API endpoints
├── storage.ts                    # In-memory data storage
└── index.ts                      # Server entry point
shared/
└── schema.ts                     # Data models & validation
```

## Pages
1. **Home Page** (`/`) - Hero section, features, product showcase, stats, CTA
2. **Products Page** (`/products`) - 5 product categories with cards and enquiry buttons
3. **About Page** (`/about`) - Company story, mission/vision, timeline, achievements
4. **Contact Page** (`/contact`) - Contact form, Google Maps, WhatsApp button
5. **Enquiry Page** (`/enquiry`) - Product enquiry form with dropdown selection

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contact submissions
- `POST /api/enquiry` - Submit product enquiry
- `GET /api/enquiries` - Get all enquiries

## Design System
- **Primary Color**: Blue (industrial) - `hsl(210, 100%, 45%)`
- **Accent Color**: Orange - `hsl(25, 95%, 53%)`
- **Background**: Light gray/white
- **Typography**: Poppins font family
- **Animations**: Fade-in, slide-up scroll reveals

## Running the Project
The application runs with `npm run dev` which starts both the Express backend and Vite frontend development server on port 5000.

## Recent Changes
- Initial implementation of full website with all 5 pages
- Implemented responsive navigation with mobile menu
- Added scroll-reveal animations throughout
- Created contact and enquiry forms with backend integration
- Generated product images for showcase

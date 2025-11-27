# Design Guidelines for Bajrang Pumps Website

## Design Approach
**Industry Reference**: Industrial B2B websites (Grundfos, Xylem, KSB Pumps) combined with modern web aesthetics
**Principle**: Professional, trustworthy, and premium industrial design with strong visual hierarchy and clear call-to-actions

## Typography Hierarchy
- **Headings**: Bold, modern sans-serif fonts (weight 700-800)
  - H1: 3rem (mobile: 2rem) - Hero headlines
  - H2: 2.5rem (mobile: 1.75rem) - Section titles
  - H3: 1.75rem (mobile: 1.25rem) - Card titles
- **Body**: Clean, readable sans-serif (weight 400-500)
  - Base: 1rem with 1.6 line-height
  - Small text: 0.875rem for captions/meta info
- Use Google Fonts: Poppins or Inter for modern industrial feel

## Layout System
**Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, etc.)
**Container**: max-w-7xl with px-4 (mobile) to px-8 (desktop)
**Section Padding**: py-16 (mobile) to py-24 (desktop)

## Page-Specific Layouts

### Home Page
**Hero Section** (90vh):
- Large background image of submersible pump in industrial setting
- Centered content overlay with blur backdrop for text/buttons
- Headline + tagline stack
- Two CTA buttons (primary "View Products", secondary "Get Quote") with blurred backgrounds
- Subtle fade-in animation on load

**Features Grid** (below hero):
- 4-column grid (2 columns mobile) with icons
- Each feature: Icon (Material Icons), title, brief description
- Cards with subtle hover lift effect
- Features: Durable, Energy Efficient, Anti-Rust, High Water Flow

**Animated Sections**:
- Scroll-triggered fade-in and slide-up animations (staggered)
- Use Intersection Observer for performance

### Products Page
**Product Grid**: 
- 3-column grid (1 column mobile, 2 tablet)
- Each card: Product image (3:2 ratio), category badge, product name, 3-4 key features as bullet points, "Enquiry" button
- 5 categories clearly organized with visual separation
- Hover effect: gentle scale and shadow increase

### About Us Page
**Layout Structure**:
- Company story: 2-column layout (image left, text right)
- Mission/Vision: Side-by-side cards with icons
- Timeline section: Vertical timeline with alternating content (desktop), stacked (mobile)
- Achievement badges with icons and numbers

### Contact Page
**2-Column Layout** (stacked mobile):
- Left: Contact form (full-height, white card with shadow)
  - Fields: Name, Email, Phone, Message (textarea)
  - Submit button with loading state
- Right: Google Maps embed (400px height), company details card, WhatsApp floating button

### Enquiry Page
**Centered Form** (max-w-2xl):
- Product dropdown (all pump categories)
- Contact fields matching contact page
- Large submit button
- Success message overlay on submission

## Navigation
**Desktop**: Horizontal nav with logo left, links center/right, sticky on scroll with backdrop blur
**Mobile**: Hamburger menu, slide-in drawer from right, full-height overlay
**Links**: Home, Products, About, Contact, Get Quote (highlighted)

## Footer
**3-Column Layout** (stacked mobile):
- Column 1: Logo, tagline, social icons
- Column 2: Quick Links (Products, About, Contact)
- Column 3: Contact info (address, phone, email, hours)
- Bottom bar: Copyright, terms/privacy links

## Component Library

### Buttons
- Primary: Solid fill, rounded corners (rounded-lg), medium padding (px-8 py-3)
- Secondary: Outline style
- Hover: Slight scale and shadow increase
- **Hero buttons**: Add backdrop-blur-md bg-opacity-90 for readability

### Cards
- White background, subtle shadow (shadow-md)
- Rounded corners (rounded-xl)
- Padding: p-6
- Hover: shadow-lg transition

### Icons
Use Material Icons for consistency across features, timeline, contact methods

## Images
**Required Images**:
1. **Home Hero**: Large (1920x1080) industrial-grade submersible pump in operation or clean product shot on industrial background
2. **Product Cards**: 5 distinct pump images (Submersible, Monoblock, Borewell, Agriculture, Industrial) - professional product photography style
3. **About Page**: Factory/manufacturing facility image, team/quality control images
4. **Decorative**: Abstract industrial patterns or water flow imagery for section backgrounds (subtle, low opacity)

**Image Treatment**: Sharp, high-quality, professional product photography with clean backgrounds

## Animations
**Scroll Reveal**:
- Fade-in with slide-up (20px) on scroll
- Stagger delay for grid items (0.1s increments)
- Use CSS animations triggered by Intersection Observer

**Hover Effects** (minimal):
- Cards: transform: translateY(-4px) + shadow increase
- Buttons: slight scale (1.02)
- Product images: gentle zoom (scale 1.05)

**Page Transitions**: Smooth fade-in on initial load

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility
- All form inputs with labels
- Sufficient color contrast for industrial theme
- Focus states on interactive elements
- Alt text for all product images
- Semantic HTML5 structure

## Color Usage Notes
The user specified blue/white industrial theme with orange highlights - implement with restraint and professional industrial aesthetic
# GMT Consulting Website

A professional corporate website for **GrowMore Technocrats Consulting LLP (GMT)** - a leading technology consulting firm specializing in ERP advisory, CRM solutions, HRMS implementation, and business transformation.

## 🌐 Website Overview

- **Website Name**: GMT Consulting
- **Tagline**: GrowMore Technocrats - Transform Your Business with Expert Consulting
- **Theme**: Professional, Corporate, Trustworthy, Modern, Clean, Minimalistic
- **Primary Color**: #03499e (Corporate Blue)
- **Background**: White (#ffffff)
- **Font**: Black/Dark Gray for text

## 🏗️ Project Blueprint

### Tech Stack
- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.2
- **Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

### Project Structure
```
GMT/
├── app/                          # Next.js App Router
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── contact/
│   │   ├── page.tsx             # Contact page (server component)
│   │   └── contact-form.tsx     # Contact form (client component)
│   ├── industries/
│   │   └── page.tsx             # Industries page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── solutions/
│   │   └── page.tsx             # Solutions page
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout
│   └── page.tsx                # Home page
├── components/                   # Reusable components
│   ├── navbar.tsx              # Navigation bar
│   ├── hero.tsx                # Hero section
│   ├── features.tsx            # Features/Services grid
│   ├── how-it-works.tsx        # Process section
│   ├── testimonials.tsx        # Client testimonials
│   ├── cta.tsx                # Call-to-action section
│   ├── footer.tsx              # Footer
│   └── ui/                    # shadcn/ui components
├── lib/
│   └── utils.ts               # Utility functions
├── public/
│   ├── logo.svg               # GMT Logo
│   └── ...                    # Static assets
├── package.json
├── tsconfig.json
└── next.config.mjs
```

### Pages & Routes
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, features, testimonials |
| `/about` | About Us | Company info, team, mission, vision, values |
| `/services` | Services | ERP, CRM, HRMS, Business Consulting, Cloud, IT Support |
| `/solutions` | Solutions | Detailed solutions with benefits & features |
| `/industries` | Industries | Manufacturing, Retail, Healthcare, Finance, etc. |
| `/contact` | Contact | Contact form with validation, contact info |

### Features Implemented
1. ✅ Responsive design (mobile-first)
2. ✅ Dark/Light theme support via CSS variables
3. ✅ SEO optimized with metadata
4. ✅ Contact form with validation
5. ✅ Professional corporate design
6. ✅ Fast loading (static generation)
7. ✅ CTA buttons on all pages
8. ✅ Custom logo integration

## 🚀 How to Run

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
cd GMT

# Install dependencies
pnpm install
# OR
npm install
```

### Development

```bash
# Start development server
pnpm dev
# OR
npm run dev
```

The website will be available at `http://localhost:3000`

### Production Build

```bash
# Create production build
pnpm build
# OR
npm run build

# Start production server
pnpm start
# OR
npm start
```

### Linting

```bash
# Run ESLint
pnpm lint
# OR
npm run lint
```

## 📝 Services Offered

1. **ERP Advisory** - Enterprise Resource Planning selection, implementation, and optimization
2. **CRM Solutions** - Customer relationship management for enhanced engagement
3. **HRMS Implementation** - Human resource management systems automation
4. **Business Consulting** - Strategic transformation and process optimization
5. **Cloud Solutions** - Cloud migration and infrastructure
6. **IT Support** - 24/7 technical support and maintenance

## 🎨 Design System

### Colors
- Primary: `#03499e` (Corporate Blue)
- Background: `#ffffff` (White)
- Text: `#1a1a1a` (Dark Gray)
- Muted: `#6b7280` (Gray)
- Accent: `#03499e`

### Typography
- Headings: Space Grotesk
- Body: Inter

## 📄 License

Copyright © 2024 GrowMore Technocrats Consulting LLP. All rights reserved.

## 📞 Contact

- **Email**: head.gmtconsulting@gmail.com
- **Phone**: +91 98765 43210
- **Location**: Mumbai, Maharashtra, India

---

Built with Next.js + Tailwind CSS + shadcn/ui

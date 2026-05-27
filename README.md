# AMA UTD Website

A professional website for the American Marketing Association Chapter at UT Dallas.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Montserrat (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
ama-utd/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── events/page.tsx    # Events page
│   ├── impact/page.tsx    # Marketing That Matters page
│   ├── join/page.tsx      # Join page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Button.tsx         # Button component
│   ├── Section.tsx        # Section wrapper component
│   ├── PageHeader.tsx     # Page header component
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx         # Footer component
├── public/
│   └── images/            # Static images
│       ├── ama-logo.png   # AMA logo
│       └── hero-bg.png    # Hero background image
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Customization

### Colors

The primary navy color palette is defined in `tailwind.config.ts`. The main brand color is `navy-900` (#0E2A47).

### Executive Board

To update the executive board members, edit the `executiveBoard` array in `app/about/page.tsx`:

```typescript
const executiveBoard = [
  {
    name: "First Last",
    role: "President",
    image: "/images/team/president.jpg", // Add image to public/images/team/
  },
  // Add more members...
];
```

### Links

Key external links are configured throughout the site:

- **Join Form:** Google Form URL in homepage and join page
- **Instagram:** @amautdallas
- **LinkedIn:** AMA UTD company page
- **GroupMe:** Community chat invite link
- **Email:** amautdallas2@gmail.com

## Deployment

This site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting provider**

### Vercel Deployment

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

## License

© 2026 American Marketing Association UTD Chapter

# Apex Wholesale v2 - B2B Lead Generation Platform

Production-ready Next.js 15 application with advanced B2B marketing strategy based on 2026 industry research.

## Features

- **Modern UI** - Dark theme, mobile-responsive design
- **Lead Capture** - Email form with business type selector
- **API Integration Ready** - Prepared for Resend, SendGrid, or custom email service
- **Performance Optimized** - Image optimization, lazy loading, compression
- **SEO Ready** - Meta tags, Open Graph, structured data
- **Security** - CSP headers, input validation, HTTPS ready
- **Analytics Ready** - GA4 integration points

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Vercel Hosting

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
NEXT_PUBLIC_EMAIL_SERVICE=resend
RESEND_API_KEY=your_key
NEXT_PUBLIC_GA_ID=your_ga_id
```

### Deployment

Push to GitHub → Vercel auto-deploys

```bash
git add .
git commit -m "Your message"
git push origin main
```

## Customization

### Homepage Text
Edit `app/page.tsx` - all copy is easily modifiable

### Colors & Theme
Edit `tailwind.config.ts` for custom colors

### Lead Form
Customize fields in the form submission in `app/page.tsx`

### Email Integration
Edit `app/api/lead/route.ts` to add your email service

## Monitoring

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Analytics**: Set up in your GA account
- **Performance**: Use Chrome DevTools Lighthouse

## Support

For questions or improvements, check the documentation files included in the project.

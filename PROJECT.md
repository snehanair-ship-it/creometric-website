# Creometric Website

A modern Next.js 14 website for **Creometric**, a digital marketing agency based in Goa, India.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Netlify
- **Forms:** Netlify Forms (fetch-based submission)
- **Analytics:** GA4, GTM, Google Search Console

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, tracking)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt config
│   ├── opengraph-image.tsx # Auto-generated OG image
│   ├── about-us/           # About page
│   ├── blog/               # Blog index + posts
│   ├── case-studies/       # Case studies
│   ├── contact-us/         # Contact page
│   ├── service/            # Services overview + individual
│   ├── academy/            # Academy/resources
│   ├── privacy-policy/     # Privacy policy
│   └── thank-you/          # Post-form confirmation
├── components/
│   ├── Header.tsx           # Sticky navigation
│   ├── Footer.tsx           # Site footer
│   ├── Services.tsx         # 6-card service grid
│   ├── Testimonials.tsx     # Client testimonial carousel
│   ├── LeadForm.tsx         # Homepage lead capture form
│   ├── ContactForm.tsx      # Contact page form
│   ├── Stats.tsx            # Performance stats bar
│   ├── ClientLogos.tsx      # Client logo grid
│   ├── FAQ.tsx              # FAQ accordion
│   ├── CTABanner.tsx        # Orange CTA section
│   └── WhatsAppButton.tsx   # Floating WhatsApp button
├── lib/
│   └── analytics.ts         # GA event helper
└── types/
    └── global.d.ts          # Global type declarations
```

## Environment Variables

| Variable | Description | Where to set |
|----------|-------------|--------------|
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID (optional override) | Netlify env vars |

## Deployment

The site auto-deploys to Netlify on every push to `main`. Configuration is in `netlify.toml`.

**Live URL:** https://lively-kleicha-d45dc0.netlify.app

## Tracking IDs

| Service | ID |
|---------|----|
| GA4 (primary) | G-MZJW7K33NY |
| GTM | GTM-N4WPPM6 |
| GA4 (secondary) | GT-TNPBMMZ |
| GSC | Verified via meta tag |

## Forms

Forms submit via `fetch()` to `/__forms.html` (Netlify Forms v5 approach). Submissions appear in Netlify dashboard under **Forms > lead-form**.

A `form_submission` custom GA4 event fires on every successful submission.

## Content To-Do

- [ ] Replace client logo placeholders with real logos
- [ ] Replace team photo placeholders with real photos
- [ ] Add Creometric logo file
- [ ] Add Google Maps embed to /contact-us/
- [ ] Add Calendly URL to /thank-you
- [ ] Connect custom domain (creometric.com)

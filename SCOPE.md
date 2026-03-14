# Creometric Website — Project Scope Document

## Project Overview

**Client:** Creometric — Digital Marketing Agency, Goa, India
**Platform:** Next.js 14 (App Router) + Tailwind CSS
**Hosting:** Netlify
**Repository:** github.com/snehanair-ship-it/creometric-website
**Live URL:** https://lively-kleicha-d45dc0.netlify.app

---

## Objectives

1. Rebuild the existing WordPress site (creometric.com) as a modern, fast Next.js site
2. Improve SEO with structured data, sitemap, meta tags, and optimized content
3. Maximize lead generation with forms, CTAs, WhatsApp, and dedicated landing pages
4. Maintain all existing tracking (GA4, GTM) and add conversion tracking for ads
5. Deploy on Netlify with CI/CD from GitHub

---

## Site Map

```
/                          → Homepage (hero, services, testimonials, stats, FAQ, lead form)
/service/                  → Services overview
/service/social-media-management/    → Individual service page
/service/search-engine-optimisation/ → Individual service page
/service/website-design/             → Individual service page
/service/content-marketing/          → Individual service page
/service/pay-per-click/              → Individual service page
/service/web-analytics/              → Individual service page
/about-us/                 → About page (team, mission, stats)
/blog/                     → Blog index
/blog/[slug]               → Individual blog posts
/case-studies/             → Case studies index
/academy/                  → Academy/resources page
/contact-us/               → Contact page (form, map, phone, email)
/thank-you                 → Post-submission confirmation (noindex)
/privacy-policy/           → Privacy policy
/lp/free-audit             → Ad landing page (no nav, single CTA)
```

---

## Pages — Status

| Page | Status | Notes |
|------|--------|-------|
| Homepage | Done | Hero, services, stats, logos, testimonials, CTA, FAQ, form |
| /service/ | Done | Overview with 6 service cards |
| Individual service pages | Pending | 6 pages needed |
| /about-us/ | Done | Team, mission, stats |
| /blog/ | Done | 3 posts listed |
| Individual blog posts | Pending | 3 post pages needed |
| /case-studies/ | Pending | Need content from existing site |
| /academy/ | Pending | Need content from existing site |
| /contact-us/ | Done | Form, phone, email, map placeholder |
| /thank-you | Done | Confirmation, Calendly placeholder, blog links |
| /privacy-policy/ | Pending | Need content from existing site |
| /lp/free-audit | Pending | Ad landing page |

---

## Components — Status

| Component | Status | Notes |
|-----------|--------|-------|
| Header | Done | Sticky, mobile menu, orange CTA |
| Footer | Done | 4-col, social links, copyright |
| Services grid | Done | 6 cards with icons |
| Testimonials carousel | Done | 3 real testimonials |
| Lead form | Done | Netlify Forms, GA event |
| Contact form | Done | Same fields, fetch submission |
| Stats bar | Done | 4 metrics from existing site |
| Client logos | Done | 8 placeholders |
| FAQ accordion | Done | 5 questions |
| CTA banner | Done | Orange, dual CTAs |
| WhatsApp button | Done | Floating, pre-filled message |

---

## Technical Setup

| Feature | Status | Details |
|---------|--------|---------|
| Next.js 14 | Done | App Router, TypeScript, src/ directory |
| Tailwind CSS | Done | Custom config |
| Netlify deployment | Done | netlify.toml, auto-deploy from GitHub |
| Netlify Forms | Done | lead-form with fetch submission |
| GA4 | Done | G-MZJW7K33NY |
| GTM | Done | GTM-N4WPPM6 |
| GA4 secondary | Done | GT-TNPBMMZ with domain linker |
| Google Search Console | Done | Verified, sitemap submitted |
| JSON-LD LocalBusiness | Done | On homepage |
| JSON-LD FAQPage | Done | On homepage |
| Open Graph tags | Done | All pages |
| Auto-generated OG image | Done | /opengraph-image |
| XML Sitemap | Done | /sitemap.xml |
| robots.txt | Done | Blocks /thank-you |
| form_submission GA event | Done | On both forms |
| Meta/Facebook Pixel | Pending | Need Pixel ID |
| Google Ads conversion | Pending | Set up in Google Ads |
| UTM parameter capture | Pending | Pass with form data |

---

## Content Requirements

| Content | Source | Status |
|---------|--------|--------|
| Homepage copy | Written | Done |
| Service descriptions | Written | Done (overview), Pending (individual) |
| About Us copy | Written | Needs real team names/photos |
| Blog posts (3) | From creometric.com | Pending full content |
| Case studies | From creometric.com | Pending |
| Academy content | From creometric.com | Pending |
| Privacy policy | From creometric.com | Pending |
| Client logos | Client to provide | Placeholder only |
| Team photos | Client to provide | Placeholder only |
| Creometric logo | Client to provide | Using "C" placeholder |
| Google Maps embed | Client to provide | Placeholder only |
| Calendly URL | Client to provide | Placeholder only |

---

## Ad Campaign Readiness

### Google Ads
- [x] GA4 connected
- [x] GTM installed
- [x] form_submission event firing
- [ ] Google Ads account linked to GA4
- [ ] Conversion action created (form_submission)
- [ ] Landing page /lp/free-audit built
- [ ] UTM tracking on forms

### Meta/Facebook Ads
- [ ] Meta Pixel installed
- [ ] Standard events configured (Lead, PageView)
- [ ] Custom conversion for form submission
- [ ] Landing page optimized for Meta ads

---

## Timeline

| Phase | Tasks | Status |
|-------|-------|--------|
| Phase 1 — Foundation | Project setup, pages, components, deployment | Done |
| Phase 2 — SEO & Tracking | Meta tags, schemas, GA4, GTM, GSC | Done |
| Phase 3 — Content | Real content, blog posts, case studies, privacy | In Progress |
| Phase 4 — Ads | Landing pages, Meta Pixel, conversion tracking, UTM | Pending |
| Phase 5 — Launch | Custom domain, final QA, redirect old URLs | Pending |

---

## Notes

- Current site is on WordPress (creometric.com). New site will eventually replace it.
- Copyright includes "Digital Transformation Partner — Kilowott"
- Social media: Facebook, Instagram, LinkedIn, Twitter (all active)
- Phone: +91 91452 46464
- Email: hello@creometric.com

# Contractor Guardians Website - Product Requirements Document

## Original Problem Statement
Rebuild a WordPress website using a modern tech stack: Next.js (with App Router), Sanity.io as a headless CMS, and Vercel for deployment. Based on a detailed "Opus 4.5 Website Build Spec" provided by the user.

## Tech Stack
- **Framework:** Next.js 14 (App Router), TypeScript
- **Styling:** TailwindCSS
- **CMS:** Sanity.io v3 (Project ID: `9nystb6p`)
- **Email:** Resend
- **Deployment:** Vercel
- **Repository:** https://github.com/AppStudioPros/Contractor-Gaurdians

## Brand Identity
- **Guardian Gold:** `#F8AB20`
- **Guardian Black:** `#0B0B0D`
- **Shield Blue:** `#1D4ED8`
- **Design Direction:** Moving away from "patriotic" theme (red/white/blue gradients, stars) to contractor-themed elements (shields, blueprints)

## Pages
- `/` - Home
- `/about` - About Us
- `/investor` - Investment Opportunity
- `/contractors` - Contractor Pre-Launch Signup
- `/affiliates` - Affiliate Partnership
- `/tradeschool` - CGTP Tradeschool Program
- `/contact` - Contact Us (with "I am a..." dropdown)
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

---

## What's Been Implemented

### December 2025
- [x] Full Next.js 14 project scaffolding in `/app/contractor-guardians-website/`
- [x] All page routes created with content from original HTML
- [x] Layout components (Header, Footer)
- [x] UI components (Button, Card)
- [x] Page sections (Hero, Features, CTA, etc.)
- [x] Sanity client configuration (placeholder)
- [x] API routes for draft mode and revalidation
- [x] Contact form API route with Resend integration
- [x] SEO files (sitemap.ts, robots.ts)
- [x] ESLint configuration and clean build verified
- [x] README with deployment instructions
- [x] **Sanity Studio with full schema definitions** (`/app/contractor-guardians-website/sanity/`)
  - Document schemas: `siteSettings`, `navigation`, `page`, `teamMember`, `testimonial`, `pricingPlan`, `pitchDeckSlide`, `faq`, `redirect`
  - Object schemas: `seo`, `navLink`, `footerColumn`, `socialLink`, `feature`, `step`
  - Section schemas (page builder): `heroSection`, `featuresSection`, `stepsSection`, `testimonialsSection`, `pricingSection`, `ctaSection`, `richTextSection`, `videoSection`, `statsSection`, `cardsSection`, `formSection`

---

## Prioritized Backlog

### P0 - Critical
- [x] ~~Create Sanity Studio and define content schemas~~ ✅ COMPLETED

### P1 - High Priority
- [ ] User handover for GitHub push and Vercel deployment
- [ ] Implement final design system (brand colors, remove patriotic theme)
- [ ] Configure Resend with verified domain

### P2 - Medium Priority
- [ ] Populate page content - replace placeholder text
- [ ] Add explainer video to homepage (`https://youtu.be/lO6joot_qtg`)
- [ ] Mobile app placeholder button (Coming Soon)
- [ ] Finalize "How to Get Started" section content

### P3 - Future
- [ ] Case studies section
- [ ] Blog functionality (if needed later)
- [ ] Additional form integrations

---

## Known Mocked/Placeholder Items
- **Forms:** Contact API uses Resend but requires `RESEND_API_KEY` environment variable
- **Sanity Data:** All content is currently static; Sanity schemas and content need to be created
- **Images:** Using placeholder images; need final brand assets

---

## Project Location
All code is in `/app/contractor-guardians-website/`

## Environment Variables Required
```
NEXT_PUBLIC_SANITY_PROJECT_ID=9nystb6p
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-19
SANITY_API_READ_TOKEN=your_token
NEXT_PUBLIC_SITE_URL=https://contractorguardians.com
SANITY_WEBHOOK_SECRET=your_secret
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=info@contractorguardians.com
DRAFT_MODE_SECRET=your_draft_secret
```

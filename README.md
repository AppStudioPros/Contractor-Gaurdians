# Contractor Guardians Website

A modern, SEO-optimized website built with Next.js 14, Sanity.io CMS, and TailwindCSS. Deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **CMS:** Sanity.io
- **Email:** Resend
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- A Sanity.io account
- A Vercel account (for deployment)
- A Resend account (for email)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AppStudioPros/Contractor-Gaurdians.git
   cd Contractor-Gaurdians
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file based on `.env.local.example`:
   ```bash
   cp .env.local.example .env.local
   ```

4. Fill in your environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=9nystb6p
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-08-19
   SANITY_API_READ_TOKEN=your_token_here
   NEXT_PUBLIC_SITE_URL=https://contractorguardians.com
   SANITY_WEBHOOK_SECRET=your_webhook_secret
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=info@contractorguardians.com
   DRAFT_MODE_SECRET=your_draft_secret
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (pages)/            # Route groups
│   ├── api/                # API routes
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
└── lib/                    # Utilities and configurations
    ├── sanity/             # Sanity client and queries
    ├── types.ts            # TypeScript types
    └── utils.ts            # Utility functions
```

## Pages

- `/` - Home
- `/about` - About Us
- `/investor` - Investment Opportunity
- `/contractors` - Contractor Pre-Launch Signup
- `/affiliates` - Affiliate Partnership
- `/tradeschool` - CGTP Tradeschool Program
- `/contact` - Contact Us
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## Deployment to Vercel

### Step 1: Push to GitHub

Make sure all your code is pushed to your GitHub repository.

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: `.` (or leave empty)

### Step 3: Add Environment Variables

In Vercel, add these environment variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `9nystb6p` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2025-08-19` |
| `SANITY_API_READ_TOKEN` | Your Sanity read token |
| `NEXT_PUBLIC_SITE_URL` | `https://contractorguardians.com` |
| `SANITY_WEBHOOK_SECRET` | Your webhook secret |
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_EMAIL` | `info@contractorguardians.com` |
| `DRAFT_MODE_SECRET` | Your draft mode secret |

### Step 4: Deploy

Click "Deploy" and Vercel will build and deploy your site.

## Setting Up Sanity Webhook

To enable content updates to trigger site rebuilds:

1. Go to your Sanity project dashboard
2. Navigate to API → Webhooks
3. Create a new webhook:
   - **Name:** Vercel Revalidate
   - **URL:** `https://your-domain.vercel.app/api/revalidate`
   - **Trigger on:** Create, Update, Delete
   - **Secret:** Use the same value as `SANITY_WEBHOOK_SECRET`

## Setting Up Resend for Email

1. Create an account at [resend.com](https://resend.com)
2. Add and verify your domain
3. Get your API key
4. Add the API key to your environment variables

## Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Sanity Studio (if you add one later)
npm run sanity       # Start Sanity Studio
npm run sanity:build # Build Sanity Studio
```

## License

Private - All rights reserved by Contractor Guardians.

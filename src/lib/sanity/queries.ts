import { groq } from 'next-sanity';

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  siteName,
  siteUrl,
  tagline,
  description,
  logo,
  defaultOgImage,
  contactEmail,
  contactPhone,
  address,
  socialLinks,
  "navigation": *[_type == "navigation"][0] {
    headerLinks[] {
      label,
      href,
      isButton
    },
    footerLinks[] {
      title,
      links[] {
        label,
        href
      }
    },
    ctaButton {
      label,
      href
    }
  }
}`;

// Pages
export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  seo,
  sections[] {
    _type,
    _key,
    ...
  }
}`;

export const allPagesQuery = groq`*[_type == "page"] {
  _id,
  title,
  slug,
  _updatedAt
}`;

// Team Members
export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  image,
  socialLinks
}`;

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  role,
  company,
  quote,
  image
}`;

// Pricing Plans
export const pricingPlansQuery = groq`*[_type == "pricingPlan"] | order(order asc) {
  _id,
  name,
  price,
  billingPeriod,
  annualPrice,
  annualSavings,
  description,
  features,
  isPopular,
  ctaLabel,
  ctaHref
}`;

// Pitch Deck Slides
export const pitchDeckSlidesQuery = groq`*[_type == "pitchDeckSlide"] | order(order asc) {
  _id,
  title,
  image,
  order
}`;

// FAQs
export const faqsQuery = groq`*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer
}`;

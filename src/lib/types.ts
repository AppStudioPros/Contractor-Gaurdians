// Site Settings
export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  tagline: string;
  description: string;
  logo: SanityImage;
  defaultOgImage: SanityImage;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: SocialLink[];
  navigation: Navigation;
}

export interface Navigation {
  headerLinks: NavLink[];
  footerLinks: FooterColumn[];
  ctaButton: NavLink;
}

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

// Images
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// SEO
export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImage;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Team Member
export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: SanityImage;
  socialLinks?: SocialLink[];
}

// Testimonial
export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: SanityImage;
}

// Pricing Plan
export interface PricingPlan {
  _id: string;
  name: string;
  price: number;
  billingPeriod: 'month' | 'year' | 'free';
  annualPrice?: number;
  annualSavings?: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaLabel: string;
  ctaHref: string;
}

// Pitch Deck Slide
export interface PitchDeckSlide {
  _id: string;
  title: string;
  image: SanityImage;
  order: number;
}

// FAQ
export interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

// Page
export interface Page {
  _id: string;
  title: string;
  slug: { current: string };
  seo: SEO;
  sections: PageSection[];
}

export type PageSection = 
  | HeroSection
  | FeaturesSection
  | StepsSection
  | TestimonialsSection
  | PricingSection
  | CTASection
  | RichTextSection;

export interface HeroSection {
  _type: 'heroSection';
  _key: string;
  headline: string;
  subheadline?: string;
  description?: string;
  primaryCta?: NavLink;
  secondaryCta?: NavLink;
  image?: SanityImage;
  showAppButtons?: boolean;
}

export interface FeaturesSection {
  _type: 'featuresSection';
  _key: string;
  title: string;
  subtitle?: string;
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface StepsSection {
  _type: 'stepsSection';
  _key: string;
  title: string;
  subtitle?: string;
  steps: Step[];
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface TestimonialsSection {
  _type: 'testimonialsSection';
  _key: string;
  title: string;
  subtitle?: string;
}

export interface PricingSection {
  _type: 'pricingSection';
  _key: string;
  title: string;
  subtitle?: string;
}

export interface CTASection {
  _type: 'ctaSection';
  _key: string;
  title: string;
  description?: string;
  primaryCta?: NavLink;
  secondaryCta?: NavLink;
}

export interface RichTextSection {
  _type: 'richTextSection';
  _key: string;
  title?: string;
  content: any[]; // Portable Text
}

// Form Types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type: 'homeowner' | 'contractor' | 'investor' | 'other';
  message: string;
}

export interface ContractorFormData {
  name: string;
  company: string;
  hasWebsite: boolean;
  websiteUrl?: string;
  phone: string;
  email: string;
  workType: string;
  usesLeadGen: boolean;
  leadGenPlatforms?: string;
  leadGenCost?: string;
  isLicensed: boolean;
  referralSource: string;
}

export interface AffiliateFormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  website?: string;
  referralSource: string;
  message: string;
}

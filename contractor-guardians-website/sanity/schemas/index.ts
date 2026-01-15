// Document Schemas
import siteSettings from './documents/siteSettings';
import navigation from './documents/navigation';
import page from './documents/page';
import teamMember from './documents/teamMember';
import testimonial from './documents/testimonial';
import pricingPlan from './documents/pricingPlan';
import pitchDeckSlide from './documents/pitchDeckSlide';
import faq from './documents/faq';
import redirect from './documents/redirect';

// Object Schemas
import seo from './objects/seo';
import navLink from './objects/navLink';
import footerColumn from './objects/footerColumn';
import socialLink from './objects/socialLink';
import feature from './objects/feature';
import step from './objects/step';

// Section Schemas (Page Builder)
import heroSection from './sections/heroSection';
import featuresSection from './sections/featuresSection';
import stepsSection from './sections/stepsSection';
import testimonialsSection from './sections/testimonialsSection';
import pricingSection from './sections/pricingSection';
import ctaSection from './sections/ctaSection';
import richTextSection from './sections/richTextSection';
import videoSection from './sections/videoSection';
import statsSection from './sections/statsSection';
import cardsSection from './sections/cardsSection';
import formSection from './sections/formSection';

export const schemaTypes = [
  // Documents
  siteSettings,
  navigation,
  page,
  teamMember,
  testimonial,
  pricingPlan,
  pitchDeckSlide,
  faq,
  redirect,
  
  // Objects
  seo,
  navLink,
  footerColumn,
  socialLink,
  feature,
  step,
  
  // Sections
  heroSection,
  featuresSection,
  stepsSection,
  testimonialsSection,
  pricingSection,
  ctaSection,
  richTextSection,
  videoSection,
  statsSection,
  cardsSection,
  formSection,
];

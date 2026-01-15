import type { StructureResolver } from 'sanity/structure';
import { Settings, FileText, Users, MessageSquare, CreditCard, Image, HelpCircle, Navigation, Home } from 'lucide-react';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(Settings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
      // Singleton: Navigation
      S.listItem()
        .title('Navigation')
        .icon(Navigation)
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
        ),
      
      S.divider(),
      
      // Pages
      S.listItem()
        .title('Pages')
        .icon(FileText)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      
      S.divider(),
      
      // Content Collections
      S.listItem()
        .title('Team Members')
        .icon(Users)
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members')),
      
      S.listItem()
        .title('Testimonials')
        .icon(MessageSquare)
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      
      S.listItem()
        .title('Pricing Plans')
        .icon(CreditCard)
        .schemaType('pricingPlan')
        .child(S.documentTypeList('pricingPlan').title('Pricing Plans')),
      
      S.listItem()
        .title('Pitch Deck Slides')
        .icon(Image)
        .schemaType('pitchDeckSlide')
        .child(S.documentTypeList('pitchDeckSlide').title('Pitch Deck Slides')),
      
      S.listItem()
        .title('FAQs')
        .icon(HelpCircle)
        .schemaType('faq')
        .child(S.documentTypeList('faq').title('FAQs')),
      
      S.divider(),
      
      // Redirects
      S.listItem()
        .title('Redirects')
        .icon(Home)
        .schemaType('redirect')
        .child(S.documentTypeList('redirect').title('Redirects')),
    ]);

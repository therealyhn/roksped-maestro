import {mapImage, mapReferenceList, mapSeo} from './shared.js'
export const mapHomePage = (doc) => doc ? ({
  seo: mapSeo(doc.seo),
  hero: {...doc.hero, fallbackImage: mapImage(doc.hero?.fallbackImage)},
  servicesIntro: {...doc.servicesIntro, services: mapReferenceList(doc.services)},
  mission: {...doc.mission, images: (doc.mission?.images || []).map(mapImage).filter(Boolean)},
  testimonialShowcase: {...doc.testimonialShowcase, testimonials: mapReferenceList(doc.testimonials)},
  aboutTeaser: {...doc.aboutTeaser, media: mapImage(doc.aboutTeaser?.media)},
  locationsTeaser: {...doc.locationsTeaser, locations: mapReferenceList(doc.locations)},
  faq: {...doc.faq, items: mapReferenceList(doc.faqItems)},
}) : null

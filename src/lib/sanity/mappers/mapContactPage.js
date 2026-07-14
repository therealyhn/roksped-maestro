import {mapSeo} from './shared.js'
import {mapReferenceList} from './shared.js'
export const mapContactPage = (doc) => doc ? ({
  seo: mapSeo(doc.seo),
  heading: doc.heading || null,
  workingHours: Array.isArray(doc.workingHours) ? doc.workingHours : [],
  formIntro: doc.formIntro || null,
  formLabels: doc.formLabels || null,
  serviceOptions: Array.isArray(doc.serviceOptions) ? doc.serviceOptions : [],
  locationsIntro: doc.locationsIntro || null,
  locations: mapReferenceList(doc.locations),
}) : null

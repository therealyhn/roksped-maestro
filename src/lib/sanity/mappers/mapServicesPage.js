import {mapImage, mapSeo} from './shared.js'
import {mapReferenceList} from './shared.js'
export const mapServicesPage = (doc) => doc ? ({seo: mapSeo(doc.seo), hero: {...doc.hero, fallbackImage: mapImage(doc.hero?.fallbackImage)}, services: mapReferenceList(doc.services), closingCta: doc.closingCta || null}) : null

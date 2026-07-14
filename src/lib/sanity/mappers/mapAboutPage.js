import {mapImage, mapReferenceList, mapSeo} from './shared.js'
export const mapAboutPage = (doc) => doc ? ({
  seo: mapSeo(doc.seo),
  hero: {...doc.hero, image: mapImage(doc.hero?.image)},
  why: doc.why || null,
  teamIntro: {...doc.teamIntro, image: mapImage(doc.teamIntro?.image)},
  teamMembers: mapReferenceList(doc.teamMembers),
  process: doc.process || null,
  clientStatement: {...doc.clientStatement, partners: mapReferenceList(doc.partners)},
}) : null

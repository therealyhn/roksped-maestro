import {mapSeo} from './shared.js'
export const mapLegalPage = (doc) => doc ? {key: doc.key, title: doc.title, updatedAt: doc.updatedAt || null, body: doc.body || [], seo: mapSeo(doc.seo)} : null

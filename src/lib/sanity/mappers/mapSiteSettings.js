import {mapImage} from './shared.js'

export const mapSiteSettings = (doc) => doc ? {
  navigation: doc.navigation || [],
  primaryCta: doc.primaryCta || null,
  company: doc.company ? {
    legalName: doc.company.legalName || doc.company.name || null,
    activityCode: doc.company.activityCode || null,
    taxId: doc.company.taxId || null,
    registrationNumber: doc.company.registrationNumber || null,
    legalForm: doc.company.legalForm || null,
    bankName: doc.company.bankName || null,
    bankAccount: doc.company.bankAccount || doc.company.accountNumber || null,
  } : null,
  contact: doc.contact ? {
    phone: doc.contact.phone || null,
    email: doc.contact.email || null,
    addressLines: doc.contact.addressLines || doc.contact.address || [],
  } : null,
  socials: doc.socials || null,
  footer: doc.footer || null,
  notFound: doc.notFound || null,
  defaultSeo: {...(doc.defaultSeo || {}), socialImage: mapImage(doc.defaultSeo?.socialImage)},
} : null

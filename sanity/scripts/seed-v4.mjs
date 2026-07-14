import {createClient} from '@sanity/client'
import {readFile} from 'node:fs/promises'

const envText = await readFile(new URL('../.env', import.meta.url), 'utf8').catch(() => '')
const token = envText.match(/^SANITY_WRITE_TOKEN=(.+)$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, '')

if (!token) throw new Error('SANITY_WRITE_TOKEN is required in sanity/.env.')

const client = createClient({projectId: '7003ks3q', dataset: 'production', apiVersion: '2025-01-01', token, useCdn: false})
const dryRun = process.argv.includes('--dry-run')
const ref = (id) => ({_type: 'reference', _ref: id})
const image = (source, alt) => source?.asset ? ({_type: 'v4.editorialImage', asset: source.asset, alt, decorative: false}) : undefined
const keyed = (items) => items.map((item, index) => ({_key: `v4-${index + 1}`, ...item}))
const portableText = (text) => text ? [{_key: 'v4-body', _type: 'block', style: 'normal', markDefs: [], children: [{_key: 'v4-span', _type: 'span', marks: [], text}]}] : []

const [legacy] = await Promise.all([
  client.fetch(`{
    "hero": *[_type == "hero"][0],
    "about": *[_type == "about"][0],
    "services": *[_type == "servicesSection"][0],
    "contact": *[_type == "contact"][0],
    "locations": *[_type == "locations"][0],
    "partners": *[_type == "partners"][0],
    "footer": *[_type == "footer"][0]
  }`),
])

const serviceIds = ['customs', 'logistics', 'warehouse', 'transport'].map((key) => `v4-service-${key}`)
const locationIds = (legacy.locations?.locations || []).map((_, index) => `v4-location-${index + 1}`)
const partnerIds = (legacy.partners?.partners || []).map((_, index) => `v4-partner-${index + 1}`)
const services = (legacy.services?.services || []).map((item, index) => ({
  _id: serviceIds[index], _type: 'v4.service', key: item.serviceType, title: item.title,
  summary: item.description, longBody: portableText(item.description),
  editorialImage: image(item.image, item.title), cardImage: image(item.image, item.title), ctaLabel: 'Kontaktirajte nas',
}))
const locations = (legacy.locations?.locations || []).map((item, index) => ({
  _id: locationIds[index], _type: 'v4.location', slug: {_type: 'slug', current: `location-${index + 1}`}, name: item.name,
  address: String(item.address || '').split(/\s{2,}|\n/).filter(Boolean),
  contacts: keyed((item.contacts || []).map((contact) => ({name: contact.name, phone: contact.phone}))),
  officeEmails: item.emails || [], displayOrder: index + 1,
}))
const partners = (legacy.partners?.partners || []).map((item, index) => ({
  _id: partnerIds[index], _type: 'v4.partner', name: item.name, website: item.website,
  logo: item.logo, alt: item.name, displayOrder: index + 1,
}))
const faqQuestions = ['Koje vrste transporta organizujete?', 'Da li pružate usluge carinskog posredovanja?', 'Da li nudite usluge skladištenja robe?', 'Kako mogu da zatražim ponudu?']
const faqs = faqQuestions.map((question, index) => ({_id: `v4-faq-${index + 1}`, _type: 'v4.faqItem', question, displayOrder: index + 1}))

const documents = [
  ...services, ...locations, ...partners, ...faqs,
  {
    _id: 'v4-site-settings', _type: 'v4.siteSettings',
    navigation: keyed(['Početna', 'Usluge', 'O nama', 'Kontakt'].map((label) => ({label}))),
    primaryCta: {label: 'Kontaktirajte nas'},
    company: {name: 'Rok Šped Plus D.O.O.', registrationNumber: '21462888', taxId: '111326846', activityCode: '5229', legalForm: 'D.O.O.', bankName: 'Raiffeisen Bank', accountNumber: '265-6410310004731-46'},
    contact: {phone: '+381 64 13 09 794', email: 'office@roksped.rs', address: ['Smederevo 11300,', 'Kolarski Put 330, sprat 3']},
    footer: {companyHeading: 'Kompanija', resourcesHeading: 'Resursi', contactHeading: 'Kontaktirajte nas', locationHeading: 'Lokacija', followLabel: 'Zapratite nas', copyright: '© 2026 Rok Šped Plus D.O.O. All rights reserved.'},
    notFound: {title: 'Stranica nije pronađena', description: 'Tražena stranica ne postoji.', actionLabel: 'Početna'},
    defaultSeo: {siteName: 'Rok Šped', titleSuffix: 'Rok Šped', description: legacy.footer?.description},
  },
  {
    _id: 'v4-home-page', _type: 'v4.homePage',
    hero: {heading: 'Pouzdana podrška međunarodnoj trgovini', body: 'Kombinujemo iskustvo, stručnost i pouzdanu mrežu partnera kako bismo obezbedili siguran protok robe, brže procedure i efikasniju organizaciju transporta.', ctaLabel: 'Zatražite ponudu', fallbackImage: image(legacy.hero?.backgroundImage, 'Rok Šped logistika')},
    servicesIntro: {heading: 'Savremena logistička rešenja za sigurno i efikasno poslovanje.', services: serviceIds.map(ref)},
    mission: {heading: 'Naša misija', body: 'Uklanjamo prepreke između vaše robe i njenog odredišta kroz efikasnu logistiku, stručnu podršku i potpunu usklađenost sa propisima.', quote: 'Naš posao je da uklonimo prepreke, pojednostavimo procese i obezbedimo da vaša roba stigne tamo gde treba - na vreme i bez komplikacija.', quoteAuthor: 'Bojan Bojanić, direktor Rok Špeda', statistics: keyed([{value: '15+', label: 'Godina iskustva'}])},
    testimonialShowcase: {heading: 'Šta o nama kažu naši klijenti', testimonials: []},
    aboutTeaser: {heading: 'Vi se fokusirate na rast poslovanja. Mi brinemo o procedurama, dokumentaciji i logistici.', body: 'Kvalitet usluge ne čine samo procesi, već ljudi koji stoje iza njih. Zato svakom projektu pristupamo odgovorno, profesionalno i sa punom pažnjom.', ctaLabel: 'Više o nama'},
    locationsTeaser: {heading: 'Više lokacija. Isti kvalitet', body: 'Naša mreža poslovnica omogućava bržu komunikaciju, efikasniju koordinaciju i direktnu podršku klijentima širom regiona. Pronađite najbližu lokaciju i kontaktirajte naš tim.', locations: locationIds.map(ref)},
    faq: {heading: 'Sve što vas zanima o našim logističkim uslugama.', items: faqs.map((item) => ref(item._id))},
  },
  {
    _id: 'v4-about-page', _type: 'v4.aboutPage',
    hero: {heading: 'Pokrećemo robu. Olakšavamo trgovinu.', body: 'Više od 15 godina pružamo pouzdana rešenja u oblasti transporta, carinskog posredovanja i logistike, pomažući kompanijama da posluju efikasnije na domaćem i međunarodnom tržištu.', image: image(legacy.about?.image, 'Rok Šped tim')},
    why: {eyebrow: 'Zašto Rok Šped', heading: 'Pouzdan partner za transport, logistiku i carinske procedure', body: 'Kombinujemo stručnost, odgovornost i dugogodišnje iskustvo kako bismo obezbedili siguran protok robe i pouzdanu podršku u svakom koraku poslovanja.', highlights: keyed([{title: '24/7 Podrška', body: 'Naš tim pruža podršku i važne informacije tokom svakog koraka transporta.'}, {title: '500+ Zadovoljnih klijenata', body: 'Stotine kompanija biraju nas kao pouzdanog partnera za logistiku i transport.'}, {title: '15+ Godina iskustva', body: 'Godine rada na tržištu omogućile su nam da razvijemo efikasne i pouzdane procese.'}])},
    teamIntro: {heading: 'Ljudi iza svakog uspešno realizovanog procesa', body: 'Naš tim čine stručnjaci iz oblasti logistike, transporta i carinskog posredovanja koji kontinuirano prate promene u carinskom i spoljnotrgovinskom zakonodavstvu, obezbeđujući usklađenost sa važećim propisima i pouzdanu podršku tokom celog procesa.', ctaLabel: 'Kontaktiraj naš tim'},
    process: {heading: 'Četiri koraka do rešenja', body: 'Od prvog upita do konačne isporuke, vodimo vas kroz svaki korak procesa uz stručnu podršku, jasnu komunikaciju i efikasnu organizaciju logističkih aktivnosti.', ctaLabel: 'Istražite našu ponudu', steps: keyed([{number: '01', title: 'Pošaljite upit sa Vašim zahtevima', body: 'Dostavite informacije o robi, destinaciji i zahtevima transporta, a naš tim će analizirati vaše potrebe i pripremiti odgovarajuće logističko rešenje.'}, {number: '02', title: 'Dobijate predlog rešenja', body: 'Na osnovu dostavljenih informacija predlažemo najefikasniji model transporta, potrebne procedure i okvirne rokove realizacije.'}, {number: '03', title: 'Organizujemo realizaciju', body: 'Preuzimamo koordinaciju transporta, dokumentacije i carinskih procedura kako bi ceo proces bio efikasan, siguran i usklađen sa propisima.'}, {number: '04', title: 'Isporuka bez prepreka', body: 'Pratimo pošiljku tokom celog procesa i obezbeđujemo podršku sve do uspešne isporuke na krajnju destinaciju.'}])},
    clientStatement: {heading: 'Brendovi sa kojima smo sarađivali', partners: partnerIds.map(ref)},
  },
  {_id: 'v4-services-page', _type: 'v4.servicesPage', services: serviceIds.map(ref), closingCta: {heading: 'Spremni za početak saradnje?', body: 'Recite nam šta vam je potrebno, a naš tim će pripremiti logističko rešenje prilagođeno vašim zahtevima i odgovoriti u najkraćem mogućem roku.', label: 'Kontaktirajte naš tim'}},
  {_id: 'v4-contact-page', _type: 'v4.contactPage', heading: 'Započnite razgovor sa našim timom.', workingHours: keyed((legacy.contact?.workingHours || []).map((item) => ({day: item.day, hours: item.hours}))), formLabels: {firstName: 'Ime *', lastName: 'Prezime', companyName: 'Ime firme *', email: 'Email *', message: 'Opišite Vaše logističke potrebe *', service: 'Vrsta usluge *', consent: 'Slanjem obrasca saglasni ste da Rok Šped Plus koristi dostavljene podatke kako bi odgovorio na vaš upit. Vaši podaci se neće koristiti u marketinške svrhe niti deliti sa trećim stranama. Više informacija dostupno je u Politici privatnosti.', submit: 'Pošalji upit'}, serviceOptions: keyed(['Zahtev za ponudu', 'Transport robe', 'Carinsko posredovanje', 'Skladištenje robe', 'Poslovna saradnja', 'Ostalo'].map((label) => ({label}))), locations: locationIds.map(ref)},
]

console.log(`${dryRun ? 'Dry run' : 'Seeding'}: ${documents.length} v4 documents.`)
for (const document of documents) console.log(`${dryRun ? 'would create' : 'create-if-missing'} ${document._id}`)
const existingBefore = await client.fetch('*[_id in $ids]._id', {ids: documents.map((document) => document._id)})
console.log(`Existing before seed: ${existingBefore.length}; createIfNotExists will not overwrite existing documents.`)
if (!dryRun) await client.transaction(documents.map((document) => ({createIfNotExists: document}))).commit()
const seededIds = await client.fetch('*[_id in $ids]._id', {ids: documents.map((document) => document._id)})
console.log(`Verified existing v4 IDs: ${seededIds.length}/${documents.length}`)

const singletonDefinitions = [
  {type: 'v4.siteSettings', id: 'v4-site-settings', title: 'Podešavanja sajta'},
  {type: 'v4.homePage', id: 'v4-home-page', title: 'Početna'},
  {type: 'v4.aboutPage', id: 'v4-about-page', title: 'O nama'},
  {type: 'v4.servicesPage', id: 'v4-services-page', title: 'Usluge'},
  {type: 'v4.contactPage', id: 'v4-contact-page', title: 'Kontakt'},
]

export const singletonTypes = singletonDefinitions.map(({type}) => type)

const singletonItem = (S, {id, title, type}) =>
  S.listItem().title(title).id(id).child(S.document().schemaType(type).documentId(id))

const documentTypeItem = (S, type, title) => S.documentTypeListItem(type).title(title)

export default (S) =>
  S.list()
    .title('Rok Šped v4 sadržaj')
    .items([
      S.listItem().title('v4 stranice').child(S.list().title('v4 stranice').items(singletonDefinitions.map((definition) => singletonItem(S, definition)))),
      S.divider(),
      S.listItem().title('v4 ponovljivi sadržaj').child(S.list().title('v4 ponovljivi sadržaj').items([
        documentTypeItem(S, 'v4.service', 'Usluge'), documentTypeItem(S, 'v4.location', 'Lokacije'), documentTypeItem(S, 'v4.partner', 'Partneri'), documentTypeItem(S, 'v4.teamMember', 'Članovi tima'), documentTypeItem(S, 'v4.testimonial', 'Preporuke'), documentTypeItem(S, 'v4.faqItem', 'FAQ'), documentTypeItem(S, 'v4.legal', 'Pravni dokumenti'),
      ])),
      S.divider(),
      S.listItem().title('Legacy v3').child(S.list().title('Legacy v3').items([
        documentTypeItem(S, 'hero', 'Početna (v3)'), documentTypeItem(S, 'about', 'O nama (v3)'), documentTypeItem(S, 'servicesSection', 'Usluge (v3)'), documentTypeItem(S, 'contact', 'Kontakt (v3)'), documentTypeItem(S, 'locations', 'Lokacije (v3)'), documentTypeItem(S, 'partners', 'Saradnici (v3)'), documentTypeItem(S, 'footer', 'Footer (v3)'),
      ])),
    ])

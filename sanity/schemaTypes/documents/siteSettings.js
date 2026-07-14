import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'v4.siteSettings', title: 'v4 Podešavanja sajta', type: 'document',
  fields: [
    defineField({name: 'navigation', title: 'Navigacija', type: 'array', of: [{type: 'v4.navigationItem'}], validation: (Rule) => Rule.min(1).max(4)}),
    defineField({name: 'primaryCta', title: 'Primarni CTA', type: 'v4.cta'}),
    defineField({name: 'company', title: 'Kompanija', type: 'v4.company'}),
    defineField({name: 'contact', title: 'Kontakt', type: 'v4.contactInfo'}),
    defineField({name: 'socials', title: 'Mreže', type: 'v4.socials'}),
    defineField({name: 'footer', title: 'Footer', type: 'object', fields: [
      defineField({name: 'companyHeading', title: 'Kompanija', type: 'string'}), defineField({name: 'resourcesHeading', title: 'Resursi', type: 'string'}), defineField({name: 'contactHeading', title: 'Kontakt', type: 'string'}), defineField({name: 'locationHeading', title: 'Lokacije', type: 'string'}), defineField({name: 'followLabel', title: 'Pratite nas', type: 'string'}), defineField({name: 'copyright', title: 'Copyright', type: 'string'}),
    ]}),
    defineField({name: 'notFound', title: '404', type: 'object', fields: [defineField({name: 'title', title: 'Naslov', type: 'string'}), defineField({name: 'description', title: 'Opis', type: 'text'}), defineField({name: 'actionLabel', title: 'Oznaka akcije', type: 'string'})]}),
    defineField({name: 'defaultSeo', title: 'Podrazumevani SEO', type: 'object', fields: [defineField({name: 'siteName', title: 'Naziv sajta', type: 'string'}), defineField({name: 'titleSuffix', title: 'Sufiks naslova', type: 'string'}), defineField({name: 'description', title: 'Opis', type: 'text'}), defineField({name: 'socialImage', title: 'Društvena slika', type: 'v4.editorialImage'})]}),
  ],
})

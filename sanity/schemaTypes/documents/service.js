import {defineField, defineType} from 'sanity'
export const service = defineType({name: 'v4.service', title: 'v4 Usluga', type: 'document', fields: [
  defineField({name: 'key', title: 'Stabilni ključ', type: 'string', options: {list: ['customs', 'logistics', 'warehouse', 'transport']}, readOnly: true, validation: (Rule) => Rule.required()}),
  defineField({name: 'title', title: 'Naslov', type: 'string', validation: (Rule) => Rule.required()}), defineField({name: 'summary', title: 'Sažetak', type: 'text'}), defineField({name: 'longBody', title: 'Detaljan tekst', type: 'array', of: [{type: 'block'}]}),
  defineField({name: 'editorialImage', title: 'Urednička slika', type: 'v4.editorialImage'}), defineField({name: 'cardImage', title: 'Slika kartice', type: 'v4.editorialImage'}), defineField({name: 'ctaLabel', title: 'CTA oznaka', type: 'string'}), defineField({name: 'seo', title: 'SEO', type: 'v4.seo'}),
]})

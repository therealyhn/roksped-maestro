import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'v4.seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'SEO naslov', type: 'string', validation: (Rule) => Rule.max(60)}),
    defineField({
      name: 'description',
      title: 'SEO opis',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.min(120).max(160),
    }),
    defineField({name: 'socialImage', title: 'Društvena slika', type: 'v4.editorialImage'}),
  ],
})

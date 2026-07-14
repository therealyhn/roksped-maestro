import {defineField, defineType} from 'sanity'

export const processStep = defineType({
  name: 'v4.processStep',
  title: 'Korak procesa',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Naslov', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'body', title: 'Tekst', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
  ],
})

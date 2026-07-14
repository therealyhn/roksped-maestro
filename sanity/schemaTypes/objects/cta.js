import {defineField, defineType} from 'sanity'

export const cta = defineType({
  name: 'v4.cta',
  title: 'Poziv na akciju',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Oznaka', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

import {defineField, defineType} from 'sanity'

export const statisticCard = defineType({
  name: 'v4.statisticCard',
  title: 'Statistička kartica',
  type: 'object',
  fields: [
    defineField({name: 'value', title: 'Vrednost', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'label', title: 'Oznaka', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

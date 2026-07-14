import {defineField, defineType} from 'sanity'

export const serviceOption = defineType({
  name: 'v4.serviceOption',
  title: 'Opcija usluge',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Oznaka', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

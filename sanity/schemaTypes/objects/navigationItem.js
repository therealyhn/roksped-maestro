import {defineField, defineType} from 'sanity'

export const navigationItem = defineType({
  name: 'v4.navigationItem',
  title: 'Navigaciona stavka',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Oznaka', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

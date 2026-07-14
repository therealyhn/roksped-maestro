import {defineField, defineType} from 'sanity'

export const workingHours = defineType({
  name: 'v4.workingHours',
  title: 'Radno vreme',
  type: 'object',
  fields: [
    defineField({name: 'day', title: 'Dan(i)', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'hours', title: 'Sati', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

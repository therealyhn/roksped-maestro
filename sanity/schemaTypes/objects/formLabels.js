import {defineField, defineType} from 'sanity'

export const formLabels = defineType({
  name: 'v4.formLabels',
  title: 'Oznake kontakt forme',
  type: 'object',
  fields: [
    defineField({name: 'firstName', title: 'Ime', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'lastName', title: 'Prezime', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'company', title: 'Kompanija', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'message', title: 'Poruka', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'serviceLegend', title: 'Legenda usluga', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'privacyLabel', title: 'Privatnost', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'submitLabel', title: 'Slanje', type: 'string', validation: (Rule) => Rule.required()}),
  ],
})

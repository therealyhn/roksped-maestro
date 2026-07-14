import {defineField, defineType} from 'sanity'

export const contactInfo = defineType({
  name: 'v4.contactInfo',
  title: 'Kontakt podaci',
  type: 'object',
  fields: [
    defineField({name: 'phone', title: 'Telefon', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.email()}),
    defineField({name: 'addressLines', title: 'Redovi adrese', type: 'array', of: [{type: 'string'}]}),
  ],
})

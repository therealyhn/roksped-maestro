import {defineField, defineType} from 'sanity'

export const company = defineType({
  name: 'v4.company',
  title: 'Podaci o kompaniji',
  type: 'object',
  fields: [
    defineField({name: 'legalName', title: 'Pravni naziv', type: 'string'}),
    defineField({name: 'activityCode', title: 'Šifra delatnosti', type: 'string'}),
    defineField({name: 'taxId', title: 'PIB', type: 'string'}),
    defineField({name: 'registrationNumber', title: 'Matični broj', type: 'string'}),
    defineField({name: 'legalForm', title: 'Pravna forma', type: 'string'}),
    defineField({name: 'bankName', title: 'Banka', type: 'string'}),
    defineField({name: 'bankAccount', title: 'Broj računa', type: 'string'}),
  ],
})

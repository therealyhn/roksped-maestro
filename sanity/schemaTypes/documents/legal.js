import {defineField, defineType} from 'sanity'

export const legal = defineType({
  name: 'v4.legal',
  title: 'v4 Pravni dokument',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Ključ',
      type: 'string',
      options: {list: ['privacy', 'terms']},
      readOnly: ({document}) => Boolean(document?.key),
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'title', title: 'Naslov', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'updatedAt', title: 'Ažurirano', type: 'date'}),
    defineField({name: 'body', title: 'Tekst', type: 'array', of: [{type: 'block'}], validation: (Rule) => Rule.required()}),
  ],
})

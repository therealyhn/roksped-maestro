import {defineField, defineType} from 'sanity'

export const editorialImage = defineType({
  name: 'v4.editorialImage',
  title: 'Urednička slika',
  type: 'object',
  fields: [
    defineField({name: 'asset', title: 'Slika', type: 'image', options: {hotspot: true}, validation: (Rule) => Rule.required()}),
    defineField({name: 'alt', title: 'Alternativni tekst', type: 'string'}),
    defineField({name: 'decorative', title: 'Dekorativna slika', type: 'boolean', initialValue: false}),
  ],
  validation: (Rule) =>
    Rule.custom((value) => {
      if (!value?.asset) return true
      return value.decorative || value.alt ? true : 'Alternativni tekst je obavezan za sadržajnu sliku.'
    }),
})

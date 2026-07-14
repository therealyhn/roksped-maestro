import {defineField, defineType} from 'sanity'

const urlRule = (Rule) => Rule.uri({scheme: ['http', 'https']})

export const socials = defineType({
  name: 'v4.socials',
  title: 'Društvene mreže',
  type: 'object',
  fields: [
    defineField({name: 'instagram', title: 'Instagram', type: 'url', validation: urlRule}),
    defineField({name: 'facebook', title: 'Facebook', type: 'url', validation: urlRule}),
    defineField({name: 'linkedin', title: 'LinkedIn', type: 'url', validation: urlRule}),
  ],
})

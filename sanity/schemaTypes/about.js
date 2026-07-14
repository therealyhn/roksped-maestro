export default {
  name: 'about',
  title: 'O nama',
  type: 'document',
  groups: [
    {name: 'content', title: 'Sadržaj'},
    {name: 'media', title: 'Slika'},
    {name: 'offers', title: 'Naša ponuda'},
    {name: 'highlights', title: 'Kartice (ispod slike)'},
    {name: 'badge', title: 'Oznaka na slici'},
    {name: 'certificate', title: 'Sertifikacija'},
    {name: 'stats', title: 'Statistika'},
  ],
  fields: [
    {
      name: 'introText',
      title: 'Intro tekst',
      type: 'string',
      description: 'Mali tekst iznad naslova (npr. „O nama“).',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Naslov',
      type: 'string',
      description: 'Naslov sekcije (npr. „ROK ŠPED PLUS SMEDEREVO“).',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Opis 1',
      type: 'text',
      rows: 4,
      description: 'Prvi pasus opisa.',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description2',
      title: 'Opis 2',
      type: 'text',
      rows: 4,
      description: 'Drugi pasus opisa.',
      group: 'content',
    },
    {
      name: 'image',
      title: 'Slika',
      type: 'image',
      options: {hotspot: true},
      description: 'Glavna slika sekcije.',
      group: 'media',
    },
    {
      name: 'badge',
      title: 'Oznaka (preko slike)',
      type: 'object',
      group: 'badge',
      fields: [
        {
          name: 'number',
          title: 'Broj',
          type: 'string',
          description: 'npr. „15+“',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'label',
          title: 'Oznaka',
          type: 'string',
          description: 'npr. „Godina iskustva“',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'offers',
      title: 'Naša ponuda obuhvata',
      type: 'array',
      group: 'offers',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Naziv',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Opis',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    },
  ],
  preview: {
    prepare() {
      return {title: 'O nama sekcija'}
    },
  },
}

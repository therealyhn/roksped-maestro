export default {
  name: 'hero',
  title: 'Početna',
  type: 'document',
  groups: [
    {name: 'content', title: 'Sadržaj'},
    {name: 'media', title: 'Video/slika'},
    {name: 'stats', title: 'Statistika'},
  ],
  fields: [
    {
      name: 'introText',
      title: 'Intro tekst',
      type: 'string',
      description: 'Mali tekst iznad naslova (npr. „Dobrodošli u Rok Šped“).',
      group: 'content',
    },
    {
      name: 'title',
      title: 'Glavni naslov',
      type: 'string',
      description: 'Glavni naslov (npr. „Međunarodna špedicija“).',
      group: 'content',
    },
    {
      name: 'subtitle',
      title: 'Podnaslov (zeleni)',
      type: 'string',
      description: 'Drugi red naslova (npr. „i transport“).',
      group: 'content',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 3,
      description: 'Kratak opis ispod naslova.',
      group: 'content',
    },
    {
      name: 'backgroundVideo',
      title: 'URL pozadinskog videa',
      type: 'url',
      description: 'URL za pozadinski video (preporučuje se MP4 format).',
      group: 'media',
    },
    {
      name: 'backgroundImage',
      title: 'Pozadinska slika (rezervna)',
      type: 'image',
      options: {hotspot: true},
      description: 'Rezervna slika ako video nije dostupan ili dok se učitava.',
      group: 'media',
    },
    {
      name: 'stats',
      title: 'Statistika',
      type: 'array',
      group: 'stats',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Broj/vrednost',
              type: 'string',
              description: 'npr. „15+“, „500+“, „24/7“',
            },
            {
              name: 'label',
              title: 'Oznaka',
              type: 'string',
              description: 'npr. „Godina iskustva“, „Zadovoljnih klijenata“, „Podrška“',
            },
          ],
          preview: {
            select: {title: 'number', subtitle: 'label'},
          },
        },
      ],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'subtitle'},
    prepare({title, subtitle}) {
      return {
        title: 'Hero sekcija',
        subtitle: `${title || ''} ${subtitle || ''}`,
      }
    },
  },
}

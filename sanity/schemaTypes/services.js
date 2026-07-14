export default {
  name: 'servicesSection',
  title: 'Usluge',
  type: 'document',
  groups: [
    {name: 'header', title: 'Naslov'},
    {name: 'services', title: 'Usluge'},
  ],
  fields: [
    {
      name: 'introText',
      title: 'Intro tekst',
      type: 'string',
      group: 'header',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Naslov',
      type: 'string',
      group: 'header',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Podnaslov',
      type: 'text',
      rows: 3,
      group: 'header',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'services',
      title: 'Usluge',
      type: 'array',
      group: 'services',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Usluga',
          fields: [
            {
              name: 'serviceType',
              title: 'Tip usluge',
              type: 'string',
              description: 'Odaberite tip; on određuje prikaz dodatnih polja.',
              options: {
                list: [
                  {title: 'Carinsko posredovanje', value: 'customs'},
                  {title: 'Logistika', value: 'logistics'},
                  {title: 'Skladištenje', value: 'warehouse'},
                  {title: 'Transport', value: 'transport'},
                ],
                layout: 'radio',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Naziv usluge',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Opis',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'bulletsTitle',
              title: 'Naslov liste (opciono)',
              type: 'string',
            },
            {
              name: 'bullets',
              title: 'Stavke liste (opciono)',
              type: 'array',
              of: [{type: 'string'}],
              options: {sortable: true},
            },
            {
              name: 'transportOptions',
              title: 'Vrste transporta (4 opcije)',
              type: 'array',
              description:
                'Prikazuje se samo kada je tip usluge transport. Ikonice su fiksne u frontendu po vrednosti type.',
              hidden: ({parent}) => parent?.serviceType !== 'transport',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const type = context?.parent?.serviceType

                  if (type !== 'transport') return true

                  if (!Array.isArray(value) || value.length !== 4) {
                    return 'Za transport morate uneti tačno 4 opcije: drumski, vodeni, avio i železnički.'
                  }

                  const types = value.map((option) => option?.type).filter(Boolean)
                  const unique = new Set(types)

                  if (unique.size !== 4) {
                    return 'Svaka opcija mora imati jedinstven tip: road, sea, air ili rail.'
                  }

                  return true
                }),
              of: [
                {
                  type: 'object',
                  name: 'transportOption',
                  title: 'Opcija transporta',
                  fields: [
                    {
                      name: 'type',
                      title: 'Tip (ikonica u frontendu)',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Drumski', value: 'road'},
                          {title: 'Vodeni', value: 'sea'},
                          {title: 'Avio', value: 'air'},
                          {title: 'Železnički', value: 'rail'},
                        ],
                        layout: 'radio',
                      },
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'title',
                      title: 'Naziv',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'description',
                      title: 'Kratak opis',
                      type: 'text',
                      rows: 2,
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {title: 'title', subtitle: 'type'},
                    prepare({title, subtitle}) {
                      return {
                        title,
                        subtitle: subtitle ? `Tip: ${subtitle}` : 'Tip nije izabran',
                      }
                    },
                  },
                },
              ],
              options: {sortable: false},
            },
            {
              name: 'image',
              title: 'Naslovna slika kartice',
              type: 'image',
              description: 'Slika na vrhu kartice usluge (preporučen odnos 4:3 ili 16:9).',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'serviceType', media: 'image'},
            prepare({title, subtitle, media}) {
              const types = {
                customs: 'Carina',
                logistics: 'Logistika',
                warehouse: 'Skladištenje',
                transport: 'Transport',
              }

              return {
                title,
                subtitle: subtitle ? `Tip: ${types[subtitle] || subtitle}` : '',
                media,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {title: 'Usluge'}
    },
  },
}

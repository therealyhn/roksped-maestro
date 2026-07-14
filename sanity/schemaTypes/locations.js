export default {
  name: 'locations',
  title: 'Lokacije',
  type: 'document',
  fields: [
    {name: 'title', title: 'Naslov sekcije', type: 'string', initialValue: 'NAŠE POSLOVNICE'},
    {
      name: 'subtitle',
      title: 'Podnaslov',
      type: 'string',
      initialValue: 'Pronađite najbližu poslovnicu i kontaktirajte nas',
    },
    {
      name: 'locations',
      title: 'Poslovnice',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'locationEntry',
          title: 'Poslovnica',
          fields: [
            {name: 'name', title: 'Naziv poslovnice', type: 'string'},
            {
              name: 'accentColor',
              title: 'Boja akcenta',
              type: 'string',
              options: {list: ['green', 'yellow']},
              initialValue: 'green',
            },
            {name: 'address', title: 'Adresa', type: 'string'},
            {
              name: 'contacts',
              title: 'Kontakt osobe',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'name', title: 'Ime i prezime', type: 'string'},
                    {name: 'phone', title: 'Telefon', type: 'string'},
                  ],
                },
              ],
            },
            {name: 'emails', title: 'Email adrese', type: 'array', of: [{type: 'string'}]},
          ],
          preview: {
            select: {title: 'name', subtitle: 'address'},
          },
        },
      ],
    },
  ],
}

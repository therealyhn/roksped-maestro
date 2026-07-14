export default {
  name: 'partners',
  title: 'Saradnici',
  type: 'document',
  fields: [
    {name: 'title', title: 'Naslov', type: 'string'},
    {
      name: 'partners',
      title: 'Saradnici',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Naziv', type: 'string'},
            {name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}},
            {name: 'website', title: 'Website', type: 'url'},
          ],
        },
      ],
    },
  ],
}

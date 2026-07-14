export default {
  name: 'contact',
  title: 'Kontakt',
  type: 'document',
  fields: [
    {name: 'introText', title: 'Intro tekst', type: 'string', initialValue: 'KONTAKT'},
    {name: 'heading', title: 'Naslov', type: 'string', initialValue: 'KONTAKTIRAJTE NAS'},
    {
      name: 'subtitle',
      title: 'Podnaslov',
      type: 'text',
      rows: 3,
      initialValue: 'Spremni smo da odgovorimo na sva Vaša pitanja i pomognemo Vam sa logističkim izazovima.',
    },
    {
      name: 'workingHours',
      title: 'Radno vreme',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'day', title: 'Dan(i)', type: 'string'},
            {name: 'hours', title: 'Sati', type: 'string'},
          ],
        },
      ],
    },
    {name: 'bankName', title: 'Ime banke', type: 'string', initialValue: 'Raiffeisen Bank'},
    {name: 'accountNumber', title: 'Broj računa', type: 'string', initialValue: '265-6410310004731-46'},
  ],
}

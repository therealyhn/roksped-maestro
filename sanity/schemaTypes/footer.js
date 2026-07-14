export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {name: 'companyName', title: 'Ime firme', type: 'string', initialValue: 'Rok Šped Plus D.O.O.'},
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
      initialValue: 'Pružamo pravovremene, sigurne i pouzdane usluge u oblasti međunarodne špedicije i transporta.',
    },
    {
      name: 'contactInfo',
      title: 'Kontakt informacije',
      type: 'object',
      fields: [
        {name: 'phone', title: 'Telefon', type: 'string', initialValue: '+381 64 13 09 794'},
        {name: 'email', title: 'Email', type: 'string', initialValue: 'office@roksped.rs'},
        {name: 'address', title: 'Adresa', type: 'string', initialValue: 'Kolarski Put 330, Smederevo'},
        {name: 'website', title: 'Website URL', type: 'string', initialValue: 'www.roksped.rs'},
      ],
    },
    {
      name: 'socialLinks',
      title: 'Društvene mreže',
      type: 'object',
      fields: [
        {name: 'facebook', title: 'Facebook URL', type: 'url'},
        {name: 'linkedin', title: 'LinkedIn URL', type: 'url'},
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
      ],
    },
    {
      name: 'copyright',
      title: 'Copyright tekst',
      type: 'string',
      initialValue: 'Copyright © 2024 Rok Šped Plus D.O.O. All rights reserved.',
    },
  ],
}

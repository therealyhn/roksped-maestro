import {homeFigmaContent} from './homeFigmaContent.js'

export const contactFigmaContent = Object.freeze({
  intro: {
    heading: 'Započnite razgovor sa našim timom.',
    workingHoursHeading: 'Radno vreme',
    workingHours: [
      ['Ponedeljak - Petak', '09:00 - 17:00'],
      ['Subota', '09:00 - 13:00'],
      ['Nedelja', 'Zatvoreno'],
    ],
  },
  form: {
    firstNameLabel: 'Ime',
    lastNameLabel: 'Prezime',
    companyLabel: 'Ime firme',
    emailLabel: 'Email',
    messageLabel: 'Opišite Vaše logističke potrebe',
    serviceLegend: 'Vrsta usluge',
    serviceOptions: [
      {value: 'request', label: 'Zahtev za ponudu'},
      {value: 'transport', label: 'Transport robe'},
      {value: 'customs', label: 'Carinsko posredovanje'},
      {value: 'warehouse', label: 'Skladištenje robe'},
      {value: 'partnership', label: 'Poslovna saradnja'},
      {value: 'other', label: 'Ostalo'},
    ],
    privacyPrefix: 'Slanjem obrasca saglasni ste da Rok Šped Plus koristi dostavljene podatke kako bi odgovorio na vaš upit. Vaši podaci se neće koristiti u marketinške svrhe niti deliti sa trećim stranama. Više informacija dostupno je u',
    privacyLink: 'Politici privatnosti',
    submitLabel: 'Pošalji upit',
  },
  locations: homeFigmaContent.locations,
})

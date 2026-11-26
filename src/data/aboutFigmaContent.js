import {homeFigmaContent} from './homeFigmaContent.js'

// Silueta stoji dok Rok Šped ne pošalje fotografije članova tima; tada svaki član dobija svoju sliku.
const teamPortraitPlaceholder = {image: '/assets/about/team-silhouette.svg', portraitPosition: 'center 30%'}

const locationContacts = homeFigmaContent.locations.items.flatMap((location) => location.contacts)
const vladimirContact = locationContacts.find((contact) => contact.name === 'Vladimir Dakić')
const sladjanaContact = locationContacts.find((contact) => contact.name === 'Slađana Vasić')

const locationTeamMembers = [
  {...vladimirContact, id: vladimirContact.email, ...teamPortraitPlaceholder, desktopOrder: 1},
  {...sladjanaContact, id: sladjanaContact.email, ...teamPortraitPlaceholder, desktopOrder: 3},
]

export const aboutFigmaContent = Object.freeze({
  hero: {
    eyebrow: 'Naša priča',
    heading: ['Pokrećemo robu.', 'Olakšavamo trgovinu.'],
    body: 'Više od 15 godina pružamo pouzdana rešenja u oblasti transporta, carinskog posredovanja i logistike, pomažući kompanijama da posluju efikasnije na domaćem i međunarodnom tržištu.',
  },
  why: {
    eyebrow: 'Zašto Rok Šped',
    heading: ['Pouzdan partner za transport,', 'logistiku i carinske procedure'],
    body: 'Kombinujemo stručnost, odgovornost i dugogodišnje iskustvo kako bismo obezbedili siguran protok robe i pouzdanu podršku u svakom koraku poslovanja.',
    cards: [
      {
        key: 'experience',
        title: '15+ Godina iskustva',
        body: 'Godine rada na tržištu omogućile su nam da razvijemo efikasne i pouzdane procese.',
        image: '/assets/about/stairs.png',
      },
      {
        key: 'clients',
        title: '500+ Zadovoljnih klijenata',
        body: 'Stotine kompanija biraju nas kao pouzdanog partnera za logistiku i transport.',
        image: '/assets/about/heart.png',
      },
      {
        key: 'support',
        title: '24/7 Podrška',
        body: 'Naš tim pruža podršku i važne informacije tokom svakog koraka transporta.',
        image: '/assets/about/headphones.png',
      },
    ],
  },
  team: {
    heading: ['Ljudi iza svakog', 'uspešno realizovanog', 'procesa'],
    body: 'Naš tim čine stručnjaci iz oblasti logistike, transporta i carinskog posredovanja koji kontinuirano prate promene u carinskom i spoljnotrgovinskom zakonodavstvu, obezbeđujući usklađenost sa važećim propisima i pouzdanu podršku tokom celog procesa.',
    ctaLabel: 'Kontaktiraj naš tim',
    intro: 'Upoznajte članove tima koji svojim iskustvom, odgovornošću i stručnim znanjem vode kompaniju i grade dugoročne odnose sa klijentima i partnerima.',
    members: [
      {
        id: 'bojan-bojanic',
        name: 'Bojan Bojanić',
        role: 'Direktor',
        ...teamPortraitPlaceholder,
        desktopOrder: 2,
      },
      ...locationTeamMembers,
    ],
  },
  process: {
    heading: 'Četiri koraka do rešenja',
    body: 'Od prvog upita do konačne isporuke, vodimo vas kroz svaki korak procesa uz stručnu podršku, jasnu komunikaciju i efikasnu organizaciju logističkih aktivnosti.',
    ctaLabel: 'Istražite našu ponudu',
    steps: [
      {
        key: 'inquiry',
        title: 'Pošaljite upit sa Vašim zahtevima',
        body: 'Dostavite informacije o robi, destinaciji i zahtevima transporta, a naš tim će analizirati vaše potrebe i pripremiti odgovarajuće logističko rešenje.',
      },
      {
        key: 'proposal',
        title: 'Dobijate predlog rešenja',
        body: 'Na osnovu dostavljenih informacija predlažemo najefikasniji model transporta, potrebne procedure i okvirne rokove realizacije.',
      },
      {
        key: 'organisation',
        title: 'Organizujemo realizaciju',
        body: 'Preuzimamo koordinaciju transporta, dokumentacije i carinskih procedura kako bi ceo proces bio efikasan, siguran i usklađen sa propisima.',
      },
      {
        key: 'delivery',
        title: 'Isporuka bez prepreka',
        body: 'Pratimo pošiljku tokom celog procesa i obezbeđujemo podršku sve do uspešne isporuke na krajnju destinaciju.',
      },
    ],
  },
  partners: {
    eyebrow: 'Brendovi sa kojima smo sarađivali',
    // Sedam firmi koje je Rok Šped izabrao za vrh (26.11.2026), redom kako su ih poslali; logotipi sa njihovih sajtova.
    featuredRows: [
      ['utva-silosi', 'tomi-trade', 'mayekawa'],
      ['schwing-stetter', 'preymesser'],
      ['komerc-mali', 'delta-agrar'],
    ],
    featured: [
      {
        id: 'utva-silosi',
        name: 'Utva Silosi',
        url: 'https://utva.rs/',
        logo: '/assets/about/partners/utva-silosi.png',
        cardColor: '#d3f1fc',
        rotation: -5,
      },
      {
        id: 'mayekawa',
        name: 'Mayekawa',
        url: 'https://www.mayekawa.eu/',
        logo: '/assets/about/partners/mayekawa.jpg',
        cardColor: '#ffffff',
        rotation: 16,
        hasShadow: true,
      },
      {
        id: 'schwing-stetter',
        name: 'Schwing Stetter',
        url: 'https://schwing-stetter.com/',
        logo: '/assets/about/partners/schwing-stetter.svg',
        cardColor: '#ffffff',
        rotation: -14,
        hasShadow: true,
      },
      {
        id: 'preymesser',
        name: 'M. Preymesser',
        url: 'https://www.preymesser.de/',
        logo: '/assets/about/partners/preymesser.png',
        cardColor: '#fcea98',
        rotation: 6,
      },
      {
        id: 'komerc-mali',
        name: 'Komerc-Mali',
        url: 'https://www.komercmali.com/',
        logo: '/assets/about/partners/komerc-mali.png',
        cardColor: '#ffffff',
        rotation: -5,
        hasShadow: true,
      },
      {
        id: 'delta-agrar',
        name: 'Delta Agrar',
        url: 'https://deltaagrar.rs/',
        logo: '/assets/about/partners/delta-agrar.png',
        cardColor: '#1b2323',
        rotation: 15,
      },
      {
        id: 'tomi-trade',
        name: 'Tomi Trade',
        logo: '/assets/about/partners/tomi-trade.png',
        cardColor: '#efe0e0',
        rotation: 15,
      },
    ],
    // Abecedno (srpski redosled); kolone pravi CSS, pa nova firma ide samo na svoje mesto u nizu.
    // url samo za sajt koji je proveren da pripada toj firmi (26.11.2026); bez url-a ime ostaje običan tekst.
    companies: [
      {name: 'AGC'},
      {name: 'Akiba'},
      {name: 'Birotehna', url: 'https://birotehna.rs/'},
      {name: 'Cable One', url: 'https://cableone.rs/'},
      {name: 'Champicomp', url: 'https://champicomp.rs/'},
      {name: 'Dahop'},
      {name: 'DAK Comerc', url: 'https://www.dakcomerc.co.rs/'},
      {name: 'Deco Invest'},
      {name: 'Dragović Smederevo'},
      {name: 'Eko Furnir'},
      {name: 'Ekovald'},
      {name: 'EPS Rudnik Kovin', url: 'http://www.rudnikkovin.rs/'},
      {name: 'Eurocem'},
      {name: 'Fereneks'},
      {name: 'Gama Expo'},
      {name: 'Goek Color'},
      {name: 'Intermehanika'},
      {name: 'International Granites'},
      {name: 'Isik Celik', url: 'https://isikcelik.com/'},
      {name: 'Kebe Beograd'},
      {name: 'Ks Safety Shoes'},
      {name: 'Mashtronics', url: 'https://mashtronics.com/'},
      {name: 'Masterline', url: 'https://masterline.co.rs/'},
      {name: 'Metal - Flex', url: 'https://metalflex.rs/'},
      {name: 'Metaling'},
      {name: 'Milanić'},
      {name: 'Minimet'},
      {name: 'Naka', url: 'https://nakashoes.rs/'},
      {name: 'NKK Jagodina'},
      {name: 'Nova Šumadija', url: 'https://novasumadija.rs/'},
      {name: 'Procema'},
      {name: 'Profi Weld', url: 'https://profiweld.rs/'},
      {name: 'RIO'},
      {name: 'Steelmex Beograd', url: 'https://steelmex.rs/'},
      {name: 'Stolarium Horeca'},
      {name: 'Šrafko', url: 'https://www.srafko.rs/'},
      {name: 'Tehnograd Inženjering', url: 'https://tehnograd.rs/'},
      {name: 'Tim Tred Raška'},
      {name: 'Timotijević'},
      {name: 'Wacker'},
      {name: 'Zijin', url: 'https://www.zijinmining.com/'},
    ],
  },
})

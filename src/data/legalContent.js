const company = {
    name: 'Rok Šped Plus D.O.O. Smederevo',
    address: 'Kolarski put 330, 11300 Smederevo, Srbija',
    email: 'office@roksped.rs',
    phone: '+381 64 13 09 794',
    registrationNumber: '21462888',
    taxId: '111326846',
}

export const legalLabels = {
    ariaLabel: 'Pravne informacije',
    privacy: 'Politika privatnosti',
    terms: 'Uslovi korišćenja',
    close: 'Zatvori pravni dokument',
}

export const legalContent = {
    privacy: {
        title: 'Politika privatnosti',
        updatedAt: 'Poslednje ažuriranje: 12. jun 2026.',
        intro:
            'Ova Politika privatnosti objašnjava kako Rok Šped Plus D.O.O. Smederevo obrađuje podatke o ličnosti posetilaca sajta, poslovnih kontakata i lica čiji su podaci potrebni za pružanje usluga špedicije, carinskog zastupanja, logistike, skladištenja i transporta.',
        sections: [
            {
                title: '1. Rukovalac podacima',
                paragraphs: [
                    `${company.name}, ${company.address}, matični broj ${company.registrationNumber}, PIB ${company.taxId}, rukovalac je podacima obuhvaćenim ovom politikom.`,
                    `Za pitanja o privatnosti i ostvarivanje prava možete pisati na ${company.email} ili pozvati ${company.phone}.`,
                ],
            },
            {
                title: '2. Podaci koje obrađujemo',
                paragraphs: [
                    'Putem kontakt forme obrađujemo ime i prezime, email adresu, broj telefona i sadržaj poruke.',
                    'U poslovnoj komunikaciji možemo obrađivati podatke zaposlenih, zastupnika, kontakt osoba, vozača, pošiljalaca, primalaca, vlasnika robe i drugih lica uključenih u transportni ili carinski postupak.',
                    'U zavisnosti od usluge, podaci mogu obuhvatiti poslovne kontakt podatke, funkciju i kompaniju, potpise, podatke iz ovlašćenja, transportne i carinske dokumentacije, identifikacione podatke vozača i druge podatke koje zahtevaju nadležni organi ili priroda konkretnog posla.',
                    'Hosting i povezani tehnički servisi mogu automatski obraditi ograničene tehničke podatke, kao što su IP adresa, tip uređaja i pregledača, vreme zahteva i tražena stranica, radi isporuke sadržaja, bezbednosti i otklanjanja grešaka.',
                ],
            },
            {
                title: '3. Izvori podataka',
                paragraphs: [
                    'Podatke najčešće dobijamo neposredno od vas, vašeg poslodavca ili nalogodavca. Podatke možemo dobiti i od pošiljaoca, primaoca, prevoznika, poslovnog partnera, carinskog ili drugog nadležnog organa, odnosno iz javno dostupnih registara kada je to potrebno i dozvoljeno.',
                    'Lice koje dostavlja podatke drugih osoba dužno je da za to ima odgovarajući osnov i da ih obavesti o relevantnoj obradi.',
                ],
            },
            {
                title: '4. Svrhe i pravni osnov obrade',
                items: [
                    'Odgovaranje na upite, izrada ponude i preduzimanje radnji pre zaključenja ugovora.',
                    'Izvršenje ugovorene špediterske, carinske, logističke, skladišne ili transportne usluge.',
                    'Postupanje po ovlašćenju i komunikacija sa carinskim, poreskim, inspekcijskim i drugim nadležnim organima.',
                    'Ispunjavanje obaveza iz carinskih, saobraćajnih, poreskih, računovodstvenih i drugih primenljivih propisa.',
                    'Vođenje poslovne komunikacije, zaštita informacionih sistema, sprečavanje zloupotrebe i ostvarivanje ili odbrana pravnih zahteva na osnovu legitimnog interesa.',
                    'Postupanje uz pristanak kada je pristanak potreban za posebnu svrhu.',
                ],
                paragraphs: [
                    'Kontakt podaci se ne koriste za newsletter ili direktni marketing bez odgovarajućeg pravnog osnova.',
                ],
            },
            {
                title: '5. Primaoci podataka',
                paragraphs: [
                    'Podaci se ne prodaju. U meri potrebnoj za realizaciju usluge ili ispunjenje obaveze, mogu biti dostavljeni sledećim primaocima:',
                ],
                items: [
                    'carinskim, poreskim, graničnim, inspekcijskim, policijskim, sudskim i drugim nadležnim organima;',
                    'prevoznicima, brodarima, avio-kompanijama, železničkim operaterima, agentima, terminalima, lukama, skladištima i drugim učesnicima u lancu snabdevanja;',
                    'pošiljaocima, primaocima, osiguravačima, bankama, pravnim i stručnim savetnicima;',
                    'hosting i email provajderima kada je to potrebno za tehničku obradu poslovnog upita.',
                ],
            },
            {
                title: '6. Međunarodni prenos podataka',
                paragraphs: [
                    'Zbog prirode međunarodnog transporta i carinskih postupaka, podaci mogu biti prosleđeni primaocima u državama tranzita, porekla ili odredišta robe. Pojedini IT pružaoci takođe mogu obrađivati podatke izvan Srbije.',
                    'Prenos se vrši kada je potreban za ugovor, postupak pred nadležnim organom ili na drugom odgovarajućem pravnom osnovu, uz primenu dostupnih zaštitnih mera.',
                ],
            },
            {
                title: '7. Rok čuvanja',
                paragraphs: [
                    'Kontakt upiti koji ne dovedu do poslovnog odnosa uobičajeno se čuvaju do 24 meseca od poslednje komunikacije, osim kada je duže čuvanje potrebno radi zaštite pravnih interesa.',
                    'Ugovorna, transportna, carinska, računovodstvena i druga poslovna dokumentacija čuva se tokom trajanja odnosa i nakon toga u rokovima propisanim primenljivim zakonima, rokovima zastarelosti i pravilima nadležnih organa.',
                ],
            },
            {
                title: '8. Kolačići i spoljni sadržaj',
                paragraphs: [
                    'Sajt trenutno ne koristi korisničke naloge, analitičke ili marketinške kolačiće. Mapa i linkovi ka spoljnim platformama podležu pravilima privatnosti odgovarajućih pružalaca kada ih učitate ili posetite.',
                ],
            },
            {
                title: '9. Vaša prava',
                paragraphs: [
                    'U skladu sa primenljivim propisima možete tražiti pristup, ispravku, brisanje, ograničenje obrade, prenosivost kada je primenljiva i uložiti prigovor na obradu zasnovanu na legitimnom interesu. Kada se obrada zasniva na pristanku, pristanak možete povući u bilo kom trenutku.',
                    `Zahtev pošaljite na ${company.email}. Radi zaštite podataka može biti potrebno da potvrdite identitet i ovlašćenje. Takođe imate pravo da podnesete pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti Republike Srbije.`,
                ],
            },
            {
                title: '10. Obaveznost podataka i automatizovano odlučivanje',
                paragraphs: [
                    'Dostavljanje podataka kroz web formu je dobrovoljno, ali bez potrebnih kontakt podataka ne možemo odgovoriti na upit. Podaci zahtevani propisom, carinskim postupkom ili ugovorom mogu biti neophodni za pružanje konkretne usluge.',
                    'Ne vršimo automatizovano donošenje odluka koje proizvodi pravno ili slično značajno dejstvo po lica.',
                ],
            },
            {
                title: '11. Bezbednost i izmene politike',
                paragraphs: [
                    'Primenjujemo razumne tehničke i organizacione mere zaštite primerene prirodi podataka i riziku, ali nijedan sistem prenosa ili čuvanja nije potpuno bez rizika.',
                    'Politika može biti izmenjena kada se promene usluge, propisi ili korišćeni sistemi. Važeća verzija i datum poslednjeg ažuriranja biće dostupni u ovom prozoru.',
                ],
            },
        ],
    },
    terms: {
        title: 'Uslovi korišćenja i poslovnih upita',
        updatedAt: 'Poslednje ažuriranje: 12. jun 2026.',
        intro:
            'Ovi Uslovi uređuju korišćenje sajta Rok Šped Plus D.O.O. i osnovna pravila za upite u vezi sa špedicijom, carinskim zastupanjem, logistikom, skladištenjem i organizacijom transporta. Posebna ponuda, nalog, ugovor, ovlašćenje i obavezni propisi imaju prednost za konkretan posao.',
        sections: [
            {
                title: '1. Podaci o pružaocu usluga',
                paragraphs: [
                    `${company.name}, ${company.address}, matični broj ${company.registrationNumber}, PIB ${company.taxId}, šifra delatnosti 5229.`,
                    `Kontakt: ${company.email}, ${company.phone}.`,
                ],
            },
            {
                title: '2. Namena sajta i upita',
                paragraphs: [
                    'Sajt predstavlja kompaniju, poslovnice i vrste usluga. Objavljeni sadržaj je informativan i sam po sebi ne predstavlja obavezujuću ponudu, garanciju cene, tranzitnog vremena, carinskog ishoda ili raspoloživosti kapaciteta.',
                    'Slanje kontakt forme predstavlja zahtev za komunikaciju. Posao je prihvaćen tek kada Rok Šped Plus izričito potvrdi ponudu ili nalog, odnosno kada strane zaključe odgovarajući pisani dogovor.',
                ],
            },
            {
                title: '3. Ponuda i obim usluge',
                paragraphs: [
                    'Obim usluge, cena, valuta, rokovi, ruta, vrsta prevoza, skladištenje, carinsko zastupanje, osiguranje i drugi uslovi određuju se posebnom ponudom, nalogom ili ugovorom.',
                    'Procena troškova može biti izmenjena ako se promene podaci o robi, ruta, kurs, dažbine, tarife prevoznika, troškovi terminala, skladištenja, čekanja, pregleda ili drugi troškovi van prvobitno poznatog obima.',
                ],
            },
            {
                title: '4. Obaveze nalogodavca',
                paragraphs: [
                    'Nalogodavac je dužan da blagovremeno dostavi potpune, tačne i istinite podatke, instrukcije, ovlašćenja i dokumentaciju potrebnu za konkretan posao.',
                    'Nalogodavac odgovara za posledice netačnih, nepotpunih, zakašnelo dostavljenih ili neautentičnih podataka i dokumenata, u meri dozvoljenoj zakonom.',
                ],
                items: [
                    'tačan opis, tarifno svrstavanje kada je poznato, količinu, masu, vrednost, poreklo i odredište robe;',
                    'podatke o pošiljaocu, primaocu, vlasniku robe, vozaču i drugim učesnicima kada su potrebni;',
                    'fakture, dozvole, sertifikate, deklaracije, transportna dokumenta i druga propisana akta;',
                    'jasnu informaciju o opasnoj, kvarljivoj, vrednoj, kontrolisanoj ili robi posebnih svojstava.',
                ],
            },
            {
                title: '5. Carinsko zastupanje',
                paragraphs: [
                    'Carinsko zastupanje vrši se na osnovu odgovarajućeg ovlašćenja i u obliku neposrednog ili posrednog zastupanja određenom za konkretan postupak.',
                    'Odluke o pregledu, razvrstavanju, vrednosti, poreklu, dažbinama, dozvolama, puštanju ili zadržavanju robe donose nadležni organi. Rok Šped Plus ne garantuje ishod ili trajanje postupka koji zavisi od organa, kontrole ili dokumentacije nalogodavca.',
                    'Carinske, poreske i druge javne dažbine nisu naknada za uslugu Rok Šped Plus-a i snosi ih obveznik, osim ako je pisanim dogovorom određeno drugačije.',
                ],
            },
            {
                title: '6. Transport i treća lica',
                paragraphs: [
                    'Rok Šped Plus može, u skladu sa dogovorom, organizovati prevoz preko nezavisnih drumskih, pomorskih, vazdušnih, železničkih i drugih prevoznika, agenata, terminala i podizvođača.',
                    'Na odgovornost konkretnog prevoznika i transportni dokument primenjuju se obavezni propisi, međunarodne konvencije i ugovoreni uslovi relevantni za izabrani vid transporta, uključujući CMR kada je primenljiv.',
                    'Navedeni polasci i vremena isporuke su procene osim kada je izričito pisanim putem prihvaćena drugačija obaveza.',
                ],
            },
            {
                title: '7. Zabranjena i posebna roba',
                paragraphs: [
                    'Nalogodavac ne sme predati zabranjenu, neprijavljenu ili nepropisno upakovanu robu. Opasna, kvarljiva, visoko vredna, vojna, farmaceutska, akcizna ili druga kontrolisana roba prihvata se samo uz prethodnu pisanu saglasnost i ispunjene zakonske i operativne uslove.',
                    'Rok Šped Plus može odbiti ili obustaviti postupanje kada instrukcija ili roba nije u skladu sa propisima, bezbednosnim zahtevima ili dogovorenim uslovima.',
                ],
            },
            {
                title: '8. Pakovanje, obeležavanje i utovar',
                paragraphs: [
                    'Ako nije drugačije pisano ugovoreno, nalogodavac odgovara da roba bude pravilno upakovana, obeležena, pripremljena i podobna za ugovoreni prevoz, manipulaciju i skladištenje.',
                    'Posebni zahtevi u pogledu temperature, rukovanja, zaštite, utovara ili istovara moraju biti saopšteni pre prihvatanja naloga.',
                ],
            },
            {
                title: '9. Osiguranje robe',
                paragraphs: [
                    'Osiguranje robe nije automatski uključeno u uslugu organizacije transporta. Zaključuje se samo kada je izričito zatraženo i pisanim putem potvrđeno, uz blagovremeno dostavljene podatke o robi i vrednosti.',
                    'Odgovornost prevoznika po zakonu ili konvenciji nije isto što i kargo osiguranje i može biti ograničena.',
                ],
            },
            {
                title: '10. Kašnjenja i okolnosti van kontrole',
                paragraphs: [
                    'Rok Šped Plus ne odgovara za kašnjenje ili nemogućnost izvršenja izazvanu postupanjem organa, kontrolom, zastojem granice ili terminala, vremenskim uslovima, štrajkom, zatvaranjem rute, kvarom sistema, višom silom ili drugim okolnostima koje nije mogao razumno sprečiti, osim kada obavezni propis određuje drugačije.',
                    'Kompanija će u razumnom roku obavestiti nalogodavca o bitnim poznatim preprekama i postupati prema dostupnim instrukcijama.',
                ],
            },
            {
                title: '11. Reklamacije i potraživanja',
                paragraphs: [
                    `Reklamacije se podnose bez nepotrebnog odlaganja na ${company.email}, uz broj naloga ili pošiljke, opis događaja, relevantna dokumenta i dokaz o šteti ili trošku.`,
                    'Rokovi, dokumentacija i način ostvarivanja potraživanja mogu zavisiti od vrste usluge, transportnog dokumenta, prevoznika i obaveznih domaćih ili međunarodnih propisa. Podnošenje web upita samo po sebi ne predstavlja uredno podnet transportni ili carinski odštetni zahtev.',
                ],
            },
            {
                title: '12. Poverljivost i podaci',
                paragraphs: [
                    'Poslovne informacije i dokumentacija koriste se radi izvršenja naloga, ispunjenja propisa i zaštite pravnih interesa. Podaci se mogu dostaviti organima i učesnicima u lancu snabdevanja kada je to potrebno.',
                    'Obrada podataka o ličnosti detaljnije je opisana u Politici privatnosti dostupnoj putem zasebnog linka u footeru.',
                ],
            },
            {
                title: '13. Sadržaj sajta i dozvoljeno korišćenje',
                paragraphs: [
                    'Tekstovi, fotografije, grafika, logo i dizajn sajta zaštićeni su pravima Rok Šped Plus-a ili odgovarajućih nosilaca prava.',
                ],
                items: [
                    'Ne ometajte rad sajta, ne pokušavajte neovlašćen pristup i ne šaljite štetan ili nezakonit sadržaj.',
                    'Ne kopirajte ili komercijalno koristite sadržaj bez prethodne pisane dozvole.',
                    'Ne oslanjajte se na opšte informacije sa sajta kao zamenu za pisanu stručnu procenu konkretnog carinskog ili transportnog slučaja.',
                ],
            },
            {
                title: '14. Merodavno pravo i izmene',
                paragraphs: [
                    'Na ove Uslove primenjuje se pravo Republike Srbije, uz primenu obaveznih međunarodnih konvencija i propisa kada su relevantni za konkretan prevoz ili postupak.',
                    'Sporovi će se prvo pokušati rešiti dogovorom, a zatim pred stvarno i mesno nadležnim sudom, osim ako poseban pisani dogovor ili obavezni propis određuje drugačije.',
                    'Uslovi mogu biti izmenjeni radi usklađivanja sa promenama sajta, usluga ili propisa. Važeća verzija primenjuje se od datuma navedenog na vrhu dokumenta.',
                ],
            },
        ],
    },
}

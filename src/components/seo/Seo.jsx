import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://www.roksped.rs').replace(/\/$/, '')
const defaultImage = `${siteUrl}/assets/shared/logo-rok-sped.png`
const ogImages = {
  '/': `${siteUrl}/og-image-pocetna.jpg`,
  '/o-nama': `${siteUrl}/og-image-onama.jpg`,
  '/usluge': `${siteUrl}/og-image-usluge.jpg`,
  '/kontakt': `${siteUrl}/og-image-kontakt.jpg`,
}

const pageSeo = {
  '/': {
    title: 'Rok Šped Plus | Špedicija, logistika i transport',
    description: 'Pouzdana špedicija, carinsko posredovanje, logistika, skladištenje i transport za siguran protok robe u Srbiji i inostranstvu.',
    imageAlt: 'Rok Šped Plus - špedicija, logistika i transport',
  },
  '/o-nama': {
    title: 'O nama | Rok Šped Plus',
    description: 'Upoznajte Rok Šped Plus, naš tim i iskustvo u špediciji, transportu, logistici i carinskom posredovanju.',
    imageAlt: 'O nama - tim Rok Šped Plus',
  },
  '/usluge': {
    title: 'Usluge | Rok Šped Plus',
    description: 'Carinsko posredovanje, transport, logistika i skladištenje organizovani uz stručnu podršku i jasnu komunikaciju.',
    imageAlt: 'Usluge Rok Šped Plus',
  },
  '/kontakt': {
    title: 'Kontakt | Rok Šped Plus',
    description: 'Kontaktirajte Rok Šped Plus za ponudu i podršku u vezi sa špedicijom, transportom, logistikom i carinskim procedurama.',
    imageAlt: 'Kontakt Rok Šped Plus',
  },
  '/politika-privatnosti': {
    title: 'Politika privatnosti | Rok Šped Plus',
    description: 'Politika privatnosti sajta Rok Šped Plus.',
  },
  '/uslovi-koriscenja': {
    title: 'Uslovi korišćenja | Rok Šped Plus',
    description: 'Uslovi korišćenja sajta Rok Šped Plus.',
  },
}

function setMeta(name, content, attribute = 'name') {
  const selector = name.startsWith('og:') ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.append(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.append(element)
  }
  element.setAttribute('href', href)
}

function setStructuredData(data) {
  const id = 'roksped-structured-data'
  let element = document.head.querySelector(`#${id}`)
  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.append(element)
  }
  element.textContent = JSON.stringify(data)
}

function getBreadcrumbItems(pathname) {
  const labels = {
    '/o-nama': 'O nama',
    '/usluge': 'Usluge',
    '/kontakt': 'Kontakt',
    '/politika-privatnosti': 'Politika privatnosti',
    '/uslovi-koriscenja': 'Uslovi korišćenja',
  }

  if (!labels[pathname]) return []

  return [
    {name: 'Početna', url: `${siteUrl}/`},
    {name: labels[pathname], url: `${siteUrl}${pathname}`},
  ]
}

function Seo() {
  const {pathname} = useLocation()

  useEffect(() => {
    const page = pageSeo[pathname] || {
      title: 'Stranica nije pronađena | Rok Šped Plus',
      description: 'Stranica koju tražite nije pronađena.',
    }
    const image = ogImages[pathname] || defaultImage
    const canonical = `${siteUrl}${pathname === '/' ? '/' : pathname}`
    const isNotFound = !pageSeo[pathname]
    document.title = page.title
    setMeta('description', page.description)
    setMeta('og:site_name', 'Rok Šped Plus')
    setMeta('og:title', page.title)
    setMeta('og:description', page.description)
    setMeta('og:type', 'website')
    setMeta('og:url', canonical)
    setMeta('og:image', image)
    setMeta('og:image:width', '1200')
    setMeta('og:image:height', '630')
    setMeta('og:image:alt', page.imageAlt || 'Rok Šped Plus')
    setMeta('og:locale', 'sr_RS')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', page.title)
    setMeta('twitter:description', page.description)
    setMeta('twitter:image', image)
    setCanonical(canonical)
    setMeta('robots', isNotFound ? 'noindex, follow' : 'index, follow')
    const graph = [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Rok Šped Plus',
        url: siteUrl,
        inLanguage: 'sr-Latn',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Rok Šped Plus D.O.O. Smederevo',
        url: siteUrl,
        logo: defaultImage,
        email: 'office@roksped.rs',
        telephone: '+381 64 13 09 794',
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#local-business`,
        name: 'Rok Šped Plus D.O.O. Smederevo',
        url: siteUrl,
        image: defaultImage,
        telephone: '+381 64 13 09 794',
        email: 'office@roksped.rs',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kolarski put 330, sprat 3',
          postalCode: '11300',
          addressLocality: 'Smederevo',
          addressCountry: 'RS',
        },
      },
    ]

    const breadcrumbs = getBreadcrumbItems(pathname)
    if (breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      })
    }

    setStructuredData({
      '@context': 'https://schema.org',
      '@graph': graph,
    })
  }, [pathname])

  return null
}

export default Seo

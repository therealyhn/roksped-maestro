import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function setMeta(name, content) {
  const selector = name.startsWith('og:') ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
    document.head.append(element)
  }
  element.setAttribute('content', content)
}

function Seo() {
  const {pathname} = useLocation()

  useEffect(() => {
    const title = 'Rok Šped'
    const description = 'Pouzdana podrška međunarodnoj trgovini, transportu, logistici i carinskom posredovanju.'
    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
    const canonical = siteUrl ? `${siteUrl}${pathname === '/' ? '/' : pathname}` : null
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title)
    setMeta('og:description', description)
    setMeta('og:type', 'website')
    if (canonical) setMeta('og:url', canonical)
  }, [pathname])

  return null
}

export default Seo

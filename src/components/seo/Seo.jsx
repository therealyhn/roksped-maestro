import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import useSiteSettings from '../../hooks/useSiteSettings.js'
import {imageUrl} from '../../lib/sanity/image.js'

function setMeta(name, content) {
  const selector = name.startsWith('og:') ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector(selector)

  if (!content) {
    element?.remove()
    return
  }

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
    document.head.append(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!url) {
    element?.remove()
    return
  }

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.append(element)
  }

  element.setAttribute('href', url)
}

function getCanonicalUrl(pathname) {
  const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  return siteUrl ? `${siteUrl}${pathname === '/' ? '/' : pathname}` : null
}

function Seo() {
  const {data} = useSiteSettings()
  const {pathname} = useLocation()

  useEffect(() => {
    const seo = data?.defaultSeo
    const siteName = seo?.siteName || null
    const title = siteName ? [siteName, seo.titleSuffix].filter(Boolean).join(' | ') : null
    const description = seo?.description || null
    const canonicalUrl = getCanonicalUrl(pathname)
    const socialImage = imageUrl(seo?.socialImage)?.width(1200).height(630).fit('crop').url() || null

    if (title) {
      document.title = title
    }

    setCanonical(canonicalUrl)
    setMeta('description', description)
    setMeta('og:title', title)
    setMeta('og:description', description)
    setMeta('og:type', 'website')
    setMeta('og:url', canonicalUrl)
    setMeta('og:image', socialImage)
    setMeta('og:site_name', siteName)
    setMeta('twitter:card', socialImage ? 'summary_large_image' : 'summary')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', socialImage)
  }, [data, pathname])

  return null
}

export default Seo

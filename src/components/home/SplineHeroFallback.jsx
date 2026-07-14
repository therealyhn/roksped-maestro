import {imageUrl} from '../../lib/sanity/image.js'

function SplineHeroFallback({image}) {
  const source = imageUrl(image)
  if (!source) return <div className="absolute inset-0 bg-brand-ink" aria-hidden="true" />
  return <div className="absolute inset-0" aria-hidden={image.decorative}><img alt={image.alt || ''} className="h-full w-full object-cover" decoding="async" fetchPriority="high" sizes="100vw" src={source.width(1600).url()} srcSet={`${source.width(640).url()} 640w, ${source.width(1024).url()} 1024w, ${source.width(1440).url()} 1440w, ${source.width(1920).url()} 1920w`} /><div className="absolute inset-0 bg-brand-hero-scrim" /></div>
}
export default SplineHeroFallback

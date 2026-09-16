import {useState} from 'react'

const heroPoster = '/assets/home/hero-spline-poster.webp'
const heroVideo = '/assets/home/hero.mp4'

function shouldSkipVideo() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }

  const connection = navigator.connection ?? navigator.mozConnection ?? navigator.webkitConnection
  const slowNetwork = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g'

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || connection?.saveData === true || slowNetwork
}

function SplineHeroFallback() {
  const [loadVideo] = useState(() => !shouldSkipVideo())

  return <div className="absolute inset-0" aria-hidden="true"><video autoPlay={loadVideo} className="h-full w-full object-cover" loop muted playsInline poster={heroPoster} preload={loadVideo ? 'metadata' : 'none'}><source src={loadVideo ? heroVideo : undefined} type="video/mp4" /></video></div>
}

export default SplineHeroFallback

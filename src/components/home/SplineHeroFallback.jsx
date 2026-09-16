const heroPoster = '/assets/home/hero-spline-poster.png'
const heroVideo = '/assets/home/hero.mp4'

function SplineHeroFallback() {
  return <div className="absolute inset-0" aria-hidden="true"><video autoPlay className="h-full w-full object-cover" loop muted playsInline poster={heroPoster} preload="auto"><source src={heroVideo} type="video/mp4" /></video></div>
}

export default SplineHeroFallback

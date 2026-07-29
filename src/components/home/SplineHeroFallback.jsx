const heroPoster = '/assets/home/hero-spline-poster.png'

function SplineHeroFallback() {
  return <div className="absolute inset-0" aria-hidden="true"><img alt="" className="h-full w-full object-cover" decoding="async" fetchPriority="high" src={heroPoster} /></div>
}

export default SplineHeroFallback

const figmaHeroPlaceholder = 'https://www.figma.com/api/mcp/asset/f5dfcc5c-c93b-4469-a54a-ddabe19e7a3c'

function SplineHeroFallback() {
  return <div className="absolute inset-0" aria-hidden="true"><img alt="" className="h-full w-full object-cover" decoding="async" fetchPriority="high" src={figmaHeroPlaceholder} /><div className="absolute inset-0 bg-brand-hero-scrim" /></div>
}

export default SplineHeroFallback

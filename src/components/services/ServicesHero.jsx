import ServiceHotspot from './ServiceHotspot.jsx'

function ServicesHero({hero}) {
  return (
    <section aria-label="Usluge Rok Špeda" className="relative mx-auto h-[900px] w-full max-w-[1440px] overflow-hidden bg-white">
      <img alt={hero.imageAlt} className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2 object-cover lg:-left-[15px] lg:h-[972px] lg:w-[1457px] lg:translate-x-0" decoding="async" fetchPriority="high" height="1281" src={hero.image} width="1920" />
      {hero.hotspots.map(({key, ...hotspot}) => <ServiceHotspot key={key} {...hotspot} />)}
    </section>
  )
}

export default ServicesHero

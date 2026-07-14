import ServiceHotspot from './ServiceHotspot.jsx'

function ServicesHero({hero}) {
  return (
    <section aria-label="Usluge Rok Špeda" className="relative mx-auto h-[900px] w-full max-w-[1440px] overflow-hidden bg-white">
      <img alt={hero.imageAlt} className="absolute -left-[15px] top-0 h-[972px] w-[1457px] max-w-none object-cover" src={hero.image} />
      {hero.hotspots.map(({key, ...hotspot}) => <ServiceHotspot key={key} {...hotspot} />)}
    </section>
  )
}

export default ServicesHero

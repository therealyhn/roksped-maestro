import ServiceSummaryCard from './ServiceSummaryCard.jsx'

function HomeServicesSection({section}) {
  return <section className="min-h-[636px] bg-brand-canvas px-gutter-fluid py-[90px]" id="usluge" aria-labelledby="home-services-heading"><div className="mx-auto max-w-content"><h2 id="home-services-heading" className="max-w-[761px] text-[clamp(2.5rem,3.82vw,3.4375rem)] font-medium leading-none tracking-display"><span className="block">Savremena logistička rešenja</span><span className="block">za sigurno i efikasno poslovanje.</span></h2><div className="mt-[79px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">{section.items.map((service, index) => <ServiceSummaryCard isFirst={index === 0} key={service.key} service={service} />)}</div></div></section>
}
export default HomeServicesSection

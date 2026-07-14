import AboutTag from './AboutTag.jsx'

function AboutPartnersSection({section}) {
  return (
    <section className="bg-brand-canvas px-5 py-20 lg:relative lg:h-[687px] lg:p-0" aria-labelledby="about-partners-heading">
      <AboutTag className="mx-auto flex w-fit bg-brand-canvas lg:absolute lg:left-1/2 lg:top-[40px] lg:-translate-x-1/2">{section.eyebrow}</AboutTag>

      <h2 id="about-partners-heading" className="mx-auto mt-16 max-w-[1000px] text-center text-[42px] font-normal leading-[1.1] tracking-[-0.06em] lg:absolute lg:left-1/2 lg:top-[150px] lg:mt-0 lg:w-[1000px] lg:-translate-x-1/2 lg:text-[63px]">
        {section.featured.map((line) => <span className="block" key={line}>{line}</span>)}
      </h2>

      <div className="mx-auto mt-16 grid max-w-[484px] grid-cols-2 text-center text-[14px] leading-[1.1] tracking-[-0.04em] text-source-metadata-muted sm:grid-cols-4 lg:absolute lg:left-1/2 lg:top-[438px] lg:mt-0 lg:h-[99px] lg:w-[484px] lg:-translate-x-1/2">
        {section.columns.map((column, index) => (
          <ul className={`space-y-[6px] px-1 ${index < section.columns.length - 1 ? 'border-r border-source-neutral-light' : ''}`} key={column[0]}>
            {column.map((partner) => <li key={partner}>{partner}</li>)}
          </ul>
        ))}
      </div>
    </section>
  )
}

export default AboutPartnersSection

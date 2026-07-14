import AboutTag from './AboutTag.jsx'

function AboutHero({hero}) {
  return (
    <section className="relative bg-brand-canvas px-5 pb-12 pt-32 lg:h-[701px] lg:p-0" aria-labelledby="about-heading">
      <div className="relative mx-auto h-[500px] max-w-content overflow-hidden rounded-card-lg bg-white lg:absolute lg:left-1/2 lg:top-[189px] lg:h-[462px] lg:w-[1296px] lg:-translate-x-1/2">
        <img alt="Kamion na međunarodnoj transportnoj ruti" className="absolute left-0 top-[-205px] h-[727px] w-full -scale-x-100 object-cover lg:top-[-265px]" src="/assets/about/hero-background.jpg" />
        <img alt="" aria-hidden="true" className="absolute left-[-62px] top-[-62px] h-[585px] w-[885px] max-w-none" src="/assets/about/hero-blur.svg" />

        <div className="absolute left-6 top-[72px] z-10 w-[calc(100%-3rem)] text-white lg:left-[72px] lg:top-[83px] lg:w-[487px]">
          <AboutTag light>{hero.eyebrow}</AboutTag>
          <div className="mt-[15px] lg:mt-[15px]">
            <h1 id="about-heading" className="text-[42px] font-medium leading-none tracking-[-0.05em] lg:text-[55px]">
              {hero.heading.map((line) => <span className="block" key={line}>{line}</span>)}
            </h1>
            <p className="mt-5 max-w-[458px] text-[16px] leading-6 tracking-[0.01em]">{hero.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

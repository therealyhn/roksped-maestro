import AboutTag from './AboutTag.jsx'

function AboutHero({hero}) {
  return (
    <section className="relative mx-auto w-full max-w-canvas bg-brand-canvas px-5 pb-16 pt-32 xl:h-[701px] xl:p-0" aria-labelledby="about-heading">
      <div className="relative mx-auto h-[500px] max-w-content overflow-hidden rounded-card-lg bg-white xl:absolute xl:left-1/2 xl:top-[189px] xl:h-[462px] xl:w-[1296px] xl:-translate-x-1/2">
        <img alt="Kamion na međunarodnoj transportnoj ruti" className="absolute left-0 top-[-205px] h-[727px] w-full -scale-x-100 object-cover xl:top-[-265px]" decoding="async" fetchPriority="high" height="1728" src="/assets/about/hero-background.jpg" width="2592" />
        <img alt="" aria-hidden="true" className="absolute left-[-62px] top-[-62px] h-[585px] w-[885px] max-w-none" decoding="async" src="/assets/about/hero-blur.svg" />

        <div className="absolute left-6 top-[72px] z-10 w-[calc(100%-3rem)] text-white xl:left-[72px] xl:top-[83px] xl:w-[487px]">
          <AboutTag light>{hero.eyebrow}</AboutTag>
          <div className="mt-[15px]">
            <h1 id="about-heading" className="text-[clamp(2.25rem,7.16vw,3.4375rem)] font-medium leading-none tracking-[-0.05em]">
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

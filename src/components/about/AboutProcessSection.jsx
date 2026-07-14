import AboutCta from './AboutCta.jsx'

function AboutProcessSection({section}) {
  return (
    <section className="bg-brand-canvas px-5 py-20 lg:relative lg:h-[834px] lg:p-0" aria-labelledby="about-process-heading">
      <div className="mx-auto flex max-w-[666px] flex-col items-center text-center lg:absolute lg:left-1/2 lg:top-[100px] lg:-translate-x-1/2">
        <h2 id="about-process-heading" className="text-[42px] font-medium leading-none tracking-[-0.05em] lg:text-[55px]">{section.heading}</h2>
        <p className="mt-5 max-w-[535px] text-[18px] leading-[31px] tracking-[0.01em]">{section.body}</p>
        <AboutCta className="mt-8 lg:mt-8" to="/usluge">{section.ctaLabel}</AboutCta>
      </div>

      <article className="relative mx-auto mt-20 size-[346px] max-w-full overflow-hidden rounded-full bg-brand-logistics-green text-center lg:absolute lg:left-[15px] lg:top-[438px] lg:mt-0">
        <img alt="" aria-hidden="true" className="absolute left-[156px] top-[50px] size-[34px]" src="/assets/about/process-mark.svg" />
        <h3 className="absolute left-[54px] top-[107px] w-[238px] text-[24px] font-bold leading-[1.1] tracking-[0.02em]">{section.firstStep.title}</h3>
        <p className="absolute left-[42px] top-[177px] w-[263px] text-[14px] leading-[1.3] text-source-charcoal">{section.firstStep.body}</p>
      </article>
    </section>
  )
}

export default AboutProcessSection

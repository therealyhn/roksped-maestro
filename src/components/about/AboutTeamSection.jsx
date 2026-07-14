import AboutCta from './AboutCta.jsx'

function AboutTeamSection({section}) {
  return (
    <section className="bg-brand-canvas px-5 py-20 lg:relative lg:h-[1223px] lg:p-0" aria-labelledby="about-team-heading">
      <div className="mx-auto grid max-w-content gap-12 lg:block">
        <img alt="Rok Šped tim u kancelariji" className="h-auto w-full rounded-card-lg object-cover lg:absolute lg:left-[72px] lg:top-[55px] lg:h-[435px] lg:w-[645px]" src="/assets/about/team-intro.jpg" />

        <div className="lg:absolute lg:left-[825px] lg:top-[67px] lg:w-[543px]">
          <h2 id="about-team-heading" className="text-[42px] font-medium leading-none tracking-[-0.05em] lg:text-[55px]">
            {section.heading.map((line) => <span className="block" key={line}>{line}</span>)}
          </h2>
          <p className="mt-[35px] text-[18px] leading-[31px] tracking-[0.01em]">{section.body}</p>
          <AboutCta className="mt-[35px]" to="/kontakt">{section.ctaLabel}</AboutCta>
        </div>

        <p className="mx-auto max-w-[343px] text-center text-[14px] leading-[1.4] tracking-[0.01em] lg:absolute lg:left-[549px] lg:top-[600px] lg:m-0 lg:h-[72px] lg:w-[343px]">{section.intro}</p>

        <div className="mt-16 overflow-hidden lg:absolute lg:left-0 lg:top-[672px] lg:mt-0 lg:h-[513px] lg:w-full">
          <img alt="" aria-hidden="true" className="h-auto w-full min-w-[900px] lg:h-[513px] lg:min-w-0 lg:object-cover" src="/assets/about/team-strip.png" />
          <span className="sr-only">Iza svakog procesa stoje ljudi. Iza svakog kilometra stoji znanje stečeno u praksi.</span>
        </div>
      </div>
    </section>
  )
}

export default AboutTeamSection

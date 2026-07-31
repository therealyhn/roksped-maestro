import AboutCta from './AboutCta.jsx'
import AboutTeamGallery from './AboutTeamGallery.jsx'

function AboutTeamSection({section}) {
  return (
    <section className="mx-auto min-h-[100svh] w-full max-w-canvas bg-brand-canvas px-5 py-20 xl:relative xl:h-[1223px] xl:min-h-0 xl:p-0" aria-labelledby="about-team-heading">
      <div className="mx-auto grid max-w-content gap-12 xl:block">
        <img alt="Rok Šped tim u kancelariji" className="aspect-[4/3] h-auto w-full rounded-card-lg object-cover sm:aspect-[3/2] xl:absolute xl:left-[72px] xl:top-[55px] xl:h-[435px] xl:w-[645px]" decoding="async" height="860" loading="lazy" src="/assets/about/team-intro.jpg" width="1290" />

        <div className="xl:absolute xl:left-[825px] xl:top-[67px] xl:w-[543px]">
          <h2 id="about-team-heading" className="text-[clamp(2.5rem,7.16vw,3.4375rem)] font-medium leading-none tracking-[-0.05em]">
            {section.heading.map((line) => <span className="block" key={line}>{line}</span>)}
          </h2>
          <p className="mt-[35px] text-[18px] leading-[31px] tracking-[0.01em]">{section.body}</p>
          <AboutCta className="mt-[35px]" to="/kontakt">{section.ctaLabel}</AboutCta>
        </div>

        <p className="mx-auto max-w-[343px] text-center text-[14px] leading-[1.4] tracking-[0.01em] xl:absolute xl:left-[549px] xl:top-[600px] xl:m-0 xl:h-[72px] xl:w-[343px]">{section.intro}</p>

        <div className="mt-16 xl:absolute xl:left-0 xl:top-[672px] xl:mt-0 xl:h-[513px] xl:w-full">
          <AboutTeamGallery members={section.members} />
        </div>
      </div>
    </section>
  )
}

export default AboutTeamSection

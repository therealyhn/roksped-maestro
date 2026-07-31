import AboutCta from './AboutCta.jsx'
import AboutTeamGallery from './AboutTeamGallery.jsx'

function AboutTeamSection({section}) {
  return (
    <section className="mx-auto box-border w-full max-w-canvas overflow-x-clip bg-brand-canvas px-gutter-fluid pt-20 xl:relative xl:h-[1223px] xl:p-0" aria-labelledby="about-team-heading">
      <div className="mx-auto w-full min-w-0 max-w-content xl:block">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center xl:block">
          <img
            alt="Rok Šped tim u kancelariji"
            className="aspect-[16/10] h-auto max-h-[380px] w-full max-w-full rounded-card-lg object-cover xl:absolute xl:left-[72px] xl:top-[55px] xl:h-[435px] xl:max-h-none xl:w-[645px]"
            decoding="async"
            height="860"
            loading="lazy"
            src="/assets/about/team-intro.jpg"
            width="1290"
          />

          <div className="w-full min-w-0 xl:absolute xl:left-[825px] xl:top-[67px] xl:w-[543px]">
            <h2 id="about-team-heading" className="text-[clamp(2.5rem,5.4vw,3.4375rem)] font-medium leading-[0.98] tracking-[-0.05em]">
              {section.heading.map((line) => <span className="block" key={line}>{line}</span>)}
            </h2>
            <p className="mt-7 w-full max-w-[600px] text-[17px] leading-[1.65] tracking-[0.01em] xl:mt-[35px] xl:text-[18px] xl:leading-[31px]">{section.body}</p>
            <AboutCta className="mt-7 xl:mt-[35px]" to="/kontakt">{section.ctaLabel}</AboutCta>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-[520px] text-center text-[15px] leading-[1.55] tracking-[0.01em] xl:absolute xl:left-[549px] xl:top-[600px] xl:m-0 xl:h-[72px] xl:w-[343px] xl:text-[14px] xl:leading-[1.4]">{section.intro}</p>

        <div className="mt-14 xl:absolute xl:left-0 xl:top-[672px] xl:mt-0 xl:h-[513px] xl:w-full">
          <AboutTeamGallery members={section.members} />
        </div>
      </div>
    </section>
  )
}

export default AboutTeamSection

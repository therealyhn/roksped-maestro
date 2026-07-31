import ContactForm from './ContactForm.jsx'

function ContactTopSection({intro, form}) {
  return (
    <section aria-labelledby="contact-heading" className="relative mx-auto min-h-[100svh] w-full bg-brand-canvas px-5 pb-20 pt-32 xl:h-[846px] xl:min-h-0 xl:max-w-[1440px] xl:overflow-hidden xl:p-0">
      <div className="xl:absolute xl:left-0 xl:top-[113px] xl:h-[733px] xl:w-[720px] xl:border-r xl:border-brand-structure">
        <h1 className="max-w-[316px] text-[clamp(2.625rem,7.16vw,3.4375rem)] font-medium leading-none tracking-[-0.05em] xl:absolute xl:left-[72px] xl:top-[43px] xl:w-[316px]" id="contact-heading">{intro.heading}</h1>
        <div className="mt-14 w-full max-w-[354px] text-[17px] tracking-[-0.01em] xl:absolute xl:left-[72px] xl:top-[476px] xl:mt-0 xl:h-[123px] xl:w-[354px] xl:text-[21px]">
          <h2 className="text-[21px] font-semibold leading-[1.15]">{intro.workingHoursHeading}</h2>
          <dl className="mt-[12px] grid grid-cols-[minmax(0,1fr)_125px] gap-x-4 leading-[1.4] xl:grid-cols-[172px_125px] xl:gap-x-[57px]">
            {intro.workingHours.map(([day, hours]) => (
              <div className="contents" key={day}><dt>{day}</dt><dd className="text-right">{hours}</dd></div>
            ))}
          </dl>
        </div>
      </div>
      <ContactForm content={form} />
    </section>
  )
}

export default ContactTopSection

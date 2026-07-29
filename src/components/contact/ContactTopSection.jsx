import ContactForm from './ContactForm.jsx'

function ContactTopSection({intro, form}) {
  return (
    <section aria-labelledby="contact-heading" className="relative mx-auto w-full bg-brand-canvas px-5 pb-20 pt-32 lg:h-[846px] lg:max-w-[1440px] lg:overflow-hidden lg:p-0">
      <div className="lg:absolute lg:left-0 lg:top-[113px] lg:h-[733px] lg:w-[720px] lg:border-r lg:border-brand-structure">
        <h1 className="max-w-[316px] text-[42px] font-medium leading-none tracking-[-0.05em] lg:absolute lg:left-[72px] lg:top-[43px] lg:w-[316px] lg:text-[55px]" id="contact-heading">{intro.heading}</h1>
        <div className="mt-16 w-full max-w-[354px] text-[18px] tracking-[-0.01em] lg:absolute lg:left-[72px] lg:top-[476px] lg:mt-0 lg:h-[123px] lg:w-[354px] lg:text-[21px]">
          <h2 className="text-[21px] font-semibold leading-[1.15]">{intro.workingHoursHeading}</h2>
          <dl className="mt-[12px] grid grid-cols-[minmax(0,1fr)_125px] gap-x-4 leading-[1.4] lg:grid-cols-[172px_125px] lg:gap-x-[57px]">
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

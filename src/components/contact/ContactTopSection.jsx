import ContactForm from './ContactForm.jsx'

function ContactTopSection({intro, form}) {
  return (
    <section aria-labelledby="contact-heading" className="relative mx-auto h-[846px] w-full max-w-[1440px] overflow-hidden">
      <div className="absolute left-0 top-[113px] h-[733px] w-[720px] border-r border-brand-structure">
        <h1 className="absolute left-[72px] top-[43px] w-[316px] text-[55px] font-medium leading-none tracking-[-0.05em]" id="contact-heading">{intro.heading}</h1>
        <div className="absolute left-[72px] top-[476px] h-[123px] w-[354px] text-[21px] tracking-[-0.01em]">
          <h2 className="text-[21px] font-semibold leading-[1.15]">{intro.workingHoursHeading}</h2>
          <dl className="mt-[12px] grid grid-cols-[172px_125px] gap-x-[57px] leading-[1.4]">
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

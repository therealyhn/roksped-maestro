import LocationsDisplay from '../locations/LocationsDisplay.jsx'

function ContactLocationsSection({section}) {
  return (
    <section aria-labelledby="contact-locations-heading" className="mx-auto w-full bg-brand-canvas px-5 py-20 lg:relative lg:h-[998px] lg:max-w-[1440px] lg:overflow-hidden lg:p-0">
      <div className="mx-auto w-full max-w-[526px] text-center lg:absolute lg:left-1/2 lg:top-[100px] lg:-translate-x-1/2">
        <h2 className="text-[42px] font-medium leading-none tracking-[-0.05em] lg:whitespace-nowrap lg:text-[55px]" id="contact-locations-heading">{section.heading}</h2>
        <p className="mx-auto mt-[40px] w-full max-w-[508px] text-[15px] leading-[1.4] tracking-[0.01em] text-brand-body-muted">{section.body}</p>
      </div>
      <LocationsDisplay className="mt-10 px-0 lg:absolute lg:inset-x-0 lg:top-[282px] lg:mt-0 lg:px-gutter-fluid" section={section} />
    </section>
  )
}

export default ContactLocationsSection

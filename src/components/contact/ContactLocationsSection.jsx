import LocationsDisplay from '../locations/LocationsDisplay.jsx'

function ContactLocationsSection({section}) {
  return (
    <section aria-labelledby="contact-locations-heading" className="mx-auto min-h-[100svh] w-full bg-brand-canvas px-5 py-20 xl:relative xl:h-[998px] xl:min-h-0 xl:max-w-[1440px] xl:overflow-hidden xl:p-0">
      <div className="mx-auto w-full max-w-[526px] text-center xl:absolute xl:left-1/2 xl:top-[100px] xl:-translate-x-1/2">
        <h2 className="text-[clamp(2.5rem,7.16vw,3.4375rem)] font-medium leading-none tracking-[-0.05em] xl:whitespace-nowrap" id="contact-locations-heading">{section.heading}</h2>
        <p className="mx-auto mt-[40px] w-full max-w-[508px] text-[15px] leading-[1.4] tracking-[0.01em] text-brand-body-muted">{section.body}</p>
      </div>
      <LocationsDisplay className="mt-10 px-0 xl:absolute xl:inset-x-0 xl:top-[282px] xl:mt-0 xl:px-gutter-fluid" section={section} />
    </section>
  )
}

export default ContactLocationsSection

import LocationsDisplay from '../locations/LocationsDisplay.jsx'

function ContactLocationsSection({section}) {
  return (
    <section aria-labelledby="contact-locations-heading" className="relative mx-auto h-[999px] w-full max-w-[1440px] overflow-hidden bg-brand-canvas">
      <div className="absolute left-1/2 top-[100px] w-[526px] -translate-x-1/2 text-center">
        <h2 className="whitespace-nowrap text-[55px] font-medium leading-none tracking-[-0.05em]" id="contact-locations-heading">{section.heading}</h2>
        <p className="mx-auto mt-[40px] w-[508px] text-[15px] leading-[1.4] tracking-[0.01em] text-brand-body-muted">{section.body}</p>
      </div>
      <LocationsDisplay className="absolute inset-x-0 top-[282px]" section={section} />
    </section>
  )
}

export default ContactLocationsSection

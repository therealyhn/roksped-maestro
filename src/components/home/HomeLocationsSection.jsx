import LocationsDisplay from '../locations/LocationsDisplay.jsx'

function HomeLocationsSection({section}) {
  return (
    <section aria-labelledby="home-locations-heading" className="min-h-[1049px] bg-brand-canvas pt-[150px]" id="lokacije">
      <div className="px-gutter-fluid">
        <div className="mx-auto max-w-[526px] text-center">
          <h2 className="text-[55px] font-medium leading-none tracking-[-0.05em] lg:whitespace-nowrap" id="home-locations-heading">{section.heading}</h2>
          <p className="mx-auto mt-[40px] max-w-[508px] text-[15px] leading-[1.4] tracking-[0.01em] text-brand-body-muted">{section.body}</p>
        </div>
      </div>
      <LocationsDisplay className="mt-10" section={section} />
    </section>
  )
}

export default HomeLocationsSection

import {Link} from 'react-router-dom'
import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'
import LocationContact from './LocationContact.jsx'
import LocationOfficeContacts from './LocationOfficeContacts.jsx'

const figmaLocationIcon = '/assets/shared/location-pin.svg'

function LocationPanel({location, section}) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`

  return (
    <div
      aria-labelledby={`location-tab-${location.id}`}
      className="relative min-h-[460px] xl:min-h-[492px]"
      id={`location-panel-${location.id}`}
      role="tabpanel"
      tabIndex="0"
    >
      <div className="mt-9 flex items-start gap-[9px] xl:mt-[58px] xl:items-center">
        <span className="grid size-[27px] shrink-0 place-items-center rounded-detail bg-brand-ink">
          <img alt="" aria-hidden="true" className="size-[25px]" src={figmaLocationIcon} />
        </span>
        <p className="text-[16px] leading-[1.4] tracking-[-0.01em] xl:text-[18px]">{location.address}</p>
      </div>

      <div className="mt-[38px] grid gap-x-[64px] gap-y-[27px] sm:grid-cols-2 xl:w-[596px] xl:grid-cols-[266px_266px]">
        {location.contacts.map((contact) => <LocationContact contact={contact} key={contact.name} />)}
        <LocationOfficeContacts emails={location.officeEmails} label={section.officeContactsLabel} />
      </div>

      <AnimatedWipeLink
        className="relative mt-5 h-[43px] w-fit px-[18px] text-[15px]"
        href={mapUrl}
        rel="noreferrer"
        target="_blank"
        variant="darkToYellow"
      >
        {section.mapCtaLabel}
      </AnimatedWipeLink>

      <p className="mt-10 text-[16px] leading-[1.4] tracking-[-0.01em] xl:absolute xl:left-0 xl:top-[394px] xl:mt-0 xl:text-[18px]">
        {section.prompt}
        <br />
        <Link className="font-semibold italic underline" to="/kontakt">{section.promptLink}</Link> {section.promptSuffix}
      </p>
    </div>
  )
}

export default LocationPanel

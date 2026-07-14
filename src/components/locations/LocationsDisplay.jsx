import useTabs from '../../hooks/useTabs.js'
import LocationPanel from '../home/LocationPanel.jsx'
import LocationTabs from '../home/LocationTabs.jsx'

const mapAsset = '/assets/shared/locations-map.svg'

function LocationsDisplay({section, className = ''}) {
  const tabs = useTabs(section.items)
  const activeLocation = section.items.find((location) => location.id === tabs.activeId) || section.items[0]

  return (
    <div className={`h-[617px] overflow-hidden bg-brand-canvas px-gutter-fluid ${className}`}>
      <div className="mx-auto grid max-w-content gap-[58px] lg:grid-cols-[492px_1fr]">
        <div className="relative mt-[50px] h-[517px] overflow-hidden rounded-detail bg-[#181818]">
          <img alt="" aria-hidden="true" className="absolute left-[-412px] top-[-467px] h-[1712px] w-[1289px] max-w-none" src={mapAsset} />
          {section.items.map((location) => {
            const selected = location.id === tabs.activeId
            return (
              <button
                aria-label={`Prikaži lokaciju ${location.name}`}
                className={`absolute z-10 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-signal-yellow ${selected ? 'bg-brand-signal-yellow' : 'bg-transparent'}`}
                key={location.id}
                onClick={() => tabs.select(location.id)}
                style={location.marker}
                type="button"
              />
            )
          })}
        </div>
        <div className="mt-[74px] min-w-0">
          <LocationTabs activeId={tabs.activeId} locations={section.items} onKeyDown={tabs.onKeyDown} onSelect={tabs.select} />
          <LocationPanel location={activeLocation} section={section} />
        </div>
      </div>
    </div>
  )
}

export default LocationsDisplay

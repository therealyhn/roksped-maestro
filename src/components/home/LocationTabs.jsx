function LocationTabs({activeId, locations, onKeyDown, onSelect}) {
  return <div className="flex h-[25px] gap-[30px] overflow-x-auto border-b border-brand-body-muted" role="tablist" aria-label="Lokacije">{locations.map((location) => { const selected = location.id === activeId; return <button aria-controls={`location-panel-${location.id}`} aria-selected={selected} className={`relative h-[25px] shrink-0 pb-[8px] text-[19px] leading-none tracking-[-0.05em] ${selected ? 'font-medium' : 'font-normal'}`} id={`location-tab-${location.id}`} key={location.id} onClick={() => onSelect(location.id)} onKeyDown={(event) => onKeyDown(event, location.id)} role="tab" tabIndex={selected ? 0 : -1} type="button">{location.name}<span className={`absolute inset-x-0 bottom-0 h-1 bg-brand-logistics-green ${selected ? 'block' : 'hidden'}`} /></button>})}</div>
}

export default LocationTabs

function LocationTabs({activeId, locations, onKeyDown, onSelect}) {
  return <div className="flex h-[33px] gap-6 overflow-x-auto overflow-y-hidden border-b border-brand-body-muted [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:h-[25px] lg:gap-[30px]" role="tablist" aria-label="Lokacije">{locations.map((location) => { const selected = location.id === activeId; return <button aria-controls={`location-panel-${location.id}`} aria-selected={selected} className={`relative h-[33px] shrink-0 pb-2 text-[17px] leading-none tracking-[-0.05em] lg:h-[25px] lg:text-[19px] ${selected ? 'font-medium' : 'font-normal'}`} id={`location-tab-${location.id}`} key={location.id} onClick={() => onSelect(location.id)} onKeyDown={(event) => onKeyDown(event, location.id)} role="tab" tabIndex={selected ? 0 : -1} type="button">{location.name}<span className={`absolute inset-x-0 bottom-0 h-1 bg-brand-logistics-green ${selected ? 'block' : 'hidden'}`} /></button>})}</div>
}

export default LocationTabs

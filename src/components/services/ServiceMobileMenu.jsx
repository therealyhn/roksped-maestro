function ServiceMobileMenu({onSelect, services}) {
  return (
    <div className="absolute inset-x-5 bottom-5 z-30 overflow-hidden rounded-card-lg border border-white/60 bg-white/90 shadow-navigation backdrop-blur-md lg:hidden">
      <p className="border-b border-brand-structure px-4 py-3 text-[11px] font-medium uppercase tracking-[0.08em] text-brand-body-muted">
        Izaberite uslugu
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {services.map((service, index) => (
          <button
            className={`flex min-h-14 items-center gap-2.5 px-4 text-left text-[13px] font-medium uppercase leading-[1.1] transition-colors hover:bg-brand-signal-yellow focus-visible:bg-brand-signal-yellow sm:min-h-16 sm:flex-col sm:justify-center sm:px-2 sm:text-center ${
              index % 2 === 0 ? 'border-r border-brand-structure' : ''
            } ${index < 2 ? 'border-b border-brand-structure sm:border-b-0' : ''} ${
              index > 0 ? 'sm:border-l sm:border-brand-structure' : ''
            }`}
            key={service.key}
            onClick={() => onSelect(index)}
            type="button"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-signal-yellow">
              <img alt="" aria-hidden="true" className="size-2.5" src="/assets/services/hotspot-plus.svg" />
            </span>
            <span>{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ServiceMobileMenu

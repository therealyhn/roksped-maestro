import {NavLink} from 'react-router-dom'

function DesktopNavigation({items, primaryCta}) {
  return (
    <nav aria-label="Glavna navigacija" className="hidden items-center md:flex">
      <div className="flex items-center gap-[26px]">
        {items.map(({label, path}) => (
          <NavLink
            className="text-[13px] font-normal uppercase leading-none tracking-normal text-brand-ink transition-opacity hover:opacity-60"
            key={path}
            to={path}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <NavLink
        className="ml-auto inline-flex h-[35px] items-center gap-2.5 rounded-button bg-brand-signal-yellow px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] text-brand-ink transition-transform hover:-translate-y-px"
        to="/kontakt"
      >
        <span>{primaryCta.label}</span>
        <span aria-hidden="true" className="grid size-[19px] place-items-center rounded-full bg-brand-ink text-[11px] leading-none text-white">↗</span>
      </NavLink>
    </nav>
  )
}

export default DesktopNavigation

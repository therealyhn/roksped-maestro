import {NavLink} from 'react-router-dom'
import useBodyScrollLock from '../../hooks/useBodyScrollLock.js'

function MobileNavigation({items, primaryCta, disclosure}) {
  const {isOpen, toggle, close, triggerRef} = disclosure

  useBodyScrollLock(isOpen)

  return (
    <nav aria-label="Glavna navigacija" className="md:hidden">
      <button
        aria-controls="mobile-navigation-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Zatvori navigaciju' : 'Otvori navigaciju'}
        className="grid size-11 place-items-center rounded-full bg-brand-ink text-white"
        onClick={toggle}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${isOpen ? 'translate-y-[5px] rotate-45' : ''}`} />
          <span className={`absolute left-0 top-[5px] h-px w-5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform ${isOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[1.375rem] border border-brand-structure bg-brand-canvas p-2 shadow-navigation" id="mobile-navigation-panel">
          <div className="grid gap-1">
            {items.map(({label, path}) => (
              <NavLink
                className={({isActive}) => `flex min-h-11 items-center rounded-[0.875rem] px-4 text-sm uppercase tracking-normal text-brand-ink hover:bg-brand-soft-neutral ${isActive ? 'bg-brand-soft-neutral font-medium' : ''}`}
                key={path}
                onClick={close}
                to={path}
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              className="mt-1 flex min-h-11 items-center justify-between rounded-[0.875rem] bg-brand-signal-yellow px-4 text-sm text-brand-ink"
              onClick={close}
              to={primaryCta.path}
            >
              <span>{primaryCta.label}</span>
              <span aria-hidden="true">↗</span>
            </NavLink>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default MobileNavigation

import {motion} from 'framer-motion'

const positionTransition = {
  duration: 0.82,
  ease: [0.76, 0, 0.24, 1],
}

function ServiceHotspot({
  active = false,
  initialLeft,
  initialTop,
  label,
  left,
  onActivate,
  prefersReducedMotion = false,
  top,
}) {
  const position = {left, top}
  const initialPosition = active && !prefersReducedMotion
    ? {left: initialLeft ?? left, top: initialTop ?? top}
    : false

  return (
    <motion.button
      animate={active ? position : undefined}
      aria-label={`Otvori uslugu: ${label}`}
      className={`group absolute hidden h-[26px] items-center gap-[7px] lg:flex ${active ? 'z-40' : 'z-20'}`}
      initial={initialPosition}
      onClick={onActivate}
      style={active ? undefined : position}
      transition={prefersReducedMotion ? {duration: 0} : positionTransition}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`grid size-[26px] shrink-0 place-items-center overflow-hidden rounded-full transition-colors duration-200 ${
          active ? 'bg-brand-signal-yellow' : 'bg-white group-hover:bg-brand-signal-yellow group-focus-visible:bg-brand-signal-yellow'
        }`}
      >
        <img
          alt=""
          className={`size-2.5 ${active ? 'hidden' : 'block group-hover:hidden group-focus-visible:hidden'}`}
          src="/assets/services/hotspot-plus.svg"
        />
        <img
          alt=""
          className={`h-[3px] w-2.5 ${active ? 'block' : 'hidden group-hover:block group-focus-visible:block'}`}
          src="/assets/services/hotspot-more.svg"
        />
      </span>
      <span
        className={`grid h-[26px] origin-left place-items-center whitespace-nowrap rounded-[34px] bg-brand-signal-yellow px-2.5 text-[10px] font-medium uppercase leading-none transition-[opacity,transform] duration-200 ${
          active
            ? 'translate-x-0 scale-x-100 opacity-100'
            : '-translate-x-1 scale-x-95 opacity-0 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100 group-focus-visible:opacity-100'
        }`}
      >
        {label}
      </span>
    </motion.button>
  )
}

export default ServiceHotspot

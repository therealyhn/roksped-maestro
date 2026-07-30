import {Link} from 'react-router-dom'
import FigmaArrow from './FigmaArrow.jsx'

const variants = {
  darkToYellow: {
    button: 'bg-brand-ink text-white',
    fill: 'bg-brand-signal-yellow',
    label: 'group-hover:text-brand-ink group-focus-visible:text-brand-ink',
    badge: 'bg-brand-signal-yellow group-hover:bg-brand-ink group-focus-visible:bg-brand-ink',
    arrowDirection: 'dark',
    arrow: 'group-hover:text-brand-signal-yellow group-focus-visible:text-brand-signal-yellow',
  },
  yellowToDark: {
    button: 'bg-brand-signal-yellow text-brand-ink',
    fill: 'bg-brand-ink',
    label: 'group-hover:text-white group-focus-visible:text-white',
    badge: 'bg-brand-ink group-hover:bg-brand-signal-yellow group-focus-visible:bg-brand-signal-yellow',
    arrowDirection: 'right',
    arrow: 'group-hover:text-brand-ink group-focus-visible:text-brand-ink',
  },
}

function AnimatedWipeLink({children, className = '', href, to, variant = 'yellowToDark', ...props}) {
  const styles = variants[variant]
  const Component = href ? 'a' : Link
  const navigationProps = href ? {href} : {to}

  return (
    <Component
      className={`group inline-flex items-center gap-2.5 overflow-hidden rounded-button ${styles.button} ${className}`}
      {...navigationProps}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-[380ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100 ${styles.fill}`}
      />
      <span
        className={`relative z-10 transition-colors duration-200 group-hover:delay-100 group-focus-visible:delay-100 ${styles.label}`}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`relative z-10 grid size-[19px] place-items-center rounded-full transition-colors duration-200 group-hover:delay-100 group-focus-visible:delay-100 ${styles.badge}`}
      >
        <FigmaArrow
          className={`size-[9px] transition-colors duration-200 group-hover:delay-100 group-focus-visible:delay-100 ${styles.arrow}`}
          direction={styles.arrowDirection}
        />
      </span>
    </Component>
  )
}

export default AnimatedWipeLink

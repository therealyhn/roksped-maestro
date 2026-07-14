import {Link} from 'react-router-dom'

function AboutCta({children, className = '', to}) {
  return (
    <Link className={`inline-flex h-[43px] items-center gap-2.5 rounded-button bg-brand-ink px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] text-white ${className}`.trim()} to={to}>
      <span>{children}</span>
      <span aria-hidden="true" className="grid size-[19px] place-items-center rounded-full bg-brand-signal-yellow">
        <img alt="" className="size-[9px]" src="/assets/about/cta-arrow.svg" />
      </span>
    </Link>
  )
}

export default AboutCta

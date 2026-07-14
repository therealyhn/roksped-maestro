import {Link} from 'react-router-dom'
import FigmaArrow from '../ui/FigmaArrow.jsx'

function ServicesClosingCta({section}) {
  return (
    <section aria-labelledby="services-closing-heading" className="relative mx-auto h-[496px] w-full max-w-[1440px] overflow-hidden bg-brand-canvas">
      <img alt="" aria-hidden="true" className="absolute left-[518px] top-[-204px] h-[1149px] w-[1119px] max-w-none" src={section.mark} />
      <div className="absolute left-1/2 top-[130px] flex w-[666px] -translate-x-1/2 flex-col items-center text-center">
        <h1 className="h-[60px] w-full text-[55px] font-medium leading-none tracking-[-0.05em]" id="services-closing-heading">{section.heading}</h1>
        <p className="mt-5 h-[93px] w-[535px] text-[18px] leading-[31px] tracking-[0.01em]">{section.body}</p>
        <Link className="mt-5 inline-flex h-[43px] items-center gap-2.5 rounded-button bg-brand-ink px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] text-white" to="/kontakt">
          <span>{section.label}</span>
          <span className="grid size-[19px] shrink-0 place-items-center rounded-full bg-brand-signal-yellow"><FigmaArrow className="size-[9px]" direction="dark" /></span>
        </Link>
      </div>
    </section>
  )
}

export default ServicesClosingCta

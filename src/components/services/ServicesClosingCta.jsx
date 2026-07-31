import {Link} from 'react-router-dom'
import FigmaArrow from '../ui/FigmaArrow.jsx'

function ServicesClosingCta({section}) {
  return (
    <section aria-labelledby="services-closing-heading" className="relative mx-auto h-[495px] w-full max-w-canvas overflow-hidden bg-brand-canvas">
      <img alt="" aria-hidden="true" className="absolute left-1/2 top-[-65px] h-[600px] w-[585px] max-w-none -translate-x-1/2 lg:left-[518px] lg:top-[-204px] lg:h-[1149px] lg:w-[1119px] lg:translate-x-0" decoding="async" loading="lazy" src={section.mark} />
      <div className="absolute inset-x-5 top-[105px] flex flex-col items-center text-center lg:left-1/2 lg:right-auto lg:top-[130px] lg:w-[666px] lg:-translate-x-1/2">
        <h1 className="w-full text-[40px] font-medium leading-none tracking-[-0.05em] lg:h-[60px] lg:text-[55px]" id="services-closing-heading">{section.heading}</h1>
        <p className="mt-5 w-full max-w-[535px] text-[16px] leading-[1.6] tracking-[0.01em] lg:h-[93px] lg:text-[18px] lg:leading-[31px]">{section.body}</p>
        <Link className="mt-5 inline-flex h-[43px] items-center gap-2.5 rounded-button bg-brand-ink px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] text-white" to="/kontakt">
          <span>{section.label}</span>
          <span className="grid size-[19px] shrink-0 place-items-center rounded-full bg-brand-signal-yellow"><FigmaArrow className="size-[9px]" direction="dark" /></span>
        </Link>
      </div>
    </section>
  )
}

export default ServicesClosingCta

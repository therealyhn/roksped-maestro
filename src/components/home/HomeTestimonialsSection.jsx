import FigmaArrow from '../ui/FigmaArrow.jsx'

function HomeTestimonialsSection({showcase}) {
  return (
    <section className="relative h-[760px] overflow-hidden bg-brand-logistics-green" aria-labelledby="home-testimonials-heading">
      <div aria-hidden="true" className="absolute left-0 top-[144px] whitespace-nowrap font-display text-[490px] font-medium leading-[.82] tracking-[-0.08em] text-white/10">schwing</div>

      <div className="absolute left-[72px] top-[293px] z-10 w-[350px]">
        <h2 className="text-[48px] font-medium leading-[.96] tracking-[-0.05em]" id="home-testimonials-heading">{showcase.heading}</h2>
      </div>

      <div className="absolute left-[72px] top-[420px] z-10 flex gap-[6px]">
        <button aria-label="Prethodno iskustvo klijenta" className="grid size-[43px] place-items-center rounded-detail bg-brand-ink" type="button"><FigmaArrow direction="left" /></button>
        <button aria-label="Sledeće iskustvo klijenta" className="grid size-[43px] place-items-center rounded-detail bg-brand-ink" type="button"><FigmaArrow /></button>
      </div>

      <article className="absolute left-[804px] top-[130px] size-[499px] overflow-hidden rounded-full text-center text-white">
        <img alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" decoding="async" height="998" loading="lazy" src="/assets/home/testimonial-schwing.jpg" width="665" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute left-[212px] top-[115px] grid size-[75px] place-items-center rounded-input bg-brand-signal-yellow">
          <img alt="Schwing Stetter" className="h-[19px] w-[58px] object-contain" src="/assets/home/client-schwing-stetter.png" />
        </div>
        <blockquote className="absolute left-[72px] top-[238px] w-[354px] text-[20px] leading-[1.3] tracking-[-0.01em]">{showcase.quote}</blockquote>
        <p className="absolute left-[110px] top-[350px] w-[279px] text-[13px] font-medium uppercase leading-none tracking-[0.01em]">{showcase.author}</p>
      </article>

      <div aria-hidden="true" className="absolute left-[1094px] top-[-226px] size-[346px] overflow-hidden rounded-full">
        <img alt="" className="h-full w-full object-cover" decoding="async" height="665" loading="lazy" src="/assets/home/testimonial-horeca.jpg" width="998" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div aria-hidden="true" className="absolute left-[1094px] top-[639px] size-[346px] overflow-hidden rounded-full">
        <img alt="" className="h-full w-full object-cover" decoding="async" height="665" loading="lazy" src="/assets/home/testimonial-horeca.jpg" width="998" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute left-[147px] top-[80px] grid size-[52px] place-items-center rounded-detail bg-brand-logistics-green">
          <img alt="" className="h-auto w-[43px]" src="/assets/home/client-horeca.png" />
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonialsSection

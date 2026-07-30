import {motion} from 'framer-motion'
import useCircularCarousel from '../../hooks/useCircularCarousel.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import getCircularOffset from '../../lib/motion/getCircularOffset.js'
import FigmaArrow from '../ui/FigmaArrow.jsx'
import TestimonialCircle from './TestimonialCircle.jsx'
import TestimonialWordmarkMarquee from './TestimonialWordmarkMarquee.jsx'

function HomeTestimonialsSection({showcase}) {
  const prefersReducedMotion = useReducedMotionPreference()
  const {activeIndex, showNext, showPrevious} = useCircularCarousel(showcase.items.length)
  const activeTestimonial = showcase.items[activeIndex]
  const backgroundColor = activeTestimonial.theme === 'yellow' ? '#D2FF72' : '#00A85A'

  return (
    <motion.section
      animate={{backgroundColor}}
      aria-labelledby="home-testimonials-heading"
      className="relative h-[820px] overflow-hidden lg:h-[760px]"
      id="testimonials"
      initial={false}
      transition={prefersReducedMotion ? {duration: 0} : {duration: 0.55, ease: [0.76, 0, 0.24, 1]}}
    >
      <TestimonialWordmarkMarquee
        key={activeTestimonial.id}
        prefersReducedMotion={prefersReducedMotion}
        text={activeTestimonial.wordmark}
      />

      <div className="absolute left-5 top-20 z-10 w-[290px] lg:left-[72px] lg:top-[293px] lg:w-[350px]">
        <h2 className="text-[42px] font-medium leading-[.96] tracking-[-0.05em] lg:text-[48px]" id="home-testimonials-heading">
          {showcase.heading}
        </h2>
      </div>

      <div className="absolute left-5 top-[190px] z-10 flex gap-[6px] lg:left-[72px] lg:top-[420px]">
        <button
          aria-label="Prikaži sledeće iskustvo klijenta"
          className="grid size-[43px] place-items-center rounded-detail bg-brand-ink transition-transform duration-200 hover:scale-[1.06] focus-visible:scale-[1.06]"
          onClick={showNext}
          type="button"
        >
          <FigmaArrow direction="left" tone="white" />
        </button>
        <button
          aria-label="Prikaži prethodno iskustvo klijenta"
          className="grid size-[43px] place-items-center rounded-detail bg-brand-ink transition-transform duration-200 hover:scale-[1.06] focus-visible:scale-[1.06]"
          onClick={showPrevious}
          type="button"
        >
          <FigmaArrow tone="white" />
        </button>
      </div>

      <div
        aria-label={`Iskustvo klijenta ${activeIndex + 1} od ${showcase.items.length}`}
        aria-live="polite"
        className="absolute left-1/2 top-[405px] size-[min(82vw,499px)] -translate-x-1/2 [--testimonial-orbit-x:22vw] [--testimonial-orbit-y:300px] lg:left-auto lg:right-[9.5%] lg:top-1/2 lg:size-[499px] lg:translate-x-0 lg:-translate-y-1/2 lg:[--testimonial-orbit-x:205px] lg:[--testimonial-orbit-y:430px]"
        role="region"
      >
        {showcase.items.map((item, itemIndex) => (
          <TestimonialCircle
            item={item}
            key={item.id}
            offset={getCircularOffset(itemIndex, activeIndex, showcase.items.length)}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default HomeTestimonialsSection

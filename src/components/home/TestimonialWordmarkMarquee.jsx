import {motion} from 'framer-motion'

function TestimonialWordmarkMarquee({prefersReducedMotion, text}) {
  return (
    <motion.div
      animate={{opacity: 1}}
      aria-hidden="true"
      className="absolute inset-x-0 top-[182px] overflow-hidden lg:top-[144px]"
      initial={prefersReducedMotion ? false : {opacity: 0}}
      transition={{duration: prefersReducedMotion ? 0 : 0.35}}
    >
      <div className="testimonial-wordmark-track flex w-max will-change-transform">
        {[0, 1].map((copyIndex) => (
          <span
            className="shrink-0 whitespace-nowrap pr-[8vw] font-display text-[250px] font-medium leading-[.82] tracking-[-0.08em] text-black/[0.07] lg:text-[490px]"
            key={copyIndex}
          >
            {text}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonialWordmarkMarquee

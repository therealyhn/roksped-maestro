import {motion} from 'framer-motion'
import getTestimonialCircleMotion from '../../lib/motion/getTestimonialCircleMotion.js'

const circleTransition = {
  duration: 0.72,
  ease: [0.76, 0, 0.24, 1],
}

function TestimonialCircle({item, offset, prefersReducedMotion}) {
  const isActive = offset === 0

  return (
    <motion.article
      animate={getTestimonialCircleMotion(offset)}
      aria-hidden={!isActive}
      className="absolute inset-0 overflow-hidden rounded-full text-center text-white will-change-transform"
      initial={false}
      style={{pointerEvents: isActive ? 'auto' : 'none'}}
      transition={prefersReducedMotion ? {duration: 0} : circleTransition}
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover grayscale"
        decoding="async"
        loading="lazy"
        src={item.image}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className={`absolute left-1/2 top-[23%] grid size-[15%] min-h-[52px] min-w-[52px] -translate-x-1/2 place-items-center rounded-input ${item.badgeClassName}`}>
        <img alt={item.logoAlt} className={`h-auto max-w-[78%] object-contain ${item.logoClassName}`} src={item.logo} />
      </div>

      <blockquote className="absolute left-[10%] top-[48%] w-[80%] text-[clamp(0.875rem,1.25vw,1.125rem)] font-normal leading-[1.3] tracking-[-0.01em]">
        “{item.quote}”
      </blockquote>
      <p className="absolute left-[10%] top-[75%] w-[80%] text-[clamp(0.625rem,0.85vw,0.75rem)] font-medium uppercase leading-none tracking-[0.01em] text-white/70">
        {item.author}
      </p>
    </motion.article>
  )
}

export default TestimonialCircle

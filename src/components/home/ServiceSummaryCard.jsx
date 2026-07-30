import {motion, useTransform} from 'framer-motion'
import {serviceIcons} from '../../data/serviceIcons.js'

function getRevealKeyframes(index, cardCount) {
  const start = index / cardCount
  const end = (index + 1) / cardCount
  const input = [0]
  const opacity = [0]
  const y = [64]

  if (start > 0) {
    input.push(start)
    opacity.push(0)
    y.push(64)
  }

  input.push(end)
  opacity.push(1)
  y.push(0)

  if (end < 1) {
    input.push(1)
    opacity.push(1)
    y.push(0)
  }

  return {input, opacity, y}
}

function ServiceSummaryCard({
  cardCount,
  index,
  isFirst,
  prefersReducedMotion,
  scrollProgress,
  service,
}) {
  const keyframes = getRevealKeyframes(index, cardCount)
  const opacity = useTransform(scrollProgress, keyframes.input, keyframes.opacity, {clamp: true})
  const y = useTransform(scrollProgress, keyframes.input, keyframes.y, {clamp: true})

  return <motion.article className={`min-h-[267px] border-r border-brand-structure px-5 ${isFirst ? 'border-l' : ''}`} style={prefersReducedMotion ? undefined : {opacity, y}}><img alt="" aria-hidden="true" className="h-[84px] w-[84px] object-contain" src={serviceIcons[service.key]} /><div className="mt-10 flex flex-col gap-[18px]"><h3 className="text-[20px] font-medium leading-none tracking-[-0.03em]">{service.title}</h3><p className="max-w-[284px] text-[14px] leading-[1.5] tracking-[0.01em] text-brand-body-muted">{service.summary}</p></div></motion.article>
}
export default ServiceSummaryCard

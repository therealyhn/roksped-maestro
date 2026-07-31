import {motion, useTransform} from 'framer-motion'

function getRevealKeyframes(index, stepCount) {
  const start = index / stepCount
  const end = (index + 1) / stepCount
  const input = [0]
  const opacity = [0]
  const x = [240]

  if (start > 0) {
    input.push(start)
    opacity.push(0)
    x.push(240)
  }

  input.push(end)
  opacity.push(1)
  x.push(0)

  if (end < 1) {
    input.push(1)
    opacity.push(1)
    x.push(0)
  }

  return {input, opacity, x}
}

function ProcessMark({activeDots}) {
  return (
    <span aria-hidden="true" className="grid size-[34px] grid-cols-2 gap-0.5">
      {Array.from({length: 4}, (_, index) => (
        <span
          className={`rounded-full ${index < activeDots ? 'bg-black' : 'bg-[#009b53]'}`}
          key={index}
        />
      ))}
    </span>
  )
}

function AboutProcessStep({
  index,
  isStatic,
  scrollProgress,
  step,
  stepCount,
}) {
  const keyframes = getRevealKeyframes(index, stepCount)
  const opacity = useTransform(scrollProgress, keyframes.input, keyframes.opacity, {clamp: true})
  const x = useTransform(scrollProgress, keyframes.input, keyframes.x, {clamp: true})

  return (
    <motion.article
      className="relative aspect-square w-full min-w-[78vw] max-w-[300px] snap-center overflow-hidden rounded-full bg-brand-logistics-green text-center sm:min-w-[280px] sm:max-w-[280px] lg:min-w-0 lg:max-w-none"
      style={isStatic ? undefined : {opacity, x}}
    >
      <div className="absolute inset-x-[12%] top-[14.5%] flex justify-center">
        <ProcessMark activeDots={index + 1} />
      </div>
      <h3 className="absolute inset-x-[13%] top-[31%] text-[clamp(1rem,1.65vw,1.5rem)] font-bold leading-[1.1] tracking-[0.02em]">
        {step.title}
      </h3>
      <p className="absolute inset-x-[12%] top-[51%] text-[clamp(0.625rem,0.98vw,0.875rem)] leading-[1.3] text-source-charcoal">
        {step.body}
      </p>
    </motion.article>
  )
}

export default AboutProcessStep

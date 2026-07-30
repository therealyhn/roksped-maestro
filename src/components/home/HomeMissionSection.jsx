import {motion, useMotionValue, useScroll} from 'framer-motion'
import {useEffect} from 'react'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import MissionMediaGrid from './MissionMediaGrid.jsx'

const revealDelay = 80
const revealDistance = 240
const hiddenOffset = 48

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum)
}

function HomeMissionSection({mission, revealOrigin}) {
  const prefersReducedMotion = useReducedMotionPreference()
  const {scrollY} = useScroll()
  const opacity = useMotionValue(prefersReducedMotion ? 1 : 0)
  const y = useMotionValue(prefersReducedMotion ? 0 : hiddenOffset)

  useEffect(() => {
    const updateReveal = (currentScrollY) => {
      if (prefersReducedMotion) {
        opacity.set(1)
        y.set(0)
        return
      }

      if (revealOrigin === null) {
        opacity.set(0)
        y.set(hiddenOffset)
        return
      }

      const progress = clamp(
        (currentScrollY - revealOrigin - revealDelay) / revealDistance,
        0,
        1,
      )

      opacity.set(progress)
      y.set(hiddenOffset * (1 - progress))
    }

    updateReveal(scrollY.get())
    return scrollY.on('change', updateReveal)
  }, [opacity, prefersReducedMotion, revealOrigin, scrollY, y])

  return (
    <section
      aria-labelledby="home-mission-heading"
      className="min-h-[1034px] bg-brand-canvas px-gutter-fluid pb-[150px] pt-[87px]"
      id="misija"
    >
      <motion.div
        className="mx-auto max-w-content"
        style={prefersReducedMotion ? undefined : {opacity, y}}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2
            className="text-[55px] font-medium leading-none tracking-[-0.05em]"
            id="home-mission-heading"
          >
            {mission.heading}
          </h2>
          <p className="max-w-[377px] text-[15px] leading-[1.4] tracking-[-0.01em] md:-mt-1 md:text-right">
            {mission.body}
          </p>
        </div>
        <MissionMediaGrid mission={mission} />
      </motion.div>
    </section>
  )
}

export default HomeMissionSection

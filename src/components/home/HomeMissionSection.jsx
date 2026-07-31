import {motion, useMotionValue, useScroll, useSpring} from 'framer-motion'
import {useEffect} from 'react'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import MissionMediaGrid from './MissionMediaGrid.jsx'

const revealDelay = 80
const revealDistance = 240
const hiddenOffset = 48
const revealSpring = {
  damping: 34,
  mass: 0.55,
  stiffness: 230,
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum)
}

function HomeMissionSection({mission, revealOrigin}) {
  const prefersReducedMotion = useReducedMotionPreference()
  const isDesktop = useMediaQuery('(min-width: 1280px)')
  const isStatic = prefersReducedMotion || !isDesktop
  const {scrollY} = useScroll()
  const opacityTarget = useMotionValue(isStatic ? 1 : 0)
  const yTarget = useMotionValue(isStatic ? 0 : hiddenOffset)
  const opacity = useSpring(opacityTarget, revealSpring)
  const y = useSpring(yTarget, revealSpring)

  useEffect(() => {
    const updateReveal = (currentScrollY) => {
      if (isStatic) {
        opacityTarget.set(1)
        yTarget.set(0)
        return
      }

      if (revealOrigin === null) {
        opacityTarget.set(0)
        yTarget.set(hiddenOffset)
        return
      }

      const progress = clamp(
        (currentScrollY - revealOrigin - revealDelay) / revealDistance,
        0,
        1,
      )

      opacityTarget.set(progress)
      yTarget.set(hiddenOffset * (1 - progress))
    }

    updateReveal(scrollY.get())
    return scrollY.on('change', updateReveal)
  }, [isStatic, opacityTarget, revealOrigin, scrollY, yTarget])

  return (
    <section
      aria-labelledby="home-mission-heading"
      className="mx-auto min-h-[100svh] w-full max-w-canvas bg-brand-canvas px-gutter-fluid pb-20 pt-20 lg:min-h-[1034px] lg:pb-[150px] lg:pt-[87px]"
      id="misija"
    >
      <motion.div
        className="mx-auto max-w-content"
        style={isStatic ? undefined : {opacity, y}}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2
            className="text-[clamp(2.625rem,7.16vw,3.4375rem)] font-medium leading-none tracking-[-0.05em]"
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

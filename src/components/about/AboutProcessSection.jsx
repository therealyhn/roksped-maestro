import {useRef} from 'react'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import usePinnedServiceReveal, {pinnedRevealTrackDistance} from '../../hooks/usePinnedServiceReveal.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import AboutCta from './AboutCta.jsx'
import AboutProcessStep from './AboutProcessStep.jsx'

function AboutProcessSection({section}) {
  const trackRef = useRef(null)
  const prefersReducedMotion = useReducedMotionPreference()
  const isDesktop = useMediaQuery('(min-width: 1280px)')
  const isStatic = prefersReducedMotion || !isDesktop
  const scrollProgress = usePinnedServiceReveal(trackRef, isStatic)

  return (
    <div
      className="relative w-full bg-brand-canvas"
      ref={trackRef}
      style={isStatic
        ? undefined
        : {height: `calc(max(100svh, 834px) + ${pinnedRevealTrackDistance}px)`}}
    >
      <section
        aria-labelledby="about-process-heading"
        className={`mx-auto min-h-[100svh] w-full max-w-canvas bg-brand-canvas px-5 py-20 xl:h-[100svh] xl:min-h-[834px] xl:p-0 ${isStatic ? 'xl:relative' : 'sticky top-0'}`}
      >
        <div className="mx-auto flex max-w-[666px] flex-col items-center text-center xl:absolute xl:left-1/2 xl:top-[100px] xl:-translate-x-1/2">
          <h2 id="about-process-heading" className="text-[clamp(2.5rem,7.16vw,3.4375rem)] font-medium leading-none tracking-[-0.05em]">{section.heading}</h2>
          <p className="mt-5 max-w-[535px] text-[18px] leading-[31px] tracking-[0.01em]">{section.body}</p>
          <AboutCta className="mt-8" to="/usluge">{section.ctaLabel}</AboutCta>
        </div>

        <div className="-mx-5 mt-20 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] xl:absolute xl:left-1/2 xl:top-[438px] xl:mx-0 xl:mt-0 xl:grid xl:w-[calc(100%-30px)] xl:max-w-[1410px] xl:-translate-x-1/2 xl:grid-cols-4 xl:gap-2 xl:overflow-visible xl:px-0 xl:pb-0 [&::-webkit-scrollbar]:hidden">
          {section.steps.map((step, index) => (
            <AboutProcessStep
              index={index}
              isStatic={isStatic}
              key={step.key}
              scrollProgress={scrollProgress}
              step={step}
              stepCount={section.steps.length}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutProcessSection

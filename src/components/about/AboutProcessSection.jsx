import {useRef, useState} from 'react'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import usePinnedServiceReveal, {pinnedRevealTrackDistance} from '../../hooks/usePinnedServiceReveal.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import AboutCta from './AboutCta.jsx'
import AboutProcessStep from './AboutProcessStep.jsx'

function AboutProcessSection({section}) {
  const trackRef = useRef(null)
  const stepsViewportRef = useRef(null)
  const [activeMobileStep, setActiveMobileStep] = useState(0)
  const prefersReducedMotion = useReducedMotionPreference()
  const isPinned = useMediaQuery('(min-width: 1024px)')
  const isStatic = prefersReducedMotion || !isPinned
  const scrollProgress = usePinnedServiceReveal(trackRef, isStatic)

  const handleStepsScroll = () => {
    const viewport = stepsViewportRef.current
    if (!viewport) return

    const maxScroll = viewport.scrollWidth - viewport.clientWidth
    const nextIndex = maxScroll > 0
      ? Math.round((viewport.scrollLeft / maxScroll) * (section.steps.length - 1))
      : 0

    setActiveMobileStep((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex)
  }

  const showMobileStep = (index) => {
    const viewport = stepsViewportRef.current
    if (!viewport) return

    const maxScroll = viewport.scrollWidth - viewport.clientWidth
    viewport.scrollTo({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      left: section.steps.length > 1 ? maxScroll * (index / (section.steps.length - 1)) : 0,
    })
  }

  return (
    <div
      className="relative w-full bg-brand-canvas"
      ref={trackRef}
      style={isStatic
        ? undefined
        : {height: `calc(max(100svh, 768px) + ${pinnedRevealTrackDistance}px)`}}
    >
      <section
        aria-labelledby="about-process-heading"
        className={`mx-auto w-full max-w-canvas bg-brand-canvas px-5 pb-20 pt-24 md:pt-28 lg:h-[100svh] lg:min-h-[768px] lg:p-0 xl:min-h-[834px] ${isStatic ? 'lg:relative' : 'sticky top-0'}`}
      >
        <div className="mx-auto flex max-w-[666px] flex-col items-center text-center lg:absolute lg:left-1/2 lg:top-[110px] lg:-translate-x-1/2 xl:top-[100px]">
          <h2 id="about-process-heading" className="text-[clamp(2.5rem,7.16vw,3.4375rem)] font-medium leading-none tracking-[-0.05em]">{section.heading}</h2>
          <p className="mt-5 max-w-[535px] text-[18px] leading-[31px] tracking-[0.01em]">{section.body}</p>
          <AboutCta className="mt-8" to="/usluge">{section.ctaLabel}</AboutCta>
        </div>

        <div
          className="-mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] lg:absolute lg:bottom-[48px] lg:left-1/2 lg:top-auto lg:mx-0 lg:mt-0 lg:grid lg:w-[calc(100%-30px)] lg:max-w-[994px] lg:-translate-x-1/2 lg:grid-cols-4 lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 xl:bottom-auto xl:top-[438px] xl:max-w-[1410px] [&::-webkit-scrollbar]:hidden"
          onScroll={handleStepsScroll}
          ref={stepsViewportRef}
        >
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
        <div aria-label="Koraci procesa" className="mt-5 flex items-center justify-center gap-2 lg:hidden" role="navigation">
          {section.steps.map((step, index) => (
            <button
              aria-current={activeMobileStep === index ? 'step' : undefined}
              aria-label={`Prikaži korak ${index + 1}: ${step.title}`}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
                activeMobileStep === index ? 'w-6 bg-brand-logistics-green' : 'w-1.5 bg-brand-body-muted/30'
              }`}
              key={step.key}
              onClick={() => showMobileStep(index)}
              type="button"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutProcessSection

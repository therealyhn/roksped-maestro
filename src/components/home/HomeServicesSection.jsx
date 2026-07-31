import {useRef} from 'react'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import usePinnedServiceReveal, {pinnedRevealTrackDistance} from '../../hooks/usePinnedServiceReveal.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import ServiceSummaryCard from './ServiceSummaryCard.jsx'

function HomeServicesSection({onRevealComplete, section}) {
  const trackRef = useRef(null)
  const prefersReducedMotion = useReducedMotionPreference()
  const isDesktop = useMediaQuery('(min-width: 1280px)')
  const isStatic = prefersReducedMotion || !isDesktop
  const scrollProgress = usePinnedServiceReveal(
    trackRef,
    isStatic,
    onRevealComplete,
  )

  return (
    <div
      className="relative w-full bg-brand-canvas"
      ref={trackRef}
      style={isStatic ? undefined : {height: `${636 + pinnedRevealTrackDistance}px`}}
    >
      <section
        aria-labelledby="home-services-heading"
        className={`mx-auto min-h-[100svh] w-full max-w-canvas bg-brand-canvas px-gutter-fluid py-20 xl:h-[636px] xl:min-h-0 xl:py-[90px] ${isStatic ? '' : 'sticky top-0'}`}
        id="usluge"
      >
        <div className="mx-auto max-w-content">
        <h2
          className="max-w-[761px] text-[clamp(2.5rem,3.82vw,3.4375rem)] font-medium leading-none tracking-display"
          id="home-services-heading"
        >
          <span className="block">Savremena logistička rešenja</span>
          <span className="block">za sigurno i efikasno poslovanje.</span>
        </h2>

          <div className="mt-14 grid grid-cols-1 border-l border-t border-brand-structure md:grid-cols-2 xl:mt-[79px] xl:grid-cols-4 xl:border-0">
            {section.items.map((service, index) => (
              <ServiceSummaryCard
                cardCount={section.items.length}
                index={index}
                isFirst={index === 0}
                key={service.key}
                prefersReducedMotion={isStatic}
                scrollProgress={scrollProgress}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeServicesSection

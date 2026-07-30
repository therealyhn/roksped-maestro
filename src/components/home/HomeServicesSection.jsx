import {useRef} from 'react'
import usePinnedServiceReveal from '../../hooks/usePinnedServiceReveal.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import ServiceSummaryCard from './ServiceSummaryCard.jsx'

function HomeServicesSection({onRevealComplete, section}) {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotionPreference()
  const scrollProgress = usePinnedServiceReveal(
    sectionRef,
    prefersReducedMotion,
    onRevealComplete,
  )

  return (
    <section
      aria-labelledby="home-services-heading"
      className="min-h-[636px] bg-brand-canvas px-gutter-fluid py-[90px] lg:h-[636px] lg:min-h-0"
      id="usluge"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-content">
        <h2
          className="max-w-[761px] text-[clamp(2.5rem,3.82vw,3.4375rem)] font-medium leading-none tracking-display"
          id="home-services-heading"
        >
          <span className="block">Savremena logistička rešenja</span>
          <span className="block">za sigurno i efikasno poslovanje.</span>
        </h2>

        <div className="mt-[79px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((service, index) => (
            <ServiceSummaryCard
              cardCount={section.items.length}
              index={index}
              isFirst={index === 0}
              key={service.key}
              prefersReducedMotion={prefersReducedMotion}
              scrollProgress={scrollProgress}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServicesSection

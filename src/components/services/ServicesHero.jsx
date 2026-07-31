import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import useBodyScrollLock from '../../hooks/useBodyScrollLock.js'
import useCoverScale from '../../hooks/useCoverScale.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import ServiceDetailOverlay from './ServiceDetailOverlay.jsx'
import ServiceHotspot from './ServiceHotspot.jsx'
import ServiceMobileMenu from './ServiceMobileMenu.jsx'

function ServicesHero({hero}) {
  const sectionRef = useRef(null)
  const [activeServiceIndex, setActiveServiceIndex] = useState(null)
  const prefersReducedMotion = useReducedMotionPreference()
  const canvasScale = useCoverScale(sectionRef, 1440, 900)
  const activeService = activeServiceIndex === null ? null : hero.hotspots[activeServiceIndex]
  useBodyScrollLock(activeService !== null)
  const baseBackground = hero.baseBackground
  const cameraBackground = activeService?.background ?? baseBackground
  const cameraTarget = {
    scale: cameraBackground.width / baseBackground.width,
    x: cameraBackground.left - baseBackground.left,
    y: cameraBackground.top - baseBackground.top,
  }

  useEffect(() => {
    if (!activeService) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveServiceIndex(null)
    }

    globalThis.addEventListener('keydown', closeOnEscape)
    return () => globalThis.removeEventListener('keydown', closeOnEscape)
  }, [activeService])

  const openService = (index) => {
    setActiveServiceIndex(index)
  }

  const showNextService = () => {
    setActiveServiceIndex((currentIndex) => (currentIndex + 1) % hero.hotspots.length)
  }

  return (
    <section
      aria-label="Usluge Rok Špeda"
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-white"
      ref={sectionRef}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[820ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none lg:hidden"
        style={{
          backgroundImage: `url("${hero.image}")`,
          transform: activeService ? 'scale(1.08)' : 'scale(1)',
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 hidden h-[900px] w-[1440px] lg:block"
        style={{
          transform: `translate(-50%, -50%) scale(${canvasScale})`,
          transformOrigin: 'center',
        }}
      >
        <motion.img
          alt={hero.imageAlt}
          animate={cameraTarget}
          className="absolute left-[-15px] top-0 h-[972px] w-[1457px] max-w-none object-cover"
          decoding="async"
          fetchPriority="high"
          height="1281"
          initial={false}
          src={hero.image}
          style={{
            transformOrigin: '0 0',
            willChange: activeService ? 'transform' : undefined,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.82,
            ease: [0.76, 0, 0.24, 1],
          }}
          width="1920"
        />

        {!activeService && hero.hotspots.map(({key, ...hotspot}, index) => (
          <ServiceHotspot
            key={key}
            {...hotspot}
            onActivate={() => openService(index)}
          />
        ))}

        {activeService && (
          <ServiceHotspot
            active
            initialLeft={activeService.left}
            initialTop={activeService.top}
            key="active-service-hotspot"
            label={activeService.label}
            left={activeService.activeLeft}
            onActivate={() => undefined}
            prefersReducedMotion={prefersReducedMotion}
            top={activeService.activeTop}
          />
        )}
      </div>

      {!activeService && (
        <ServiceMobileMenu onSelect={openService} services={hero.hotspots} />
      )}

      <AnimatePresence initial={false}>
        {activeService && (
          <ServiceDetailOverlay
            key="service-detail"
            onClose={() => setActiveServiceIndex(null)}
            onNext={showNextService}
            prefersReducedMotion={prefersReducedMotion}
            service={activeService}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default ServicesHero

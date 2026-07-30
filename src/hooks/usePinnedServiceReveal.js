import {useEffect, useRef} from 'react'
import {useMotionValue} from 'framer-motion'

const revealDistance = 800
const maximumDeltaPerEvent = 120

function getPixelDelta(event) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    return event.deltaY * 16
  }

  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    return event.deltaY * window.innerHeight
  }

  return event.deltaY
}

function snapSectionToTop(sectionTop) {
  const root = document.documentElement
  const previousScrollBehavior = root.style.scrollBehavior

  root.style.scrollBehavior = 'auto'
  window.scrollTo(0, window.scrollY + sectionTop)
  root.style.scrollBehavior = previousScrollBehavior
}

function usePinnedServiceReveal(sectionRef, disabled, onComplete) {
  const progress = useMotionValue(disabled ? 1 : 0)
  const progressRef = useRef(disabled ? 1 : 0)

  useEffect(() => {
    if (disabled) {
      progressRef.current = 1
      progress.set(1)
      return undefined
    }

    progressRef.current = 0
    progress.set(0)

    const handleWheel = (event) => {
      const section = sectionRef.current
      const pixelDelta = getPixelDelta(event)

      if (!section || pixelDelta <= 0 || progressRef.current >= 1) {
        return
      }

      const sectionBounds = section.getBoundingClientRect()
      const crossesSectionTop = sectionBounds.top > 0 && sectionBounds.top <= pixelDelta
      const isAtSectionTop = sectionBounds.top <= 1 && sectionBounds.top >= -120

      if (!crossesSectionTop && !isAtSectionTop) {
        return
      }

      event.preventDefault()

      if (Math.abs(sectionBounds.top) > 1) {
        snapSectionToTop(sectionBounds.top)
      }

      const availableDelta = crossesSectionTop
        ? Math.max(0, pixelDelta - sectionBounds.top)
        : pixelDelta
      const revealDelta = Math.min(availableDelta, maximumDeltaPerEvent)
      const nextProgress = Math.min(1, progressRef.current + revealDelta / revealDistance)

      progressRef.current = nextProgress
      progress.set(nextProgress)

      if (nextProgress === 1) {
        onComplete?.(window.scrollY)
      }
    }

    window.addEventListener('wheel', handleWheel, {passive: false})

    return () => window.removeEventListener('wheel', handleWheel)
  }, [disabled, onComplete, progress, sectionRef])

  return progress
}

export default usePinnedServiceReveal

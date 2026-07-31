import {useEffect, useRef} from 'react'
import {useMotionValue, useSpring} from 'framer-motion'

export const pinnedRevealDistance = 800
export const pinnedRevealSettleDistance = 120
export const pinnedRevealTrackDistance = pinnedRevealDistance + pinnedRevealSettleDistance

const springOptions = {
  damping: 35,
  mass: 0.55,
  stiffness: 250,
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum)
}

function usePinnedServiceReveal(
  trackRef,
  disabled,
  onComplete,
) {
  const rawProgress = useMotionValue(disabled ? 1 : 0)
  const smoothProgress = useSpring(rawProgress, springOptions)
  const completionNotifiedRef = useRef(false)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (disabled) {
      completionNotifiedRef.current = false
      rawProgress.set(1)
      return undefined
    }

    const windowRef = globalThis.window
    let frameId = null

    const updateProgress = () => {
      frameId = null

      const track = trackRef.current

      if (!track) return

      const trackRect = track.getBoundingClientRect()
      const traveledDistance = Math.max(-trackRect.top, 0)
      const nextProgress = clamp(
        traveledDistance / pinnedRevealDistance,
        0,
        1,
      )

      rawProgress.set(nextProgress)

      const trackComplete = traveledDistance >= pinnedRevealTrackDistance - 1

      if (trackComplete && !completionNotifiedRef.current) {
        completionNotifiedRef.current = true
        const trackDocumentTop = windowRef.scrollY + trackRect.top
        onCompleteRef.current?.(trackDocumentTop + pinnedRevealTrackDistance)
      } else if (!trackComplete) {
        completionNotifiedRef.current = false
      }
    }

    const scheduleProgressUpdate = () => {
      if (frameId === null) {
        frameId = windowRef.requestAnimationFrame(updateProgress)
      }
    }

    rawProgress.set(0)
    scheduleProgressUpdate()
    windowRef.addEventListener('scroll', scheduleProgressUpdate, {passive: true})
    windowRef.addEventListener('resize', scheduleProgressUpdate, {passive: true})

    return () => {
      windowRef.removeEventListener('scroll', scheduleProgressUpdate)
      windowRef.removeEventListener('resize', scheduleProgressUpdate)

      if (frameId !== null) {
        windowRef.cancelAnimationFrame(frameId)
      }
    }
  }, [disabled, rawProgress, trackRef])

  return smoothProgress
}

export default usePinnedServiceReveal

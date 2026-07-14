import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

export function getNormalizedScrollProgress({
  scrollHeight,
  scrollY,
  viewportHeight,
}) {
  const scrollableDistance = Math.max(scrollHeight - viewportHeight, 0)

  if (scrollableDistance === 0) {
    return 0
  }

  return Math.min(Math.max(scrollY / scrollableDistance, 0), 1)
}

export function getDocumentScrollProgress(windowRef, documentRef) {
  const documentElement = documentRef?.documentElement

  return getNormalizedScrollProgress({
    scrollHeight: documentElement?.scrollHeight ?? 0,
    scrollY: windowRef?.scrollY ?? 0,
    viewportHeight: windowRef?.innerHeight ?? 0,
  })
}

function useSplineScrollProgress({ enabled = true } = {}) {
  const progress = useMotionValue(0)

  useEffect(() => {
    if (!enabled || !globalThis.window || !globalThis.document) {
      progress.set(0)
      return undefined
    }

    const windowRef = globalThis.window
    const documentRef = globalThis.document
    const requestFrame = windowRef.requestAnimationFrame.bind(windowRef)
    const cancelFrame = windowRef.cancelAnimationFrame.bind(windowRef)
    let frameId = null

    const updateProgress = () => {
      frameId = null
      progress.set(getDocumentScrollProgress(windowRef, documentRef))
    }

    const scheduleProgressUpdate = () => {
      if (frameId === null) {
        frameId = requestFrame(updateProgress)
      }
    }

    scheduleProgressUpdate()
    windowRef.addEventListener('scroll', scheduleProgressUpdate, { passive: true })
    windowRef.addEventListener('resize', scheduleProgressUpdate, { passive: true })

    return () => {
      windowRef.removeEventListener('scroll', scheduleProgressUpdate)
      windowRef.removeEventListener('resize', scheduleProgressUpdate)

      if (frameId !== null) {
        cancelFrame(frameId)
      }
    }
  }, [enabled, progress])

  return progress
}

export default useSplineScrollProgress

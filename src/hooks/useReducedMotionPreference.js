import { useEffect, useState } from 'react'

export const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export function getReducedMotionPreference(matchMedia) {
  return typeof matchMedia === 'function' && matchMedia(reducedMotionQuery).matches
}

function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    getReducedMotionPreference(globalThis.matchMedia),
  )

  useEffect(() => {
    if (typeof globalThis.matchMedia !== 'function') {
      return undefined
    }

    const mediaQueryList = globalThis.matchMedia(reducedMotionQuery)
    const updatePreference = () => setPrefersReducedMotion(mediaQueryList.matches)

    updatePreference()
    mediaQueryList.addEventListener('change', updatePreference)

    return () => mediaQueryList.removeEventListener('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

export default useReducedMotionPreference

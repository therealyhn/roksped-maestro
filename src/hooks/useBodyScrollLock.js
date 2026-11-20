import {useEffect} from 'react'

// The page scrolls on <html> (its overflow-x: clip stops body overflow from reaching the
// viewport), so the lock goes there. No padding compensation: it showed as an empty strip.
export default function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) {
      return undefined
    }

    const root = document.documentElement
    const previousOverflow = root.style.overflow

    root.style.overflow = 'hidden'

    return () => {
      root.style.overflow = previousOverflow
    }
  }, [isLocked])
}

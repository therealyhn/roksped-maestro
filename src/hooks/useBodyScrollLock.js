import {useEffect} from 'react'

export default function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) {
      return undefined
    }

    const {body} = document
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - body.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [isLocked])
}

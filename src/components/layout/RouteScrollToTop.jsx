import {useEffect, useLayoutEffect} from 'react'
import {useLocation} from 'react-router-dom'

function RouteScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (!('scrollRestoration' in globalThis.history)) return undefined

    const previousScrollRestoration = globalThis.history.scrollRestoration
    globalThis.history.scrollRestoration = 'manual'

    return () => {
      globalThis.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.style.scrollBehavior = 'auto'
    window.scrollTo({behavior: 'auto', left: 0, top: 0})
    root.scrollTop = 0
    document.body.scrollTop = 0

    const frameId = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [location.key])

  return null
}

export default RouteScrollToTop

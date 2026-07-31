import {useEffect, useState} from 'react'

function getMatches(query) {
  return typeof globalThis.matchMedia === 'function'
    ? globalThis.matchMedia(query).matches
    : false
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => getMatches(query))

  useEffect(() => {
    if (typeof globalThis.matchMedia !== 'function') {
      return undefined
    }

    const mediaQueryList = globalThis.matchMedia(query)
    const updateMatches = () => setMatches(mediaQueryList.matches)

    updateMatches()
    mediaQueryList.addEventListener('change', updateMatches)

    return () => mediaQueryList.removeEventListener('change', updateMatches)
  }, [query])

  return matches
}

export default useMediaQuery

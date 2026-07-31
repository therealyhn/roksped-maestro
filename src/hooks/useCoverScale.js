import {useLayoutEffect, useState} from 'react'

function useCoverScale(elementRef, designWidth, designHeight) {
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const element = elementRef.current

    if (!element) return undefined

    const updateScale = () => {
      setScale(Math.max(
        element.clientWidth / designWidth,
        element.clientHeight / designHeight,
      ))
    }

    updateScale()

    const resizeObserver = new ResizeObserver(updateScale)
    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()
  }, [designHeight, designWidth, elementRef])

  return scale
}

export default useCoverScale

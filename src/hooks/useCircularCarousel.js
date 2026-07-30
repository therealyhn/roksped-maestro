import {useCallback, useState} from 'react'

function wrapIndex(index, itemCount) {
  return (index + itemCount) % itemCount
}

function useCircularCarousel(itemCount) {
  const [activeIndex, setActiveIndex] = useState(0)

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => wrapIndex(currentIndex + 1, itemCount))
  }, [itemCount])

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => wrapIndex(currentIndex - 1, itemCount))
  }, [itemCount])

  return {activeIndex, showNext, showPrevious}
}

export default useCircularCarousel

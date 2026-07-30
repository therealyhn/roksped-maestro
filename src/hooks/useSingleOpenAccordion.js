import {useCallback, useState} from 'react'

function useSingleOpenAccordion(defaultOpenIndex = 0) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  const toggleItem = useCallback((itemIndex) => {
    setOpenIndex((currentIndex) => currentIndex === itemIndex ? null : itemIndex)
  }, [])

  return {openIndex, toggleItem}
}

export default useSingleOpenAccordion

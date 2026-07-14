import {motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const visibleRef = useRef(false)
  const prefersReducedMotion = useReducedMotionPreference()

  useEffect(() => {
    function updateVisibility() {
      const nextVisible = window.scrollY > 480
      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible
        setIsVisible(nextVisible)
      }
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, {passive: true})
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth'})
  }

  return (
    <motion.button
      animate={{opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10}}
      aria-hidden={!isVisible}
      aria-label="Povratak na vrh"
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full bg-brand-signal-yellow text-lg text-brand-ink shadow-navigation disabled:pointer-events-none disabled:cursor-default"
      disabled={!isVisible}
      initial={false}
      onClick={scrollToTop}
      transition={prefersReducedMotion ? {duration: 0} : {duration: 0.18}}
      type="button"
    >
      <span aria-hidden="true">↑</span>
    </motion.button>
  )
}

export default ScrollToTopButton

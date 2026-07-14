import {useCallback, useEffect, useRef, useState} from 'react'

export default function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => {
    setIsOpen(false)
    queueMicrotask(() => triggerRef.current?.focus())
  }, [])
  const toggle = useCallback(() => setIsOpen((current) => !current), [])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [close, isOpen])

  return {isOpen, open, close, toggle, triggerRef}
}

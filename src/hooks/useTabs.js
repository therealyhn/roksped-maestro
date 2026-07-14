import {useState} from 'react'

export default function useTabs(items, initialId) {
  const ids = items.map((item) => item.id || item._id)
  const [selectedId, setSelectedId] = useState(initialId || ids[0])
  const activeId = ids.includes(selectedId) ? selectedId : ids[0]
  const onKeyDown = (event, currentId) => {
    const currentIndex = ids.indexOf(currentId)
    if (currentIndex < 0) return
    const nextIndex = event.key === 'ArrowRight' ? (currentIndex + 1) % ids.length
      : event.key === 'ArrowLeft' ? (currentIndex - 1 + ids.length) % ids.length
        : event.key === 'Home' ? 0
          : event.key === 'End' ? ids.length - 1
            : null
    if (nextIndex === null) return
    event.preventDefault()
    setSelectedId(ids[nextIndex])
    document.getElementById(`location-tab-${ids[nextIndex]}`)?.focus()
  }
  return {activeId, onKeyDown, select: setSelectedId}
}

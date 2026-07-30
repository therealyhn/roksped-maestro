function FaqToggleIcon({isOpen}) {
  if (isOpen) {
    return (
      <svg aria-hidden="true" className="size-[9px] text-brand-signal-yellow" fill="none" viewBox="0 0 9 9">
        <circle cx="1.5" cy="4.5" fill="currentColor" r=".75" />
        <circle cx="4.5" cy="4.5" fill="currentColor" r=".75" />
        <circle cx="7.5" cy="4.5" fill="currentColor" r=".75" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" className="size-[9px] text-brand-signal-yellow" fill="none" viewBox="0 0 9 9">
      <circle cx="4.5" cy="1.5" fill="currentColor" r=".75" />
      <circle cx="1.5" cy="4.5" fill="currentColor" r=".75" />
      <circle cx="4.5" cy="4.5" fill="currentColor" r=".75" />
      <circle cx="7.5" cy="4.5" fill="currentColor" r=".75" />
      <circle cx="4.5" cy="7.5" fill="currentColor" r=".75" />
    </svg>
  )
}

export default FaqToggleIcon

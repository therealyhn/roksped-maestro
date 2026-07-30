function FigmaArrow({direction = 'right', tone: requestedTone, className = 'size-[15px]'}) {
  const rotation = direction === 'left' ? 'rotate-180' : ''
  const tone = requestedTone === 'white'
    ? 'text-white'
    : requestedTone === 'dark' || direction === 'dark'
      ? 'text-brand-ink'
      : 'text-brand-signal-yellow'

  return (
    <svg
      aria-hidden="true"
      className={`${className} ${rotation} ${tone}`}
      fill="none"
      viewBox="0 0 9 9"
    >
      <circle cx="4.5" cy=".9" fill="currentColor" r=".9" />
      <circle cx="4.5" cy="8.1" fill="currentColor" r=".9" />
      <circle cx="6.3" cy="2.7" fill="currentColor" r=".9" />
      <circle cx="6.3" cy="6.3" fill="currentColor" r=".9" />
      <circle cx="8.1" cy="4.5" fill="currentColor" r=".9" />
      <circle cx="4.5" cy="4.5" fill="currentColor" r=".9" />
      <circle cx=".9" cy="4.5" fill="currentColor" r=".9" />
    </svg>
  )
}

export default FigmaArrow

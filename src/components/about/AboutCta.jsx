import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'

function AboutCta({children, className = '', to}) {
  return (
    <AnimatedWipeLink
      className={`relative h-[43px] px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] ${className}`.trim()}
      to={to}
      variant="darkToYellow"
    >
      {children}
    </AnimatedWipeLink>
  )
}

export default AboutCta

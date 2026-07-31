import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'
import SplineHeroFallback from './SplineHeroFallback.jsx'

function HomeHero({hero}) {
  return (
    <section
      aria-labelledby="home-heading"
      className="relative isolate flex h-[100svh] min-h-[620px] items-start justify-center overflow-hidden bg-brand-ink px-gutter-fluid text-white"
    >
      <SplineHeroFallback />
      <div className="relative z-10 mt-[clamp(10rem,26svh,17.5rem)] flex w-full max-w-[749px] flex-col items-center text-center">
        <h1
          className="max-w-[738px] font-display text-[clamp(2.25rem,5.35vw,4.8125rem)] font-normal leading-[.98] tracking-[-0.04em]"
          id="home-heading"
        >
          {hero.heading}
        </h1>
        <p className="mt-[clamp(1.75rem,5.1svh,2.875rem)] max-w-[613px] text-[clamp(1rem,1.39vw,1.25rem)] leading-[1.3] tracking-[0.01em]">
          {hero.body}
        </p>
        <AnimatedWipeLink
          className="relative mt-[clamp(1.75rem,5.1svh,2.875rem)] h-[43px] px-[18px] text-[15px] tracking-[-0.01em]"
          to="/kontakt"
          variant="darkToYellow"
        >
          {hero.ctaLabel}
        </AnimatedWipeLink>
      </div>
    </section>
  )
}

export default HomeHero

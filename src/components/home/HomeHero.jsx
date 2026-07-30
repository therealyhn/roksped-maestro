import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'
import SplineHeroFallback from './SplineHeroFallback.jsx'

function HomeHero({hero}) {
  return <section className="relative isolate h-[900px] overflow-hidden bg-brand-ink px-gutter-fluid text-white" aria-labelledby="home-heading"><SplineHeroFallback /><div className="absolute left-1/2 top-[234px] z-10 flex w-[calc(100%-2.5rem)] max-w-[749px] -translate-x-1/2 flex-col items-center text-center"><h1 id="home-heading" className="max-w-[738px] font-display text-[clamp(3rem,5.35vw,4.8125rem)] font-normal leading-[.98] tracking-[-0.04em]">{hero.heading}</h1><p className="mt-[46px] max-w-[613px] text-[20px] leading-[1.3] tracking-[0.01em]">{hero.body}</p><AnimatedWipeLink className="relative mt-[46px] h-[43px] px-[18px] text-[15px] tracking-[-0.01em]" to="/kontakt" variant="darkToYellow">{hero.ctaLabel}</AnimatedWipeLink></div></section>
}

export default HomeHero

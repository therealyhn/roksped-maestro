import {Link} from 'react-router-dom'
import SplineHeroFallback from './SplineHeroFallback.jsx'

const figmaHeroArrow = 'https://www.figma.com/api/mcp/asset/3428df01-1deb-454c-8b2c-565f954e21b3'

function HomeHero({hero}) {
  return <section className="relative isolate h-[900px] overflow-hidden bg-brand-ink px-gutter-fluid text-white" aria-labelledby="home-heading"><SplineHeroFallback /><div className="absolute left-1/2 top-[234px] z-10 flex w-[calc(100%-2.5rem)] max-w-[749px] -translate-x-1/2 flex-col items-center gap-[46px] text-center"><h1 id="home-heading" className="max-w-[738px] font-display text-[clamp(3rem,5.35vw,4.8125rem)] font-normal leading-none tracking-[-0.03em]">{hero.heading}</h1><p className="max-w-[613px] text-[20px] leading-[1.3] tracking-[0.01em]">{hero.body}</p><Link className="inline-flex h-[43px] items-center gap-2.5 rounded-button bg-brand-ink px-[18px] text-[15px] tracking-[-0.01em]" to="/kontakt"><span>{hero.ctaLabel}</span><span className="grid size-[19px] place-items-center rounded-full bg-brand-signal-yellow"><img alt="" aria-hidden="true" className="size-[9px]" src={figmaHeroArrow} /></span></Link></div></section>
}

export default HomeHero

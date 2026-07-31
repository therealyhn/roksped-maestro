import {NavLink} from 'react-router-dom'
import {navigationContent} from '../../data/navigationContent.js'
import useDisclosure from '../../hooks/useDisclosure.js'
import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'
import DesktopNavigation from './DesktopNavigation.jsx'
import MobileNavigation from './MobileNavigation.jsx'

function SiteHeader() {
  const disclosure = useDisclosure()
  const {items, logo, primaryCta} = navigationContent

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-gutter-fluid sm:top-6">
      <div className="pointer-events-auto relative mx-auto flex h-[52px] w-full max-w-[865px] items-center rounded-navigation bg-brand-glass px-4 shadow-navigation backdrop-blur-[4.55px] xs:px-[22px] sm:h-[59px] md:px-[35px]">
        <DesktopNavigation items={items} />

        <NavLink aria-label="Rok Šped - početna" className="flex h-[30px] w-[48px] shrink-0 items-center md:absolute md:left-1/2 md:top-1/2 md:h-[37px] md:w-[60px] md:-translate-x-1/2 md:-translate-y-1/2" to="/">
          <img alt="Rok Šped" className="h-full w-full object-contain" src={logo} />
        </NavLink>

        <AnimatedWipeLink className="absolute right-[35px] top-[12px] hidden h-[35px] px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] md:inline-flex" to={primaryCta.path}>
          {primaryCta.label}
        </AnimatedWipeLink>

        <div className="ml-auto md:hidden">
          <MobileNavigation disclosure={disclosure} items={items} primaryCta={primaryCta} />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader

import {NavLink} from 'react-router-dom'
import useSiteSettings from '../../hooks/useSiteSettings.js'
import useDisclosure from '../../hooks/useDisclosure.js'
import DesktopNavigation from './DesktopNavigation.jsx'
import MobileNavigation from './MobileNavigation.jsx'

const routePaths = ['/', '/usluge', '/o-nama', '/kontakt']

function mapNavigationItems(navigation) {
  return navigation
    .map((item, index) => ({label: item.label, path: routePaths[index]}))
    .filter((item) => item.label && item.path)
    .filter((item) => item.path !== '/kontakt')
}

function SiteHeader() {
  const {data} = useSiteSettings()
  const disclosure = useDisclosure()
  const items = mapNavigationItems(data.navigation)
  const primaryCta = data.primaryCta

  if (!primaryCta) {
    return null
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50 px-gutter-fluid">
      <div className="pointer-events-auto relative mx-auto flex h-[59px] w-full max-w-[865px] items-center rounded-navigation bg-brand-glass px-[22px] shadow-navigation backdrop-blur-[4.55px] md:px-[35px]">
        <DesktopNavigation items={items} primaryCta={primaryCta} />
        <NavLink aria-label="Rok Šped - početna" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-wordmark text-[21px] font-medium leading-none tracking-[-0.12em] text-brand-ink" to="/">
          rokšped
        </NavLink>
        <div className="ml-auto md:hidden">
          <MobileNavigation disclosure={disclosure} items={items} primaryCta={primaryCta} />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader

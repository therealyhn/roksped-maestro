import {NavLink} from 'react-router-dom'
import useDisclosure from '../../hooks/useDisclosure.js'
import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'
import DesktopNavigation from './DesktopNavigation.jsx'
import MobileNavigation from './MobileNavigation.jsx'

const logo = '/assets/shared/logo-rok-sped.png'
const items = [
  {label: 'Početna', path: '/'},
  {label: 'Usluge', path: '/usluge'},
  {label: 'O nama', path: '/o-nama'},
]
const primaryCta = {label: 'Kontaktirajte nas'}

function SiteHeader() {
  const disclosure = useDisclosure()

  return <header className="pointer-events-none fixed inset-x-0 top-6 z-50 px-gutter-fluid"><div className="pointer-events-auto relative mx-auto flex h-[59px] w-full max-w-[865px] items-center rounded-navigation bg-brand-glass px-[22px] shadow-navigation backdrop-blur-[4.55px] md:px-[35px]"><DesktopNavigation items={items} /><NavLink aria-label="Rok Šped - početna" className="absolute left-1/2 top-1/2 hidden h-[37px] w-[60px] -translate-x-1/2 -translate-y-1/2 md:block" to="/"><img alt="Rok Šped" className="h-full w-full object-contain" src={logo} /></NavLink><AnimatedWipeLink className="absolute right-[35px] top-[12px] hidden h-[35px] px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] md:inline-flex" to="/kontakt">{primaryCta.label}</AnimatedWipeLink><div className="ml-auto md:hidden"><MobileNavigation disclosure={disclosure} items={items} primaryCta={primaryCta} /></div></div></header>
}

export default SiteHeader

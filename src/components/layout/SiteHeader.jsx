import {NavLink} from 'react-router-dom'
import useDisclosure from '../../hooks/useDisclosure.js'
import DesktopNavigation from './DesktopNavigation.jsx'
import MobileNavigation from './MobileNavigation.jsx'

const figmaLogo = 'https://www.figma.com/api/mcp/asset/96fb9ef4-c4a7-47fb-ba21-9c6c4f0fdd5e'
const figmaArrowDefault = 'https://www.figma.com/api/mcp/asset/85a6a0fa-efe2-43ac-a14c-2dd9f0a4456f'
const figmaArrowHover = 'https://www.figma.com/api/mcp/asset/35fd4706-5c84-4317-857b-acbe85e1b7c9'
const items = [
  {label: 'Početna', path: '/'},
  {label: 'Usluge', path: '/usluge'},
  {label: 'O nama', path: '/o-nama'},
]
const primaryCta = {label: 'Kontaktirajte nas'}

function SiteHeader() {
  const disclosure = useDisclosure()

  return <header className="pointer-events-none fixed inset-x-0 top-6 z-50 px-gutter-fluid"><div className="pointer-events-auto relative mx-auto flex h-[59px] w-full max-w-[865px] items-center rounded-navigation bg-brand-glass px-[22px] shadow-navigation backdrop-blur-[4.55px] md:px-[35px]"><DesktopNavigation items={items} /><NavLink aria-label="Rok Šped - početna" className="absolute left-1/2 top-1/2 hidden h-[37px] w-[60px] -translate-x-1/2 -translate-y-1/2 md:block" to="/"><img alt="Rok Šped" className="h-full w-full object-contain" src={figmaLogo} /></NavLink><NavLink className="group absolute right-[35px] top-[12px] hidden h-[35px] items-center gap-2.5 overflow-hidden rounded-button bg-brand-signal-yellow px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] text-brand-ink hover:bg-brand-ink hover:text-white md:inline-flex" to="/kontakt"><span>{primaryCta.label}</span><span aria-hidden="true" className="relative grid size-[19px] place-items-center rounded-full bg-brand-ink group-hover:bg-brand-signal-yellow"><img alt="" className="size-[9px] group-hover:opacity-0" src={figmaArrowDefault} /><img alt="" className="absolute size-[9px] opacity-0 group-hover:opacity-100" src={figmaArrowHover} /></span></NavLink><div className="ml-auto md:hidden"><MobileNavigation disclosure={disclosure} items={items} primaryCta={primaryCta} /></div></div></header>
}

export default SiteHeader

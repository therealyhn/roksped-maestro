import {NavLink} from 'react-router-dom'

function DesktopNavigation({items}) {
  return <nav aria-label="Glavna navigacija" className="hidden items-center md:flex"><div className="flex items-center gap-[26px]">{items.map(({label, path}) => <NavLink className={({isActive}) => `h-[17px] border-b border-solid text-[13px] uppercase leading-none tracking-normal text-brand-ink ${isActive ? 'border-brand-ink font-medium' : 'border-transparent font-normal hover:border-brand-ink hover:font-medium'}`} key={path} to={path}>{label}</NavLink>)}</div></nav>
}
export default DesktopNavigation

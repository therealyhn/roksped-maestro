import {Outlet} from 'react-router-dom'
import Seo from '../seo/Seo.jsx'
import SiteFooter from './SiteFooter.jsx'
import SiteHeader from './SiteHeader.jsx'

function AppShell() {
  return <div className="min-h-[100dvh] w-full"><Seo /><SiteHeader /><main id="main-content"><Outlet /></main><SiteFooter /></div>
}

export default AppShell

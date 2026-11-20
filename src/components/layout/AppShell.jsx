import {Outlet} from 'react-router-dom'
import Seo from '../seo/Seo.jsx'
import RouteCredit from './RouteCredit.jsx'
import RouteScrollToTop from './RouteScrollToTop.jsx'
import SiteFooter from './SiteFooter.jsx'
import SiteHeader from './SiteHeader.jsx'

function AppShell() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col overflow-x-clip bg-brand-canvas">
      <RouteScrollToTop />
      <Seo />
      <SiteHeader />
      <main className="flex-1" id="main-content"><Outlet /></main>
      <RouteCredit />
      <SiteFooter />
    </div>
  )
}

export default AppShell

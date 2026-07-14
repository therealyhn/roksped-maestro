import { Outlet } from 'react-router-dom'
import {SiteSettingsProvider} from '../../context/SiteSettingsContext.jsx'
import useSiteSettings from '../../hooks/useSiteSettings.js'
import Seo from '../seo/Seo.jsx'
import PageLoadingState from './PageLoadingState.jsx'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'
import ScrollToTopButton from './ScrollToTopButton.jsx'

function AppShell() {
  return (
    <SiteSettingsProvider>
      <AppShellContent />
    </SiteSettingsProvider>
  )
}

function AppShellContent() {
  const {status, error, retry} = useSiteSettings()

  if (status === 'idle' || status === 'loading') {
    return <PageLoadingState />
  }

  if (status === 'error') {
    return <PageLoadingState error={error} onRetry={retry} />
  }

  return (
    <div className="min-h-[100dvh] w-full">
      <Seo />
      <SiteHeader />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollToTopButton />
    </div>
  )
}

export default AppShell

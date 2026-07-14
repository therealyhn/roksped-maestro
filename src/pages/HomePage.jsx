import HomeHero from '../components/home/HomeHero.jsx'
import CmsErrorState from '../components/ui/CmsErrorState.jsx'
import useHomePage from '../hooks/pages/useHomePage.js'

function HomePage() {
  const {data, error, retry, status} = useHomePage()
  if (status === 'loading' || status === 'idle') return <main className="min-h-[100dvh] bg-brand-ink" aria-busy="true" />
  if (status === 'error' || !data?.hero?.heading || !data.hero.body || !data.hero.ctaLabel) return <CmsErrorState onRetry={retry} error={error} />
  return <HomeHero hero={data.hero} />
}

export default HomePage

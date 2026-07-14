import {Link} from 'react-router-dom'
import Container from '../components/layout/Container.jsx'
import Section from '../components/layout/Section.jsx'
import useSiteSettings from '../hooks/useSiteSettings.js'

function NotFoundPage() {
  const {data} = useSiteSettings()
  const content = data.notFound

  if (!content) {
    return null
  }

  return (
    <Section aria-labelledby="not-found-title" className="min-h-[70dvh]" data-page="not-found">
      <Container className="flex min-h-[70dvh] items-center justify-center py-28 text-center">
        <div className="max-w-2xl">
          <p aria-hidden="true" className="font-wordmark text-[clamp(5rem,18vw,13rem)] leading-none tracking-[-0.1em] text-brand-structure">404</p>
          <h1 className="mt-2 text-display font-medium text-brand-ink" id="not-found-title">{content.title}</h1>
          {content.description ? <p className="mx-auto mt-5 max-w-xl text-body-lg text-brand-body-muted">{content.description}</p> : null}
          {content.actionLabel ? <Link className="mt-8 inline-flex rounded-button bg-brand-ink px-6 py-3 text-sm text-white transition-transform hover:-translate-y-px" to="/">{content.actionLabel}</Link> : null}
        </div>
      </Container>
    </Section>
  )
}

export default NotFoundPage

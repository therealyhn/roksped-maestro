import {useMemo} from 'react'
import {useLocation} from 'react-router-dom'
import LegalDocument from '../components/legal/LegalDocument.jsx'
import Container from '../components/layout/Container.jsx'
import Section from '../components/layout/Section.jsx'
import CmsErrorState from '../components/ui/CmsErrorState.jsx'
import useSanityDocument from '../hooks/useSanityDocument.js'
import {mapLegalPage} from '../lib/sanity/mappers/mapLegalPage.js'
import {legalPageQuery} from '../lib/sanity/queries/legalPageQuery.js'

const legalPageKeys = {
  '/politika-privatnosti': 'privacy',
  '/uslovi-koriscenja': 'terms',
}

function LegalPage() {
  const {pathname} = useLocation()
  const key = legalPageKeys[pathname]
  const params = useMemo(() => ({key}), [key])
  const {status, data, retry} = useSanityDocument(legalPageQuery, params, mapLegalPage)

  return (
    <Section aria-label="Pravni dokument" data-page="legal">
      <Container>
        {status === 'loading' || status === 'idle' ? <div className="min-h-[50dvh]" aria-live="polite" role="status" /> : null}
        {status === 'error' || !data ? <div className="py-28"><CmsErrorState onRetry={retry} /></div> : null}
        {status === 'success' && data ? <LegalDocument document={data} /> : null}
      </Container>
    </Section>
  )
}

export default LegalPage

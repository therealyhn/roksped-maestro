import {useLocation} from 'react-router-dom'
import LegalDocument from '../components/legal/LegalDocument.jsx'
import Container from '../components/layout/Container.jsx'
import Section from '../components/layout/Section.jsx'
import {legalContent} from '../data/legalContent.js'

const legalPageKeys = {
  '/politika-privatnosti': 'privacy',
  '/uslovi-koriscenja': 'terms',
}

function LegalPage() {
  const {pathname} = useLocation()
  const document = legalContent[legalPageKeys[pathname] ?? 'privacy']

  return (
    <Section aria-label="Pravni dokument" data-page="legal">
      <Container>
        <LegalDocument document={document} />
      </Container>
    </Section>
  )
}

export default LegalPage

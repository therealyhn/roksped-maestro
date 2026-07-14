import Container from '../components/layout/Container.jsx'
import Section from '../components/layout/Section.jsx'

function ServicesPage() {
  return (
    <Section aria-label="Usluge" data-page="services">
      <Container>
        {import.meta.env.DEV ? <p>Usluge — development shell</p> : null}
      </Container>
    </Section>
  )
}

export default ServicesPage

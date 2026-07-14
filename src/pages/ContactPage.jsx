import Container from '../components/layout/Container.jsx'
import Section from '../components/layout/Section.jsx'

function ContactPage() {
  return (
    <Section aria-label="Kontakt" data-page="contact">
      <Container>
        {import.meta.env.DEV ? <p>Kontakt — development shell</p> : null}
      </Container>
    </Section>
  )
}

export default ContactPage

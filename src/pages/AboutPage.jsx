import Container from '../components/layout/Container.jsx'
import Section from '../components/layout/Section.jsx'

function AboutPage() {
  return (
    <Section aria-label="O nama" data-page="about">
      <Container>
        {import.meta.env.DEV ? <p>O nama — development shell</p> : null}
      </Container>
    </Section>
  )
}

export default AboutPage

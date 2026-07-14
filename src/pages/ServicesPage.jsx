import ServicesClosingCta from '../components/services/ServicesClosingCta.jsx'
import ServicesHero from '../components/services/ServicesHero.jsx'
import {servicesFigmaContent} from '../data/servicesFigmaContent.js'

function ServicesPage() {
  return (
    <>
      <ServicesHero hero={servicesFigmaContent.hero} />
      <ServicesClosingCta section={servicesFigmaContent.closingCta} />
    </>
  )
}

export default ServicesPage

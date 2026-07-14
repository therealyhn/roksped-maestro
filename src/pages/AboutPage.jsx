import AboutHero from '../components/about/AboutHero.jsx'
import AboutPartnersSection from '../components/about/AboutPartnersSection.jsx'
import AboutProcessSection from '../components/about/AboutProcessSection.jsx'
import AboutTeamSection from '../components/about/AboutTeamSection.jsx'
import AboutWhySection from '../components/about/AboutWhySection.jsx'
import {aboutFigmaContent} from '../data/aboutFigmaContent.js'

function AboutPage() {
  return (
    <>
      <AboutHero hero={aboutFigmaContent.hero} />
      <AboutWhySection section={aboutFigmaContent.why} />
      <AboutTeamSection section={aboutFigmaContent.team} />
      <AboutProcessSection section={aboutFigmaContent.process} />
      <AboutPartnersSection section={aboutFigmaContent.partners} />
    </>
  )
}

export default AboutPage

import {useCallback, useState} from 'react'
import HomeHero from '../components/home/HomeHero.jsx'
import HomeFaqSection from '../components/home/HomeFaqSection.jsx'
import HomeLocationsSection from '../components/home/HomeLocationsSection.jsx'
import HomeMissionSection from '../components/home/HomeMissionSection.jsx'
import HomeServicesSection from '../components/home/HomeServicesSection.jsx'
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection.jsx'
import {homeFigmaContent} from '../data/homeFigmaContent.js'

function HomePage() {
  const [servicesRevealOrigin, setServicesRevealOrigin] = useState(null)
  const handleServicesRevealComplete = useCallback((scrollY) => {
    setServicesRevealOrigin(scrollY)
  }, [])

  return (
    <>
      <HomeHero hero={homeFigmaContent.hero} />
      <HomeServicesSection
        onRevealComplete={handleServicesRevealComplete}
        section={homeFigmaContent.services}
      />
      <HomeMissionSection
        mission={homeFigmaContent.mission}
        revealOrigin={servicesRevealOrigin}
      />
      <HomeTestimonialsSection showcase={homeFigmaContent.testimonials} />
      <HomeLocationsSection section={homeFigmaContent.locations} />
      <HomeFaqSection section={homeFigmaContent.faq} />
    </>
  )
}

export default HomePage

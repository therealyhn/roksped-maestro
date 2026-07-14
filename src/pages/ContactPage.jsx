import ContactLocationsSection from '../components/contact/ContactLocationsSection.jsx'
import ContactTopSection from '../components/contact/ContactTopSection.jsx'
import {contactFigmaContent} from '../data/contactFigmaContent.js'

function ContactPage() {
  return (
    <>
      <ContactTopSection form={contactFigmaContent.form} intro={contactFigmaContent.intro} />
      <ContactLocationsSection section={contactFigmaContent.locations} />
    </>
  )
}

export default ContactPage

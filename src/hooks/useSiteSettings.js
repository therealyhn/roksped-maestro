import {useContext} from 'react'
import {SiteSettingsContext} from '../context/SiteSettingsContext.jsx'

export default function useSiteSettings() {
  const context = useContext(SiteSettingsContext)

  if (!context) {
    throw new Error('useSiteSettings must be used within SiteSettingsProvider.')
  }

  return context
}

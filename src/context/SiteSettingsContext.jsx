/* eslint-disable react-refresh/only-export-components -- The context and its provider belong to one public module. */
import {createContext, useCallback, useEffect, useMemo, useState} from 'react'
import {sanityClient} from '../lib/sanity/client.js'
import {mapSiteSettings} from '../lib/sanity/mappers/mapSiteSettings.js'
import {siteSettingsQuery} from '../lib/sanity/queries/siteSettingsQuery.js'

export const SiteSettingsContext = createContext(null)

let settingsRequest = null

function loadSiteSettings() {
  if (!settingsRequest) {
    settingsRequest = sanityClient.fetch(siteSettingsQuery).then(mapSiteSettings)
  }

  return settingsRequest
}

function normalizeError(error) {
  return {
    message: 'Sadržaj trenutno nije dostupan.',
    code: error?.statusCode || 0,
  }
}

export function SiteSettingsProvider({children}) {
  const [state, setState] = useState({status: 'idle', data: null, error: null})

  const load = useCallback(async ({force = false} = {}) => {
    if (force) {
      settingsRequest = null
    }

    setState({status: 'loading', data: null, error: null})

    try {
      const data = await loadSiteSettings()

      if (!data) {
        throw new Error('Site settings are unavailable.')
      }

      setState({status: 'success', data, error: null})
    } catch (error) {
      settingsRequest = null
      setState({status: 'error', data: null, error: normalizeError(error)})
    }
  }, [])

  useEffect(() => {
    queueMicrotask(() => {
      void load()
    })
  }, [load])

  const value = useMemo(() => ({...state, retry: () => load({force: true})}), [load, state])

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>
}

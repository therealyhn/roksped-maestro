import {useCallback, useEffect, useState} from 'react'
import {sanityClient} from '../lib/sanity/client.js'

export default function useSanityDocument(query, params, map) {
  const [state, setState] = useState({status: 'idle', data: null, error: null})
  const load = useCallback(async () => {
    setState({status: 'loading', data: null, error: null})
    try { setState({status: 'success', data: map(await sanityClient.fetch(query, params)), error: null}) }
    catch (error) { setState({status: 'error', data: null, error: {message: 'Sadržaj trenutno nije dostupan.', code: error?.statusCode || 0}}) }
  }, [map, params, query])
  useEffect(() => { queueMicrotask(load) }, [load])
  return {...state, retry: load}
}

import {createClient} from '@sanity/client'
const env = import.meta.env
export const sanityClient = createClient({projectId: env.VITE_SANITY_PROJECT_ID || '7003ks3q', dataset: env.VITE_SANITY_DATASET || 'production', apiVersion: env.VITE_SANITY_API_VERSION || '2025-01-01', useCdn: true})

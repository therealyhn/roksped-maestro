import useSanityDocument from '../useSanityDocument.js'
import {mapHomePage} from '../../lib/sanity/mappers/mapHomePage.js'
import {homePageQuery} from '../../lib/sanity/queries/homePageQuery.js'

export default function useHomePage() {
  return useSanityDocument(homePageQuery, undefined, mapHomePage)
}

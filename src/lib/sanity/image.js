import imageUrlBuilder from '@sanity/image-url'
import {sanityClient} from './client.js'
const builder = imageUrlBuilder(sanityClient)
export const imageUrl = (source) => (source?.asset ? builder.image(source).auto('format').quality(82) : null)

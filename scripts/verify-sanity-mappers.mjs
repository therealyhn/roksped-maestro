import assert from 'node:assert/strict'
import {mapHomePage} from '../src/lib/sanity/mappers/mapHomePage.js'
import {mapAboutPage} from '../src/lib/sanity/mappers/mapAboutPage.js'
import {mapContactPage} from '../src/lib/sanity/mappers/mapContactPage.js'
import {mapServicesPage} from '../src/lib/sanity/mappers/mapServicesPage.js'
import {mapSiteSettings} from '../src/lib/sanity/mappers/mapSiteSettings.js'

const asset = {_type: 'image', asset: {_ref: 'image-test'}}
const home = mapHomePage({seo: {title: 'Home'}, hero: {fallbackImage: asset}, servicesIntro: {}, mission: {}, testimonialShowcase: {}, aboutTeaser: {}, locationsTeaser: {}, faq: {}, services: [{_id: 'service'}], testimonials: [], locations: [], faqItems: []})
assert.equal(home.servicesIntro.services[0]._id, 'service')
assert.equal(home.hero.fallbackImage.asset._ref, 'image-test')
assert.deepEqual(mapAboutPage({hero: {}, teamIntro: {}, clientStatement: {}, teamMembers: [], partners: []}).teamMembers, [])
assert.deepEqual(mapContactPage({locations: []}).locations, [])
assert.deepEqual(mapServicesPage({hero: {}, services: []}).services, [])
assert.equal(mapSiteSettings({defaultSeo: {socialImage: asset}}).defaultSeo.socialImage.asset._ref, 'image-test')
console.log('Sanity mapper fixtures passed.')

import {Link} from 'react-router-dom'

const footerLogo = 'https://www.figma.com/api/mcp/asset/ebc3172a-8c76-4fa4-97cb-4ee5aca690ce'
const instagramIcon = 'https://www.figma.com/api/mcp/asset/54a733e0-7812-4dbb-9bf7-efe062176e1a'
const facebookIcon = 'https://www.figma.com/api/mcp/asset/daf8eb96-d39d-4a5f-923d-bbcd88ffb789'
const linkedinIcon = 'https://www.figma.com/api/mcp/asset/9523f554-38c4-4ae4-9a9c-b8ad5bf645fd'
const arrowIcon = 'https://www.figma.com/api/mcp/asset/5fc63c37-b66d-424c-9ef4-e2bf515d9cb7'

const companyDetails = [
  ['Šifra delatnosti', '5229'], ['PIB', '111326846'],
  ['Matični broj', '21462888'], ['Pravna forma', 'D.O.O.'],
  ['Banka', 'Raiffeisen Bank'], ['Broj računa', '265-6410310004731-46'],
]

function FooterLinkColumn({heading, links}) {
  return <div><h2 className="text-[20px] font-semibold leading-[.95] text-white">{heading}</h2><ul className="mt-[17px] space-y-[17px] text-[14px] leading-[.95] text-brand-footer-muted">{links.map((link) => <li key={link.to}><Link className="hover:text-white" to={link.to}>{link.label}</Link></li>)}</ul></div>
}

function CompanyDetails() {
  return <div><img alt="Rok Šped" className="h-[57px] w-[92px] object-contain" src={footerLogo} /><h2 className="mt-3 text-[20px] font-semibold leading-[1.5]">Podaci o preduzeću</h2><dl className="mt-3 grid w-[408px] grid-cols-2 gap-x-[30px] gap-y-[18px] text-[16px] leading-[1.4]">{companyDetails.map(([label, value]) => <div key={label}><dt className="text-brand-footer-muted">{label}</dt><dd className="font-medium text-white">{value}</dd></div>)}</dl></div>
}

function SiteFooter() {
  const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

  return <footer className="relative overflow-hidden bg-brand-footer text-white"><div className="relative mx-auto hidden h-[806px] w-full max-w-[1440px] lg:block"><div className="absolute left-[72px] top-[60px]"><CompanyDetails /></div><div className="absolute left-[802px] top-[129px]"><FooterLinkColumn heading="Kompanija" links={[{label: 'Početna', to: '/'}, {label: 'O nama', to: '/o-nama'}, {label: 'Usluge', to: '/usluge'}]} /></div><div className="absolute left-[1000px] top-[129px]"><FooterLinkColumn heading="Resursi" links={[{label: 'Politika privatnosti', to: '/politika-privatnosti'}, {label: 'Uslovi korišćenja', to: '/uslovi-koriscenja'}, {label: 'Kontakt', to: '/kontakt'}]} /></div><div className="absolute left-[1216px] top-[129px] w-[152px]"><h2 className="text-[20px] font-medium leading-[1.1] tracking-[-0.01em]">Kontaktirajte nas</h2><div className="mt-[17px] text-[14px] leading-[1.6] text-brand-footer-muted"><a className="block" href="tel:+381641309794">+381 64 13 09 794</a><a className="block" href="mailto:office@roksped.rs">office@roksped.rs</a></div><h2 className="mt-12 text-[20px] font-medium leading-[1.1] tracking-[-0.01em]">Lokacija</h2><address className="mt-[17px] not-italic text-[14px] leading-[1.6] text-brand-footer-muted">Smederevo 11300,<br />Kolarski Put 330, sprat 3</address></div><button aria-label="Povratak na vrh" className="absolute left-[1323px] top-[60px] grid size-[45px] place-items-center rounded-detail bg-brand-signal-yellow" onClick={scrollToTop} type="button"><img alt="" aria-hidden="true" className="size-[15px] -rotate-90" src={arrowIcon} /></button><p className="absolute left-[72px] top-[486px] text-[16px] leading-[49px]">© 2026 Rok Šped Plus D.O.O. All rights reserved.</p><div className="absolute left-[1155px] top-[498px] flex items-center gap-6"><span className="text-[16px] leading-[.95]">Zapratite nas</span><span className="ml-px flex gap-6" aria-hidden="true"><img alt="" className="size-4" src={instagramIcon} /><img alt="" className="size-4" src={facebookIcon} /><img alt="" className="size-4" src={linkedinIcon} /></span></div><div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[270px] overflow-hidden"><p className="absolute left-1/2 top-[-91px] -translate-x-1/2 whitespace-nowrap font-wordmark text-[379px] font-medium leading-normal tracking-[-0.06em] text-brand-footer-mark">rokšped</p><div className="absolute inset-x-0 top-[-69px] h-[339px] bg-gradient-to-t from-brand-footer to-transparent" /></div></div><div className="px-5 py-16 lg:hidden"><CompanyDetails /><div className="mt-12 grid gap-10 sm:grid-cols-3"><FooterLinkColumn heading="Kompanija" links={[{label: 'Početna', to: '/'}, {label: 'O nama', to: '/o-nama'}, {label: 'Usluge', to: '/usluge'}]} /><FooterLinkColumn heading="Resursi" links={[{label: 'Politika privatnosti', to: '/politika-privatnosti'}, {label: 'Uslovi korišćenja', to: '/uslovi-koriscenja'}, {label: 'Kontakt', to: '/kontakt'}]} /><div><h2 className="text-[20px] font-medium">Kontaktirajte nas</h2><a className="mt-4 block text-brand-footer-muted" href="tel:+381641309794">+381 64 13 09 794</a><a className="block text-brand-footer-muted" href="mailto:office@roksped.rs">office@roksped.rs</a></div></div><p className="mt-16 text-sm">© 2026 Rok Šped Plus D.O.O. All rights reserved.</p></div></footer>
}

export default SiteFooter

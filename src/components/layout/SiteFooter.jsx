import useSiteSettings from '../../hooks/useSiteSettings.js'
import FooterCompanyData from './FooterCompanyData.jsx'
import FooterContact from './FooterContact.jsx'
import FooterLinks from './FooterLinks.jsx'
import FooterSocials from './FooterSocials.jsx'

const companyPaths = ['/', '/o-nama', '/usluge']
const resourceLinks = [
  {label: 'Politika privatnosti', to: '/politika-privatnosti'},
  {label: 'Uslovi korišćenja', to: '/uslovi-koriscenja'},
  {label: 'Kontakt', to: '/kontakt'},
]

function SiteFooter() {
  const {data} = useSiteSettings()
  const {company, contact, footer, navigation, socials} = data
  const companyLinks = navigation.slice(0, 3).map((item, index) => ({label: item.label, to: companyPaths[index]})).filter((item) => item.label && item.to)

  if (!footer) {
    return null
  }

  return (
    <footer className="relative overflow-hidden bg-brand-footer px-gutter-fluid pb-8 pt-16 text-white md:pt-[60px]">
      <div className="relative z-10 mx-auto grid max-w-content gap-12 lg:grid-cols-[minmax(0,1fr)_166px_166px_190px] lg:gap-x-8">
        <FooterCompanyData company={company} />
        <FooterLinks heading={footer.companyHeading} links={companyLinks} />
        <FooterLinks heading={footer.resourcesHeading} links={resourceLinks} />
        <FooterContact contact={contact} footer={footer} />
      </div>
      <div className="relative z-10 mx-auto mt-16 flex max-w-content flex-col gap-6 border-t border-white/15 pt-5 md:flex-row md:items-center md:justify-between">
        {footer.copyright ? <small className="text-xs text-brand-footer-muted">{footer.copyright}</small> : null}
        <FooterSocials footer={footer} socials={socials} />
      </div>
      <p aria-hidden="true" className="pointer-events-none absolute -bottom-[0.26em] left-1/2 z-0 -translate-x-1/2 whitespace-nowrap font-wordmark text-[clamp(8rem,31vw,30.625rem)] font-medium leading-[0.8] tracking-[-0.06em] text-brand-footer-mark">rokšped</p>
    </footer>
  )
}

export default SiteFooter

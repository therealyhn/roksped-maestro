import {footerContent} from '../../data/footerContent.js'
import FigmaArrow from '../ui/FigmaArrow.jsx'
import FooterCompanyData from './FooterCompanyData.jsx'
import FooterContact from './FooterContact.jsx'
import FooterLinks from './FooterLinks.jsx'
import FooterSocials from './FooterSocials.jsx'
import FooterWordmark from './FooterWordmark.jsx'

function SiteFooter() {
  const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

  return (
    <footer className="relative overflow-hidden bg-brand-footer text-white">
      <div className="px-gutter-fluid pt-[clamp(2.5rem,4.17vw,3.75rem)]">
        <div className="relative mx-auto max-w-content">
          <button
            aria-label="Povratak na vrh"
            className="absolute right-0 top-0 grid size-[45px] place-items-center rounded-detail bg-brand-signal-yellow"
            onClick={scrollToTop}
            type="button"
          >
            <span className="-rotate-90"><FigmaArrow className="size-[15px]" direction="dark" /></span>
          </button>

          <div className="xl:flex xl:justify-between xl:gap-x-8">
            <FooterCompanyData
              details={footerContent.companyDetails}
              heading={footerContent.companyHeading}
              logo={footerContent.logo}
            />

            <div className="mt-12 grid min-w-0 grid-cols-1 gap-x-8 gap-y-10 xs:grid-cols-2 sm:grid-cols-3 xl:mt-0 xl:w-[566px] xl:grid-cols-[minmax(0,198px)_minmax(0,216px)_minmax(0,152px)] xl:gap-y-0 xl:pt-[69px]">
              {footerContent.linkColumns.map((column) => (
                <FooterLinks heading={column.heading} key={column.heading} links={column.links} />
              ))}
              <FooterContact contact={footerContent.contact} />
            </div>
          </div>

          <div className="mt-[clamp(3rem,9.93vw,8.9375rem)] flex flex-wrap items-center justify-between gap-x-8 gap-y-5 pb-[clamp(6rem,18.75vw,16.875rem)]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] leading-[1.4] sm:text-[16px] xl:leading-[49px]">
              <p>{footerContent.legal}</p>
              <span aria-hidden="true" className="text-brand-footer-muted">•</span>
              <a
                className="text-brand-footer-muted transition-colors duration-300 hover:text-brand-signal-yellow focus-visible:text-brand-signal-yellow focus-visible:outline-none"
                href={footerContent.productCredit.href}
                rel="noreferrer"
                target="_blank"
              >
                {footerContent.productCredit.label}
              </a>
            </div>
            <FooterSocials icons={footerContent.socialIcons} label={footerContent.followLabel} />
          </div>
        </div>
      </div>

      <FooterWordmark text={footerContent.wordmark} />
    </footer>
  )
}

export default SiteFooter

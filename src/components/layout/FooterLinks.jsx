import {Link} from 'react-router-dom'

function FooterLinks({heading, links}) {
  return (
    <section>
      <h2 className="text-[20px] font-semibold leading-[.95]">{heading}</h2>
      <ul className="mt-[17px] text-[14px] leading-[.95] text-brand-footer-muted">
        {links.map((link) => (
          <li key={link.to}>
            <Link className="-mx-2 inline-flex min-h-11 items-center px-2 transition-colors hover:text-white xl:min-h-0 xl:py-[9px]" to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FooterLinks

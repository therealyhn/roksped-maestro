import {Link} from 'react-router-dom'

function FooterLinks({heading, links}) {
  if (!heading || links.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="text-[1.375rem] font-medium leading-[1.2] tracking-title text-white">{heading}</h2>
      <ul className="mt-4 space-y-3 text-[15px] text-brand-footer-muted">
        {links.map(({label, to}) => (
          <li key={to}><Link className="transition-colors hover:text-white" to={to}>{label}</Link></li>
        ))}
      </ul>
    </section>
  )
}

export default FooterLinks

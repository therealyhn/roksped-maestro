const socialNames = {instagram: 'Instagram', facebook: 'Facebook', linkedin: 'LinkedIn'}

function FooterSocials({footer, socials}) {
  const items = Object.entries(socials || {}).filter(([, url]) => url)

  if (!footer?.followLabel || items.length === 0) {
    return null
  }

  return (
    <div className="flex items-center gap-5 text-brand-footer-muted">
      <span className="text-xs uppercase tracking-[0.08em]">{footer.followLabel}</span>
      <div className="flex items-center gap-4">
        {items.map(([network, url]) => <a aria-label={socialNames[network]} className="text-sm transition-colors hover:text-white" href={url} key={network} rel="noreferrer" target="_blank">{network === 'instagram' ? '◎' : network === 'facebook' ? 'f' : 'in'}</a>)}
      </div>
    </div>
  )
}

export default FooterSocials

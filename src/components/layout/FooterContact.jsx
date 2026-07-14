function FooterContact({contact, footer}) {
  if (!contact || !footer) {
    return null
  }

  return (
    <section className="max-w-[190px]">
      <h2 className="text-[1.375rem] font-medium leading-[1.2] tracking-title text-white">{footer.contactHeading}</h2>
      <div className="mt-4 space-y-1 text-[15px] leading-[1.45] text-brand-footer-muted">
        {contact.phone ? <a className="block transition-colors hover:text-white" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a> : null}
        {contact.email ? <a className="block transition-colors hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a> : null}
      </div>
      {contact.addressLines?.length ? (
        <div className="mt-8">
          <h2 className="text-[1.375rem] font-medium leading-[1.2] tracking-title text-white">{footer.locationHeading}</h2>
          <address className="mt-4 not-italic text-[15px] leading-[1.45] text-brand-footer-muted">{contact.addressLines.map((line) => <span className="block" key={line}>{line}</span>)}</address>
        </div>
      ) : null}
    </section>
  )
}

export default FooterContact

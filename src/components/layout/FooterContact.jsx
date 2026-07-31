function FooterContact({contact}) {
  const linkClassName = '-mx-2 inline-flex min-h-11 items-center px-2 transition-colors hover:text-white xl:min-h-0 xl:px-0 xl:mx-0'

  return (
    <section className="xs:col-span-2 sm:col-span-1 xl:w-[152px]">
      <h2 className="text-[20px] font-medium leading-[1.1] tracking-[-0.01em]">{contact.heading}</h2>
      <div className="mt-[17px] flex flex-col items-start text-[14px] leading-[1.6] text-brand-footer-muted">
        <a className={linkClassName} href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
        <a className={linkClassName} href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>

      <h2 className="mt-8 text-[20px] font-medium leading-[1.1] tracking-[-0.01em] xl:mt-12">{contact.locationHeading}</h2>
      <address className="mt-[17px] text-[14px] not-italic leading-[1.6] text-brand-footer-muted">
        {contact.addressLines.map((line) => <span className="block" key={line}>{line}</span>)}
      </address>
    </section>
  )
}

export default FooterContact

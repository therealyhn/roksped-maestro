function LocationContact({contact}) {
  return (
    <div>
      <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.01em]">
        {contact.name}
        {contact.role ? <span className="font-normal italic text-brand-mid-neutral">, {contact.role}</span> : null}
      </p>
      <a className="block text-[18px] leading-[1.4] tracking-[-0.01em]" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
        {contact.phone}
      </a>
      {contact.email ? (
        <a className="block text-[18px] leading-[1.4] tracking-[-0.01em]" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      ) : null}
    </div>
  )
}

export default LocationContact

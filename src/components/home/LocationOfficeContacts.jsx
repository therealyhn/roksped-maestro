function LocationOfficeContacts({emails, label}) {
  return (
    <div>
      <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.01em]">{label}</p>
      {emails.map((email) => (
        <a className="block text-[18px] leading-[1.4] tracking-[-0.01em]" href={`mailto:${email}`} key={email}>
          {email}
        </a>
      ))}
    </div>
  )
}

export default LocationOfficeContacts

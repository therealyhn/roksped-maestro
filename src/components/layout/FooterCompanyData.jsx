function FooterCompanyData({company}) {
  const details = [
    ['Šifra delatnosti', company?.activityCode],
    ['PIB', company?.taxId],
    ['Matični broj', company?.registrationNumber],
    ['Pravna forma', company?.legalForm],
    ['Banka', company?.bankName],
    ['Broj računa', company?.bankAccount],
  ].filter(([, value]) => value)

  if (!company || details.length === 0) {
    return null
  }

  return (
    <section aria-label="Podaci o preduzeću" className="max-w-[408px]">
      <p className="font-wordmark text-[2.25rem] leading-none tracking-[-0.12em] text-white">rokšped</p>
      <h2 className="mt-2 text-[1.375rem] font-medium leading-[1.2] tracking-title text-white">Podaci o preduzeću</h2>
      <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 text-sm leading-[1.35] text-brand-footer-muted">
        {details.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className="mt-1 text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default FooterCompanyData

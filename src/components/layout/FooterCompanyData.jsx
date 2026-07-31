function FooterCompanyData({details, heading, logo}) {
  return (
    <section aria-label={heading} className="xl:w-[408px]">
      <img alt="Rok Šped" className="h-[57px] w-[92px] object-contain" src={logo} />
      <h2 className="mt-3 text-[20px] font-semibold leading-[1.5]">{heading}</h2>
      <dl className="mt-3 grid w-full max-w-[408px] grid-cols-2 gap-x-[clamp(1rem,2vw,1.875rem)] gap-y-[18px] text-[15px] leading-[1.4] sm:text-[16px]">
        {details.map(([label, value]) => (
          <div className="min-w-0" key={label}>
            <dt className="text-brand-footer-muted">{label}</dt>
            <dd className="[overflow-wrap:anywhere] font-medium text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default FooterCompanyData

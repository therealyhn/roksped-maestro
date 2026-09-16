function FooterSocials({icons, label}) {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <span className="text-[15px] leading-[.95] sm:text-[16px]">{label}</span>
      <span aria-hidden="true" className="flex gap-4 sm:gap-6">
        {icons.map((icon) => <img alt="" aria-hidden="true" className="size-4 object-contain" key={icon.name} src={icon.src} />)}
      </span>
    </div>
  )
}

export default FooterSocials

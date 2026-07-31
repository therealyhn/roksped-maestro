function FooterWordmark({text}) {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[clamp(4.5rem,18.75vw,16.875rem)] overflow-hidden">
      <p className="absolute left-1/2 top-[-33.7%] -translate-x-1/2 whitespace-nowrap font-wordmark text-[clamp(5rem,26.32vw,23.6875rem)] font-medium leading-normal tracking-[-0.06em] text-brand-footer-mark">
        {text}
      </p>
      <div className="absolute inset-x-0 top-[-25.6%] h-[125.6%] bg-gradient-to-t from-brand-footer to-transparent" />
    </div>
  )
}

export default FooterWordmark

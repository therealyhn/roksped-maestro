function AboutTag({children, className = '', light = false}) {
  return (
    <div className={`inline-flex h-8 items-center gap-2.5 rounded-[20px] pl-1 pr-3 text-[14px] ${light ? 'text-white' : 'text-brand-ink'} ${className}`.trim()}>
      <img alt="" aria-hidden="true" className="size-[14px]" src="/assets/about/tag-dot.png" />
      <span className="whitespace-nowrap">{children}</span>
    </div>
  )
}

export default AboutTag

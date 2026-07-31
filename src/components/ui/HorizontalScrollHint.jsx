function HorizontalScrollHint({className = '', label}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 text-[12px] font-medium uppercase tracking-[0.08em] text-brand-body-muted ${className}`.trim()}
    >
      <span>{label}</span>
      <span className="relative block h-px w-10 bg-brand-body-muted/35">
        <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rotate-45 border-r border-t border-brand-body-muted" />
      </span>
    </div>
  )
}

export default HorizontalScrollHint

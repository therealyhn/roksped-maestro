function MemberDetails({className = '', member}) {
  return (
    <div className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black via-black/45 to-transparent px-5 pb-5 pt-28 text-left text-white ${className}`.trim()}>
      <span className="text-[17px] leading-none tracking-[-0.02em]">
        {member.name}
      </span>
      <span className="flex max-w-[48%] shrink-0 items-center justify-end gap-2 text-right text-[9px] font-medium uppercase leading-[1.15] tracking-[0.02em]">
        <span className="size-[9px] shrink-0 rounded-full bg-brand-signal-yellow" />
        {member.role}
      </span>
    </div>
  )
}

function MemberCard({member}) {
  return (
    <article className="relative h-[410px] min-w-[82vw] max-w-[340px] snap-center overflow-hidden rounded-card-lg bg-brand-ink sm:h-[360px] sm:min-w-0 sm:w-[calc(50%-8px)] lg:h-[380px] lg:w-[calc(33.333%-11px)] lg:max-w-none">
      <img
        alt={member.name}
        className="absolute inset-0 size-full object-cover grayscale"
        decoding="async"
        height="909"
        loading="lazy"
        src={member.image}
        style={{objectPosition: member.portraitPosition}}
        width="606"
      />
      <MemberDetails member={member} />
    </article>
  )
}

function DesktopMemberReveal({member}) {
  return (
    <button
      aria-label={`Prikaži člana tima: ${member.name}, ${member.role}`}
      className="group relative order-[var(--desktop-order)] h-[69px] flex-1 overflow-visible focus-visible:z-20 hover:z-20"
      style={{'--desktop-order': member.desktopOrder}}
      type="button"
    >
      <span className="absolute inset-x-0 top-0 h-[69px] overflow-hidden bg-brand-ink transition-[height,top] duration-[650ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:top-[-212px] group-hover:h-[493px] group-focus-visible:top-[-212px] group-focus-visible:h-[493px] motion-reduce:transition-none">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover grayscale"
          decoding="async"
          height="909"
          loading="lazy"
          src={member.image}
          style={{objectPosition: member.portraitPosition}}
          width="606"
        />
        <MemberDetails
          className="translate-y-3 opacity-0 transition-[opacity,transform] delay-0 duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:delay-300 motion-reduce:transition-none"
          member={member}
        />
      </span>
    </button>
  )
}

function AboutTeamGallery({members}) {
  return (
    <>
      <div className="xl:hidden">
        <p className="text-center text-[clamp(1.5rem,3.3vw,2rem)] font-semibold uppercase leading-[1.05]">
          Iza svakog procesa<br />stoje ljudi.
        </p>
        <div className="-mx-gutter-fluid mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-gutter-fluid pb-4 [scrollbar-width:none] sm:mx-auto sm:max-w-content sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
        <p className="mt-10 text-center text-[clamp(1.5rem,3.3vw,2rem)] font-semibold uppercase leading-[1.05]">
          Iza svakog kilometra<br />stoji znanje stečeno u praksi.
        </p>
      </div>

      <div className="relative hidden h-[513px] overflow-hidden xl:block">
        <p className="absolute inset-x-0 top-[29px] text-center text-[31px] font-semibold uppercase leading-[1.05]">
          Iza svakog procesa<br />stoje ljudi.
        </p>

        <div className="absolute inset-x-0 top-[222px] z-10 flex h-[69px]">
          {members.map((member) => (
            <DesktopMemberReveal key={member.id} member={member} />
          ))}
        </div>

        <p className="absolute inset-x-0 top-[335px] text-center text-[31px] font-semibold uppercase leading-[1.05]">
          Iza svakog kilometra<br />stoji znanje stečeno u praksi.
        </p>
      </div>
    </>
  )
}

export default AboutTeamGallery

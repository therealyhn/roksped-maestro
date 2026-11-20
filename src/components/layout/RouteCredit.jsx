import {useMatches} from 'react-router-dom'

// Rendered by AppShell outside the lazy route, so the prerendered HTML carries it.
function RouteCredit() {
  const credit = useMatches().findLast((match) => match.handle?.credit)?.handle.credit

  if (!credit) return null

  return (
    <div className="px-5 pb-20">
      <p className="mx-auto max-w-3xl text-balance text-center text-body-lg text-brand-body-muted">
        {credit.before}
        <a className="text-brand-ink underline decoration-[1.3px] underline-offset-2" href={credit.link.href}>
          {credit.link.label}
        </a>
        {credit.after}
      </p>
    </div>
  )
}

export default RouteCredit

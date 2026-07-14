import {PortableText} from '@portabletext/react'

const portableTextComponents = {
  block: {
    h2: ({children}) => <h2 className="mt-12 text-heading-sm font-medium text-brand-ink first:mt-0">{children}</h2>,
    h3: ({children}) => <h3 className="mt-8 text-title-lg font-medium text-brand-ink">{children}</h3>,
    normal: ({children}) => <p className="mt-5 text-body text-brand-body-muted first:mt-0">{children}</p>,
  },
  list: {
    bullet: ({children}) => <ul className="mt-5 list-disc space-y-2 pl-5 text-body text-brand-body-muted">{children}</ul>,
    number: ({children}) => <ol className="mt-5 list-decimal space-y-2 pl-5 text-body text-brand-body-muted">{children}</ol>,
  },
  marks: {
    link: ({children, value}) => <a className="underline decoration-brand-signal-yellow decoration-2 underline-offset-4" href={value?.href}>{children}</a>,
  },
}

function LegalDocument({document}) {
  return (
    <article className="mx-auto max-w-3xl py-28 md:py-36">
      <header className="border-b border-brand-structure pb-8">
        <h1 className="max-w-2xl text-display font-medium text-brand-ink">{document.title}</h1>
        {document.updatedAt ? <p className="mt-5 text-sm text-brand-body-muted">Ažurirano: {new Intl.DateTimeFormat('sr-RS', {dateStyle: 'long'}).format(new Date(`${document.updatedAt}T00:00:00`))}</p> : null}
      </header>
      <div className="pt-8"><PortableText components={portableTextComponents} value={document.body} /></div>
    </article>
  )
}

export default LegalDocument

function LegalDocument({document}) {
  return (
    <article className="mx-auto max-w-3xl py-28 md:py-36">
      <header className="border-b border-brand-structure pb-8">
        <h1 className="max-w-2xl text-display font-medium text-brand-ink">{document.title}</h1>
        {document.updatedAt ? <p className="mt-5 text-sm text-brand-body-muted">{document.updatedAt}</p> : null}
      </header>

      <div className="pt-8">
        {document.intro ? <p className="text-body text-brand-body-muted">{document.intro}</p> : null}

        {document.sections.map((section) => (
          <section className="mt-12" key={section.title}>
            <h2 className="text-heading-sm font-medium text-brand-ink">{section.title}</h2>

            {section.paragraphs?.map((paragraph) => (
              <p className="mt-5 text-body text-brand-body-muted" key={paragraph}>{paragraph}</p>
            ))}

            {section.items?.length ? (
              <ul className="mt-5 list-disc space-y-2 pl-5 text-body text-brand-body-muted">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  )
}

export default LegalDocument

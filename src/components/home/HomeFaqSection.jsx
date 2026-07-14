import FaqItem from './FaqItem.jsx'

function HomeFaqSection({section}) {
  return <section className="min-h-[672px] border-t border-brand-structure bg-brand-canvas" id="faq" aria-labelledby="home-faq-heading"><div className="grid min-h-[672px] lg:grid-cols-[44.1%_1fr]"><div className="border-brand-structure px-gutter-fluid pb-20 pt-24 lg:border-r lg:pt-[195px]"><h2 id="home-faq-heading" className="max-w-[505px] text-[55px] font-medium leading-[1.1] tracking-[-0.05em]">{section.heading}</h2></div><div className="px-gutter-fluid py-20 lg:pb-0 lg:pl-[58px] lg:pr-[72px] lg:pt-[134px]"><div className="max-w-[675px]">{section.items.map((question, index) => <FaqItem index={index} key={question} question={question} />)}</div></div></div></section>
}

export default HomeFaqSection

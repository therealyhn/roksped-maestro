import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'
import useSingleOpenAccordion from '../../hooks/useSingleOpenAccordion.js'
import FaqItem from './FaqItem.jsx'

function HomeFaqSection({section}) {
  const prefersReducedMotion = useReducedMotionPreference()
  const {openIndex, toggleItem} = useSingleOpenAccordion(0)

  return (
    <section
      aria-labelledby="home-faq-heading"
      className="min-h-[672px] border-t border-brand-structure bg-brand-canvas"
      id="faq"
    >
      <div className="grid min-h-[671px] lg:grid-cols-[44.1%_1fr]">
        <div className="border-brand-structure px-gutter-fluid pb-20 pt-24 lg:border-r lg:pt-[124px]">
          <h2 className="max-w-[505px] text-[55px] font-medium leading-[1.1] tracking-[-0.05em]" id="home-faq-heading">
            {section.heading}
          </h2>
        </div>

        <div className="px-gutter-fluid py-20 lg:pb-0 lg:pl-[58px] lg:pr-[72px] lg:pt-[134px]">
          <div className="max-w-[675px]">
            {section.items.map((item, index) => (
              <FaqItem
                index={index}
                isOpen={openIndex === index}
                item={item}
                key={item.id}
                onToggle={() => toggleItem(index)}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFaqSection

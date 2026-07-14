import AboutFeatureCard from './AboutFeatureCard.jsx'
import AboutTag from './AboutTag.jsx'

function AboutWhySection({section}) {
  return (
    <section className="bg-brand-canvas px-5 py-20 lg:relative lg:h-[907px] lg:p-0" aria-labelledby="about-why-heading">
      <svg aria-hidden="true" className="absolute size-0">
        <filter id="about-green-tint" colorInterpolationFilters="sRGB">
          <feColorMatrix values="0 0 0 0 0  0.1401 0.4714 0.0477 0 0  0.0750 0.2526 0.0255 0 0  0 0 0 1 0" />
        </filter>
      </svg>
      <div className="mx-auto flex max-w-[1075px] flex-col items-center lg:absolute lg:left-1/2 lg:top-[92px] lg:-translate-x-1/2">
        <div className="flex flex-col items-center text-center">
          <AboutTag className="bg-brand-canvas">{section.eyebrow}</AboutTag>
          <h2 id="about-why-heading" className="mt-5 text-[42px] font-medium leading-none tracking-[-0.05em] lg:w-[666px] lg:text-[55px]">
            {section.heading.map((line) => <span className="block" key={line}>{line}</span>)}
          </h2>
          <p className="mt-5 max-w-[535px] text-[18px] leading-[31px] tracking-[0.01em]">{section.body}</p>
        </div>

        <div className="mt-[60px] flex max-w-full flex-wrap justify-center gap-5 lg:flex-nowrap">
          {section.cards.map((card) => <AboutFeatureCard card={card} key={card.key} />)}
        </div>
      </div>
    </section>
  )
}

export default AboutWhySection

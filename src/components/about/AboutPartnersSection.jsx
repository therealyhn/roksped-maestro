import {AnimatePresence, motion, useReducedMotion} from 'framer-motion'
import {useMemo, useState} from 'react'
import AboutTag from './AboutTag.jsx'

const partnerCardTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
}

function PartnerLogo({partner}) {
  if (partner.id === 'masterline') {
    return (
      <span aria-hidden="true" className="relative block h-[58px] w-[126px]">
        <span className="absolute left-[49px] top-0 block size-[28px] overflow-hidden rounded-full">
          <img
            alt=""
            className="absolute left-[-52px] top-[-32px] h-[132px] w-[132px] max-w-none"
            draggable="false"
            src="/assets/about/partners/masterline-source.png"
          />
        </span>
        <img
          alt=""
          className="absolute bottom-[5px] left-[1px] h-[16px] w-[82px]"
          draggable="false"
          src="/assets/about/partners/masterline-word-black.svg"
        />
        <img
          alt=""
          className="absolute bottom-[5px] right-0 h-[16px] w-[42px]"
          draggable="false"
          src="/assets/about/partners/masterline-word-blue.svg"
        />
      </span>
    )
  }

  return (
    <img
      alt=""
      aria-hidden="true"
      className={partner.id === 'akiba'
        ? 'w-[94%] object-contain'
        : 'max-h-[80%] max-w-[88%] object-contain'}
      draggable="false"
      src={partner.logo}
    />
  )
}

function PartnerLogoCard({partner, prefersReducedMotion}) {
  return (
    <motion.span
      animate={{
        opacity: 1,
        rotate: partner.rotation,
        scale: 1,
        y: 0,
      }}
      className={`pointer-events-none absolute bottom-[calc(100%+18px)] left-1/2 z-20 flex h-[114px] w-[175px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-[7px] ${
        partner.hasShadow ? 'shadow-[0_4px_12px_rgba(0,0,0,0.08)]' : ''
      }`}
      exit={prefersReducedMotion
        ? {opacity: 0}
        : {
            opacity: 0,
            rotate: 0,
            scale: 0.82,
            y: 20,
            transition: {duration: 0.18, ease: 'easeOut'},
          }}
      initial={prefersReducedMotion
        ? {opacity: 0}
        : {
            opacity: 0,
            rotate: 0,
            scale: 0.76,
            y: 28,
          }}
      style={{backgroundColor: partner.cardColor}}
      transition={prefersReducedMotion ? {duration: 0} : partnerCardTransition}
    >
      <PartnerLogo partner={partner} />
    </motion.span>
  )
}

function AboutPartnersSection({section}) {
  const [activePartnerId, setActivePartnerId] = useState(null)
  const prefersReducedMotion = useReducedMotion()
  const partnersById = useMemo(
    () => Object.fromEntries(section.featured.map((partner) => [partner.id, partner])),
    [section.featured],
  )
  const hasActivePartner = activePartnerId !== null

  return (
    <section className="mx-auto w-full max-w-canvas bg-brand-canvas px-5 py-20 lg:pt-10 xl:relative xl:h-[687px] xl:p-0" aria-labelledby="about-partners-heading">
      <div className="flex w-full justify-center xl:absolute xl:inset-x-0 xl:top-[40px]">
        <AboutTag className="bg-brand-canvas">{section.eyebrow}</AboutTag>
      </div>

      <h2
        className="mx-auto mt-16 w-full max-w-[1000px] text-center text-[clamp(1.625rem,7vw,3.9375rem)] font-normal leading-[1.1] tracking-[-0.06em] xl:absolute xl:left-1/2 xl:top-[150px] xl:mt-0 xl:w-[1000px] xl:-translate-x-1/2"
        id="about-partners-heading"
        onMouseLeave={() => setActivePartnerId(null)}
      >
        {section.featuredRows.map((row, rowIndex) => (
          <span className="block" key={row.join('-')}>
            {row.map((partnerId, partnerIndex) => {
              const partner = partnersById[partnerId]
              const isActive = activePartnerId === partnerId
              const isLastPartner = partnerIndex === row.length - 1
              const isLastRow = rowIndex === section.featuredRows.length - 1

              return (
                <span className="relative inline-block" key={partnerId}>
                  <button
                    aria-expanded={isActive}
                    className={`relative appearance-none border-0 bg-transparent p-0 font-[inherit] leading-[inherit] tracking-[inherit] transition-colors duration-300 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-logistics-green ${
                      !hasActivePartner || isActive ? 'text-brand-ink' : 'text-[#d9d9d9]'
                    }`}
                    onBlur={() => setActivePartnerId(null)}
                    onClick={() => setActivePartnerId(partnerId)}
                    onFocus={() => setActivePartnerId(partnerId)}
                    onMouseEnter={() => setActivePartnerId(partnerId)}
                    type="button"
                  >
                    {partner.name}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <PartnerLogoCard
                          key={partnerId}
                          partner={partner}
                          prefersReducedMotion={prefersReducedMotion}
                        />
                      )}
                    </AnimatePresence>
                  </button>
                  <span
                    aria-hidden="true"
                    className={`transition-colors duration-300 motion-reduce:transition-none ${
                      hasActivePartner ? 'text-[#d9d9d9]' : 'text-brand-ink'
                    }`}
                  >
                    {isLastPartner ? (isLastRow ? '' : ',') : ',\u00a0'}
                  </span>
                </span>
              )
            })}
          </span>
        ))}
      </h2>

      <div className="mx-auto mt-16 grid max-w-[484px] grid-cols-2 text-center text-[14px] leading-[1.1] tracking-[-0.04em] text-source-metadata-muted sm:grid-cols-4 xl:absolute xl:left-1/2 xl:top-[438px] xl:mt-0 xl:h-[99px] xl:w-[484px] xl:-translate-x-1/2">
        {section.columns.map((column, index) => (
          <ul className={`space-y-[6px] px-1 ${index < section.columns.length - 1 ? 'border-r border-source-neutral-light' : ''}`} key={column[0]}>
            {column.map((partner) => <li key={partner}>{partner}</li>)}
          </ul>
        ))}
      </div>
    </section>
  )
}

export default AboutPartnersSection

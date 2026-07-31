import {AnimatePresence, motion} from 'framer-motion'
import {useState} from 'react'

const contentVariants = {
  enter: {x: 34},
  center: {x: 0},
  exit: {x: -34},
}

const contentTransition = {
  duration: 0.26,
  ease: [0.22, 1, 0.36, 1],
}

function CloseIcon() {
  return (
    <span aria-hidden="true" className="relative block size-3">
      <img alt="" className="absolute inset-0 size-full" src="/assets/services/close-a.svg" />
      <img alt="" className="absolute inset-0 size-full -scale-x-100" src="/assets/services/close-b.svg" />
    </span>
  )
}

function TransportSelector({activeKey, onSelect, transportTypes}) {
  return (
    <>
      <p className="mt-[25px] text-center text-[15px] leading-[22px]">
        Odaberite vid transporta za više informacija
      </p>
      <div className="mt-4 grid h-[50px] grid-cols-[1.08fr_0.98fr_0.78fr_1.2fr] overflow-hidden rounded-[46px] bg-[#f5f5f5] p-1 shadow-[inset_0_0_4px_rgba(0,0,0,0.07)] sm:p-1.5">
        {transportTypes.map((transportType) => {
          const isActive = activeKey === transportType.key

          return (
            <button
              aria-pressed={isActive}
              className={`rounded-[29px] px-1 text-[11px] font-medium transition-colors sm:px-2 sm:text-[13px] ${
                isActive
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-white focus-visible:bg-white'
              }`}
              key={transportType.key}
              onClick={() => onSelect(transportType)}
              type="button"
            >
              {transportType.label}
            </button>
          )
        })}
      </div>
    </>
  )
}

function TransportDetails({prefersReducedMotion, service}) {
  const [activeTransport, setActiveTransport] = useState(null)
  const panelImage = activeTransport?.image ?? service.panelImage
  const panelImageAlt = activeTransport?.imageAlt ?? service.panelImageAlt
  const transition = prefersReducedMotion ? {duration: 0} : contentTransition

  if (!activeTransport) {
    return (
      <div className="flex min-h-full flex-col">
        <img
          alt={panelImageAlt}
          className="h-[clamp(190px,31svh,261px)] w-full object-cover"
          decoding="async"
          height="261"
          src={panelImage}
          width="411"
        />

        <h2 className="mt-6 text-[23px] font-medium leading-normal">{service.label}</h2>
        <p className="mt-3.5 text-[15px] leading-[1.157]">{service.body}</p>

        <div className="mt-auto pt-8">
          <TransportSelector
            activeKey={null}
            onSelect={setActiveTransport}
            transportTypes={service.transportTypes}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-full flex-col">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          alt={panelImageAlt}
          className="h-[clamp(190px,31svh,261px)] w-full object-cover"
          decoding="async"
          height="261"
          initial={prefersReducedMotion ? false : {x: 18}}
          key={activeTransport.key}
          src={panelImage}
          transition={transition}
          width="411"
          animate={{x: 0}}
          exit={{x: -18}}
        />
      </AnimatePresence>

      <TransportSelector
        activeKey={activeTransport.key}
        onSelect={setActiveTransport}
        transportTypes={service.transportTypes}
      />

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate="center"
          className="mt-6"
          exit="exit"
          initial={prefersReducedMotion ? false : 'enter'}
          key={activeTransport.key}
          transition={transition}
          variants={contentVariants}
        >
          <h2 className="text-[23px] font-medium leading-normal">{activeTransport.heading}</h2>
          <div className="mt-3.5 space-y-0 text-[14px] leading-[1.4]">
            {activeTransport.body.map((paragraph) => (
              <p className="whitespace-pre-line" key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className="mt-auto flex items-center gap-2 pt-6 text-[14px] font-medium"
        onClick={() => setActiveTransport(null)}
        type="button"
      >
        <span aria-hidden="true" className="text-lg leading-none">←</span>
        Nazad na usluge
      </button>
    </div>
  )
}

function ServiceDetails({prefersReducedMotion, service}) {
  if (service.transportTypes) {
    return <TransportDetails prefersReducedMotion={prefersReducedMotion} service={service} />
  }

  return (
    <>
      <img
        alt={service.panelImageAlt}
        className="h-[clamp(190px,31svh,261px)] w-full object-cover"
        decoding="async"
        height="261"
        src={service.panelImage}
        width="411"
      />

      <h2 className="mt-6 text-[23px] font-medium leading-normal">{service.label}</h2>
      <p className="mt-3.5 text-[15px] leading-[1.157]">{service.body}</p>

      {service.details && (
        <div className="mt-6">
          <h3 className="text-[20px] leading-normal">Detalji usluge:</h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-[1.15] text-source-metadata-muted">
            {service.details.map((detail) => (
              <li className="flex gap-3" key={detail}>
                <span aria-hidden="true" className="mt-[5px] size-2 shrink-0 rounded-full bg-[#b8ec1b]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

function ServiceDetailOverlay({
  onClose,
  onNext,
  prefersReducedMotion,
  service,
}) {
  const transition = prefersReducedMotion ? {duration: 0} : contentTransition

  return (
    <>
      <motion.aside
        animate={{x: 0}}
        aria-label={`Detalji usluge: ${service.label}`}
        aria-modal="true"
        className="absolute inset-y-0 left-0 z-[60] w-full overflow-hidden bg-white lg:w-[511px]"
        exit={{x: '-100%'}}
        initial={prefersReducedMotion ? false : {x: '-100%'}}
        role="dialog"
        transition={{duration: prefersReducedMotion ? 0 : 0.52, ease: [0.76, 0, 0.24, 1]}}
      >
        <div className="absolute inset-x-0 top-0 flex h-[69px] items-center justify-between bg-brand-signal-yellow px-[clamp(20px,3.47vw,50px)]">
          <span className="text-[15px] uppercase leading-none">{service.label}</span>
          <button
            aria-label="Zatvori detalje usluge"
            className="grid size-8 place-items-center rounded-full transition-colors hover:bg-black/5"
            onClick={onClose}
            type="button"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="absolute inset-x-[clamp(20px,3.47vw,50px)] bottom-24 top-[103px] overflow-y-auto [scrollbar-width:none] sm:top-[119px] lg:bottom-8 [&::-webkit-scrollbar]:hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate="center"
              className="h-full"
              exit="exit"
              initial={prefersReducedMotion ? false : 'enter'}
              key={service.key}
              transition={transition}
              variants={contentVariants}
            >
              <ServiceDetails prefersReducedMotion={prefersReducedMotion} service={service} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.aside>

      <motion.button
        aria-label="Prikaži sledeću uslugu"
        className="absolute bottom-5 right-5 z-[70] grid size-14 place-items-center overflow-hidden rounded-full bg-brand-logistics-green lg:hidden"
        onClick={onNext}
        type="button"
        whileTap={prefersReducedMotion ? undefined : {scale: 0.94}}
      >
        <img alt="" aria-hidden="true" className="size-6" src="/assets/services/next-service.svg" />
      </motion.button>

      <div className="absolute right-[-61px] top-1/2 z-[60] hidden -translate-y-1/2 lg:block">
        <motion.button
          aria-label="Prikaži sledeću uslugu"
          className="group relative block size-[116px] overflow-hidden rounded-full bg-brand-logistics-green"
          onClick={onNext}
          type="button"
          whileHover={prefersReducedMotion ? undefined : {x: -8}}
          whileTap={prefersReducedMotion ? undefined : {scale: 0.96}}
        >
          <span
            aria-hidden="true"
            className={`absolute inset-0 origin-right bg-brand-signal-yellow ${
              prefersReducedMotion
                ? 'scale-x-0 transition-none group-hover:scale-x-100 group-focus-visible:scale-x-100'
                : 'scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100'
            }`}
          />
          <img
            alt=""
            aria-hidden="true"
            className={`absolute left-[18px] top-[46px] z-10 size-[24px] ${
              prefersReducedMotion
                ? ''
                : 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125 group-focus-visible:scale-125'
            }`}
            src="/assets/services/next-service.svg"
          />
        </motion.button>
      </div>
    </>
  )
}

export default ServiceDetailOverlay

import {AnimatePresence, motion} from 'framer-motion'
import FaqToggleIcon from './FaqToggleIcon.jsx'

const answerTransition = {
  duration: 0.42,
  ease: [0.76, 0, 0.24, 1],
}

function FaqItem({index, isOpen, item, onToggle, prefersReducedMotion}) {
  const answerId = `home-faq-answer-${item.id}`
  const buttonId = `home-faq-button-${item.id}`

  return (
    <article className="border-b border-brand-structure">
      <button
        aria-controls={answerId}
        aria-expanded={isOpen}
        className={`flex min-h-[88px] w-full items-center justify-between gap-5 py-6 text-left lg:gap-6 ${index === 0 ? 'lg:h-[66px] lg:pb-7 lg:pt-0' : 'lg:h-[112px] lg:py-[38px]'}`}
        id={buttonId}
        onClick={onToggle}
        type="button"
      >
        <span className={`text-[18px] font-medium leading-[1.15] tracking-[-0.03em] lg:text-[20px] lg:leading-none ${index === 0 ? 'lg:-mt-[3px] lg:self-start' : ''}`}>
          {item.question}
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-detail bg-brand-night">
          <FaqToggleIcon isOpen={isOpen} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{height: 'auto', opacity: 1}}
            aria-labelledby={buttonId}
            className="overflow-hidden"
            exit={{height: 0, opacity: 0}}
            id={answerId}
            initial={{height: 0, opacity: 0}}
            role="region"
            transition={prefersReducedMotion ? {duration: 0} : answerTransition}
          >
            <p className="pb-[31px] text-[15px] leading-[1.45] tracking-[-0.01em] text-brand-body-muted">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  )
}

export default FaqItem

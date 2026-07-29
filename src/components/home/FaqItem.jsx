import FigmaArrow from '../ui/FigmaArrow.jsx'

function FaqItem({question, index}) {
  return <button className={`flex w-full items-center justify-between gap-6 border-b border-brand-structure text-left ${index === 0 ? 'h-[66px] pb-7' : 'h-[112px] py-[38px]'}`} type="button"><span className="text-[20px] font-medium leading-none tracking-[-0.03em]">{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-detail bg-brand-night"><FigmaArrow className="size-2" /></span></button>
}

export default FaqItem

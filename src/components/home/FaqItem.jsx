const figmaPlus = 'https://www.figma.com/api/mcp/asset/3f525dea-6704-4bd4-ac07-f36e84a44c50'

function FaqItem({question, index}) {
  return <button className={`flex w-full items-center justify-between gap-6 border-b border-brand-structure text-left ${index === 0 ? 'h-[66px] pb-7' : 'h-[112px] py-[38px]'}`} type="button"><span className="text-[20px] font-medium leading-none tracking-[-0.03em]">{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-detail bg-brand-night"><img alt="" aria-hidden="true" className="size-2" src={figmaPlus} /></span></button>
}

export default FaqItem

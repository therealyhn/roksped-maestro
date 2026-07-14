import {Link} from 'react-router-dom'

const missionImage = 'https://www.figma.com/api/mcp/asset/bb62f1e6-e617-4615-8753-7a3dffbd7de9'
const certificateImage = 'https://www.figma.com/api/mcp/asset/81aafd23-369e-42df-84da-0773a4b19bea'
const statisticImage = 'https://www.figma.com/api/mcp/asset/900521b3-21b2-419f-9981-1b58dddcbdb6'
const truckIcon = 'https://www.figma.com/api/mcp/asset/fb8f81a1-b55c-437b-aa85-d91eb41b0902'
const arrowIcon = 'https://www.figma.com/api/mcp/asset/5f55006e-28cc-4fb2-9f63-6a11bccd1f8e'

function MissionMediaGrid({mission}) {
  return <div className="mt-10 grid gap-4 lg:relative lg:h-[698px] lg:block">
    <div className="overflow-hidden rounded-input lg:absolute lg:left-0 lg:top-0 lg:h-[580px] lg:w-[458px]"><img alt="" aria-hidden="true" className="h-full w-full object-cover" src={missionImage} /></div>
    <div className="flex min-h-[102px] items-center gap-[21px] rounded-input bg-white px-[22px] py-[13px] lg:absolute lg:left-0 lg:top-[596px] lg:h-[102px] lg:w-[458px]"><div className="size-[72px] overflow-hidden rounded-full"><img alt="" aria-hidden="true" className="h-full w-full object-cover" src={certificateImage} /></div><div><p className="text-[24px] font-semibold leading-[1.3] tracking-[-0.01em]">Excellent</p><p className="text-[20px] leading-[1.3] tracking-[-0.01em]">Privredna komora Srbije</p></div></div>
    <article className="flex min-h-[344px] flex-col rounded-input bg-white p-6 lg:absolute lg:left-[474px] lg:top-0 lg:h-[344px] lg:w-[520px]"><div aria-hidden="true" className="h-[25px] overflow-hidden text-[80px] leading-[.65]">&ldquo;</div><blockquote className="mt-5 max-w-[472px] text-[24px] italic leading-[1.3] tracking-[-0.01em]">{mission.quote}</blockquote><p className="mt-auto text-[15px] leading-[1.4]"><span className="font-medium">{mission.quoteAuthor}, </span><span className="italic text-source-placeholder">{mission.quoteRole}</span></p></article>
    <article className="relative min-h-[344px] overflow-hidden rounded-input bg-brand-deep-green text-white lg:absolute lg:left-[1010px] lg:top-0 lg:h-[344px] lg:w-[286px]"><img alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" src={statisticImage} /><div className="relative p-6"><p className="text-[41px] font-semibold leading-[1.3] tracking-[-0.01em]">{mission.statisticValue}</p><p className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em]">{mission.statisticLabel}</p></div><div aria-hidden="true" className="absolute bottom-6 left-6 text-[13px] font-semibold">Culture Amp&nbsp;&nbsp;&nbsp; ●◐ Medium</div></article>
    <article className="flex min-h-[338px] flex-col rounded-input bg-white p-6 lg:absolute lg:left-[474px] lg:top-[360px] lg:h-[338px] lg:w-[425px]"><p className="text-[41px] font-semibold leading-[1.3] tracking-[-0.01em]">{mission.commitmentValue}</p><h3 className="mt-2 text-[16px] font-semibold leading-[1.3] tracking-[0.02em]">{mission.commitmentTitle}</h3><p className="mt-[11px] max-w-[377px] text-[15px] leading-[1.4] tracking-[-0.01em]">{mission.commitmentBody}</p><Link className="mt-auto inline-flex h-[43px] w-fit items-center gap-2.5 rounded-button bg-brand-ink px-[18px] text-[15px] text-white" to="/o-nama"><span>{mission.commitmentCta}</span><span className="grid size-[19px] place-items-center rounded-full bg-brand-signal-yellow"><img alt="" aria-hidden="true" className="size-[9px]" src={arrowIcon} /></span></Link></article>
    <article className="relative flex min-h-[338px] flex-col justify-end overflow-hidden rounded-input bg-brand-logistics-green p-6 text-white lg:absolute lg:left-[915px] lg:top-[360px] lg:h-[338px] lg:w-[381px]"><span className="absolute left-6 top-6 grid size-[55px] place-items-center rounded-full bg-brand-bright-green"><img alt="" aria-hidden="true" className="size-[31px]" src={truckIcon} /></span><p className="max-w-[333px] text-[24px] leading-[1.3] tracking-[-0.01em]">{mission.statement}</p></article>
  </div>
}

export default MissionMediaGrid

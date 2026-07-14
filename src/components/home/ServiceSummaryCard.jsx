import {serviceIcons} from '../../data/serviceIcons.js'

function ServiceSummaryCard({service, isFirst}) {
  return <article className={`min-h-[267px] border-r border-brand-structure px-5 ${isFirst ? 'border-l' : ''}`}><img alt="" aria-hidden="true" className="h-[84px] w-[84px] object-contain" src={serviceIcons[service.key]} /><div className="mt-10 flex flex-col gap-[18px]"><h3 className="text-[20px] font-medium leading-none tracking-[-0.03em]">{service.title}</h3><p className="max-w-[284px] text-[15px] leading-[1.4] tracking-[0.01em] text-brand-body-muted">{service.summary}</p></div></article>
}
export default ServiceSummaryCard

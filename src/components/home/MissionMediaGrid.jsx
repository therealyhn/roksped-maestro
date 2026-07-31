import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'
import ClientLogoMarquee from './ClientLogoMarquee.jsx'

const missionImage = '/assets/home/mission-containers.jpg'
const certificateImage = '/assets/home/client-business-excellent.png'
const statisticImage = '/assets/home/mission-speed.jpg'
const truckIcon = '/assets/home/mission-truck-icon.png'

function MissionMediaGrid({mission}) {
  return <div className="mt-10 grid gap-4 xl:relative xl:h-[698px] xl:block">
    <div className="aspect-[3/4] overflow-hidden rounded-input sm:aspect-[4/3] xl:absolute xl:left-0 xl:top-0 xl:h-[580px] xl:w-[458px]"><img alt="Narandžasti transportni kontejneri" className="h-full w-full object-cover" decoding="async" height="1159" loading="lazy" src={missionImage} width="869" /></div>
    <div className="flex min-h-[102px] items-center gap-[21px] rounded-input bg-white px-[22px] py-[13px] xl:absolute xl:left-0 xl:top-[596px] xl:h-[102px] xl:w-[458px]"><div className="h-[72px] w-[72px] shrink-0 overflow-hidden"><img alt="" aria-hidden="true" className="h-[72px] w-[180px] max-w-none object-contain object-left" decoding="async" height="383" loading="lazy" src={certificateImage} width="960" /></div><div><p className="text-[24px] font-semibold leading-[1.3] tracking-[-0.01em]">Excellent</p><p className="text-[20px] leading-[1.3] tracking-[-0.01em]">Privredna komora Srbije</p></div></div>
    <article className="flex min-h-[344px] flex-col rounded-input bg-white p-6 xl:absolute xl:left-[474px] xl:top-0 xl:h-[344px] xl:w-[520px]"><div aria-hidden="true" className="h-[25px] overflow-hidden text-[80px] leading-[.65]">&ldquo;</div><blockquote className="mt-5 max-w-[472px] text-[clamp(1.25rem,3.12vw,1.5rem)] italic leading-[1.3] tracking-[-0.01em]">{mission.quote}</blockquote><p className="mt-auto pt-8 text-[15px] leading-[1.4]"><span className="font-medium">{mission.quoteAuthor}, </span><span className="italic text-source-placeholder">{mission.quoteRole}</span></p></article>
    <article className="relative min-h-[344px] overflow-hidden rounded-input bg-brand-deep-green text-white xl:absolute xl:left-[1010px] xl:top-0 xl:h-[344px] xl:w-[286px]"><img alt="Kamion u pokretu" className="absolute inset-0 h-full w-full object-cover" decoding="async" height="690" loading="lazy" src={statisticImage} width="460" /><div className="absolute inset-0 bg-black/10" /><div className="relative p-6"><p className="text-[41px] font-semibold leading-[1.3] tracking-[-0.01em]">{mission.statisticValue}</p><p className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em]">{mission.statisticLabel}</p></div><div className="absolute bottom-6 left-6 w-[238px]"><ClientLogoMarquee /></div></article>
    <article className="flex min-h-[338px] flex-col rounded-input bg-white p-6 xl:absolute xl:left-[474px] xl:top-[360px] xl:h-[338px] xl:w-[425px]"><p className="text-[41px] font-semibold leading-[1.3] tracking-[-0.01em]">{mission.commitmentValue}</p><h3 className="mt-2 text-[16px] font-semibold leading-[1.3] tracking-[0.02em]">{mission.commitmentTitle}</h3><p className="mt-[11px] max-w-[377px] text-[15px] leading-[1.4] tracking-[-0.01em]">{mission.commitmentBody}</p><AnimatedWipeLink className="relative mt-auto h-[43px] w-fit px-[18px] text-[15px]" to="/o-nama" variant="darkToYellow">{mission.commitmentCta}</AnimatedWipeLink></article>
    <article className="relative flex min-h-[338px] flex-col justify-end overflow-hidden rounded-input bg-brand-logistics-green p-6 text-white xl:absolute xl:left-[915px] xl:top-[360px] xl:h-[338px] xl:w-[381px]"><span className="absolute left-6 top-6 grid size-[55px] place-items-center rounded-full bg-brand-bright-green"><img alt="" aria-hidden="true" className="size-[31px]" src={truckIcon} /></span><p className="max-w-[333px] text-[24px] leading-[1.3] tracking-[-0.01em]">{mission.statement}</p></article>
  </div>
}

export default MissionMediaGrid

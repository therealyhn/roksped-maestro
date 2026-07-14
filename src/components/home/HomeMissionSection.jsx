import MissionMediaGrid from './MissionMediaGrid.jsx'

function HomeMissionSection({mission}) {
  return <section className="min-h-[1034px] bg-brand-canvas px-gutter-fluid pb-[150px] pt-[87px]" id="misija" aria-labelledby="home-mission-heading"><div className="mx-auto max-w-content"><div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"><h2 id="home-mission-heading" className="text-[55px] font-medium leading-none tracking-[-0.05em]">{mission.heading}</h2><p className="max-w-[377px] text-[15px] leading-[1.4] tracking-[-0.01em] md:-mt-1 md:text-right">{mission.body}</p></div><MissionMediaGrid mission={mission} /></div></section>
}

export default HomeMissionSection

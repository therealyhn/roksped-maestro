const iconGeometry = {
  experience: 'left-[107px] top-[47px] h-[150px] w-[129px]',
  clients: 'left-1/2 top-[59px] h-[138px] w-[134px] -translate-x-1/2',
  support: 'left-[87.5px] top-[48px] h-[151px] w-[168px]',
}

function AboutFeatureCard({card}) {
  return (
    <article className="relative h-[382px] w-[345px] shrink-0 overflow-hidden rounded-card-lg border border-[rgb(27_27_27_/_0.08)] bg-brand-canvas shadow-[0_7px_24px_rgb(36_38_43_/_0.14)]">
      <div className={`absolute ${iconGeometry[card.key]}`}>
        <img alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover [filter:url('#about-green-tint')]" src={card.image} />
      </div>

      <h3 className="absolute inset-x-0 top-[229px] text-center text-[22px] font-semibold leading-[23px] tracking-[-0.03em] text-source-services-navy">{card.title}</h3>
      <p className="absolute left-1/2 top-[264px] w-[295px] -translate-x-1/2 text-center text-[16px] leading-[23px] tracking-[0.01em] text-source-services-navy">{card.body}</p>
    </article>
  )
}

export default AboutFeatureCard

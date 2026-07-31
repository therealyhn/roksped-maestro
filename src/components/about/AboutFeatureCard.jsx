const iconGeometry = {
  experience: 'left-[107px] top-[47px] h-[150px] w-[129px]',
  clients: 'left-1/2 top-[59px] h-[138px] w-[134px] -translate-x-1/2',
  support: 'left-1/2 top-[48px] h-[151px] w-[210px] -translate-x-1/2',
}

const iconHoverMotion = {
  experience: 'group-hover:-translate-y-2 group-hover:-rotate-3 group-hover:scale-[1.06]',
  clients: 'group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-[1.07]',
  support: 'group-hover:-translate-y-2 group-hover:-rotate-2 group-hover:scale-[1.05]',
}

function AboutFeatureCard({card}) {
  return (
    <article className="group relative h-[382px] w-full max-w-[345px] shrink-0 overflow-hidden rounded-card-lg border border-[rgb(27_27_27_/_0.08)] bg-brand-canvas shadow-[0_7px_24px_rgb(36_38_43_/_0.14)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-brand-logistics-green/30 hover:shadow-[0_18px_44px_rgb(27_35_35_/_0.16)] motion-reduce:transform-none motion-reduce:transition-none">
      <div
        className={`absolute transition-[transform,filter] duration-500 ease-out group-hover:drop-shadow-[0_16px_16px_rgba(0,168,90,0.22)] motion-reduce:transform-none motion-reduce:transition-none ${iconGeometry[card.key]} ${iconHoverMotion[card.key]}`}
      >
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-contain [filter:url('#about-green-tint')]"
          decoding="async"
          loading="lazy"
          src={card.image}
        />
      </div>

      <h3 className="absolute inset-x-0 top-[229px] text-center text-[22px] font-semibold leading-[23px] tracking-[-0.03em] text-source-services-navy">
        {card.title}
      </h3>
      <p className="absolute left-1/2 top-[264px] w-[295px] -translate-x-1/2 text-center text-[16px] leading-[23px] tracking-[0.01em] text-source-services-navy">
        {card.body}
      </p>
    </article>
  )
}

export default AboutFeatureCard

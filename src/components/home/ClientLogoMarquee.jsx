import {missionClientLogos} from '../../data/missionClientLogos.js'
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference.js'

function ClientLogoMarquee() {
  const prefersReducedMotion = useReducedMotionPreference()

  return (
    <div
      aria-label="Culture Amp, Medium, Attentive, Intercom i Automattic"
      className="h-[15px] w-full overflow-hidden"
      role="img"
    >
      <div
        aria-hidden="true"
        className={`flex w-max ${prefersReducedMotion ? '' : 'animate-[mission-client-marquee_14s_linear_infinite]'}`}
        data-marquee-track
      >
        {Array.from({length: 2}, (_, copyIndex) => (
          <div className="flex h-[15px] w-[550px] shrink-0 items-center gap-5 pr-5" key={copyIndex}>
            {missionClientLogos.map((logo) => (
              <img
                alt=""
                className={`h-[15px] shrink-0 object-contain ${logo.widthClass}`}
                decoding="async"
                key={`${copyIndex}-${logo.name}`}
                src={logo.src}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientLogoMarquee

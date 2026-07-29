import {Link} from 'react-router-dom'
import FigmaArrow from '../ui/FigmaArrow.jsx'

function RequiredLabel({children}) {
  return <>{children}<span className="font-black text-red-600">*</span></>
}

const fieldClassName = 'h-[41px] w-full rounded-[46px] border border-source-input-border-alt bg-transparent px-4 text-[15px] outline-none focus-visible:border-brand-signal-yellow focus-visible:ring-2 focus-visible:ring-brand-signal-yellow/40'

function ContactForm({content}) {
  return (
    <form action="mailto:office@roksped.rs" className="mx-auto mt-16 grid w-full grid-cols-2 gap-x-4 gap-y-6 lg:absolute lg:left-[857px] lg:top-[156px] lg:mt-0 lg:block lg:h-[629px] lg:w-[446px]" encType="text/plain" method="post">
      <label className="col-span-1 flex flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] lg:absolute lg:left-0 lg:top-0 lg:w-[212px]">
        <span><RequiredLabel>{content.firstNameLabel}</RequiredLabel></span>
        <input autoComplete="given-name" className={fieldClassName} name="firstName" required type="text" />
      </label>
      <label className="col-span-1 flex flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] lg:absolute lg:left-[234px] lg:top-0 lg:w-[212px]">
        <span>{content.lastNameLabel}</span>
        <input autoComplete="family-name" className={fieldClassName} name="lastName" type="text" />
      </label>
      <label className="col-span-2 flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] lg:absolute lg:left-0 lg:top-[101px]">
        <span><RequiredLabel>{content.companyLabel}</RequiredLabel></span>
        <input autoComplete="organization" className={fieldClassName} name="company" required type="text" />
      </label>
      <label className="col-span-2 flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] lg:absolute lg:left-0 lg:top-[202px]">
        <span><RequiredLabel>{content.emailLabel}</RequiredLabel></span>
        <input autoComplete="email" className={fieldClassName} name="email" required type="email" />
      </label>
      <label className="col-span-2 flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] lg:absolute lg:left-0 lg:top-[303px]">
        <span><RequiredLabel>{content.messageLabel}</RequiredLabel></span>
        <input className={fieldClassName} name="message" required type="text" />
      </label>
      <fieldset className="col-span-2 w-full lg:absolute lg:left-0 lg:top-[403px] lg:h-[75px]">
        <legend className="text-[16px] font-medium leading-[1.15] tracking-[-0.01em]"><RequiredLabel>{content.serviceLegend}</RequiredLabel></legend>
        <div className="mt-3 grid grid-cols-1 gap-y-[11px] sm:grid-cols-2 lg:grid-cols-3">
          {content.serviceOptions.map((option) => (
            <label className="flex h-[17px] items-center gap-[11px] whitespace-nowrap text-[12px] font-medium leading-[1.15] tracking-[-0.01em]" key={option.value}>
              <input className="size-[17px] appearance-none rounded-full border-[0.6px] border-source-input-border checked:border-[5px] checked:border-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-signal-yellow" name="service" required type="radio" value={option.value} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className="col-span-2 w-full text-[12px] font-medium leading-[1.3] tracking-[-0.01em] lg:absolute lg:left-0 lg:top-[508px] lg:h-12">
        {content.privacyPrefix}{' '}
        <Link className="underline decoration-[1.3px] underline-offset-2" to="/politika-privatnosti">{content.privacyLink}</Link>.
      </p>
      <button className="col-span-2 inline-flex h-[43px] w-[138px] items-center gap-2.5 justify-self-end rounded-button bg-brand-ink px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] text-white lg:absolute lg:left-[308px] lg:top-[586px]" type="submit">
        <span>{content.submitLabel}</span>
        <span className="grid size-[19px] shrink-0 place-items-center rounded-full bg-brand-signal-yellow"><FigmaArrow className="size-[9px]" direction="dark" /></span>
      </button>
    </form>
  )
}

export default ContactForm

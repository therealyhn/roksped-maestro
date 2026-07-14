import {Link} from 'react-router-dom'
import FigmaArrow from '../ui/FigmaArrow.jsx'

function RequiredLabel({children}) {
  return <>{children}<span className="font-black text-red-600">*</span></>
}

const fieldClassName = 'h-[41px] w-full rounded-[46px] border border-source-input-border-alt bg-transparent px-4 text-[15px] outline-none'

function ContactForm({content}) {
  return (
    <form action="mailto:office@roksped.rs" className="absolute left-[857px] top-[156px] h-[629px] w-[446px]" encType="text/plain" method="post">
      <label className="absolute left-0 top-0 flex w-[212px] flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em]">
        <span><RequiredLabel>{content.firstNameLabel}</RequiredLabel></span>
        <input className={fieldClassName} name="firstName" required type="text" />
      </label>
      <label className="absolute left-[234px] top-0 flex w-[212px] flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em]">
        <span>{content.lastNameLabel}</span>
        <input className={fieldClassName} name="lastName" type="text" />
      </label>
      <label className="absolute left-0 top-[101px] flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em]">
        <span><RequiredLabel>{content.companyLabel}</RequiredLabel></span>
        <input className={fieldClassName} name="company" required type="text" />
      </label>
      <label className="absolute left-0 top-[202px] flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em]">
        <span><RequiredLabel>{content.emailLabel}</RequiredLabel></span>
        <input className={fieldClassName} name="email" required type="email" />
      </label>
      <label className="absolute left-0 top-[303px] flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em]">
        <span><RequiredLabel>{content.messageLabel}</RequiredLabel></span>
        <input className={fieldClassName} name="message" required type="text" />
      </label>
      <fieldset className="absolute left-0 top-[403px] h-[75px] w-full">
        <legend className="text-[16px] font-medium leading-[1.15] tracking-[-0.01em]"><RequiredLabel>{content.serviceLegend}</RequiredLabel></legend>
        <div className="mt-3 grid grid-cols-3 gap-y-[11px]">
          {content.serviceOptions.map((option) => (
            <label className="flex h-[17px] items-center gap-[11px] whitespace-nowrap text-[12px] font-medium leading-[1.15] tracking-[-0.01em]" key={option.value}>
              <input className="size-[17px] appearance-none rounded-full border-[0.6px] border-source-input-border checked:border-[5px] checked:border-brand-ink" name="service" required type="radio" value={option.value} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className="absolute left-0 top-[508px] h-12 w-full text-[12px] font-medium leading-[1.3] tracking-[-0.01em]">
        {content.privacyPrefix}{' '}
        <Link className="underline decoration-[1.3px] underline-offset-2" to="/politika-privatnosti">{content.privacyLink}</Link>.
      </p>
      <button className="absolute left-[308px] top-[586px] inline-flex h-[43px] w-[138px] items-center gap-2.5 rounded-button bg-brand-ink px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] text-white" type="submit">
        <span>{content.submitLabel}</span>
        <span className="grid size-[19px] shrink-0 place-items-center rounded-full bg-brand-signal-yellow"><FigmaArrow className="size-[9px]" direction="dark" /></span>
      </button>
    </form>
  )
}

export default ContactForm

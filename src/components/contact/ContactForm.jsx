import {Link} from 'react-router-dom'
import AnimatedWipeLink from '../ui/AnimatedWipeLink.jsx'

function RequiredLabel({children}) {
  return <>{children}<span className="font-black text-red-600">*</span></>
}

const fieldClassName = 'h-[41px] w-full rounded-[46px] border border-source-input-border-alt bg-transparent px-4 text-[15px] outline-none focus-visible:border-brand-signal-yellow focus-visible:ring-2 focus-visible:ring-brand-signal-yellow/40'

function ContactForm({content}) {
  return (
    <form action="mailto:office@roksped.rs" className="mx-auto mt-16 grid w-full grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 xl:absolute xl:left-[857px] xl:top-[156px] xl:mt-0 xl:block xl:h-[629px] xl:w-[446px]" encType="text/plain" method="post">
      <label className="col-span-1 flex flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] xl:absolute xl:left-0 xl:top-0 xl:w-[212px]">
        <span><RequiredLabel>{content.firstNameLabel}</RequiredLabel></span>
        <input autoComplete="given-name" className={fieldClassName} name="firstName" required type="text" />
      </label>
      <label className="col-span-1 flex flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] xl:absolute xl:left-[234px] xl:top-0 xl:w-[212px]">
        <span>{content.lastNameLabel}</span>
        <input autoComplete="family-name" className={fieldClassName} name="lastName" type="text" />
      </label>
      <label className="col-span-1 flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] sm:col-span-2 xl:absolute xl:left-0 xl:top-[101px]">
        <span><RequiredLabel>{content.companyLabel}</RequiredLabel></span>
        <input autoComplete="organization" className={fieldClassName} name="company" required type="text" />
      </label>
      <label className="col-span-1 flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] sm:col-span-2 xl:absolute xl:left-0 xl:top-[202px]">
        <span><RequiredLabel>{content.emailLabel}</RequiredLabel></span>
        <input autoComplete="email" className={fieldClassName} name="email" required type="email" />
      </label>
      <label className="col-span-1 flex w-full flex-col gap-3 text-[16px] font-medium leading-[1.15] tracking-[-0.01em] sm:col-span-2 xl:absolute xl:left-0 xl:top-[303px]">
        <span><RequiredLabel>{content.messageLabel}</RequiredLabel></span>
        <input className={fieldClassName} name="message" required type="text" />
      </label>
      <fieldset className="col-span-1 w-full sm:col-span-2 xl:absolute xl:left-0 xl:top-[403px] xl:h-[75px]">
        <legend className="text-[16px] font-medium leading-[1.15] tracking-[-0.01em]"><RequiredLabel>{content.serviceLegend}</RequiredLabel></legend>
        <div className="mt-3 grid grid-cols-1 gap-y-[11px] sm:grid-cols-2 xl:grid-cols-3">
          {content.serviceOptions.map((option) => (
            <label className="flex h-[17px] items-center gap-[11px] whitespace-nowrap text-[12px] font-medium leading-[1.15] tracking-[-0.01em]" key={option.value}>
              <input className="size-[17px] appearance-none rounded-full border-[0.6px] border-source-input-border checked:border-[5px] checked:border-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-signal-yellow" name="service" required type="radio" value={option.value} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className="col-span-1 w-full text-[12px] font-medium leading-[1.3] tracking-[-0.01em] sm:col-span-2 xl:absolute xl:left-0 xl:top-[508px] xl:h-12">
        {content.privacyPrefix}{' '}
        <Link className="underline decoration-[1.3px] underline-offset-2" to="/politika-privatnosti">{content.privacyLink}</Link>.
      </p>
      <AnimatedWipeLink
        as="button"
        className="relative col-span-1 h-[43px] w-[138px] justify-self-end px-[18px] text-[15px] leading-[1.3] tracking-[-0.01em] sm:col-span-2 xl:absolute xl:left-[308px] xl:top-[586px]"
        type="submit"
        variant="darkToYellow"
      >
        {content.submitLabel}
      </AnimatedWipeLink>
    </form>
  )
}

export default ContactForm

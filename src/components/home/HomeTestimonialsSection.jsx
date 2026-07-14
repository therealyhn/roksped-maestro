const figmaTestimonials = 'https://www.figma.com/api/mcp/asset/55ea1e0e-7fab-4869-b629-5ef02448d289'

function HomeTestimonialsSection({showcase}) {
  return <section className="relative min-h-[760px] overflow-hidden bg-brand-logistics-green" aria-labelledby="home-testimonials-heading"><h2 className="sr-only" id="home-testimonials-heading">{showcase.heading}</h2><blockquote className="sr-only">{showcase.quote}<footer>{showcase.author}</footer></blockquote><img alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" src={figmaTestimonials} /></section>
}

export default HomeTestimonialsSection

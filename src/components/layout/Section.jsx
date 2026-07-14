function Section({ children, className = '', ...props }) {
  return (
    <section className={`w-full ${className}`.trim()} {...props}>
      {children}
    </section>
  )
}

export default Section

function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-content px-gutter-fluid ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Container

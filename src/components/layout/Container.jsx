function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full ${className}`.trim()}>{children}</div>
}

export default Container

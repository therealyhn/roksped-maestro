const arrows = Object.freeze({
  dark: '/assets/shared/arrow-dark.svg',
  left: 'https://www.figma.com/api/mcp/asset/5f4ade28-6104-4ea5-8e96-629ddb369e2b',
  right: 'https://www.figma.com/api/mcp/asset/5634d3cd-33f1-4a86-952e-cec36f0f0c2e',
})

function FigmaArrow({direction = 'right', className = 'size-[15px]'}) {
  const source = direction === 'left' ? arrows.left : direction === 'dark' ? arrows.dark : arrows.right
  return <img alt="" aria-hidden="true" className={className} src={source} />
}

export default FigmaArrow

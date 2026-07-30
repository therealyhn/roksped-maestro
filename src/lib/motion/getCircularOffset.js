function getCircularOffset(itemIndex, activeIndex, itemCount) {
  let offset = (itemIndex - activeIndex + itemCount) % itemCount

  if (offset > itemCount / 2) {
    offset -= itemCount
  }

  return offset
}

export default getCircularOffset

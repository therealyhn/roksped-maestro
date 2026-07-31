function getVisibleSlots(sideScale) {
  return {
    '-1': {
      x: 'var(--testimonial-orbit-x)',
      y: 'calc(var(--testimonial-orbit-y) * -1)',
      scale: sideScale,
      opacity: 1,
      zIndex: 2,
    },
    0: {
      x: 'var(--testimonial-active-x, 0px)',
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 3,
    },
    1: {
      x: 'var(--testimonial-orbit-x)',
      y: 'var(--testimonial-orbit-y)',
      scale: sideScale,
      opacity: 1,
      zIndex: 2,
    },
  }
}

function getTestimonialCircleMotion(offset, sideScale = 0.693) {
  const visibleSlots = getVisibleSlots(sideScale)

  if (visibleSlots[offset]) {
    return visibleSlots[offset]
  }

  const isAbove = offset < 0

  return {
    x: 'var(--testimonial-orbit-x)',
    y: isAbove
      ? 'calc(var(--testimonial-orbit-y) * -1.8)'
      : 'calc(var(--testimonial-orbit-y) * 1.8)',
    scale: 0.55,
    opacity: 0,
    zIndex: 1,
  }
}

export default getTestimonialCircleMotion

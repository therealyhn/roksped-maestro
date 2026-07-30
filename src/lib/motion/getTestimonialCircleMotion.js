const visibleSlots = {
  '-1': {
    x: 'var(--testimonial-orbit-x)',
    y: 'calc(var(--testimonial-orbit-y) * -1)',
    scale: 0.693,
    opacity: 1,
    zIndex: 2,
  },
  0: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3,
  },
  1: {
    x: 'var(--testimonial-orbit-x)',
    y: 'var(--testimonial-orbit-y)',
    scale: 0.693,
    opacity: 1,
    zIndex: 2,
  },
}

function getTestimonialCircleMotion(offset) {
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

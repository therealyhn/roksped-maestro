import { springs } from './springs.js'

export const fadeIn = Object.freeze({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: springs.gentle,
  },
})

export const fadeUp = Object.freeze({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
})

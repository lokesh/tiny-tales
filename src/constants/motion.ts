export const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 150,
  damping: 15,
  mass: 0.75,
}

export const SPRING_FAST_TRANSITION = {
  type: 'spring',
  stiffness: 150,
  damping: 15,
  mass: 0.5,
}

export const CUSTOM_MOTION_DIRECTIVES = {
  'small-slide-up': {
    initial: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: SPRING_TRANSITION,
    },
  },
  'stamp': {
    initial: {
      opacity: 0,
      scale: 4,
      y: -64,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: SPRING_TRANSITION,
    },
  },
}
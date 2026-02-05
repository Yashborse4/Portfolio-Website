/**
 * Centralized Animation System for Portfolio
 * Premium Framer Motion variants and configurations
 */

// ========================================
// TIMING CONSTANTS
// ========================================
export const timings = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  extraSlow: 0.8,
};

export const easings = {
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.68, -0.6, 0.32, 1.6],
  sharp: [0.4, 0, 0.6, 1],
};

// ========================================
// PAGE TRANSITIONS
// ========================================
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easings.smooth }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: easings.smooth }
  }
};

// ========================================
// STAGGER CHILDREN CONTAINERS
// ========================================
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

// ========================================
// ELEMENT REVEAL VARIANTS
// ========================================
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.smooth }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.smooth }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: easings.bounce,
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  }
};

// ========================================
// TEXT ANIMATIONS
// ========================================
export const letterReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

export const wordReveal = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100
    }
  }
};

// ========================================
// CARD ANIMATIONS
// ========================================
export const cardHover = {
  scale: 1.02,
  y: -8,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20
  }
};

export const cardTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

export const card3D = {
  hidden: { 
    opacity: 0, 
    rotateX: 15, 
    y: 50,
    transformPerspective: 1000 
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.smooth
    }
  }
};

// ========================================
// ICON & BADGE ANIMATIONS
// ========================================
export const iconPop = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  }
};

export const badgeFloat = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(59, 130, 246, 0.4)',
      '0 0 0 15px rgba(59, 130, 246, 0)',
      '0 0 0 0 rgba(59, 130, 246, 0)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
};

// ========================================
// SCROLL INDICATOR
// ========================================
export const scrollBounce = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// ========================================
// MODAL ANIMATIONS
// ========================================
export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export const modalContent = {
  hidden: { 
    opacity: 0, 
    scale: 0.9, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 200
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2 }
  }
};

// ========================================
// PROGRESS ANIMATIONS
// ========================================
export const progressBar = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (custom) => ({
    scaleX: custom / 100,
    transition: {
      duration: 1,
      ease: easings.smooth,
      delay: 0.3
    }
  })
};

export const countUp = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

// ========================================
// PARTICLE SYSTEM CONFIG
// ========================================
export const particleConfig = {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#3b82f6' },
    shape: { type: 'circle' },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#3b82f6',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
};

// ========================================
// 3D PROFILE CARD
// ========================================
export const profile3D = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    rotateY: -30,
    rotateX: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: easings.smooth
    }
  }
};

// ========================================
// TIMELINE ANIMATIONS
// ========================================
export const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth
    }
  }
};

export const timelineIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
};

// ========================================
// BENTO GRID ANIMATIONS
// ========================================
export const bentoItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 }
  }
};

// ========================================
// SKILL ORBIT ANIMATION
// ========================================
export const orbitRotate = (delay = 0, duration = 20) => ({
  animate: {
    rotate: 360,
    transition: {
      duration,
      repeat: Infinity,
      ease: 'linear',
      delay
    }
  }
});

export const skillFloat = {
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export default {
  timings,
  easings,
  pageVariants,
  staggerContainer,
  staggerContainerFast,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  letterReveal,
  wordReveal,
  cardHover,
  cardTap,
  card3D,
  iconPop,
  badgeFloat,
  pulseGlow,
  scrollBounce,
  modalBackdrop,
  modalContent,
  progressBar,
  countUp,
  particleConfig,
  profile3D,
  timelineVariants,
  timelineIconVariants,
  bentoItem,
  orbitRotate,
  skillFloat
};

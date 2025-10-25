/**
 * Centralized Animation Configuration for NUMUN Website
 *
 * This file contains all Framer Motion animation variants, transitions, and presets.
 * Import these constants to maintain consistency across the application.
 *
 * Usage example:
 * import { headerAnimations, transitions } from '@/config/animations'
 * <motion.div
 *   animate={headerAnimations.row1(showTopRow)}
 *   transition={transitions.smooth}
 * >
 */

import { Transition, Variants } from "framer-motion";

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
  // Smooth ease-in-out transition
  smooth: {
    duration: 0.3,
    ease: "easeInOut",
  } as Transition,

  // Quick snap transition
  quick: {
    duration: 0.2,
    ease: "easeOut",
  } as Transition,

  // Slow, smooth transition
  slow: {
    duration: 0.5,
    ease: "easeInOut",
  } as Transition,

  // Page load animation
  pageLoad: {
    duration: 0.6,
    ease: "easeOut",
  } as Transition,

  // Bouncy spring transition
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  } as Transition,

  // Gentle spring
  springGentle: {
    type: "spring",
    stiffness: 200,
    damping: 25,
  } as Transition,
};

// ============================================================================
// HEADER ANIMATIONS
// ============================================================================

export const headerAnimations = {
  /**
   * Row 1 animation - slides up/down based on scroll state
   * @param showTopRow - Whether the top row should be visible
   */
  row1: (showTopRow: boolean) => ({
    y: showTopRow ? 0 : "-100%",
  }),

  /**
   * Row 2 animation - moves up to fill Row 1's space when hidden
   * @param showTopRow - Whether the top row should be visible
   * @param row1Height - The measured height of Row 1 in pixels
   */
  row2: (showTopRow: boolean, row1Height: number) => ({
    y: showTopRow ? 0 : (row1Height ? -row1Height : 0),
  }),
};

// ============================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================================================

export const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transitions.pageLoad,
    },
  } as Variants,

  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.pageLoad,
    },
  } as Variants,

  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.pageLoad,
    },
  } as Variants,

  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.pageLoad,
    },
  } as Variants,

  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: transitions.pageLoad,
    },
  } as Variants,

  // Container variant for staggering children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as Variants,

  // Child item for stagger
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.quick,
    },
  } as Variants,
};

// ============================================================================
// HOVER ANIMATIONS
// ============================================================================

export const hoverAnimations = {
  // Button hover effect
  button: {
    scale: 1.05,
    transition: transitions.quick,
  },

  // Button tap effect
  buttonTap: {
    scale: 0.98,
  },

  // Card lift effect
  cardLift: {
    y: -8,
    transition: transitions.smooth,
  },

  // Stronger card lift
  cardLiftStrong: {
    y: -12,
    transition: transitions.smooth,
  },

  // Image zoom effect
  imageZoom: {
    scale: 1.1,
    transition: transitions.smooth,
  },

  // Subtle image zoom
  imageZoomSubtle: {
    scale: 1.05,
    transition: transitions.smooth,
  },

  // Icon scale
  iconScale: {
    scale: 1.15,
    transition: transitions.quick,
  },

  // Slide right
  slideRight: {
    x: 8,
    transition: transitions.quick,
  },

  // Tilt effect
  tilt: {
    rotate: -1,
    y: -8,
    transition: transitions.smooth,
  },
};

// ============================================================================
// PAGE TRANSITION ANIMATIONS
// ============================================================================

export const pageTransitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: transitions.smooth,
  },

  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: transitions.smooth,
  },
};

// ============================================================================
// HERO SECTION ANIMATIONS
// ============================================================================

export const heroAnimations = {
  logo: {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  },

  comingSoon: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  },

  title1: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  },

  title2: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  },

  message: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 1.0,
        ease: "easeOut",
      },
    },
  },

  buttons: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  },
};

// ============================================================================
// MICRO-ANIMATIONS
// ============================================================================

export const microAnimations = {
  // Language toggle
  languageSwitch: {
    rotate: 360,
    scale: [1, 1.2, 1],
    transition: transitions.smooth,
  },

  // Decorative corner draw-in
  cornerDraw: {
    pathLength: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  // Stats counter
  statsCounter: {
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },

  // Pulse effect
  pulse: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get stagger delay for child elements
 * @param index - Index of the child element
 * @param delayPerItem - Delay between each item in seconds (default: 0.1)
 */
export const getStaggerDelay = (index: number, delayPerItem: number = 0.1): number => {
  return index * delayPerItem;
};

/**
 * Create a stagger container with custom delay
 * @param delayPerItem - Delay between each item in seconds
 */
export const createStaggerContainer = (delayPerItem: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delayPerItem,
    },
  },
});

/**
 * Viewport options for scroll animations
 */
export const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
};

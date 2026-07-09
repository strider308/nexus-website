export const MOTION_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const MOTION_DURATIONS = {
  micro: 0.2,
  normal: 0.5,
  reveal: 0.7,
  hero: 0.9,
} as const;

export const fadeUp = (reduced: boolean = false) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.reveal,
      ease: MOTION_EASE,
    },
  },
});

export const fadeIn = () => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.normal,
      ease: MOTION_EASE,
    },
  },
});

export const pullUpWord = (reduced: boolean = false) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.normal,
      ease: MOTION_EASE,
    },
  },
});

export const cardReveal = (reduced: boolean = false) => ({
  hidden: { opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.reveal,
      ease: MOTION_EASE,
    },
  },
});

export const staggerContainer = (reduced: boolean = false, delay: number = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduced ? 0 : delay,
    },
  },
});

export const softScale = (reduced: boolean = false) => ({
  hidden: { opacity: 0, scale: reduced ? 1 : 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION_DURATIONS.normal,
      ease: MOTION_EASE,
    },
  },
});

export const lineDraw = () => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.hero,
      ease: MOTION_EASE,
    },
  },
});

export const panelSwap = (reduced: boolean = false) => ({
  hidden: { opacity: 0, x: reduced ? 0 : -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: MOTION_DURATIONS.normal,
      ease: MOTION_EASE,
    },
  },
});

export const activeIndicator = {
  type: "tween" as const,
  ease: MOTION_EASE,
  duration: MOTION_DURATIONS.micro,
};

export const pageEnter = (reduced: boolean = false) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.hero,
      ease: MOTION_EASE,
    },
  },
});

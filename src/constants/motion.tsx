export const pageTransition = {
  initial: { transform: "translateY(0%)" },
  animate: { transform: "translateY(100%)" },
  exit: { transform: "translateY(0%)" },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const pageContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const slideLeft = {
  initial: {
    transform: "translateX(-100%)",
    transition: {
      when: "afterChildren",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  animate: {
    transform: "translateX(0%)",
    transition: {
      when: "beforeChildren",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    transform: "translateX(-100%)",
    transition: {
      when: "afterChildren",
      duration: 0.5,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const slideRight = {
  initial: {
    transform: "translateX(100%)",
    transition: {
      when: "afterChildren",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  animate: {
    transform: "translateX(0%)",
    transition: {
      when: "beforeChildren",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    transform: "translateX(100%)",
    transition: {
      when: "afterChildren",
      duration: 0.5,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const slideLeftStagger = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
  exit: {
    x: -100,
    opacity: 0,
  },
  transition: { duration: 0.75, ease: "easeInOut" },
};
export const slideRightStagger = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
  exit: {
    x: 100,
    opacity: 0,
  },
  transition: { duration: 0.75, ease: "easeInOut" },
};

export const initState = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      // when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      // when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const textFieldAnimate = {
  initial: { top: -14, fontSize: "12px", opacity: 0.6 },
  animate: { top: 7, fontSize: "20px", opacity: 0.6 },
  hide: { top: 7, fontSize: "20px", opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

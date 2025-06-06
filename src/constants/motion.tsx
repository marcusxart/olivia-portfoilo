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

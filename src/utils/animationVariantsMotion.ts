export const textAnimation = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.6 },
  },
};

export const listAnimation = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 0.5 },
  }),
};

// export const pulsAnimation = {
//   hidden: {
//     scale: 1,
//   },
//   visible: {
//     scale: 1.05,
//     transition: { duration: 1, repeat: Infinity },
//   },
// };

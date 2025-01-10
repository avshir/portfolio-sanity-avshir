import { motion } from "motion/react";

import "./index.css";

interface AnimatedLettersMotionProps {
  animatedText: string;
}

const AnimatedLettersMotion = ({
  animatedText,
}: AnimatedLettersMotionProps) => {
  const strArray: string[] = animatedText.split("");

  const bounceIn = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        type: "spring",
        bounce: 0.25,
      },
    }),
  };

  return (
    <span>
      {strArray.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="text-animate-hover hover:text-accent"
          variants={bounceIn}
          initial="hidden"
          animate="visible"
          custom={i + 2}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedLettersMotion;

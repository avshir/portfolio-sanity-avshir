import { motion } from "motion/react";

import { Container } from "../Container";
import { interestingFacts } from "../../constants/facts";
import {
  textAnimation,
  listAnimation,
} from "../../utils/animationVariantsMotion";
import ReactIcon from "../../assets/react.svg";

const FactsSection = () => {
  return (
    <motion.section
      id="facts-section"
      className="py-12 sm:py-20 xl:py-28 bg-neutral-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <div className="max-w-xl mx-auto space-y-2">
          <motion.h2 variants={textAnimation}>
            Интересные факты о <span className="h2-text-span">голубике</span>
          </motion.h2>
          <motion.img
            variants={textAnimation}
            src={ReactIcon}
            alt="ягоды голубики"
            className="size-24 sm:size-28 lg:size-32 mx-auto"
          />
        </div>
        <ul className="flex flex-wrap">
          {interestingFacts &&
            interestingFacts.map((fact, index) => (
              <motion.li
                key={fact.id}
                variants={listAnimation}
                custom={index + 2}
                className="md:basis-1/2 lg:basis-1/3 p-4"
              >
                <h3 className="my-2 text-lg md:text-lg">{fact.title}</h3>
                <p className="text-sm">{fact.text}</p>
              </motion.li>
            ))}
        </ul>
      </Container>
    </motion.section>
  );
};

export default FactsSection;

import { motion } from "motion/react";

import { Container } from "../Container";
import { webTools } from "../../constants/webTools";
import {
  textAnimation,
  listAnimation,
} from "../../utils/animationVariantsMotion";

const WebToolsSection = () => {
  return (
    <motion.section
      id="tools-section"
      className="py-12 sm:py-20 xl:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <motion.h2 variants={textAnimation} className="mb-6 md:mb-10">
          Use technology
        </motion.h2>
        <ul className="max-w-xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4">
          {webTools &&
            webTools.map((item, index) => (
              <motion.li
                key={item.id}
                variants={listAnimation}
                custom={index + 2}
                className="p-2 flex flex-col items-center"
              >
                <div className="group flex items-center justify-center size-20 md:size-24 rounded bg-accent-gray transition-colors">
                  {
                    <item.icon
                      className="size-12 md:size-16"
                      color={item.color ? item.color : "black"}
                      aria-hidden="true"
                    />
                  }
                </div>
                <p className="text-sm font-semibold mt-2">{item.title}</p>
              </motion.li>
            ))}
        </ul>
      </Container>
    </motion.section>
  );
};

export default WebToolsSection;

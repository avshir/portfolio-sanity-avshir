import { useEffect, useState } from "react";

import { Container } from "../../Container";
import AnimatedLettersSCSS from "./AnimatedLettersSCSS";

interface AnimatedLettersComponentProps {
  animatedText: string;
}

const AnimatedLettersComponent = ({
  animatedText,
}: AnimatedLettersComponentProps) => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArray = animatedText.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Container className="text-6xl font-bold text-primary text-center my-10">
        <AnimatedLettersSCSS
          letterClass={letterClass}
          strArray={textArray}
          startDelay={2}
        />
      </Container>
    </section>
  );
};

export default AnimatedLettersComponent;

import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container";

import AnimatedLettersComponent from "../components/Animated/AnimatedLettersComponent";
import AnimatedLettersMotion from "../components/Animated/AnimatedLettersMotion";
import CubespinnerAnimation from "../components/Animated/CubespinnerAnimation";

const TempPage = () => {
  const animatedText1 = "Web Developer";
  const animatedText2 = "Frontend Developer";

  return (
    <ContainerMain>
      <Container className="relative z-5 max-w-md md:max-w-3xl">
        <h1 className="font-accent">h1 TempPage</h1>
        <h1 className="cursive">h1 TempPage corsive</h1>
        <h2 className="text-accent">h2 TempPage</h2>
        <h3>h3 TempPage</h3>
        <h4>h4 TempPage</h4>
        <h5>h5 TempPage</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          quidem id eos perspiciatis eum. Labore maiores rerum impedit sapiente
          doloremque?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          quidem id eos perspiciatis eum. Labore maiores rerum impedit sapiente
          doloremque?
        </p>
      </Container>

      <h2 className="text-accent">Animation</h2>
      {/* animation - AnimatedLetters with SCSS */}
      <AnimatedLettersComponent animatedText={animatedText1} />
      <section className="bg-black">
        <div className="size-[380px] mx-auto relative">
          <CubespinnerAnimation />
        </div>
      </section>
      <section>
        <Container className="text-6xl font-bold text-primary text-center my-10">
          <AnimatedLettersMotion animatedText={animatedText2} />
        </Container>
      </section>
    </ContainerMain>
  );
};

export default TempPage;

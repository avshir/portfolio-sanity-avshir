import { Container } from "../Container";
import { laptop_code_JPG } from "../../constants/images";

import CubespinnerAnimation from "../Animated/CubespinnerAnimation/index";
import AnimatedLettersMotion from "../Animated/AnimatedLettersMotion";

const MainScreenSection = () => {
  const animatedText = "Web development";

  return (
    <section className="relative w-full h-screen">
      <img
        src={laptop_code_JPG}
        alt="computer code"
        className="absolute object-cover w-full h-full"
      />
      {/* overlay on img */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* content */}
      <Container className="relative z-10 max-w-2xl flex flex-col items-center justify-center py-8 sm:py-12 lg:py-18 text-neutral-50">
        <h2 className="mt-12 font-bold text-accent">Anna Shirinskaya</h2>
        <h1 className="text-4xl md:text-6xl font-bold my-4 md:my-8">
          <AnimatedLettersMotion animatedText={animatedText} />
        </h1>
        <p className="text-lg text-neutral-50">
          Development modern landing pages, business card site and other
        </p>

        <div className="relative my-8 size-[380px] mx-auto top-[-20px] md:top-0">
          <CubespinnerAnimation />
        </div>
      </Container>
    </section>
  );
};

export default MainScreenSection;

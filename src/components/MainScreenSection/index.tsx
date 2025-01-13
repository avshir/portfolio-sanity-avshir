import { Link } from "react-router";
import { Container } from "../Container";
import Button from "./../Button";

import { laptop_code_JPG } from "../../constants/my_images";
import { FiDownload } from "react-icons/fi";

import CubespinnerAnimation from "../Animated/CubespinnerAnimation/index";
import AnimatedLettersMotion from "../Animated/AnimatedLettersMotion";

const MainScreenSection = () => {
  const animatedText = "Web development";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={laptop_code_JPG}
        alt="computer code"
        className="absolute object-cover w-full h-full"
      />
      {/* overlay on img */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* content */}
      <Container className="relative z-10 py-8 sm:py-12 lg:py-18 text-neutral-50">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="max-w-2xl flex flex-col">
            <h2 className="lg:text-left mt-4 sm:mt-12 mb-4 font-bold text-accent">
              Anna Shirinskaya
            </h2>
            <h1 className="lg:text-left text-4xl md:text-6xl font-bold my-4 md:my-8">
              <AnimatedLettersMotion animatedText={animatedText} />
            </h1>
            <p className="text-lg text-neutral-50 mb-6">
              Development modern landing pages, business card site and other.{" "}
              <br />
              Also I am interested in work full time as a frontend developer
              remotely from Poland.
            </p>
            <div className="flex items-center sm:justify-between flex-col gap-4 sm:flex-row ">
              <Link to="/contact">
                <Button size="lg" color="accent" className="w-48">
                  Contact me
                </Button>
              </Link>
              <a
                href="/CV_Frontend_Developer_Anna_Shirinskaya_12.2024.pdf"
                download="CV_Frontend_Developer_Anna_Shirinskaya.pdf"
              >
                <Button
                  size="lg"
                  color="outlineAccent"
                  className="w-48 flex items-center gap-2"
                >
                  <FiDownload className="size-5" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block my-8 size-[380px] mx-auto top-[-20px] md:top-0 md:top-[30px] ">
            <CubespinnerAnimation />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainScreenSection;

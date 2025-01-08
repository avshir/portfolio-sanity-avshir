import { useState } from "react";

import { Container } from "../components/Container";
import { ContainerMain } from "../components/ContainerMain";

import { secret_forest_JPG } from "../constants/images";

interface IAuthor {
  name: string;
  authorImage: string;
  bio: string;
}

const authorData: IAuthor = {
  name: "Anna",
  authorImage: "xxx",
  bio: "I'm a frontend developer! (●'◡'●). I like JavaScript and React ❤️!",
};

const AboutPage = () => {
  const [author, setAuthor] = useState(authorData);

  if (!author) return <div>Loading ...</div>;

  return (
    <ContainerMain className="relative overflow-hidden py-0 sm:py-0 lg:py-0">
      <img
        src={secret_forest_JPG}
        alt="dark image"
        className="absolute object-cover w-full h-full"
      />
      <Container className="relative max-w-md md:max-w-3xl py-8 sm:py-12 lg:py-18">
        <div className="flex flex-col justify-center text-neutral-50">
          <h1>
            Hey there. I'm{" "}
            <span className="text-accent font-accent">{author.name}</span>
          </h1>
          <p className="text-neutral-50 max-w-[240px] mx-auto">{author.bio}</p>
          {/* <div className="prose lg:prose-xl text-white">
            <BlockContent
              blocks={author.bio}
              projectId="ccoonwf1"
              dataset="production"
            />
          </div> */}
        </div>
      </Container>
    </ContainerMain>
  );
};

export default AboutPage;

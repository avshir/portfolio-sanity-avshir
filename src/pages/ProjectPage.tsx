import { useEffect, useState } from "react";
import { sanityClient } from "../sanity";

import { Container } from "../components/Container";
import { ContainerMain } from "../components/ContainerMain";
import { IProject } from "../models";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState<IProject[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch<IProject[]>(
        `*[_type == "project"]{
      title,
      date,
      place,
      description, projectType, link, tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <ContainerMain>
      <Container>
        <h1 className="text-accent">My Projects</h1>
        <p className="text-sm md:text-lg text-center mt-0 md:mt-2">
          Welcome to my projects page!
        </p>
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 md:mt-8">
          {projectData &&
            projectData.map((project) => (
              <article
                className="relative rounded shadow-xl bg-white p-8"
                key={project.date}
              >
                <h3 className="font-bold mb-2 hover:text-accent">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs">
                  <div className="flex gap-2 mb-1">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                  </div>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <p className="my-4 md:my-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-accent font-semibold text-lg hover:text-accent/80"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      😊
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </Container>
    </ContainerMain>
  );
};

export default ProjectPage;

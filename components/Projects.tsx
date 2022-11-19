import Image from "next/image"
import Link from "next/link"

import ModernButton from "./ModernButton"

import ProjectsDev from '../data/projects.json'


const ProjectCard = ({
  linkPreview,
  linkGitHub,
  image,
  name,
  languages
} : {
  linkPreview: string;
  linkGitHub: string;
  image: string;
  name: string;
  languages: string[];
}) => {
  return (
    <div className="projectsContainer__projectCard">
      <div className="projectCard__projectImage">
        <Image
          src={image}
          alt={name}
          fill={true}
        />
      </div>
      <div className="projectCard__projectInfos">
        <h4>{name}</h4>
        <div className="projectCard__projectLanguagesInfo">
          {
            languages.map((language, index) => {
              return (
                <p key={index}>
                  {language}
                </p>
              )
            })
          }
        </div>
        <div className="projectCard__usefullLinks">
          <ModernButton
            link={linkPreview}
            text="view project"
          />
          <ModernButton
            link={linkGitHub}
            text="view code"
          />
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects = ProjectsDev.project

  return (
    <section className="body__projectsContent">
      <div className="projectsContent__titleContent">
        <h3>Projects</h3>
        <ModernButton />
      </div>
      <div className="projectsContent__projectsContainer">
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                linkPreview={project.linkPreview}
                linkGitHub={project.linkGitHub}
                image={project.image}
                name={project.name}
                languages={project.languages}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects;
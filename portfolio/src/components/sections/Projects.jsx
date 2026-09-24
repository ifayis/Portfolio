import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / PROJECTS"
          title="Things I’ve built."
          text="A selection of development work spanning e-commerce, SaaS, business websites and modern web applications."
        />

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} project preview`} />
                <span className="project-number">{project.number}</span>
                <div className="image-shine" />
              </div>

              <div className="project-body">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="stack">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <div className="project-links">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link primary-link">
                      Live Project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-link disabled-link">Live — Coming Soon</span>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>

              <ArrowUpRight className="project-arrow" size={25} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
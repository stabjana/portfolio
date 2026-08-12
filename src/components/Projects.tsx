import '../styles/projects.css';
import { projects } from '../data';

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <a
              key={project.id}
              className="project-card"
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              onMouseMove={handleMouseMove}
              style={{ '--c': project.accent } as React.CSSProperties}
            >
              <div className="project-card__top">
                <span className="project-card__name">{project.name}</span>
                <span className="project-card__badge">Public</span>
              </div>

              {project.forkedFrom && (
                <span className="project-card__fork">
                  Forked from <span>{project.forkedFrom.label}</span>
                </span>
              )}

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__bottom">
                <span className="project-card__lang">
                  <span className="project-card__lang-dot" />
                  {project.language}
                </span>
                <ArrowIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="project-card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

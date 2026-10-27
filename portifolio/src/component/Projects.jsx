
import './projects.css';

const projects = [
  {
    title: 'Restaurant Site',
    intro: 'Website application for displaying menu and ordering built with React.js,Node.js, MongoDB',
    description:
      'A restaurant website that presents its menu and provides visitors with an easy way to explore its offerings.',
    technologies: ['React', 'JavaScript', 'CSS', 'MongoDB', 'Node.js'],
    link: 'https://restaurant-site-zwdi-6e7k64da4-yelibets-projects.vercel.app',
    github: 'https://github.com/YelibeT/Restaurant-site',
  },
  {
    title: 'Personal Blog',
    intro:'A full-stack blogging platform built with React, Express.js, PostgreSQL, Prisma.',
    description:
      'Built a full-stack blog platform where visitors can browse published articles while an authenticated administrator can create, edit, save drafts, publish, and manage posts. Implemented JWT-based authentication, protected admin routes, REST APIs, PostgreSQL database integration, and a React frontend.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Prisma'],
    link: 'https://biniyam-personalblog.vercel.app/',
    github: 'https://github.com/YelibeT/Personal-Blog',
  },
  {
    title: 'LeetCode Tracker',
    intro: 'A Telegram bot and REST API built with FastAPI, SQLAlchemy, and SQLite',
    description:'Developed a Telegram-based LeetCode tracking system that allows users to register their profiles, retrieve and monitor their LeetCode progress, and interact with their coding statistics through bot commands and a REST API. Implemented database models, API endpoints, user registration, and Telegram command handling with persistent data storage',
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Telegram Bot'],
    link: 'https://t.me/leeetcode_tracker_bot',
    github: 'https://github.com/YelibeT/Leetcode-Tracker', 
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className='hero-name'>Projects</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-info">
              <h2>{project.title}</h2>
              <span>{project.intro}</span>
              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import './App.css';
import NavBar from './component/Navbar';
import Projects from './component/Projects';
import { 
  SiLeetcode, 
  SiGithub, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiNodedotjs, 
  SiTypescript,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiRedis,
  SiRedux, 
  SiTanstack,
  SiGit} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

const skills = [
  {
    name: 'JavaScript',
    level: 'Comfortable',
    percentage: 90,
    description: 'Building interactive applications and backend APIs',
  },
  {
    name: 'Python',
    level: 'Comfortable',
    percentage: 90,
    description: 'Building backend APIs',
  },
  {
  name: 'C++',
  level: 'Fundamentals',
  percentage: 50,
  description: 'Programming fundamentals and problem solving',
},
  {
    name: 'React.js',
    level: 'Intermediate',
    percentage: 80,
    description: 'Components, props, state, hooks, routing,...',
  },
  {
    name: 'Node.js',
    level: 'Intermediate',
    percentage: 80,
    description: 'Building backend APIs',
  },
  {
  name: 'FastAPI',
  level: 'Beginner',
  percentage: 60,
  description: 'Building Python APIs',
},
{
  name: 'REST APIs',
  level: 'Intermediate',
  percentage: 70,
  description: 'Designing endpoints, HTTP methods, and request/response handling',
},
  {
  name: 'MongoDB',
  level: 'Intermediate',
  percentage: 60,
  description: 'Document databases and data modeling',
},
{
  name: 'PostgreSQL',
  level: 'Intermediate',
  percentage: 65,
  description: 'Relational databases and SQL queries',
},


{
  name: 'Git',
  level: 'Comfortable',
  percentage: 80,
  description: 'Version control, branching, merging, and resolving conflicts',
},
{
  name: 'GitHub',
  level: 'Comfortable',
  percentage: 80,
  description: 'Managing repositories, commits, pull requests, and collaboration',
},
  {
  name: 'Redis',
  level: 'Learning',
  percentage: 30,
  description: 'Caching and in-memory data storage',
},
{
  name: 'Redux',
  level: 'Learning',
  percentage: 35,
  description: 'Managing global states',
},
{
  name: 'Zustand',
  level: 'Learning',
  percentage: 35,
  description: 'Managing global states',
},
{
  name: 'Django',
  level: 'Learning',
  percentage: 40,
  description: 'Learning web development with Django',
},
];

function App() {
  return (
    <div>
      <NavBar />

      <div className="intro" id="intro">
        <h1 className='hero-name'>Yelibe Tsedeke</h1>
        <span>Student | Software Engineer | AI/ML Enthusiast</span>
        <p>
          Software Engineering student passionate about building useful software and exploring AI/ML.
          I'm naturally curious about how systems and softwares work and why they break. 
          I enjoy solving problems, digging into bugs, and tracing errors until I understand what's really happening.
        </p>
        <div className="social-links">
          <a
            href="https://www.leetcode.com/u/Yelibe_Tsedeke"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.github.com/YelibeT"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <SiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yelibe-tsedeke-858382351/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <section className="skills-section" id="skills">
        <h1 className="hero-name">Skills</h1>
        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-heading">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <p>{skill.description}</p>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>


      <Projects />

      <div className="contact" id="contact">
        <h1 className='hero-name'>Contact</h1>
        <p>Email: <a href="">yelibe44@gmail.com</a> </p>
        <p>Phone number: 0952431092 </p>
        <span>Lets work together. Instant email replies</span>
       
      </div>
    </div>
  );
}

export default App;

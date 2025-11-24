import "../styles/SoftwareTechSupport.css";
import { Link } from "react-router-dom";

export default function SoftwareTechSupport() {
  return (
    <>
      <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      <section className="software-page">
        {/* Hero Section */}
        <header className="software-hero">
          <h1>Software & Tech Support</h1>
          <p>
            I build, automate, and maintain tools that make work easier — from
            full-stack web apps to simple workflow automations. My focus is
            usability, reliability, and making technology that is easy for
            people to understand.
          </p>
          <div className="tech-stack">
            <img src="/images/icons/react.svg" alt="React" title="React" />
            <img
              src="/images/icons/typescript.svg"
              alt="TypeScript"
              title="TypeScript"
            />
            <img src="/images/icons/vite.svg" alt="Vite" title="Vite" />
            <img
              src="/images/icons/cloudflare.svg"
              alt="Cloudflare"
              title="Cloudflare"
            />
            <img src="/images/icons/SQL.svg" alt="SQL" title="SQL" />
          </div>
        </header>

        {/* Web Applications */}
        <section className="software-section">
          <h2>Web Applications</h2>
          <p>
            A mix of front-end and full-stack projects that demonstrate clean UI
            design, functional logic, and real deployment. These showcase how I
            turn ideas into working systems.
          </p>

          <div className="project-grid">
            <div className="project-card">
              <img
                src="/images/software/joe-tracks-feature.png"
                alt="Joetracks Portfolio Preview"
              />
              <h3>joetracks.com</h3>
              <p>
                A full-stack React + Cloudflare project with a custom backend
                API, database, and secure content editor. Built to demonstrate
                authentication, dynamic rendering, and clean component
                structure.
              </p>
            </div>

            <div className="project-card">
              <img
                src="/images/software/python-notes-api.png"
                alt="Python Notes API"
              />
              <h3>Python Notes API</h3>
              <p>
                A FastAPI + SQLAlchemy backend with full CRUD, search, sorting,
                pagination, and timestamps. Features error handling, Pytest
                coverage, and a Dockerized setup built to demonstrate clean
                backend architecture in Python.
              </p>
            </div>

            <div className="project-card">
              <img
                src="/images/software/task-organizer.png"
                alt="Task Manager App"
              />
              <h3>Task Organizer</h3>
              <p>
                A React task organizer demonstrating core front-end state
                management — users can create, edit, and delete tasks organized
                by folder. Built to showcase component structure, data flow, and
                UI state updates.
              </p>
            </div>

            <div className="project-card">
              <img
                src="/images/software/resume-feature.png"
                alt="Resume Builder"
              />
              <h3>Resume Builder</h3>
              <p>
                A resume builder built in React that generates printable,
                customizable layouts using dynamic component rendering.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="software-cta">
          <p>
            If your team’s building things that actually help people and you
            care about creativity, craft, and real growth, I’d love to hear from
            you.”
          </p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </section>
      </section>
    </>
  );
}

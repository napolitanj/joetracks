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
            I design and build real, working tools — everything from full-stack
            community apps to portfolio websites. I focus on polished UX,
            backend systems focused on speed and reliability, and making
            technology easy for people to use. Several of the projects below
            include live demos you can try.
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
              <Link to="/michigan-ski-tracker">
                <img
                  src="/images/software/michigan-ski-tracker.png"
                  alt="Michigan Ski Tracker Weather App"
                />

                <h3>Michigan Ski Tracker</h3>

                <div className="tag">Live NOAA Data</div>

                <p>
                  A React application I built for Michigan's ski community that
                  fetches and parses real-time NOAA forecast data for every
                  Michigan ski resort. Includes API integration, data
                  transformation, and a responsive UI.
                </p>
              </Link>
            </div>

            <div className="project-card">
              <img
                src="/images/software/joe-tracks-feature.png"
                alt="Joetracks Portfolio Preview"
              />
              <h3>joetracks.com</h3>
              <p>
                A full-stack edge app built with React, Cloudflare Workers, D1,
                and R2. Features custom API routes, JWT auth, schema-driven
                content management, dynamic rendering, image uploads, and a
                protected editor for creating and managing blog and portfolio
                content.
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
              <a
                href="https://napolitanj.github.io/to-do-list-react/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/software/task-organizer.png"
                  alt="Task Manager App"
                />

                <h3>Task Organizer</h3>

                <p>
                  A React task organizer demonstrating core front-end state
                  management. Users can create, edit, and delete tasks organized
                  by folder. Built to showcase component structure, data flow,
                  and UI state updates.
                </p>
              </a>
            </div>

            <div className="project-card">
              <a
                href="https://napolitanj.github.io/resume-builder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/software/resume-feature.png"
                  alt="Resume Builder"
                />

                <h3>Resume Builder</h3>

                <p>
                  A React-based resume builder that updates a live, printable
                  layout as the user types. Built with dynamic component
                  rendering, state-driven form inputs, and a print-optimized
                  layout that exports cleanly to PDF.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="software-cta">
          <p>
            If your team is building things that actually help people and values
            creativity, craft, and real growth, I’d love to hear from you.”
          </p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </section>
      </section>
    </>
  );
}

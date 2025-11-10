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
              <h3>ResumeCraft</h3>
              <p>
                A resume builder built in React that generates printable,
                customizable layouts using dynamic component rendering.
              </p>
            </div>

            <div className="project-card">
              <img src="/images/software/weather-app.png" alt="Weather App" />
              <h3>Weather Dashboard</h3>
              <p>
                Lightweight API integration app built with vanilla JavaScript,
                featuring async data fetching, live weather updates, and
                responsive display.
              </p>
            </div>
          </div>
        </section>

        {/* Automations */}
        <section className="software-section">
          <h2>Automations & Workflow Tools</h2>
          <p>
            Small-scale but impactful automations written in JavaScript and
            Microsoft Office Scripts to streamline work across teams and reduce
            hours of manual effort.
          </p>

          <ul className="automation-list">
            <li>
              Automated spreadsheet formatting and data cleanup in Excel using
              Office Scripts.
            </li>
            <li>
              Created workflows for referral tracking and annual reports with
              Typescript in Google Sheets.
            </li>
            <li>
              Integrated form data with shared drives and reports for nonprofit
              teams.
            </li>
          </ul>
        </section>

        {/* Closing CTA */}
        <section className="software-cta">
          <p>
            Whether it’s a web app, automation script, or system integration, my
            goal is the same — to build tools that make life simpler and work
            more efficient.
          </p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </section>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import "../styles/ProgramManagement.css";
import CountUp from "./tools/CountUp";

export default function ProgramManagement() {
  return (
    <>
      <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      <section className="category-page">
        {/* Hero */}
        <header className="category-hero">
          <h1>Program Management & Development</h1>
          <p className="category-tagline">
            Designing, funding, and running programs end-to-end — from strategy
            and partnerships to logistics, training, and measurement.
          </p>
        </header>

        {/* Intro blurb */}
        <section className="category-intro">
          <p>
            I founded and directed <strong>Origin Expeditions</strong>, building
            outdoor education programs that served underrepresented youth. I
            handled fundraising and partnerships, stood up the digital
            infrastructure (Slack, Google Workspace, website), led
            staff/volunteer onboarding, managed inventory and risk, and built
            feedback loops to measure outcomes. The constant theme: make complex
            operations simple, safe, and repeatable.
          </p>
        </section>

        {/* Quick stats / outcomes */}
        <section className="stat-grid">
          <div className="stat">
            <span className="stat-num">
              <CountUp target={20000} prefix="+$" />
            </span>
            <span className="stat-label">Grants & donations secured</span>
          </div>

          <div className="stat">
            <span className="stat-num">
              <CountUp target={4} suffix=" Wilderness Programs" />
            </span>
            <span className="stat-label">Designed & delivered</span>
          </div>

          <div className="stat">
            <span className="stat-num">
              <CountUp target={25} suffix="+" />
            </span>
            <span className="stat-label">Individuals served</span>
          </div>

          <div className="stat">
            <span className="stat-num">
              <CountUp target={95} suffix="%" />
            </span>
            <span className="stat-label">Measured program outcomes</span>
          </div>
        </section>

        {/* Capability pillars */}
        <section className="pillars">
          <div className="pillar">
            <h3>Strategy & Partnerships</h3>
            <ul>
              <li>Grant writing, donor outreach, and reporting</li>
              <li>Community partners & land managers coordination</li>
              <li>Program design with clear objectives & constraints</li>
            </ul>
          </div>
          <div className="pillar">
            <h3>Operations & Logistics</h3>
            <ul>
              <li>Permits, risk management, SOPs, and training plans</li>
              <li>Inventory management & gear provisioning</li>
              <li>Staffing, volunteer recruitment, and scheduling</li>
            </ul>
          </div>
          <div className="pillar">
            <h3>Systems & Measurement</h3>
            <ul>
              <li>Slack + Google Workspace + Squarespace Design & Anayltics</li>
              <li>Intake forms, surveys, and data dashboards</li>
              <li>Continuous improvement loops & post-mortems</li>
            </ul>
          </div>
        </section>

        {/* Case studies */}
        <section className="cases">
          <h2>Featured Work</h2>

          <article className="case-card">
            <div className="case-media">
              <img
                src="/images/programmmanagement/navigation-instruction.webp"
                alt="Orienteering demo"
              />
            </div>
            <div className="case-body">
              <h3>Launching a Youth Backcountry Program</h3>
              <p>
                Built a multi-day backpacking program: secured funding, composed
                policy and procedure, built an outdoor skills curriculum,
                recruited & trained volunteers, and directed the trips.
                Post-trip surveys fed an improvement loop for the next cohort.
              </p>
              <div className="case-actions">
                {/* Internal examples use Link; external can be <a> */}
                <Link to="/portfolio/writing" className="btn">
                  Risk Management Excerpt From Policy & Procedures
                </Link>
              </div>
            </div>
          </article>

          <article className="case-card">
            <div className="case-media">
              <img
                src="/images/programmmanagement/backpack-sponsors.webp"
                alt="Osprey Partnership"
              />
            </div>
            <div className="case-body">
              <h3>Fundraising & Partnerships</h3>
              <p>
                Secured private and institutional funding through targeted
                proposals and partnership outreach. Built relationships with
                sponsors like <strong>Founders Brewing Co.</strong>,{" "}
                <strong>Osprey</strong>, and other outdoor industry brands to
                expand youth access programs.
              </p>
              <div className="case-actions">
                <a
                  href="/pdfs/Founders Brewing Grant for Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Grant Proposal (PDF)
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* Tools / stack */}
        <section className="tools">
          <h2>Tools & Systems</h2>
          <ul className="tool-list">
            <li>Google Workspace (Drive, Sheets, Forms, etc.)</li>
            <li>Web and Digital Asset Design (Squarespace, Figma, Canva)</li>
            <li>Program Design (AMGA, NOLS, and LNT best practices)</li>
            <li>Survey design & data review workflows</li>
            <li>Inventory tracking & trip-kit SOPs</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="category-cta">
          <p>
            Need a proven framework for a safe, repeatable outdoor program? I
            can help you design it, lead it, and hand it off so your team can
            lead with confidence.
          </p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </section>
      </section>
    </>
  );
}

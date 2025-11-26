import { Link } from "react-router-dom";
import "../styles/OutdoorLeadership.css";
import CountUp from "./tools/CountUp";

export default function OutdoorLeadership() {
  return (
    <>
      <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      <section className="category-page">
        {/* Hero */}
        <header className="category-hero">
          <h1>Outdoor Leadership & Guiding</h1>
          <p className="category-tagline">
            Over a decade of leading and educating people safely in wild places
            — from alpine ascents to ski resorts to wilderness therapy programs.
          </p>
        </header>

        {/* Intro */}
        <section className="category-intro">
          <p>
            I’ve guided, instructed, and managed programs that have connected
            hundreds of people to the outdoors across the U.S. My work has
            ranged from youth wilderness education to private mountaineering
            clients — always with a focus on safety, preparation, and
            transformative experience. I hold certifications from{" "}
            <strong>AMGA</strong>, <strong>NOLS</strong>, and
            <strong> AIARE</strong>, and have led teams through high-risk alpine
            and backcountry environments with professionalism and care.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="stat-grid">
          <div className="stat">
            <span className="stat-num">
              {" "}
              <CountUp target={14} suffix=" Years" />
            </span>
            <span className="stat-label">Professional field experience</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              {" "}
              <CountUp target={90} suffix="+" />
            </span>
            <span className="stat-label">Backcountry trips led</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <CountUp target={320} suffix="+" />
            </span>
            <span className="stat-label">Clients guided & instructed</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              {" "}
              <CountUp target={170} suffix="+" />
            </span>
            <span className="stat-label">
              Ski-area and backcountry medical responses
            </span>
          </div>
        </section>

        {/* Capability Pillars */}
        <section className="pillars">
          <div className="pillar">
            <h3>Expedition Leadership</h3>
            <ul>
              <li>
                Led guided ascents of the Grand Teton, Mount Shasta, Mount
                Sneffels, and more.
              </li>
              <li>
                Directed a ski mountaineering expedition to Alaska (2019).
              </li>
              <li>
                Planned and executed 3–7 day backpacking and canoe expeditions
                nationwide.
              </li>
            </ul>
          </div>
          <div className="pillar">
            <h3>Education & Training</h3>
            <ul>
              <li>
                Taught avalanche safety, navigation, and outdoor leadership
                workshops.
              </li>
              <li>
                Developed and published digital guides for destinations like Mt.
                Sneffels and North Manitou Island.
              </li>
              <li>
                Served as Senior Field Guide for Open Sky Wilderness Therapy.
              </li>
            </ul>
          </div>
          <div className="pillar">
            <h3>Consulting & Program Design</h3>
            <ul>
              <li>
                Advised individuals and organizations on trip planning,
                equipment selection, and risk management.
              </li>
              <li>
                Founded and directed Origin Expeditions — delivering accessible
                wilderness programs for underserved youth.
              </li>
              <li>
                Built logistics systems, SOPs, and field-ready frameworks
                adopted by summer camps.
              </li>
            </ul>
          </div>
        </section>

        {/* Case Studies */}
        <section className="cases">
          <h2>Featured Work</h2>

          <article className="case-card">
            <div className="case-media">
              <img
                src="/images/outdoorleadership/alaska.png"
                alt="Ski mountaineering expedition in Alaska"
              />
            </div>
            <div className="case-body">
              <h3>Alaska Ski Mountaineering Expedition</h3>
              <p>
                Organized and led a remote ski mountaineering trip to Alaska,
                including route planning, risk management, and team leadership.
                Applied avalanche forecasting and glacier travel protocols to
                ensure safety and success in high-exposure terrain.
              </p>
            </div>
          </article>

          <article className="case-card">
            <div className="case-media">
              <img
                src="/images/outdoorleadership/sneffels-guide-cover.png"
                alt="Mount Sneffels Digital Guide"
              />
            </div>
            <div className="case-body">
              <h3>Digital Mountaineering Guides</h3>
              <p>
                Authored SEO-ranked digital route guides for Mt. Sneffels and
                North Manitou Island. Achieved featured Google snippets and
                thousands of organic views, helping climbers prepare
                responsibly.
              </p>
              <div className="case-actions">
                <Link to="/marketing" className="btn btn-ghost">
                  View Analytics & Reach
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* CTA */}
        <section className="category-cta">
          <p>
            Want to design a wilderness program or plan an expedition? I help
            organizations and individuals create safe, meaningful outdoor
            experiences — from trip logistics to staff training.
          </p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </section>
      </section>
      <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
    </>
  );
}

import { Link } from "react-router-dom";
import "../../styles/About.css";
import headerPhoto from "/images/bio-pic.png";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-inner">
        <h1>About</h1>

        <p className="about-intro">
          JoeTracks provides practical guides and planning tools designed to
          simplify real-world outdoor decisions. While much of the content
          focuses on the Great Lakes region, the underlying principles remain
          useful anywhere: prepare well, reduce unnecessary complexity, and move
          with greater confidence outside.
        </p>

        <section className="about-section meet-joe">
          <h2>Meet Joe</h2>

          <div className="meet-joe-content">
            <img className="meet-joe-photo" src={headerPhoto} alt="Joe" />

            <div className="meet-joe-copy">
              <p>
                I'm Joe Napolitan. My background spans years of professional
                work in outdoor environments, including ski patrol, avalanche
                hazard reduction, wilderness guiding and education, and
                technical systems development. My experience includes extended
                backcountry travel, multi-day expeditions, and technical terrain
                across a wide range of environments — all of which inform the
                practical, decision-focused approach behind JoeTracks.
              </p>

              <p>
                My experience in both the outdoor and tech industries shaped the
                foundations of this website: clear guidance, practical tools,
                and information that is easily available without downloading
                apps or making accounts. If something doesn&apos;t improve
                decision-making, safety, or reduce the time needed planning in
                front of a screen before getting outside, it doesn&apos;t belong
                here.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Background & Training</h2>

          <p>
            This work is informed by formal education, professional work
            experience, and specialized training across outdoor leadership,
            safety, and technical systems.
          </p>

          <ul>
            <li>
              <strong> American Mountain Guides Association</strong> |
              Apprentice Alpine Guide
            </li>
            <li>
              <strong>
                American Institute for Avalanche Research and Education
              </strong>{" "}
              | Pro Level I
            </li>
            <li>
              <strong> National Outdoor Leadership School</strong> | Wilderness
              EMT & 90-Day Semester in the Rocky Mountains
            </li>
            <li>
              <strong>American Canoe Association</strong> | Canoe & Sea Kayak
              Instructor
            </li>
            <li>
              <strong>United States Parachute Association</strong> | USPA
              A-license
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>What You&apos;ll Find Here</h2>

          <ul>
            <li>
              Clear, experience-driven guides for specific routes and trip types
            </li>
            <li>
              Practical planning tools for conditions, logistics, and timing
            </li>
            <li>
              Field-tested notes that prioritize clarity over noise or hype
            </li>
          </ul>
        </section>

        <div className="about-cta-wrap">
          <Link to="/guides" className="about-cta">
            Explore Guides
          </Link>

          <Link to="/tools" className="about-cta about-cta-secondary">
            Explore Tools
          </Link>

          <Link to="/contact" className="about-cta">
            Reach out
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

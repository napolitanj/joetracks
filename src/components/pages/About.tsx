import { Link } from "react-router-dom";
import "../../styles/About.css";
import headerPhoto from "/images/bio-pic.jpg";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-inner">
        <h1>About</h1>
        <p className="about-intro">
          JoeTracks exists to help people build outdoor confidence and
          competence through practical planning resources. The focus is Great
          Lakes travel, but the same principles apply anywhere: prepare well,
          simplify decisions, and make safer calls in the field.
        </p>

        <section className="about-section meet-joe">
          <h2>Meet Joe</h2>
          <div className="meet-joe-content">
            <img className="meet-joe-photo" src={headerPhoto} alt="Joe" />
            <div>
              <p>
                I&apos;m Joe Napolitan, a former outdoor educator and current IT
                support specialist and systems builder. Over the last decade,
                I&apos;ve led expeditions in demanding terrain, built websites and
                workflows for organizations, and supported people who need
                practical answers under real constraints.
              </p>
              <p>
                That mix of field leadership and technical operations shapes how
                I write and build: plainspoken guidance, useful tools, and no
                unnecessary complexity. If it doesn&apos;t help someone plan better
                or move with more confidence, it doesn&apos;t belong.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>What You&apos;ll Find Here</h2>
          <ul>
            <li>Detailed guides for specific routes and trip types</li>
            <li>Planning tools for weather, snow, and logistics</li>
            <li>Field-tested notes that prioritize clarity over hype</li>
          </ul>
        </section>

        <div className="about-cta-wrap">
          <Link to="/guides" className="about-cta">
            Explore Guides
          </Link>
          <Link to="/tools" className="about-cta about-cta-secondary">
            Explore Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

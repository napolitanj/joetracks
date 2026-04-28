import { Link } from "react-router-dom";
import "../../styles/About.css";
import headerPhoto from "/images/bio-pic.png";
import NewsletterCapture from "../NewsletterCapture";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-inner">
        <h1>About</h1>

        <p className="about-intro">
          JoeTracks offers practical guides and planning tools designed to
          simplify real-world outdoor decisions. While much of the content
          focuses on the Northern Michigan, the underlying principles remain
          useful anywhere: prepare well, reduce unnecessary complexity, and
          execute with greater confidence outside.
        </p>

        <section className="about-section meet-joe">
          <h2>Meet Joe</h2>

          <div className="meet-joe-content">
            <img className="meet-joe-photo" src={headerPhoto} alt="Joe" />

            <div className="meet-joe-copy">
              <p>
                I'm Joe Napolitan. My background spans years of professional
                work in outdoor environments, including ski patrol, avalanche
                hazard reduction, backcountry guiding, and wilderness education.
                My personal experience includes thru-hiking, bike touring,
                ski-mountaineering and paddling expeditions, and alpine climbing
                — all of which inform the practical, decision-focused approach
                behind my guides and tools.
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
              <p>
                My mission with this project to protect wild places in the Great
                Lakes Region by increasing access to them. I believe that by
                building a connection with nature, individuals are more inclined
                to protect natural resources and enjoy them responsibly. My
                tools and guides are designed to fill in knowledge gaps that
                will help people get outside safely and sustainably.
              </p>
              <p>
                If you would like to support this project, please consider
                signing up for my newsletter using the signup below.
              </p>
            </div>
          </div>
        </section>
        <div className="content-wrapper row cnt-vrt cnt-hrz mobile-col">
          <NewsletterCapture
            headline=""
            subtext="Subscribing to the newsletter is an free and easy way to support this project."
          />
        </div>
        <section className="about-section">
          <h2>Background & Training</h2>

          <p>
            This project is informed by formal education, professional work, and
            personal experience.
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
              <strong>American Canoe Association</strong> | Level I Canoe & Sea
              Kayak Instructor
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
            <li>Relevant notes built from experience in the field</li>
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

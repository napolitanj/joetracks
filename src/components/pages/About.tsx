import { Link } from "react-router-dom";
import "../../styles/About.css";
import headerPhoto from "/images/bio-pic.webp";
import NewsletterCTA from "../NewsletterCTA";
import SEO from "../SEO";

const About = () => {
  return (
    <section className="about-page">
      <SEO
        title="About Joe Napolitan | JoeTracks"
        description="Fifteen years of ski patrol, wilderness guiding, and outdoor education behind the field-researched guides and planning tools on JoeTracks."
        canonical="https://joetracks.com/about"
        image="https://joetracks.com/images/og-image.png"
      />
      <div className="about-inner">
        <h1>About</h1>

        <p className="about-intro">
          JoeTracks offers practical guides and planning tools designed to
          simplify real-world outdoor decisions. While much of the content
          focuses on Northern Michigan, the underlying principles remain
          useful anywhere: prepare well, reduce unnecessary complexity, and
          get outside with more confidence.
        </p>

        <section className="about-section meet-joe">
          <h2>Meet Joe</h2>

          <div className="meet-joe-content">
            <img className="meet-joe-photo" src={headerPhoto} alt="Joe" />

            <div className="meet-joe-copy">
              <p>
                I'm Joe Napolitan. I've spent fifteen years working
                professionally in the outdoors: ski patrol and avalanche route
                leadership at Wolf Creek Ski Area in Colorado, wilderness field
                guiding, sea kayak instruction, and outdoor education.
                My personal experience includes <Link to="/expeditions/appalachian-trail-2014">thru-hiking</Link>,{" "}
                <Link to="/expeditions/american-west-2013">bike touring</Link>,
                ski-mountaineering and paddling expeditions, and alpine climbing, all of which inform the guides and tools here.
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
                My mission with this project is to protect wild places in the Great
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
        <NewsletterCTA />
        <section className="about-section">
          <h2>Background & Training</h2>

          <p>
            This project is informed by formal education, professional work, and
            personal experience.
          </p>

          <ul>
            <li>
              <strong> American Mountain Guides Association</strong> |
              Alpine Skills Course
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
          <h2>Field Archive</h2>

          <p className="about-section-lead">
            Two trips I wrote up as they happened, posted from the trail and the
            road, and since moved here from the blogs they first appeared on.
          </p>

          <div className="archive-list">
            <article className="archive-card">
              <Link to="/expeditions/appalachian-trail-2014" className="archive-card-media">
                <img
                  src="/images/expeditions/appalachian-trail-2014/img_20140607_072802-thumb.webp"
                  alt="Morning light on the Appalachian Trail"
                  loading="lazy"
                />
              </Link>
              <h3>Thru-Hiking the Appalachian Trail, 2014</h3>
              <p>
                Four months and twenty days northbound, Springer Mountain,
                Georgia to Mount Katahdin, Maine. Twenty-eight dispatches
                written on trail.
              </p>
              <Link to="/expeditions/appalachian-trail-2014" className="about-cta">
                Follow the Hike
              </Link>
            </article>

            <article className="archive-card">
              <Link to="/expeditions/american-west-2013" className="archive-card-media">
                <img
                  src="/images/expeditions/american-west-2013/wpid-img_20130427_0947081-thumb.webp"
                  alt="Southern Utah canyon country from the bike tour"
                  loading="lazy"
                />
              </Link>
              <h3>American West Bike Tour, 2013</h3>
              <p>
                Solo and self-supported from Breckenridge to the Pacific,
                through the San Luis Valley, southern Utah, and the Sierra
                Nevada. Twenty-three dispatches.
              </p>
              <Link to="/expeditions/american-west-2013" className="about-cta">
                Follow the Ride
              </Link>
            </article>
          </div>
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

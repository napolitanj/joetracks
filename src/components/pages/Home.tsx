import { Link } from "react-router-dom";
import BannerImage from "../BannerImage";
import Reveal from "../ui/Reveal";
import "../../styles/Home.css";

type CardItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon?: string;
};

const offers: CardItem[] = [
  {
    title: "Guides",
    description:
      "Detailed route and planning writeups built from real trips and field conditions.",
    href: "/guides",
    cta: "Browse Guides",
    icon: "🧭",
  },
  {
    title: "Tools",
    description:
      "Simple utilities that help you plan smarter before you commit to a route.",
    href: "/tools",
    cta: "See Tools",
    icon: "🛠️",
  },
];

const latestGuides: CardItem[] = [
  {
    title: "North Manitou Island Guide",
    description:
      "Logistics, route planning, and backcountry travel notes for North Manitou.",
    href: "/north-manitou-island-guide",
    cta: "Read",
  },
  {
    title: "Remote Forecasting Tools",
    description:
      "A field-tested workflow for evaluating snow and weather before your trip.",
    href: "/remote-forecasting-tools",
    cta: "Read",
  },
  {
    title: "Mount Sneffels Guide",
    description:
      "Detailed beta and practical planning notes for skiing the Snake Couloir.",
    href: "/ski-mount-sneffels",
    cta: "Read",
  },
  {
    title: "CalTopo Guide",
    description:
      "A plain-language walkthrough of layers, routing, and exporting maps.",
    href: "/caltopo-guide",
    cta: "Read",
  },
];

const Home = () => {
  return (
    <>
      <BannerImage />

      <Reveal as="section" className="home-section" delay={0}>
        <div className="home-container home-inner">
          <h2>Plan Great Lakes adventures with confidence</h2>
          <p className="home-subhead">
            JoeTracks is a practical resource hub for people who want clear
            planning guidance, reliable tools, and straightforward information
            before heading outside.
          </p>
          <div className="home-start-cta">
            <Link to="/guides" className="home-btn home-btn-primary">
              Browse Guides
            </Link>
            <Link to="/tools" className="home-btn home-btn-secondary">
              See Tools
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={80}>
        <div className="home-container home-inner">
          <h2>What You Can Use Right Now</h2>
          <div className="home-grid home-grid-two">
            {offers.map((item) => (
              <article key={item.href} className="home-card home-offer-card">
                <div className="home-card-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.href} className="home-card-link">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={160}>
        <div className="home-container home-inner">
          <h2>Featured Items</h2>
          <div className="home-grid home-grid-two">
            <article className="home-card home-featured-card">
              <h3>Featured Guide: North Manitou Island</h3>
              <p>
                A complete planning guide for ferry logistics, routing, and
                backcountry travel on North Manitou Island.
              </p>
              <Link to="/north-manitou-island-guide" className="home-card-link">
                Open Guide
              </Link>
            </article>

            <article className="home-card home-featured-card">
              <h3>Featured Tool: Michigan Ski Tracker</h3>
              <p>
                Live snowfall and weather data across Michigan resorts for
                better trip timing.
              </p>
              <Link to="/michigan-ski-tracker" className="home-card-link">
                Open Tool
              </Link>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section home-topo-band" variant="up" delay={240}>
        <div className="home-container home-inner">
          <div className="home-topo-content">
            <h2>Simple systems beat complicated gear</h2>
            <p>
              Good decisions come from clear planning habits. JoeTracks focuses
              on practical systems that help you assess conditions, choose the
              right route, and move with confidence.
            </p>
            <Link to="/start-here" className="home-btn home-btn--overlay">
              Start Here
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={320}>
        <div className="home-container home-inner">
          <h2>How to Use This Site</h2>
          <div className="home-grid home-grid-three">
            <article className="home-card">
              <div className="home-card-icon" aria-hidden="true">
                1.
              </div>
              <h3>Pick a Guide</h3>
              <p>
                Start with a route page to understand terrain and logistics.
              </p>
            </article>
            <article className="home-card">
              <div className="home-card-icon" aria-hidden="true">
                2.
              </div>
              <h3>Use a Tool</h3>
              <p>
                Check weather and snow signals so your plan matches conditions.
              </p>
            </article>
            <article className="home-card">
              <div className="home-card-icon" aria-hidden="true">
                3.
              </div>
              <h3>Go Outside</h3>
              <p>
                Take a simple, informed plan into the field and adapt as needed.
              </p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={400}>
        <div className="home-container home-inner">
          <div className="home-split">
            <div className="home-split-media">
              <img
                src="/images/Frisbee-Dinner.png"
                alt="wild edibles on a frisbee"
              />
            </div>
            <div className="home-split-copy">
              <h2>Built for real planning, not content overload</h2>
              <p>
                JoeTracks is focused on one outcome: help people build outdoor
                confidence and competence through clear guidance. The emphasis
                is Great Lakes adventure planning with practical systems you can
                use right away.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={480}>
        <div className="home-container home-inner home-cta-final">
          <h2>Have a question or want to collaborate?</h2>
          <Link to="/contact" className="home-btn home-btn-primary">
            Contact
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={560}>
        <div className="home-container home-inner">
          <h2>Latest Guides</h2>
          <div className="home-grid home-grid-guides">
            {latestGuides.map((item) => (
              <article key={item.href} className="home-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.href} className="home-card-link">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Home;

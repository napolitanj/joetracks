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
          <div className="home-split">
            <div className="home-split-copy">
              <h2>Plan Better Days Outside</h2>
              <p className="home-subhead">
                JoeTracks is a practical resource hub built to simplify
                real-world outdoor decision-making.
              </p>
              <br></br>
              <p className="home-subhead">
                Whether you’re planning a paddle, hike, or winter outing, you’ll
                find clear guidance, reliable tools, and field-tested
                information designed to reduce guesswork and uncertainty.
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
            <div className="home-split-media">
              <img
                src="/images/Map-compass.png"
                alt="wild edibles on a frisbee"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={80}>
        <div className="home-container home-inner">
          <h2>Start with a Guide or Use a Tool</h2>
          <p className="home-subhead">
            Two things live here right now: detailed field guides, and simple
            planning tools you can use instantly in your browser.
          </p>

          <div className="home-grid home-grid-two">
            {/* Guides */}
            <article className="home-card home-offer-card">
              <figure className="home-offer-media">
                <img
                  className="home-card-image"
                  src="/images/north-manitou-guide-preview.png"
                  alt="preview of a digital backpacking guide"
                  loading="lazy"
                />
              </figure>

              <div className="home-offer-body">
                <h3>Field Guides</h3>
                <p>
                  Practical route writeups built from real trips — logistics,
                  conditions, and the small details that make the day go
                  smoothly.
                </p>

                <ul className="home-offer-list">
                  <li>Approach + trailhead notes (parking, season, access)</li>
                  <li>Route beta (key turns, hazards, timing)</li>
                  <li>
                    Gear notes, lessons learned, and photos that match the text
                  </li>
                </ul>

                <div className="home-start-cta">
                  <Link to="/guides" className="home-btn home-btn-primary">
                    Browse Guides
                  </Link>
                </div>
              </div>
            </article>

            {/* Tools */}
            <article className="home-card home-offer-card">
              <figure className="home-offer-media">
                <img
                  className="home-card-image"
                  src="/images/ski-tracker-preview.png"
                  alt="graphic of a snowfall tracking tool"
                  loading="lazy"
                />
              </figure>

              <div className="home-offer-body">
                <h3>Planning Tools</h3>
                <p>
                  Lightweight utilities for quick decisions — built to reduce
                  friction when you’re choosing where to go and when.
                </p>

                <ul className="home-offer-list">
                  <li>
                    Compare conditions fast (snowfall, weather windows, timing)
                  </li>
                  <li>Make better calls before you commit to a route</li>
                  <li>No accounts, no apps — just open and use</li>
                </ul>

                <div className="home-start-cta">
                  <Link to="/tools" className="home-btn home-btn-primary">
                    Explore Digital Tools
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="home-section home-topo-band"
        variant="up"
        delay={240}
      >
        <div className="home-container home-inner">
          <div className="home-topo-content">
            <h2>
              Built for people who want to get outside — even if they don't know
              where to start.
            </h2>
            <p>
              Whether you're planning weekend trips, ski tours, backpacking
              routes, or just trying to avoid dumb mistakes, these guides and
              tools are designed for real-world use — not fantasy expeditions or
              gear obsession.
            </p>
            <br></br>
            <p>Clear information. Practical systems. Better days outside.</p>
            <Link to="/guides" className="home-btn home-btn-primary">
              Browse Guides
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

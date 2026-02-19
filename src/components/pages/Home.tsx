import { Link } from "react-router-dom";
import BannerImage from "../BannerImage";
import Reveal from "../ui/Reveal";
import "../../styles/Home.css";

type CardItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  imageSrc?: string;
  imageAlt?: string;
};

const latestGuides: CardItem[] = [
  {
    title: "Backpacking North Manitou Island",
    description:
      "A practical field guide covering logistics, hazards, route structure, and planning considerations.",
    href: "/north-manitou-island-guide",
    cta: "Go Backpacking",
    imageSrc: "/images/north-manitou/north-manitou-island.webp",
    imageAlt: "Backpacker standing on North Manitou Island shoreline",
  },
  {
    title: "Remote Forecasting Tools",
    description:
      "A technical trip-planning walkthrough for forecasting snow cover remotely.",
    href: "/remote-forecasting-tools",
    cta: "Find the Best Snow",
    imageSrc: "/images/remote-forecasting/google-snow-depth-overlay.webp",
    imageAlt: "Snow depth overlay map used for remote forecasting",
  },
  {
    title: "Mount Sneffels: Skiing the Snake Couloir",
    description:
      "Route beta, conditions, and planning notes for Mount Sneffels' Snake Couloir.",
    href: "/ski-mount-sneffels",
    cta: "Go Skiing",
    imageSrc: "/images/sneffels/Mount-sneffels-view.webp",
    imageAlt: "Mount Sneffels viewed from the approach route",
  },
  {
    title: "How to Trip Plan with CalTopo",
    description:
      "Learn the core CalTopo workflow for map reading, route building, and trip planning.",
    href: "/caltopo-guide",
    cta: "Plan Your Route",
    imageSrc: "/images/caltopo/Caltopo-Mount-hood-stacked-layers2.png",
    imageAlt: "CalTopo map with stacked planning layers",
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
                JoeTracks provides <strong>field-tested guides</strong> and{" "}
                <strong>practical planning tools</strong> simplify real-world
                outdoor decision-making — from access and logistics to
                conditions and route choices.
              </p>
              <p className="home-subhead">
                While much of the content focuses on the Great Lakes region, the
                underlying principles and systems are built to remain useful
                anywhere you explore.
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
                alt="Map and compass illustration"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={80}>
        <div className="home-container home-inner">
          <h2>Start Here</h2>
          <p className="home-subhead">
            New to JoeTracks? These are the fastest ways to understand how the
            platform works — practical field guides and lightweight planning
            tools you can use instantly in your browser.
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
                <h3>Digital Trip-Planning Guides</h3>
                <p>
                  Clear, experience-driven guides built from real trips —
                  focused on logistics, conditions, and the details that shape
                  real-world outcomes.
                </p>

                <ul className="home-offer-list">
                  <li>
                    Approach & access notes (parking, season, entry points)
                  </li>
                  <li>
                    Route structure (key turns, hazards, timing considerations)
                  </li>
                  <li>Observations, lessons learned, and supporting visuals</li>
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
                  Lightweight utilities designed to support faster, more
                  confident decisions when choosing where to go and when.
                </p>

                <ul className="home-offer-list">
                  <li>Quickly determine where the best snow will fall</li>
                  <li>Reduce uncertainty before committing to a route</li>
                  <li>No accounts, no apps — open and use</li>
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

      <Reveal as="section" className="home-section" variant="up" delay={160}>
        <div className="home-container home-inner">
          <h2>Featured Guides</h2>
          <div className="home-grid home-grid-guides">
            {latestGuides.map((item) => (
              <article key={item.href} className="home-card">
                {item.imageSrc && (
                  <Link to={item.href} className="guide-card-media">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.title}
                      loading="lazy"
                    />
                  </Link>
                )}
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

      <Reveal
        as="section"
        className="home-section home-topo-band"
        variant="up"
        delay={240}
      >
        <div className="home-container home-inner">
          <div className="home-topo-content">
            <h2>Getting outside shouldn’t feel complicated.</h2>
            <p>
              JoeTracks is designed to reduce the friction that keeps people
              indoors — unclear information, scattered resources, and
              unnecessary complexity.
            </p>
            <p>
              Whether you’re just getting started or refining existing skills,
              the goal remains the same: clearer decisions, better judgment, and
              more enjoyable days outside.
            </p>
            <p>
              Clear information. Proven systems. Real-world usefulness — in the
              Great Lakes and beyond.
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
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={320}>
        <div className="home-container home-inner">
          <div className="home-split">
            <div className="home-split-copy">
              <h2>What’s next</h2>
              <p className="home-subhead">
                JoeTracks is continuously expanding with new guides, tools, and
                planning resources designed to simplify real-world outdoor
                decisions.
              </p>

              <ul className="home-offer-list">
                <li>Hiking, biking, and backpacking destinations</li>
                <li>River paddling routes (access, shuttles, logistics)</li>
                <li>Beginner-friendly “how to start” resources</li>
              </ul>

              {/* Newsletter CTA (use a Link for now; swap to a real form later) */}
              <div className="home-start-cta">
                <Link to="/contact" className="home-btn home-btn-primary">
                  Get Updates
                </Link>
                <Link to="/guides" className="home-btn home-btn-secondary">
                  Browse Live Guides
                </Link>
              </div>

              <p className="home-subhead home-subhead--mt">
                No spam — just new guides, tools, and useful planning resources
                as they’re released.
              </p>
            </div>

            <div className="home-split-media">
              <img
                src="/images/manitou-island-backpacking-docks.png"
                alt="Backpackers waiting for the Manitou Island Ferry"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={400}>
        <div className="home-container home-inner home-cta-final">
          <h2>Have feedback, questions or want to collaborate?</h2>
          <Link to="/contact" className="home-btn home-btn-primary">
            Contact
          </Link>
        </div>
      </Reveal>
    </>
  );
};

export default Home;

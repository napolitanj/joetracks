import { useEffect, useState } from "react";
import "/src/styles/palmer-woods-guide.css";
import "/src/styles/shared.css";
import Reveal from "./ui/Reveal";
import SEO from "./SEO";
import NewsletterCapture from "./NewsletterCapture";
import { Link } from "react-router-dom";
import LNTNotice from "./guide/LNTNotice";
import ManagedBy from "./guide/ManagedBy";

const PalmerWoodsGuide = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO
        title="Mountain Biking at Palmer Woods Forest Reserve | JoeTracks"
        description="A guide to mountain biking the just-completed trail system at Palmer Woods Forest Reserve in Leelanau County, Michigan — 27 miles of singletrack across two trail hubs, with detailed maps, trail breakdowns, and trip-planning info."
        canonical="https://joetracks.com/palmer-woods-forest-reserve"
        image="https://joetracks.com/images/palmer-woods/palmer-woods-card.webp"
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mountain Biking at Palmer Woods Forest Reserve",
            description:
              "A guide to mountain biking the just-completed trail system at Palmer Woods Forest Reserve in Leelanau County, Michigan — 27 miles of singletrack across two trail hubs, with detailed maps, trail breakdowns, and trip-planning info.",
            url: "https://joetracks.com/palmer-woods-forest-reserve",
            image:
              "https://joetracks.com/images/palmer-woods/palmer-woods-card.webp",
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mountain Biking at Palmer Woods Forest Reserve",
            description:
              "A guide to mountain biking the just-completed trail system at Palmer Woods Forest Reserve in Leelanau County, Michigan — 27 miles of singletrack across two trail hubs, with detailed maps, trail breakdowns, and trip-planning info.",
            image:
              "https://joetracks.com/images/palmer-woods/palmer-woods-card.webp",
            author: {
              "@type": "Person",
              name: "Joe Napolitan",
              url: "https://joetracks.com",
            },
            publisher: {
              "@type": "Organization",
              name: "JoeTracks",
              logo: {
                "@type": "ImageObject",
                url: "https://joetracks.com/images/logo-lockup-teal.png",
              },
            },
            url: "https://joetracks.com/palmer-woods-forest-reserve",
            mainEntityOfPage:
              "https://joetracks.com/palmer-woods-forest-reserve",
            datePublished: "2026-05-03",
            dateModified: "2026-05-03",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://joetracks.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guides",
                item: "https://joetracks.com/guides",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Palmer Woods Forest Reserve Guide",
                item: "https://joetracks.com/palmer-woods-forest-reserve",
              },
            ],
          },
        ]}
      />

      <div className="guide palmer-woods-guide">
        <main className="container" id="page" role="main">
          <article className="sections">
            {/* ── Hero ── */}
            <Reveal delay={0}>
              <section className="hero palmer-woods-hero palmer-woods-bg">
                <div className="hero-text">
                  <h1 className={animate ? "animate" : ""}>
                    Mountain Biking at Palmer Woods Forest Reserve
                  </h1>
                  <p className="hero-subhead">A Leelanau County Trail Guide</p>
                </div>
              </section>
            </Reveal>

            {/* ── Intro ── */}
            <Reveal variant="up" delay={80}>
              <section className="content-wrapper dis-col">
                <div id="overview" className="dis-row palmer-woods-intro">
                  <div className="intro-text section-half">
                    <p>
                      {/* [PLACEHOLDER] Introduction paragraph 1 about Palmer Woods — overview of the reserve, location in Leelanau County, and significance of the new trail system. */}
                      [PLACEHOLDER — Introductory paragraph about Palmer Woods Forest Reserve: its location in Leelanau County, Michigan, and the significance of the newly completed trail system.]
                    </p>
                    <p>
                      {/* [PLACEHOLDER] Introduction paragraph 2 — character of the riding, terrain, forest type, and what makes this system unique in the region. */}
                      [PLACEHOLDER — Second paragraph describing the character of the riding, the terrain, forest types, and what distinguishes Palmer Woods from other trail systems in northwest Michigan.]
                    </p>
                    <p>
                      {/* [PLACEHOLDER] Introduction paragraph 3 — logistics overview and what this guide covers. */}
                      [PLACEHOLDER — Third paragraph providing a logistics overview and a brief description of what this guide covers.]
                    </p>
                  </div>
                  <div className="intro-image-wrapper section-half">
                    <img
                      src="/images/palmer-woods/palmer-woods-intro.webp"
                      alt="A mountain biker on a trail at Palmer Woods Forest Reserve"
                      className="intro-image"
                    />
                    <p className="palmer-woods-quick-nav">
                      Jump to:{" "}
                      <a href="#maps">Maps</a>{" "}
                      <a href="#trails">Trails</a>{" "}
                      <a href="#getting-there">Getting There</a>{" "}
                      <a href="#know-before-you-go">Know Before You Go</a>{" "}
                      <a href="#rules">Rules</a>
                    </p>
                  </div>
                </div>
                <hr className="section-divider" />
                <p>
                  <em>
                    Palmer Woods is a working forest reserve managed by the
                    Leelanau Conservancy. Stay on marked trails, respect trail
                    directionality, and yield appropriately to other users.
                    Mountain biking, hiking, and skiing trails are physically
                    separate networks — bikes are not permitted on the hike/ski
                    trails.
                  </em>
                </p>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Maps ── */}
            <Reveal variant="up" delay={140}>
              <section id="maps" className="content-wrapper">
                <h2>Trail Maps</h2>
                <div className="maps-grid">
                  <div className="map-block">
                    <p className="map-block-label">South Hubs</p>
                    <figure className="block-image-figure intrinsic">
                      <a
                        href={`${import.meta.env.BASE_URL}images/palmer-woods/palmer-woods-south-hubs-map.png`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/palmer-woods/palmer-woods-south-hubs-map.png"
                          alt="Map of the south hubs trail system at Palmer Woods"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="map-block">
                    <p className="map-block-label">Chaga Hub</p>
                    <figure className="block-image-figure intrinsic">
                      <a
                        href={`${import.meta.env.BASE_URL}images/palmer-woods/palmer-woods-chaga-hub-map.png`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/palmer-woods/palmer-woods-chaga-hub-map.png"
                          alt="Map of the Chaga Hub trail system at Palmer Woods"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <p>
                  {/* [PLACEHOLDER] Text explaining the two-hub structure of the trail system. */}
                  [PLACEHOLDER — Paragraph explaining the two-hub structure of the Palmer Woods trail system, how they connect, and how to plan a route across them.]
                </p>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Newsletter ── */}
            <Reveal variant="up" delay={500}>
              <section className="content-wrapper row cnt-vrt cnt-hrz mobile-col">
                <div className="col cnt-vrt cnt-hrz">
                  <h2>Enjoying this guide?</h2>
                  <p>Support this project for free.</p>
                </div>
                <NewsletterCapture
                  headline="I publish several guides every month."
                  subtext="Skiing, biking, paddling, and more — subscribing to the newsletter is a free and easy way to support me in building free community resources. Sign up to be notified when new guides are published and gain access to subscriber-only content."
                />
              </section>
            </Reveal>

            {/* ── Trails ── */}
            <Reveal variant="up" delay={200}>
              <section id="trails" className="content-wrapper">
                <hr className="section-divider" />
                <h2>The Trails</h2>
                <p>
                  {/* [PLACEHOLDER] Overview of the trail system, progression, and what to expect. */}
                  [PLACEHOLDER — Overview of the Palmer Woods trail system: total mileage, skill progression from beginner to difficult, trail surface character, and general expectations for a day of riding.]
                </p>

                <div className="trails-grid">
                  {/* ── Low Valley Hub ── */}
                  <div className="hub-heading">Low Valley Hub</div>

                  <div className="trail-card">
                    <h3>Ursa Minor</h3>
                    <span className="difficulty-pill difficulty-pill--beginner">Beginner</span>
                    <p className="trail-meta">1.0 mi</p>
                    <p>[PLACEHOLDER — Description of Ursa Minor trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/ursa-minor.webp"
                        alt="Ursa Minor trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  {/* ── Mid Valley Hub ── */}
                  <div className="hub-heading">Mid Valley Hub</div>

                  <div className="trail-card">
                    <h3>Ursa Major</h3>
                    <span className="difficulty-pill difficulty-pill--beginner">Beginner</span>
                    <p className="trail-meta">3.3 mi</p>
                    <p>[PLACEHOLDER — Description of Ursa Major trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/ursa-major.webp"
                        alt="Ursa Major trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>Acer Ridge</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">2.5 mi</p>
                    <p>[PLACEHOLDER — Description of Acer Ridge trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/acer-ridge.webp"
                        alt="Acer Ridge trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>The Enlightener</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">2.8 mi · One-way, counterclockwise</p>
                    <p>[PLACEHOLDER — Description of The Enlightener trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/the-enlightener.webp"
                        alt="The Enlightener trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  {/* ── High Valley Hub ── */}
                  <div className="hub-heading">High Valley Hub</div>

                  <div className="trail-card">
                    <h3>Beechdrops</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">1.0 mi</p>
                    <p>[PLACEHOLDER — Description of Beechdrops trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/beechdrops.webp"
                        alt="Beechdrops trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>Waxwing Connector</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">2.5 mi</p>
                    <p>[PLACEHOLDER — Description of Waxwing Connector trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/waxwing-connector.webp"
                        alt="Waxwing Connector trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>Fiddlehead</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">
                      2.7 mi · Directional, alternates daily (CW Tue/Thu/Sat,
                      CCW Mon/Wed/Fri/Sun)
                    </p>
                    <p>[PLACEHOLDER — Description of Fiddlehead trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/fiddlehead.webp"
                        alt="Fiddlehead trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  {/* ── Chaga Hub ── */}
                  <div className="hub-heading">Chaga Hub</div>

                  <div className="trail-card">
                    <h3>Swallowtail</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">1.8 mi</p>
                    <p>[PLACEHOLDER — Description of Swallowtail trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/swallowtail.webp"
                        alt="Swallowtail trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>Chaga Connector</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">0.6 mi</p>
                    <p>[PLACEHOLDER — Description of Chaga Connector trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/chaga-connector.webp"
                        alt="Chaga Connector trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>Turkey Tail</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate-difficult">Intermediate–Difficult</span>
                    <p className="trail-meta">3.7 mi</p>
                    <p>[PLACEHOLDER — Description of Turkey Tail trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/turkey-tail.webp"
                        alt="Turkey Tail trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>Hemlock Hollow</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">Intermediate</span>
                    <p className="trail-meta">3.5 mi</p>
                    <p>[PLACEHOLDER — Description of Hemlock Hollow trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/hemlock-hollow.webp"
                        alt="Hemlock Hollow trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>

                  <div className="trail-card">
                    <h3>Lion's Mane</h3>
                    <span className="difficulty-pill difficulty-pill--difficult">Difficult</span>
                    <p className="trail-meta">1.0 mi · One-way downhill</p>
                    <p>[PLACEHOLDER — Description of Lion's Mane trail.]</p>
                    {/* TODO: Add trail photo */}
                    <figure>
                      <img
                        src="/images/palmer-woods/trails/lions-mane.webp"
                        alt="Lion's Mane trail at Palmer Woods Forest Reserve"
                      />
                    </figure>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Getting There ── */}
            <Reveal variant="up" delay={260}>
              <section id="getting-there" className="content-wrapper">
                <h2>Getting There</h2>
                <div className="dis-row g-2">
                  <div className="section-half">
                    <p>
                      {/* [PLACEHOLDER] Parking, trailheads, and what to expect at trailhead facilities. */}
                      [PLACEHOLDER — Parking information for the north and south trailheads near the Wheeler/Darwin intersection, driving directions, and what to expect at the trailhead facilities.]
                    </p>
                    <p>
                      [PLACEHOLDER — Additional trailhead details: amenities, parking capacity, and any seasonal considerations.]
                    </p>
                  </div>
                  <figure className="section-half">
                    <img
                      src="/images/palmer-woods/trailhead.webp"
                      alt="The trailhead at Palmer Woods Forest Reserve"
                    />
                  </figure>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Know Before You Go ── */}
            <Reveal variant="up" delay={320}>
              <section id="know-before-you-go" className="content-wrapper">
                <h2>Know Before You Go</h2>
                <ul className="know-before-list">
                  <li>[PLACEHOLDER — Know before you go item 1.]</li>
                  <li>[PLACEHOLDER — Know before you go item 2.]</li>
                  <li>[PLACEHOLDER — Know before you go item 3.]</li>
                  <li>[PLACEHOLDER — Know before you go item 4.]</li>
                  <li>[PLACEHOLDER — Know before you go item 5.]</li>
                </ul>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Rules and Regulations ── */}
            <Reveal variant="up" delay={380}>
              <section id="rules" className="content-wrapper">
                <h2>Rules and Regulations</h2>
                <p>
                  Palmer Woods Forest Reserve is managed by the{" "}
                  <a
                    href="https://leelanauconservancy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leelanau Conservancy
                  </a>
                  . Please respect all posted rules and regulations at the
                  trailheads and practice{" "}
                  <a
                    href="https://lnt.org/why/7-principles/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leave No Trace
                  </a>{" "}
                  principles throughout your visit.
                </p>

                <hr className="section-divider" />

                <div className="vrt-spc"></div>
                <div className="video-row">
                  <div className="cnt">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID"
                      title="Mountain Biking Palmer Woods Forest Reserve"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </section>
            </Reveal>

            <div className="guide-footer-attributions content-wrapper">
              <ManagedBy organization="leelanauConservancy" />
              <LNTNotice />
              <Link to="/guides" className="back-to-guides">
                ← Back to Guides
              </Link>
            </div>
            <div className="vrt-spc"></div>
          </article>
        </main>
      </div>
    </>
  );
};

export default PalmerWoodsGuide;

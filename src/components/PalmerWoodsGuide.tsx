import { useEffect, useState } from "react";
import "/src/styles/palmer-woods-guide.css";
import "/src/styles/shared.css";
import Reveal from "./ui/Reveal";
import SEO from "./SEO";
import NewsletterCapture from "./NewsletterCapture";
import { Link } from "react-router-dom";
import LNTNotice from "./guide/LNTNotice";
import ManagedBy from "./guide/ManagedBy";
import SupportNotice from "./guide/SupportNotice";

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
                </div>
              </section>
            </Reveal>

            {/* ── Intro ── */}
            <Reveal variant="up" delay={80}>
              <section className="content-wrapper dis-col">
                <div id="overview" className="dis-row palmer-woods-intro">
                  <div className="intro-text section-half">
                    <p>
                      Palmer Woods Forest Reserve is a 1,115-acre property in
                      Leelanau County, about thirty minutes west of Traverse
                      City, Michigan. Owned by the Leelanau Conservancy, it
                      holds one of the most ambitious mountain bike trail
                      systems in the state. The network was completed in early
                      April 2026 after eight years of development, with 27 miles
                      of singletrack and 15 miles of separate hiking and skiing
                      trails.
                    </p>
                    <p>
                      The riding stands apart from most of the lower peninsula.
                      Roughly 400 feet of vertical relief runs through northern
                      hardwood forest bordered on three sides by Sleeping Bear
                      Dunes National Lakeshore. The trails were purpose-built
                      for mountain biking, designed for progression so riders of
                      any skill level can find something fun to explore.
                    </p>
                    <p>
                      The newest trails in the Chaga Hub opened on April 3, 2026
                      and aren't yet mapped on Trailforks or Mountain Bike
                      Project. Check out the maps and trail descriptions below
                      for the most current information available.
                    </p>
                  </div>
                  <div className="intro-image-wrapper section-half">
                    <img
                      src="/images/palmer-woods/palmer-woods-turkey-tail.webp"
                      alt="A biking trail at Palmer Woods Forest Reserve"
                      className="intro-image"
                    />
                    <p className="palmer-woods-quick-nav">
                      Jump to:
                      <a href="#getting-there">Getting There</a>{" "}
                      <a href="#maps">Maps</a> <a href="#trails">Trails</a>{" "}
                      <a href="#know-before-you-go">Know Before You Go</a>{" "}
                      <a href="#rules">Rules</a>
                    </p>
                  </div>
                </div>
                <hr className="section-divider" />
                <p>
                  <em>
                    Palmer Woods is a working forest reserve managed by the
                    Leelanau Conservancy. Both Sleeping Bear Dunes National
                    Lakeshore and private property border this natural area.
                    Stay on marked trails, respect trail directionality, and
                    yield appropriately to other users. Mountain biking, hiking,
                    and skiing trails are physically separate networks — bikes
                    are not permitted on the hike/ski trails.
                  </em>
                </p>
                <hr className="section-divider" />
              </section>
            </Reveal>
            {/* ── Getting There ── */}
            <Reveal variant="up" delay={260}>
              <section id="getting-there" className="content-wrapper">
                <h2>Getting There</h2>
                <div className="dis-row g-2">
                  <div className="section-half">
                    <ul className="stats-list">
                      <p>
                        Palmer Woods Reserve is a 22-mile, 30-minute drive from
                        Traverse City, Michigan. The northern entrance is not
                        yet designated on Google Maps, but the link below is
                        pinned to its location on the east side of Wheeler Road.
                      </p>
                      <li>
                        <strong>South Lot (main entrance):</strong>{" "}
                        <a
                          href="https://maps.app.goo.gl/rmA1Do8CZHyzVopHA"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Directions
                        </a>
                      </li>
                      <li>
                        <strong>North Lot:</strong>{" "}
                        <a
                          href="https://maps.app.goo.gl/Lwu1VpMoFRW5D13s9"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Directions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <figure className="section-half">
                    <img
                      src="/images/palmer-woods/palmer-woods-getting-there.webp"
                      alt="The trailhead at Palmer Woods Forest Reserve"
                    />
                  </figure>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>
            {/* ── Maps ── */}
            <Reveal variant="up" delay={140}>
              <section id="maps" className="content-wrapper">
                <h2>Trail Maps</h2>
                <p>
                  The Palmer Woods trail system is split across two physically
                  separate hubs, each with its own parking area along Wheeler
                  Road. The southern hubs contain the original network of
                  beginner and intermediate trails built between 2018 and 2023.
                  The northern hub, called the Chaga Hub, opened in April 2026
                  and adds the system's most technical riding.
                </p>

                <div className="map-section">
                  <h3>South Hubs</h3>
                  <p>
                    The three southern hubs are accessed from the main entrance,
                    where visitors will also find restrooms, changing areas, a
                    bike service station, and a covered picnic area. The hubs
                    are spaced along the lower, middle, and upper Price Valley,
                    with several trails converging at each. This makes it easy
                    to link routes into rides of varying length and difficulty.
                  </p>
                  <figure className="block-image-figure intrinsic map-figure">
                    <a
                      href={`${import.meta.env.BASE_URL}images/palmer-woods/palmer-woods-south-map.png`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/palmer-woods/palmer-woods-south-map.png"
                        alt="Map of the south hubs trail system at Palmer Woods"
                      />
                    </a>
                    <figcaption className="map-caption">
                      Tap to open full-size map.
                    </figcaption>
                  </figure>
                </div>

                <div className="map-section">
                  <h3>Chaga Hub (North)</h3>
                  <p>
                    The Chaga Hub holds the system's most challenging trails.
                    Intermediate riders will find longer climbs and faster
                    descents than anywhere in the southern hubs, while advanced
                    riders can take on technical rock features, drops, and the
                    system's only black-diamond downhill. The northern parking
                    area sits along Wheeler Road and is parking-only with no
                    facilities.
                  </p>
                  <figure className="block-image-figure intrinsic map-figure">
                    <a
                      href={`${import.meta.env.BASE_URL}images/palmer-woods/palmer-woods-north-map.png`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/palmer-woods/palmer-woods-north-map.png"
                        alt="Map of the Chaga Hub trail system at Palmer Woods"
                      />
                    </a>
                    <figcaption className="map-caption">
                      Tap to open full-size map.
                    </figcaption>
                  </figure>
                </div>

                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Newsletter ── */}
            <Reveal variant="up" delay={500}>
              <section className="content-wrapper row cnt-vrt cnt-hrz mobile-col">
                <div className="col cnt-vrt cnt-hrz">
                  <h2>Enjoying this guide so far?</h2>
                  <p>Support this project for free.</p>
                </div>
                <NewsletterCapture
                  headline="I publish several guides every month."
                  subtext="Subscribing to the newsletter is a free and easy way to support me in building free community resources. Sign up to be notified when new guides are published and gain access to subscriber-only content."
                />
              </section>
            </Reveal>

            {/* ── Trails ── */}
            <Reveal variant="up" delay={200}>
              <section id="trails" className="content-wrapper">
                <hr className="section-divider" />
                <h2>The Trails</h2>
                <p>
                  <strong>
                    Most of the biking trails in the preserve are directional,
                    with one-way traffic alternating direction most days.
                  </strong>{" "}
                  Trails are well-marked by posts listing a trail's name,
                  difficulty, and information about which direction you should
                  embark on any given day of the week.{" "}
                </p>
                <div className="trails-grid">
                  {/* ── Southern Hubs ── */}
                  <div className="hub-heading">Southern Hubs</div>
                  <figure className="hub-image-figure">
                    <img
                      className="hub-image"
                      src="/images/palmer-woods/enlightener-s-turn.webp"
                      alt="A biker navigates a turn in Palmer Woods Preserve"
                    />
                    <figcaption className="hub-image-caption">
                      The Southern Hubs offer both beginner and intermediate
                      trails with optional advanced features, such as The
                      Enlightener pictured above.
                    </figcaption>
                  </figure>

                  <div className="trail-card">
                    <h3>Ursa Minor</h3>
                    <span className="difficulty-pill difficulty-pill--beginner">
                      Beginner
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 1.0 mi</p>
                      <p className="trail-meta">Vert: +/-59 ft</p>
                    </div>
                    <p>
                      With 1.0 mile of singletrack and less than 60 feet of
                      climbing, Ursa Minor is an ideal introductory trail for
                      beginners or a warmup for experienced riders. An optional
                      "session" area near the parking lot lets riders practice
                      small drops and rollers.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Ursa Major</h3>
                    <span className="difficulty-pill difficulty-pill--beginner">
                      Beginner
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 3.3 mi</p>
                      <p className="trail-meta">Vert: +/-242 ft</p>
                    </div>
                    <p>
                      A step up from Ursa Minor, this trail offers gradual
                      climbs, flowy but controlled descents, bermed S-turns, and
                      access to more advanced trails in the upper hubs.
                      Occasional jumps and rock features all have bypasses.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Acer Ridge</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 2.5 mi</p>
                      <p className="trail-meta">Vert: +/-325 ft</p>
                    </div>
                    <p>
                      Acer Ridge knocks the climbing out first so riders can
                      enjoy the descent uninterrupted. Fast, flowy, and built
                      for intermediate riders, the route also includes optional
                      technical features for those ready to push it.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>The Enlightener</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 2.8 mi</p>
                      <p className="trail-meta">Vert: +/-291 ft</p>
                    </div>
                    <p>
                      Touring the eastern boundary, The Enlightener winds in and
                      out of gullies along the slope of the reserve. Riders will
                      find thoughtfully-built S-turns, optional advanced
                      sections, drops, and rollers along extended downhill
                      stretches.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Beechdrops</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 1.0 mi</p>
                      <p className="trail-meta">Vert: +/-261 ft</p>
                    </div>
                    <p>
                      Beechdrops is a short trail connecting Fiddlehead back to
                      the Mid Valley Hub. Fast, flowy, and entirely downhill,
                      it's the fun way to return to the parking lot from the
                      northern trails.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Waxwing Connector</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 1.4 mi</p>
                      <p className="trail-meta">Vert: +/-230 ft</p>
                    </div>
                    <p>
                      One of just a few two-way biking trails in Palmer Woods,
                      the Waxwing Connector links the intermediate trails on the
                      east side of the reserve to the Mid Valley Hub. When
                      heading east to west, the majority of this trail is
                      downhill.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Fiddlehead</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 2.7 mi</p>
                      <p className="trail-meta">Vert: +/-300 ft</p>
                    </div>
                    <p>
                      Regardless of which direction the trail runs that day,
                      riders will earn extended sections of berms, rollers, and
                      optional rock drops on the downhill after two sustained
                      climbs. Fiddlehead also provides access to the Swallowtail
                      Connector for riders headed to the Chaga Hub.
                    </p>
                  </div>

                  {/* ── Chaga Hub ── */}
                  <div className="hub-heading">Chaga Hub</div>
                  <figure className="hub-image-figure">
                    <img
                      className="hub-image"
                      src="/images/palmer-woods/turkey-tail-feature.webp"
                      alt="A rocky feature on the Turkey Tail trail in Palmer Woods"
                    />
                    <figcaption className="hub-image-caption">
                      Trails in the Chaga Hub include advanced terrain like this
                      technical rock section on Turkey Tail.
                    </figcaption>
                  </figure>

                  <div className="trail-card">
                    <h3>Swallowtail</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 1.8 mi</p>
                      <p className="trail-meta">Vert: +/-298 ft</p>
                    </div>
                    <p>
                      A two-way trail linking the southern hubs to the Chaga
                      Hub. Riding it south to north is the better direction —
                      primarily downhill and stacked with rollers, fast turns,
                      and rock kickers.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Chaga Connector</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 0.6 mi</p>
                      <p className="trail-meta">Vert: +/-190 ft</p>
                    </div>
                    <p>
                      A two-way trail offering access to the Chaga Hub from the
                      north parking lot. Trending toward intermediate/advanced,
                      the mandatory rock features in both directions are a
                      preview of what the rest of the hub demands.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Turkey Tail</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate-difficult">
                      Intermediate–Difficult
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 3.7 mi</p>
                      <p className="trail-meta">Vert: +/-486 ft</p>
                    </div>
                    <p>
                      Fast, challenging, and beautifully crafted, Turkey Tail is
                      arguably the best intermediate trail in the reserve. Long
                      climbs give way to extended sections of flowy downhill
                      peppered with advanced features. Expect rocky obstacles to
                      appear without warning.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Hemlock Hollow</h3>
                    <span className="difficulty-pill difficulty-pill--intermediate">
                      Intermediate
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">Length: 3.5 mi</p>
                      <p className="trail-meta">Vert: +/-384 ft</p>
                    </div>
                    <p>
                      Hemlock Hollow was under maintenance during my visit.
                      Detailed description coming after my next ride. Based on
                      the route, expect intermediate-level singletrack along the
                      eastern edge of the Chaga Hub.
                    </p>
                  </div>

                  <div className="trail-card">
                    <h3>Lion's Mane</h3>
                    <span className="difficulty-pill difficulty-pill--difficult">
                      Difficult
                    </span>
                    <div className="trail-meta-container">
                      <p className="trail-meta">
                        Length: 1.0 mi · One-way downhill
                      </p>
                      <p className="trail-meta">Vert: -249 ft</p>
                    </div>
                    <p>
                      The only advanced route in Palmer Woods, Lion's Mane is
                      strictly downhill — riders ascend via Turkey Tail to
                      access it. Gravity alone pulls you through a steep flow
                      trail filled with jumps and rock features up to two feet
                      in height.
                    </p>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Know Before You Go ── */}
            <Reveal variant="up" delay={320}>
              <section id="know-before-you-go" className="content-wrapper">
                <h2>Know Before You Go</h2>
                <ul className="know-before-list">
                  <li>
                    Cellular reception is limited throughout the preserve.
                  </li>
                  <li>
                    There are portable toilets, but no running water at the
                    south parking lot.
                  </li>
                  <li>
                    Ticks carrying Lyme disease are present in Palmer Woods.
                    Take precaution, and do thorough checks after every visit.
                  </li>
                  <li>
                    Hunting is permitted in the preserve. Take precautions by
                    wearing bright clothing during active hunting seasons.{" "}
                  </li>

                  <li>
                    Respect the nearby private residents. Stay on trails and
                    please drive slowly along Wheeler and School Lake Roads.
                  </li>
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
                      src="https://www.youtube.com/embed/Jfp6XPN_M8o?si=xGWxXTteyPYXdZkX"
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
              <SupportNotice />
            </div>
            <div className="vrt-spc"></div>
          </article>
        </main>
        <Link to="/guides" className="back-to-guides">
          ← Back to Guides
        </Link>
      </div>
    </>
  );
};

export default PalmerWoodsGuide;

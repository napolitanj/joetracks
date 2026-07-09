import { useEffect, useState } from "react";
import "/src/styles/kalkaska-moraine-loop-guide.css";
import "/src/styles/shared.css";
import Reveal from "./ui/Reveal";
import SEO from "./SEO";
import { Link } from "react-router-dom";
import LNTNotice from "./guide/LNTNotice";
import ManagedBy from "./guide/ManagedBy";
import SupportNotice from "./guide/SupportNotice";

const PRODUCT_URL = "https://joetracks.kit.com/products/kalkaska-moraine-loop";

const KalkaskaMoraineLoopGuide = () => {
  const [animate, setAnimate] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO
        title="The Kalkaska Moraine Loop — A 50-Mile Michigan Backpacking Loop Guide | JoeTracks"
        description="A field-verified 50-mile backpacking loop through the sandy moraine country southeast of Traverse City, Michigan. Four legs, three shorter trips, full maps, elevation profiles, waypoints, and a CalTopo mapset. The only complete guide to the route."
        canonical="https://joetracks.com/kalkaska-moraine-loop"
        image="https://joetracks.com/images/kalkaska-moraine-loop/kalkaska-moraine-loop-banner.webp"
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "The Kalkaska Moraine Loop",
            description:
              "A paid guide to a 49.3-mile field-verified backpacking loop through the sandy moraine country southeast of Traverse City, Michigan.",
            url: "https://joetracks.com/kalkaska-moraine-loop",
            image:
              "https://joetracks.com/images/kalkaska-moraine-loop/kalkaska-moraine-loop-banner.webp",
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Kalkaska Moraine Loop",
            description:
              "A paid guide to a 49.3-mile field-verified backpacking loop through the sandy moraine country southeast of Traverse City, Michigan. Four legs, three shorter trips, full maps, elevation profiles, waypoints, and a companion CalTopo mapset.",
            image:
              "https://joetracks.com/images/kalkaska-moraine-loop/kalkaska-moraine-loop-banner.webp",
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
            url: "https://joetracks.com/kalkaska-moraine-loop",
            mainEntityOfPage: "https://joetracks.com/kalkaska-moraine-loop",
            datePublished: "2026-07-08",
            dateModified: "2026-07-08",
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
                name: "The Kalkaska Moraine Loop",
                item: "https://joetracks.com/kalkaska-moraine-loop",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is the Kalkaska Moraine Loop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is in the Boardman River headwaters country southeast of Traverse City, Michigan, spanning state forest land, quiet areas, and preserves across Grand Traverse and Kalkaska counties.",
                },
              },
              {
                "@type": "Question",
                name: "How long is the Kalkaska Moraine Loop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The full loop is 49.3 miles with about 3,128 feet of elevation gain. It is designed as a loop but can be completed as a figure-eight. It also contains connector trails that break the route into shorter loops for day hikes and overnighters.",
                },
              },
              {
                "@type": "Question",
                name: "How many days does it take to backpack?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Four to six days are comfortable for the full loop, depending on pace and how you split the camps around water. Strong hikers can do it faster. The guide includes four, five, and six-day itineraries.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Kalkaska Moraine Loop good for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Parts of it. The Valley of the Giants and Brown Bridge trip is beginner-friendly and well marked. The full loop and the Island Lake leg involve unmarked singletrack and long dry stretches and are better suited to experienced backpackers.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit or passport?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Michigan Recreation Passport is required to park at the Sand Lakes and Muncie Lakes trailheads. Dispersed camping on state forest land requires a free camp registration card. Some quiet areas and preserves along the route do not allow camping at all.",
                },
              },
              {
                "@type": "Question",
                name: "What comes with the guide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The guide covers all 49.3 miles in four legs plus three shorter trips, with maps, elevation profiles, waypoint datasheets, water and camping planning, emergency information, and a companion CalTopo mapset with the full route and waypoints for offline navigation.",
                },
              },
            ],
          },
        ]}
      />

      <div className="guide kalkaska-moraine-loop-guide">
        <main className="container" id="page" role="main">
          <article className="sections">
            {/* ── Hero ── */}
            <Reveal delay={0}>
              <section className="hero kalkaska-moraine-loop-hero kalkaska-moraine-loop-bg">
                <div className="hero-text">
                  <h1 className={animate ? "animate" : ""}>
                    The Kalkaska Moraine Loop
                  </h1>
                </div>
              </section>
            </Reveal>

            {/* ── Overview / Intro ── */}
            <Reveal variant="up" delay={80}>
              <section className="content-wrapper dis-col">
                <div
                  id="overview"
                  className="dis-row kalkaska-moraine-loop-intro"
                >
                  <div className="intro-text section-half">
                    <p>
                      The Kalkaska Moraine Loop is a 49.3-mile backpacking loop
                      through the Boardman River headwaters country southeast of
                      Traverse City. I designed it, scouted every foot of it,
                      and hiked the full loop solo in a single day on the summer
                      solstice to make sure it actually works. Until I linked it
                      together, this route did not exist as a named, designated
                      loop.
                    </p>
                    <p>
                      The loop runs through a chain of quiet areas, preserves,
                      and state forest land, stitching together the North
                      Country Trail, the Boardman River Trail, the Shore to
                      Shore Trail, the Sand Lakes and Muncie Lakes pathways, and
                      stretches of unmarked singletrack and two-track. It is
                      named for the Kalkaska Sandy Moraines it crosses, glacial
                      country built on Kalkaska sand, Michigan's official state
                      soil. Old-growth white pine, eagles over Island Lake,
                      clear river bottoms along the Boardman, and open grassy
                      fields, all in one loop.
                    </p>
                    <p>
                      What makes it a real hiking objective is the distance, the
                      navigation, and the self-supported logistics. The full
                      guide breaks the loop into four legs and three shorter
                      trips, with maps, elevation profiles, datasheets, water
                      and camping planning, and a companion CalTopo mapset for
                      navigation. It is the only complete guide to the route.
                    </p>
                  </div>
                  <div className="intro-image-wrapper section-half">
                    <img
                      src="/images/kalkaska-moraine-loop/kalkaska-moraine-loop-intro.webp"
                      alt="Backpacker on the Kalkaska Moraine Loop trail through sandy moraine country in northern Michigan"
                      className="intro-image"
                    />
                    <p className="kalkaska-moraine-loop-quick-nav">
                      Jump to: <a href="#guide-cta">The Guide</a>{" "}
                      <a href="#video">Video</a>{" "}
                      <a href="#trip-planning">Trip Planning</a>
                    </p>
                  </div>
                </div>
                <figure className="kalkaska-moraine-loop-overview-map">
                  <img
                    src="/images/kalkaska-moraine-loop/kalkaska-moraine-loop-overview-map.webp"
                    alt="Overview map of the Kalkaska Moraine Loop showing all four legs of the 49.3-mile figure-eight backpacking route southeast of Traverse City, Michigan"
                  />
                  <figcaption>
                    A route overview of the full 49.3-mile Kalkaska Moraine Loop
                    including trailheads, connector trails, and public land
                    boundaries.
                  </figcaption>
                </figure>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Mid-page CTA ── */}
            <Reveal variant="up" delay={140}>
              <section
                id="guide-cta"
                className="content-wrapper col cnt-vrt cnt-hrz"
              >
                {/* ── CTA copy + button ── */}
                <div className="col cnt-vrt cnt-hrz">
                  <h2>Get the Complete Guide</h2>
                  <p>
                    Download the 26-page Kalkaska Moraine Loop guidebook here.
                    Every leg is outlined, with water, camping, and waypoints
                    and more, so you can plan and hike it with confidence.
                  </p>
                  <a
                    href={PRODUCT_URL}
                    className="kml-buy-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy the Guide ($25)
                  </a>
                </div>{" "}
                <div className="kml-preview-row">
                  <figure>
                    {/* TODO: replace preview-leg-reference.webp */}
                    <img
                      className="kml-preview-img"
                      src="/images/kalkaska-moraine-loop/guide-preview-1.webp"
                      alt="A leg reference page from the Kalkaska Moraine Loop guide showing the leg map, elevation profile, and waypoint datasheet"
                      loading="lazy"
                      width="850"
                      height="1100"
                    />
                    <figcaption>
                      Every leg contains a custom map and elevation profile.
                    </figcaption>
                  </figure>
                  <figure>
                    {/* TODO: replace preview-leg-description.webp */}
                    <img
                      className="kml-preview-img"
                      src="/images/kalkaska-moraine-loop/guide-preview-2.webp"
                      alt="A preview of a mile-by-mile data set for the Kalkaska Moraine Loop."
                      loading="lazy"
                      width="850"
                      height="1100"
                    />
                    <figcaption>
                      Mile-by-mile data sheets mark water, camping, tricky
                      turns, and more.
                    </figcaption>
                  </figure>
                  <figure>
                    {/* TODO: replace preview-datasheet.webp */}
                    <img
                      className="kml-preview-img"
                      src="/images/kalkaska-moraine-loop/guide-preview-3.webp"
                      alt="A close-up of a page from the Kalkaska Moraine Loop guide"
                      loading="lazy"
                      width="850"
                      height="1100"
                    />
                    <figcaption>
                      The guide inculdes an interactive CalTopo mapset with
                      realtime navigation.
                    </figcaption>
                  </figure>
                </div>
              </section>
            </Reveal>

            {/* ── What's in the Guide ── */}
            <Reveal variant="up" delay={200}>
              <section id="the-guide" className="content-wrapper">
                <h2>What's in the Guide</h2>
                <p>
                  The full guide splits the loop into four legs, described in
                  the order you walk it, plus three shorter trips built from
                  those legs for a first overnight, a scenic weekend, or a
                  remote night out. Here is the high-level shape of the route.
                  The guide has the mile-by-mile detail.
                </p>
                <div className="kalkaska-moraine-loop-legs-grid">
                  <div className="kalkaska-moraine-loop-leg-card">
                    <img
                      src="/images/kalkaska-moraine-loop/muncie-lakes-bench.webp"
                      alt="Muncie Lakes Pathway singletrack on Leg 1 of the Kalkaska Moraine Loop"
                      className="leg-img"
                    />
                    <h3>Leg 1: Muncie Lakes to NCT Broomhead Road</h3>
                    <p>
                      <strong>6.92 miles · +546 / -590 ft</strong>
                    </p>
                    <p>
                      The loop starts on the Muncie Lakes Pathway, a braid of
                      singletrack, ski trail, and two-track. The signage is
                      good, but the turn onto the Shore to Shore Trail north of
                      marker 9 is unmarked and easy to miss.
                    </p>
                    <p>
                      Once you connect with the North Country Trail, navigation
                      simplifies to following the blue blazes out to the
                      Broomhead Road trailhead. A gentle, well-marked start to
                      the loop.
                    </p>
                  </div>
                  <div className="kalkaska-moraine-loop-leg-card">
                    <img
                      src="/images/kalkaska-moraine-loop/island-lake.webp"
                      alt="Island Lake on Leg 2 of the Kalkaska Moraine Loop, the most remote stretch of the route"
                      className="leg-img"
                    />
                    <h3>Leg 2: NCT Broomhead Road to Sand Lakes</h3>
                    <p>
                      <strong>13.94 miles · +969 / -945 ft</strong>
                    </p>
                    <p>
                      The hardest leg to navigate, and the most remote. It
                      leaves the marked trail east of Sand Lakes post 14 onto
                      undesignated paths and two-track out to Island Lake, then
                      loops back through unmarked country where the trail comes
                      and goes.
                    </p>
                    <p>
                      It holds the longest dry stretch on the route, about six
                      miles without reliable water, and the best primitive camp,
                      the quiet east shore of Island Lake, where I watched a
                      pair of bald eagles on the far side of the lake.
                    </p>
                  </div>
                  <div className="kalkaska-moraine-loop-leg-card">
                    <img
                      src="/images/kalkaska-moraine-loop/sand-lakes.webp"
                      alt="Kalkaska mountain bike singletrack near Twin Lakes on Leg 3 of the Kalkaska Moraine Loop"
                      className="leg-img"
                    />
                    <h3>Leg 3: Sand Lakes to Muncie Lakes</h3>
                    <p>
                      <strong>12.79 miles · +732 / -715 ft</strong>
                    </p>
                    <p>
                      From Sand Lakes the route heads west on Kalkaska mountain
                      bike singletrack past Twin Lakes, crosses Supply Road at
                      the Dollar Lake trailhead, and picks up the North Country
                      Trail south back toward Muncie Lakes.
                    </p>
                    <p>
                      This leg closes the eastern loop back at the trailhead,
                      the one point where the route returns to your car
                      mid-trip. It makes a natural resupply, water top-off, or
                      bail point before the final leg.
                    </p>
                  </div>
                  <div className="kalkaska-moraine-loop-leg-card">
                    <img
                      src="/images/kalkaska-moraine-loop/valley-of-the-giants.webp"
                      alt="Valley of the Giants old-growth white pine on Leg 4 of the Kalkaska Moraine Loop near Brown Bridge"
                      className="leg-img"
                    />
                    <h3>
                      Leg 4: Muncie Lakes through the Valley of the Giants and
                      Brown Bridge
                    </h3>
                    <p>
                      <strong>15.58 miles · +893 / -893 ft</strong>
                    </p>
                    <p>
                      The scenic finish, and the most beginner-friendly leg. It
                      passes Scheck's Place, drops into the old-growth white
                      pine of the Valley of the Giants, then follows about four
                      miles of quiet dirt road past the historic Emma Northrup
                      gravesite.
                    </p>
                    <p>
                      From there the Shore to Shore Trail leads into the Brown
                      Bridge Quiet Area, a restored river habitat that is the
                      prettiest stretch on the loop, before the Boardman River
                      Trail carries you back to the trailhead.
                    </p>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Video ── */}
            <Reveal variant="up" delay={280}>
              <section id="video" className="content-wrapper">
                <hr className="section-divider" />
                <h2>Watch: I Built a 50-Mile Backpacking Loop in Michigan</h2>
                <div className="row cnt">
                  {/* TODO: replace VIDEO_ID_TODO with the real YouTube video ID */}
                  <iframe
                    src="https://www.youtube.com/embed/vbSHrO2AGOI?si=bp3z_5BIzIfVBC75"
                    title="Watch: I Built a 50-Mile Backpacking Loop in Michigan"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Trip Planning ── */}
            <Reveal variant="up" delay={360}>
              <section id="trip-planning" className="content-wrapper">
                <h2>Trip Planning</h2>
                <div className="dis-row g-2">
                  <div className="section-half">
                    <h3>Best Seasons</h3>
                    <p>
                      The best window is mid-to-late summer through October.
                      September is the sweet spot: the bugs and summer crowds
                      have thinned, temperatures are comfortable, and hunting
                      season has not yet arrived. Spring and early summer bring
                      mosquitoes, especially around the lakes. Winter is a
                      serious undertaking on skis or snowshoes and is outside
                      the scope of this guide.
                    </p>
                    <h3>Skill Level</h3>
                    <p>
                      There is a version of this route for almost anyone. The
                      Valley of the Giants and Brown Bridge trip is
                      beginner-friendly and well marked. The full loop and the
                      Island Lake country are for experienced hikers comfortable
                      navigating unmarked singletrack with a GPS or map and
                      compass. Long stretches are unmarked, and that is the real
                      gatekeeper, not the terrain.
                    </p>
                  </div>
                  <div className="section-half">
                    <h3>Water</h3>
                    <p>
                      Water is the defining planning challenge. The sandy
                      moraine soil drains fast, so reliable water is not evenly
                      spaced. Several stretches run long and dry, including a
                      six-mile gap on the Island Lake leg. Treat every source as
                      needing purification. The guide marks every reliable water
                      source along the route.
                    </p>
                    <h3>Permits &amp; Camping</h3>
                    <p>
                      Sand Lakes Quiet Area and Muncie Lakes Pathway require a
                      Michigan Recreation Passport to park. Most of the loop
                      crosses state forest land where dispersed camping is
                      allowed with a free camp registration card, but East Creek
                      Preserve, Brown Bridge Quiet Area, and the Muncie Lakes
                      Pathway do not allow camping. The guide details the rules
                      and the best campsites leg by leg.
                    </p>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── FAQ ── */}
            <Reveal variant="up" delay={440}>
              <section id="faq" className="content-wrapper">
                <h2>Frequently Asked Questions</h2>
                <div className="kalkaska-moraine-loop-faq-list">
                  <div className="kalkaska-moraine-loop-faq-item">
                    <button
                      className="kalkaska-moraine-loop-faq-summary"
                      aria-expanded={openFaq === 0}
                      onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                    >
                      Where is the Kalkaska Moraine Loop?
                      <span
                        className="kalkaska-moraine-loop-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 0 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="kalkaska-moraine-loop-faq-answer-wrapper"
                      aria-hidden={openFaq !== 0}
                    >
                      <div className="faq-answer">
                        <p>
                          It is in the Boardman River headwaters country
                          southeast of Traverse City, Michigan, spanning state
                          forest land, quiet areas, and preserves across Grand
                          Traverse and Kalkaska counties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="kalkaska-moraine-loop-faq-item">
                    <button
                      className="kalkaska-moraine-loop-faq-summary"
                      aria-expanded={openFaq === 1}
                      onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    >
                      How long is the Kalkaska Moraine Loop?
                      <span
                        className="kalkaska-moraine-loop-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 1 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="kalkaska-moraine-loop-faq-answer-wrapper"
                      aria-hidden={openFaq !== 1}
                    >
                      <div className="faq-answer">
                        <p>
                          The full loop is 49.3 miles with about 3,128 feet of
                          elevation gain. It is designed as a loop but can be
                          completed as a figure-eight. It also contains
                          connector trails that break the route into shorter
                          loops for day hikes and overnighters.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="kalkaska-moraine-loop-faq-item">
                    <button
                      className="kalkaska-moraine-loop-faq-summary"
                      aria-expanded={openFaq === 2}
                      onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    >
                      How many days does it take to backpack?
                      <span
                        className="kalkaska-moraine-loop-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 2 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="kalkaska-moraine-loop-faq-answer-wrapper"
                      aria-hidden={openFaq !== 2}
                    >
                      <div className="faq-answer">
                        <p>
                          Four to six days are comfortable for the full loop,
                          depending on pace and how you split the camps around
                          water. Strong hikers can do it faster. The guide
                          includes four, five, and six-day itineraries.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="kalkaska-moraine-loop-faq-item">
                    <button
                      className="kalkaska-moraine-loop-faq-summary"
                      aria-expanded={openFaq === 3}
                      onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    >
                      Is the Kalkaska Moraine Loop good for beginners?
                      <span
                        className="kalkaska-moraine-loop-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 3 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="kalkaska-moraine-loop-faq-answer-wrapper"
                      aria-hidden={openFaq !== 3}
                    >
                      <div className="faq-answer">
                        <p>
                          Parts of it. The Valley of the Giants and Brown Bridge
                          trip is beginner-friendly and well marked. The full
                          loop and the Island Lake leg involve unmarked
                          singletrack and long dry stretches and are better
                          suited to experienced backpackers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="kalkaska-moraine-loop-faq-item">
                    <button
                      className="kalkaska-moraine-loop-faq-summary"
                      aria-expanded={openFaq === 4}
                      onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                    >
                      Do I need a permit or passport?
                      <span
                        className="kalkaska-moraine-loop-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 4 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="kalkaska-moraine-loop-faq-answer-wrapper"
                      aria-hidden={openFaq !== 4}
                    >
                      <div className="faq-answer">
                        <p>
                          A Michigan Recreation Passport is required to park at
                          the Sand Lakes and Muncie Lakes trailheads. Dispersed
                          camping on state forest land requires a free camp
                          registration card. Some quiet areas and preserves
                          along the route do not allow camping at all.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="kalkaska-moraine-loop-faq-item">
                    <button
                      className="kalkaska-moraine-loop-faq-summary"
                      aria-expanded={openFaq === 5}
                      onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                    >
                      What comes with the guide?
                      <span
                        className="kalkaska-moraine-loop-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 5 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="kalkaska-moraine-loop-faq-answer-wrapper"
                      aria-hidden={openFaq !== 5}
                    >
                      <div className="faq-answer">
                        <p>
                          The guide covers all 49.3 miles in four legs plus
                          three shorter trips, with maps, elevation profiles,
                          waypoint datasheets, water and camping planning,
                          emergency information, and a companion CalTopo mapset
                          with the full route and waypoints for offline
                          navigation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Bottom CTA ── */}
            <Reveal variant="up" delay={520}>
              <section className="content-wrapper row cnt-vrt cnt-hrz mobile-col">
                <div className="col cnt-vrt cnt-hrz">
                  <h2>Ready to Hike the Kalkaska Moraine Loop?</h2>
                  <p>
                    The complete guide is $25. Everything I learned building and
                    hiking this route, so you don't have to learn it the hard
                    way.
                  </p>
                  <a
                    href={PRODUCT_URL}
                    className="kml-buy-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy the Guide ($25)
                  </a>
                </div>
              </section>
            </Reveal>

            {/* ── Footer Attributions ── */}
            <Reveal variant="up" delay={520}>
              <section className="content-wrapper">
                <div className="guide-footer-attributions">
                  <ManagedBy organization="michiganDNR" />
                  <LNTNotice />
                  <SupportNotice />
                </div>
                <div className="vrt-spc"></div>
              </section>
            </Reveal>
          </article>
        </main>
        <Link to="/guides" className="back-to-guides">
          ← Back to Guides
        </Link>
      </div>
    </>
  );
};

export default KalkaskaMoraineLoopGuide;

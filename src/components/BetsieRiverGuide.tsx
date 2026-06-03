import { useEffect, useState } from "react";
import "/src/styles/betsie-river-guide.css";
import "/src/styles/shared.css";
import Reveal from "./ui/Reveal";
import SEO from "./SEO";
import NewsletterCapture from "./NewsletterCapture";
import { Link } from "react-router-dom";
import LNTNotice from "./guide/LNTNotice";
import ManagedBy from "./guide/ManagedBy";

const BetsieRiverGuide = () => {
  const [animate, setAnimate] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO
        title="The Betsie River Paddling Guide — Kayaking & Canoeing from Interlochen to Frankfort | JoeTracks"
        description="A complete guide to paddling the Betsie River in northern Michigan — 54 miles of kayaking and canoeing from Green Lake near Interlochen to Lake Michigan at Frankfort. Download the free 37-page PDF guide."
        canonical="https://joetracks.com/betsie-river"
        image="https://joetracks.com/images/betsie-river/betsie-river-card.webp"
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "The Betsie River Paddling Guide",
            description:
              "A complete guide to Betsie River kayaking and canoeing — 54 miles from Green Lake near Interlochen to Lake Michigan at Frankfort.",
            url: "https://joetracks.com/betsie-river",
            image:
              "https://joetracks.com/images/betsie-river/betsie-river-card.webp",
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Betsie River Paddling Guide",
            description:
              "A complete guide to Betsie River paddling — 54 miles of northern Michigan kayaking and canoeing from Interlochen to Frankfort, with mile-by-mile notes on put-ins, take-outs, hazards, and campsites.",
            image:
              "https://joetracks.com/images/betsie-river/betsie-river-card.webp",
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
            url: "https://joetracks.com/betsie-river",
            mainEntityOfPage: "https://joetracks.com/betsie-river",
            datePublished: "2026-06-03",
            dateModified: "2026-06-03",
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
                name: "The Betsie River Paddling Guide",
                item: "https://joetracks.com/betsie-river",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you kayak or canoe the Betsie River?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The Betsie is one of the Lower Peninsula's best thru-paddle rivers, runnable by both kayak and canoe. The upper section is technical and best suited to intermediate and advanced paddlers, while the middle and lower sections are friendlier to capable beginners.",
                },
              },
              {
                "@type": "Question",
                name: "How long is the Betsie River?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Betsie runs about 54 miles from its source at Green Lake near Interlochen to Lake Michigan at Frankfort.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to paddle the entire Betsie River?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most paddlers plan two to four days for the full 54-mile thru-paddle, depending on pace, water levels, and how much time is spent clearing or portaging logjams. It can be done faster by strong, experienced paddlers, but the river is best enjoyed unhurried.",
                },
              },
              {
                "@type": "Question",
                name: "Where does the Betsie River start and end?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It begins at Green Lake near Interlochen in Grand Traverse County and ends at Lake Michigan in Frankfort, passing through Benzie County for most of its length.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Betsie River good for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Parts of it. The slow, deep lower river and the short stretch from Fred's Landing to Homestead Dam are well suited to beginners. The upper river and the technical water below Thompsonville are not, due to logjams, sweepers, and fast blind bends.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a permit to paddle the Betsie River?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No permit is required to paddle the river. If you camp, dispersed camping on state forest land requires a free registration card, and you may not camp on private property. A fishing license is required if you fish.",
                },
              },
              {
                "@type": "Question",
                name: "When is the best time to paddle the Betsie River?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "May through October is the practical season. September and early October offer fall color, manageable flows, and lighter crowds, which is the best combination for most paddlers. Spring brings higher, faster water and more active logjam hazard in the upper river.",
                },
              },
            ],
          },
        ]}
      />

      <div className="guide betsie-river-guide">
        <main className="container" id="page" role="main">
          <article className="sections">
            {/* ── Hero ── */}
            <Reveal delay={0}>
              <section className="hero betsie-river-hero betsie-river-bg">
                <div className="hero-text">
                  <h1 className={animate ? "animate" : ""}>
                    The Betsie River Paddling Guide
                  </h1>
                </div>
              </section>
            </Reveal>
            {/* ── Free Guide Callout ── */}
            <Reveal variant="up" delay={80}>
              <section className="content-wrapper">
                <p className="betsie-river-free-guide-callout betsie-river-quick-nav">
                  <em>
                    The 37-page PDF guide to all 54 miles of the Betsie River is
                    available for free — put-ins, hazards, shuttles, camping,
                    and maps for every section.
                  </em>{" "}
                  <a href="#guide-cta">Scroll down to download.</a>
                </p>
              </section>
            </Reveal>
            {/* ── Overview / Intro ── */}
            <Reveal variant="up" delay={80}>
              <section className="content-wrapper dis-col">
                <div id="overview" className="dis-row betsie-river-intro">
                  <div className="intro-text section-half">
                    <p>
                      The Betsie River begins at Green Lake near Interlochen in
                      Benzie County and flows 54 miles west before emptying into
                      Lake Michigan at Frankfort. It is a designated Michigan
                      trout stream and one of the Lower Peninsula's most
                      rewarding thru-paddle routes — one I've documented in a
                      free 37-page guide you can download from this page.
                    </p>
                    <p>
                      The river passes through forests, wetlands, and farmland
                      past Thompsonville and through the Benzonia area before
                      reaching Betsie Lake and the coast at Frankfort. Its
                      character changes considerably from headwaters to mouth: a
                      narrow, wooded corridor in the upper reaches gives way to
                      a wider, more open channel in the middle, and finally to
                      the broad estuary of Betsie Lake and the dramatic Lake
                      Michigan finish at Frankfort.
                    </p>
                    <p>
                      The free 37-page guide covers all 54 miles in three
                      chapters — Upper, Middle, and Lower Betsie — with
                      mile-by-mile notes on put-ins, take-outs, hazards,
                      campsites, and points of interest for each section.
                      Download it below.
                    </p>
                  </div>
                  <div className="intro-image-wrapper section-half">
                    <img
                      src="/images/betsie-river/betsie-river-intro.webp"
                      alt="A canoer paddling the Betsie River in northern Michigan"
                      className="intro-image"
                    />
                    <p className="betsie-river-quick-nav">
                      Jump to: <a href="#guide-cta">The Guide</a>{" "}
                      <a href="#video">Video</a>{" "}
                      <a href="#trip-planning">Trip Planning</a>
                    </p>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>
            {/* ── Mid-page CTA ── */}
            <Reveal variant="up" delay={140}>
              <section
                id="guide-cta"
                className="content-wrapper row cnt-vrt cnt-hrz mobile-col"
              >
                <div className="col cnt-vrt cnt-hrz">
                  <h2>Get the Full 37-Page Guide — Free</h2>
                  <p>Download the complete Betsie River paddling guide.</p>
                </div>
                <NewsletterCapture
                  headline="Mile-by-mile notes for all 54 miles of the Betsie River."
                  subtext="The guide covers every put-in, take-out, hazard, campsite, and point of interest across the Upper, Middle, and Lower Betsie. Sign up below and I'll send it straight to your inbox (check your email to confirm first)."
                  formUrl="https://app.kit.com/forms/9483935/subscriptions"
                />
              </section>
            </Reveal>
            {/* ── What's in the Guide ── */}
            <Reveal variant="up" delay={200}>
              <section id="the-guide" className="content-wrapper">
                <h2>What's in the Guide</h2>
                <p>
                  The full guide divides the Betsie River into three chapters,
                  each covering a distinct stretch with its own character and
                  logistics. Here's an overview — download the guide for the
                  complete mile-by-mile detail.
                </p>
                <div className="betsie-river-chapters-grid">
                  <div className="betsie-river-chapter-card">
                    <h3>Chapter 1: Upper Betsie</h3>
                    <p>
                      <strong>Green Lake to Thompsonville · 16.11 miles</strong>
                    </p>
                    <p>
                      The upper river is the most intimate and the most
                      demanding stretch of the Betsie. It opens with five
                      committing miles of exposed marshland through Grass Lake
                      Swamp, then tightens into a narrow, wooded corridor where
                      the paddling turns technical. Water clarity is at its best
                      up here, and wildlife is abundant.
                    </p>
                    <p>
                      This is where the river's most sustained technical
                      paddling lives. Logjams, sweepers, and tight blind bends
                      are common, and none of the three sections here are
                      beginner water. The guide marks every portage, public
                      access point, and hazard on this stretch, mile by mile.
                    </p>
                  </div>
                  <div className="betsie-river-chapter-card">
                    <h3>Chapter 2: Middle Betsie</h3>
                    <p>
                      <strong>
                        Thompsonville to Homestead Dam · 25.23 miles
                      </strong>
                    </p>
                    <p>
                      The middle river runs the opposite arc to the upper. It
                      opens with some of the hardest paddling on the Betsie,
                      including the river's most dangerous sweeper, then
                      steadily eases off into slow, deep, forgiving water
                      through woods and public land.
                    </p>
                    <p>
                      The back half is the gentlest paddling on the river and
                      includes the most beginner-friendly water on the Betsie,
                      the short final stretch from Fred's Landing to Homestead
                      Dam. The guide details every access point so you can build
                      a day trip or an overnight that fits your schedule.
                    </p>
                  </div>
                  <div className="betsie-river-chapter-card">
                    <h3>Chapter 3: Lower Betsie</h3>
                    <p>
                      <strong>
                        Homestead Dam to Betsie Lake · 12.83 miles
                      </strong>
                    </p>
                    <p>
                      Below Homestead Dam the Betsie is a different river: slow,
                      deep, and wide. It threads a stretch of residential land
                      before opening into its final miles through the marsh of
                      the Betsie River State Game Area, with an optional paddle
                      out to Lake Michigan at Frankfort.
                    </p>
                    <p>
                      The easy water here hides a few stings: a handful of
                      full-channel logjams that aren't novice-friendly, and an
                      exposed marsh finish where wind can become a serious
                      problem with nowhere to bail out. The guide covers the dam
                      portage, the Game Area, and what to know before committing
                      to the Lake Michigan finish.
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
                <h2>Watch: Paddling the Betsie River</h2>
                <div className="row cnt">
                  <iframe
                    src="https://www.youtube.com/embed/GTUdHJ_63LQ"
                    title="Paddling the Betsie River"
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
                      The Betsie runs year-round, but the practical paddling
                      season is May through October. Spring (May–June) offers
                      higher water and faster current — good for covering miles
                      quickly, but more demanding in the upper section where
                      logjams are an active hazard. Summer (July–August) is the
                      most popular time on the water, with warmer air
                      temperatures offsetting the cold river. September and
                      early October bring fall color, manageable flows, and
                      lighter crowds — the best combination for most paddlers.
                    </p>
                    <h3>Skill Level</h3>
                    <p>
                      The Betsie is generally appropriate for intermediate
                      paddlers and above. The middle and lower sections are
                      accessible to capable beginners with proper guidance. The
                      most technical water is actually just below Thompsonville,
                      between Wolf Road and Kurick Road, where the river's most
                      dangerous sweepers are. The upper section above
                      Thompsonville is also demanding and logjam-heavy. Both
                      require solid technique and the judgment to portage when
                      needed. A multi-day thru-paddle of the full 54 miles
                      requires self-sufficiency and experience on moving water.
                    </p>
                  </div>
                  <div className="section-half">
                    <h3>Shuttle Logistics</h3>
                    <p>
                      US-31 and M-115 provide access to multiple public boat
                      launches along the river. Outfitters in the Benzonia and
                      Frankfort area offer canoe and kayak rentals with shuttle
                      service — the easiest way to run the lower sections
                      without pre-positioning a vehicle. For a full thru-paddle,
                      plan on two to four days depending on pace and water
                      levels, and arrange vehicle shuttles in advance.
                    </p>
                    <h3>Hazards</h3>
                    <p>
                      The primary hazards on the Betsie River are{" "}
                      <strong>logjams</strong> — especially in the upper
                      section, where debris accumulates in the narrow channel —{" "}
                      <strong>cold water</strong> (the river is spring-fed and
                      cold even in midsummer; dress for immersion), and the{" "}
                      <strong>Lake Michigan finish</strong> at Frankfort (open
                      water, wind, and surf can make the channel exit dangerous
                      in any conditions). Always wear a PFD, paddle within your
                      ability, and scout any feature you haven't seen before
                      committing to it.
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
                <div className="betsie-river-faq-list">
                  <div className="betsie-river-faq-item">
                    <button
                      className="betsie-river-faq-summary"
                      aria-expanded={openFaq === 0}
                      onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                    >
                      Can you kayak or canoe the Betsie River?
                      <span
                        className="betsie-river-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 0 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="betsie-river-faq-answer-wrapper"
                      aria-hidden={openFaq !== 0}
                    >
                      <div className="faq-answer">
                        <p>
                          Yes. The Betsie is one of the Lower Peninsula's best
                          thru-paddle rivers, runnable by both kayak and canoe.
                          The upper section is technical and best suited to
                          intermediate and advanced paddlers, while the middle
                          and lower sections are friendlier to capable
                          beginners.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="betsie-river-faq-item">
                    <button
                      className="betsie-river-faq-summary"
                      aria-expanded={openFaq === 1}
                      onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    >
                      How long is the Betsie River?
                      <span
                        className="betsie-river-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 1 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="betsie-river-faq-answer-wrapper"
                      aria-hidden={openFaq !== 1}
                    >
                      <div className="faq-answer">
                        <p>
                          The Betsie runs about 54 miles from its source at
                          Green Lake near Interlochen to Lake Michigan at
                          Frankfort.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="betsie-river-faq-item">
                    <button
                      className="betsie-river-faq-summary"
                      aria-expanded={openFaq === 2}
                      onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    >
                      How long does it take to paddle the entire Betsie River?
                      <span
                        className="betsie-river-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 2 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="betsie-river-faq-answer-wrapper"
                      aria-hidden={openFaq !== 2}
                    >
                      <div className="faq-answer">
                        <p>
                          Most paddlers plan two to four days for the full
                          54-mile thru-paddle, depending on pace, water levels,
                          and how much time is spent clearing or portaging
                          logjams. It can be done faster by strong, experienced
                          paddlers, but the river is best enjoyed unhurried.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="betsie-river-faq-item">
                    <button
                      className="betsie-river-faq-summary"
                      aria-expanded={openFaq === 3}
                      onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    >
                      Where does the Betsie River start and end?
                      <span
                        className="betsie-river-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 3 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="betsie-river-faq-answer-wrapper"
                      aria-hidden={openFaq !== 3}
                    >
                      <div className="faq-answer">
                        <p>
                          It begins at Green Lake near Interlochen in Grand
                          Traverse County and ends at Lake Michigan in
                          Frankfort, passing through Benzie County for most of
                          its length.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="betsie-river-faq-item">
                    <button
                      className="betsie-river-faq-summary"
                      aria-expanded={openFaq === 4}
                      onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                    >
                      Is the Betsie River good for beginners?
                      <span
                        className="betsie-river-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 4 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="betsie-river-faq-answer-wrapper"
                      aria-hidden={openFaq !== 4}
                    >
                      <div className="faq-answer">
                        <p>
                          Parts of it. The slow, deep lower river and the short
                          stretch from Fred's Landing to Homestead Dam are well
                          suited to beginners. The upper river and the technical
                          water below Thompsonville are not, due to logjams,
                          sweepers, and fast blind bends.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="betsie-river-faq-item">
                    <button
                      className="betsie-river-faq-summary"
                      aria-expanded={openFaq === 5}
                      onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                    >
                      Do I need a permit to paddle the Betsie River?
                      <span
                        className="betsie-river-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 5 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="betsie-river-faq-answer-wrapper"
                      aria-hidden={openFaq !== 5}
                    >
                      <div className="faq-answer">
                        <p>
                          No permit is required to paddle the river. If you
                          camp, dispersed camping on state forest land requires
                          a free registration card, and you may not camp on
                          private property. A fishing license is required if you
                          fish.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="betsie-river-faq-item">
                    <button
                      className="betsie-river-faq-summary"
                      aria-expanded={openFaq === 6}
                      onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                    >
                      When is the best time to paddle the Betsie River?
                      <span
                        className="betsie-river-faq-icon"
                        aria-hidden="true"
                      >
                        {openFaq === 6 ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="betsie-river-faq-answer-wrapper"
                      aria-hidden={openFaq !== 6}
                    >
                      <div className="faq-answer">
                        <p>
                          May through October is the practical season. September
                          and early October offer fall color, manageable flows,
                          and lighter crowds, which is the best combination for
                          most paddlers. Spring brings higher, faster water and
                          more active logjam hazard in the upper river.
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
                  <h2>Ready to Paddle the Betsie?</h2>
                  <p>
                    The 37-page guide is free. Enter your email and I'll send it
                    over.
                  </p>
                </div>
                <NewsletterCapture
                  headline="Everything you need to plan your Betsie River trip."
                  subtext="Sign up for the JoeTracks newsletter and download the complete guide — mile-by-mile notes for all 54 miles of the Betsie River, plus new guides each month."
                  formUrl="https://app.kit.com/forms/9483935/subscriptions"
                />
              </section>
            </Reveal>
            {/* ── Footer Attributions ── */}
            <Reveal variant="up" delay={520}>
              <section className="content-wrapper">
                <div className="guide-footer-attributions">
                  <ManagedBy organization="michiganDNR" />
                  <LNTNotice />
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

export default BetsieRiverGuide;

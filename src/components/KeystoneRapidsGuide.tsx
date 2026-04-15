import { useEffect, useState } from "react";
import "/src/styles/keystone-rapids-guide.css";
import "/src/styles/shared.css";
import RiverFlow from "./RiverFlow";
import Reveal from "./ui/Reveal";
import SEO from "./SEO";
import NewsletterCapture from "./NewsletterCapture";

const KeystoneRapidsGuide = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO
        title="Paddling the Keystone Rapids — A Boardman River Guide | JoeTracks"
        description="A beginner's field guide to paddling the Keystone Rapids stretch of the Boardman River in Traverse City, Michigan — put-in and take-out info, rapids breakdown, bike shuttle route, and what to expect on the water."
        canonical="https://joetracks.com/boardman-river-keystone-rapids"
        image="https://joetracks.com/images/keystone-rapids/keystone-rapids-card.webp"
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Paddling the Keystone Rapids — A Boardman River Guide",
            description:
              "A beginner's field guide to paddling the Keystone Rapids stretch of the Boardman River in Traverse City, Michigan — put-in and take-out info, rapids breakdown, bike shuttle route, and what to expect on the water.",
            url: "https://joetracks.com/boardman-river-keystone-rapids",
            image:
              "https://joetracks.com/images/keystone-rapids/keystone-rapids-card.webp",
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Paddling the Keystone Rapids — A Boardman River Guide",
            description:
              "A beginner's field guide to paddling the Keystone Rapids stretch of the Boardman River in Traverse City, Michigan — put-in and take-out info, rapids breakdown, bike shuttle route, and what to expect on the water.",
            image:
              "https://joetracks.com/images/keystone-rapids/keystone-rapids-card.webp",
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
            url: "https://joetracks.com/boardman-river-keystone-rapids",
            mainEntityOfPage:
              "https://joetracks.com/boardman-river-keystone-rapids",
            datePublished: "2026-04-14",
            dateModified: "2026-04-14",
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
                name: "Keystone Rapids Field Guide",
                item: "https://joetracks.com/boardman-river-keystone-rapids",
              },
            ],
          },
        ]}
      />

      <div className="guide keystone-rapids-guide">
        <main className="container" id="page" role="main">
          <article className="sections">
            {/* ── Hero ── */}
            <Reveal delay={0}>
              <section className="hero keystone-rapids-hero keystone-rapids-bg">
                <div className="hero-text">
                  <h1 className={animate ? "animate" : ""}>
                    Paddling the Keystone Rapids <br></br>A Boardman River Guide
                  </h1>
                </div>
              </section>
            </Reveal>

            {/* ── Intro ── */}
            <Reveal variant="up" delay={80}>
              <section className="content-wrapper dis-col">
                <div id="overview" className="dis-row keystone-rapids-intro">
                  <div className="intro-text section-half">
                    <p>
                      The Keystone Rapids are a 2.7-mile stretch of the Boardman
                      River located just ten minutes south of Traverse City,
                      Michigan. True whitewater in Michigan's Lower Peninsula is
                      rare — but this section delivers some of the best paddling
                      in the region, with Class I-II rapids and sweeping river
                      bends through forests and flood plains along the banks of
                      a protected nature preserve.
                    </p>
                    <p>
                      Better yet, the logistics are straightforward. The
                      Keystone stretch can be run in a little over an hour, with
                      Keystone Road running parallel to the river for an easy
                      car or bike shuttle between the put-in and take-out. For
                      canoeists, kayakers, and stand-up paddleboarders seeking
                      moving water easily accessible from Traverse City, this is
                      the run.
                    </p>
                    <p>
                      From logistics to up-to-date conditions, all the
                      information you'll need to get out and paddle is
                      here.{" "}
                    </p>
                  </div>
                  <div className="intro-image-wrapper section-half">
                    <img
                      src="/images/keystone-rapids/boardman-river-canoeing.webp"
                      alt="A canoer paddling the Boardman River"
                      className="intro-image"
                    />

                    <p className="keystone-rapids-quick-nav">
                      Jump to: <a href="#map">Map</a>{" "}
                      <a href="#conditions">Conditions</a>{" "}
                      <a href="#the-float">The Float</a>{" "}
                      <a href="#bike-shuttle">The Bike Shuttle</a>{" "}
                      <a href="#rapids">Rapids and Hazards</a>{" "}
                      <a href="#rules">Rules and Regulations</a>
                    </p>
                  </div>
                </div>
                <hr className="section-divider" />
                <p>
                  <em>
                    This section contains several hazards that require
                    experience to navigate safely. Sweepers, strainers, and
                    elevated flow rates all present real risks of entrapment and
                    drowning. Scout the river along the trails in the Grand
                    Traverse Natural Education Reserve before your run, wear a
                    PFD, and always paddle within your ability.
                  </em>
                </p>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Overview / At a Glance ── */}
            <Reveal variant="up" delay={140}>
              <section className="content-wrapper">
                <h2>Map and Conditions</h2>
                <div className="dis-row g-2">
                  <div id="map" className="section-half">
                    <p>
                      Tap the map to open a full-size version that allows you to
                      zoom in to view the details. Images and descriptions of
                      each wave and hazard on the map are included in the
                      sections below.
                    </p>
                    <figure
                      id="keystone-rapids-map"
                      className="block-image-figure intrinsic"
                    >
                      <a
                        id="keystone-rapids-map-link"
                        href={`${import.meta.env.BASE_URL}images/keystone-rapids/keystone-rapids-map.png`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/keystone-rapids/keystone-rapids-map.png"
                          alt="Keystone Rapids map of the Boardman River"
                        />
                      </a>
                    </figure>
                  </div>

                  <div
                    id="conditions"
                    className="section-half keystone-rapids-stats"
                  >
                    <ul className="stats-list">
                      <li>
                        <RiverFlow />
                        <ul className="stats-list"></ul>
                      </li>
                      <li>
                        <strong className="river-alert">NOTICE</strong>
                        <p>
                          {" "}
                          The Beitner Road bridge collapsed during a flooding
                          event on April 15, 2026 and is impassable. The river
                          can only be accessed from the east side using Keystone
                          Road until the bridge is repaired.{" "}
                        </p>
                        <p>
                          Due to tunnel damage, the Beitner Canoe Launch is no
                          longer viable as put-in. Use the ramp at the Keystone
                          Rapids Trailhead to access the river.
                        </p>
                        <figure>
                          <img
                            src="/images/keystone-rapids/beitner-bridge-destroyed.webp"
                            alt="The collapse of the Beitner Road bridge"
                          />
                        </figure>
                      </li>
                      <li>
                        <strong>Difficulty:</strong> Class I-II
                      </li>
                      <li>
                        <strong>Gradient:</strong> ~23 feet per mile
                      </li>
                      <li>
                        <strong>Paddle Distance & Time:</strong> 2.7 miles | 40
                        minutes
                      </li>
                      <li>
                        <strong>Bike Shuttle Distance & Time:</strong> 2.0 miles
                        | 10 minutes
                      </li>
                      <li>
                        <strong>Put-in:</strong>{" "}
                        <a
                          href="https://maps.app.goo.gl/KgAaZnaGP1YFoHrs7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Keystone Rapids Trailhead
                        </a>
                      </li>
                      <li>
                        <strong>Take-out:</strong>{" "}
                        <a
                          href="https://maps.app.goo.gl/Mng1hGvhHAAhQiow6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Jack's Landing Parking Lot
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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

            {/* ── The Float ── */}
            <Reveal variant="up" delay={200}>
              <section id="the-float" className="content-wrapper">
                <hr className="section-divider" />
                <h2>The Float</h2>

                <div className="dis-row g-2">
                  <figure className="section-half">
                    <img
                      src="/images/keystone-rapids/keystone-rapids-summer.webp"
                      alt="Two paddlers navigating the Boardman River"
                    />
                  </figure>
                  <div className="section-half">
                    <p>
                      The Keystone Rapids run best between 300 and 400 CFS. As
                      signs at the put-ins advise, this section is recommended
                      for experienced paddlers only — particularly at elevated
                      flows. Check the live gauge reading above before heading
                      out.
                    </p>
                    <p>
                      The upper half of the float moves through a dense forest
                      corridor within the Grand Traverse Natural Education
                      Reserve. The lower half opens into a broad floodplain
                      where Keystone Pond once sat before{" "}
                      <a
                        href="https://www.glfc.org/pubs/pdfs/research/Boardman-Ottaway-Report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        a series of dam removal projects in the 2010s
                      </a>{" "}
                      restored the river to its natural channel.
                    </p>
                  </div>
                </div>
                <div className="description-container">
                  <p>
                    <strong>Put-in: </strong> Although the Beitner Canoe Launch
                    — a wooden dock on the south side of Beitner Road — is
                    typically the preferred entry point, the tunnel under the
                    road has been destroyed by recent flooding. The Keystone
                    Rapids Trailhead parking area offers an alternative ramp for
                    accessing the rive.
                  </p>
                  <p>
                    <strong>Take-out: </strong>Jack's Landing sits just before
                    the Cass Road bridge and is clearly visible from the water.
                    The current picks up as the river bends right on approach,
                    with several obstacles to navigate. Look for rock barriers
                    on the right — they create eddies and give you time to set
                    up for the landing.
                  </p>
                  <p>
                    <strong>Reading the water: </strong>Before launching, check
                    the clearance under the Beitner Road bridge. If water levels
                    look too close to the bridge deck, turn around — if you
                    can't clear Beitner, you likely won't clear the Olsen Bridge
                    or the Pinhole Sweeper further downstream.
                  </p>
                  <p>
                    The rapids themselves are manageable, but the Keystone
                    stretch demands attention. The primary hazards here are not
                    the whitewater — they are strainers, sweepers, and submerged
                    vegetation. Several bends push current directly into fallen
                    trees, creating genuine entrapment risk. Come prepared to
                    self-rescue, and know how to wet-exit before you put in.
                  </p>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>
            {/* ── Bike Shuttle ── */}
            <Reveal variant="up" delay={320}>
              <section id="bike-shuttle" className="content-wrapper">
                <h2>The Bike Shuttle</h2>
                <div className="dis-row g-2">
                  <div className="section-half">
                    <p>
                      Aside from the parking lot at Jack's Landing, the entire
                      bike shuttle route is on a paved road with a shoulder.
                      Still, there is considerable traffic on Cass, Keystone,
                      and Beitner roads. If you choose to shuttle using a
                      bicycle, wearing a helmet and bright clothing is advised.
                    </p>
                    <p>
                      With no bike racks at the put-in, you'll need to lock your
                      bicycle to the wooden fence (do not lock it to signs,
                      benches, or picnic tables that others might want to
                      enjoy). Additionally, there is always the risk of losing
                      what you leave at the put-in during your shuttle to theft.
                      Use good judgment, and do not leave high-value items
                      unattended.
                    </p>
                  </div>
                  <figure className="section-half">
                    <img
                      src="/images/keystone-rapids/bike-shuttle.webp"
                      alt="A view along Keystone Road"
                    />
                  </figure>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            {/* ── Rapids Breakdown ── */}
            <Reveal variant="up" delay={260}>
              <section id="rapids" className="content-wrapper">
                <h2>Rapids</h2>
                <p>
                  The images below were taken on April 12, 2026 when the
                  Boardman River's flow rate was roughly 800 cfs. These images
                  were taken well above the average flow rate of 340 CFS, but
                  show conditions at the upper limit of what's safely runnable
                  due to bridge clearance constraints.
                </p>

                <div className="rapids-grid">
                  <div className="rapid-card">
                    <h3>Rapid 1: Stump Wave</h3>
                    <p>
                      The first wave will be immediately after passing through
                      the tunnel under Beitner Road. At average water levels, it
                      is best approached using the left (west) tunnel.
                    </p>
                    <figure>
                      <img
                        src="/images/keystone-rapids/stump-wave.webp"
                        alt="The Stump Wave rapid on the Boardman River"
                      />
                    </figure>
                  </div>

                  <div className="rapid-card">
                    <h3>Rapid 2: Erosion</h3>
                    <p>
                      Following the bend after Stump Wave is your next set of
                      rapids. Depending on water levels, there are some surfable
                      spots to the right early in the sequence. Near the end,
                      the current will try to push you into a strainer on the
                      right just past where the former trail has eroded away.
                    </p>
                    <figure>
                      <img
                        src="/images/keystone-rapids/erosion-rapids-keystone.webp"
                        alt="The Erosion rapids on the Boardman River"
                      />
                    </figure>
                  </div>

                  <div className="rapid-card">
                    <h3>Rapid 3: Lazy Tree</h3>
                    <p>
                      The next set of waves comes shortly after Erosion where a
                      single pine tree on the paddler's right leans into the
                      river.
                    </p>
                    <figure>
                      <img
                        src="/images/keystone-rapids/lazy-tree.webp"
                        alt="The lazy tree wave on the Keystone Rapids"
                      />
                    </figure>
                  </div>

                  <div className="rapid-card">
                    <h3>Rapid 4: Platform Wave</h3>
                    <p>
                      Easily identified by the wooden platform on the right side
                      of the river, this is the second biggest wave you'll hit
                      during high volume days. Surfable above 400 CFS, use
                      caution here as this feature is quickly followed by a
                      sweeper that demands shooting the gap seen in the picture
                      below.
                    </p>
                    <figure>
                      <img
                        src="/images/keystone-rapids/platform-wave.webp"
                        alt="The Platform Waves on the Boardman River"
                      />
                    </figure>
                  </div>

                  <div className="rapid-card">
                    <h3>Rapid 5: Oxbow Wave</h3>
                    <p>
                      This wave comes shortly after the river oxbows right where
                      the current will naturally direct you into a strainer on
                      the left side of the wave.
                    </p>
                    <figure>
                      <img
                        src="/images/keystone-rapids/oxbow.webp"
                        alt="The Oxbow wave on the Boardman River"
                      />
                    </figure>
                  </div>

                  <div className="rapid-card">
                    <h3>Rapid 6: Old Pond Wave</h3>
                    <p>
                      Under most conditions, this rapid is the most technical on
                      the river. Expect it to be the sportiest when flow rates
                      are below 400 cfs. When navigating straight through the
                      wave isn't an option, the best approach is on paddler's
                      right around the large boulder.
                    </p>
                    <figure>
                      <img
                        src="/images/keystone-rapids/old-pond.webp"
                        alt="The Old Pond wave on the Boardman River"
                      />
                    </figure>
                  </div>
                </div>
                <div className="description-container">
                  <h2 id="hazards">Hazards</h2>{" "}
                  <div className="rapids-grid">
                    <div className="rapid-card">
                      <h3>Pinhole Sweeper</h3>
                      <p>
                        Shortly after the Platform Wave where the river
                        increases in velocity, two trees extend towards the
                        middle of the river. Especially during high-water, this
                        paddlers must shoot through the narrow gap between the
                        two obstacles.
                      </p>
                      <figure>
                        <img
                          src="/images/keystone-rapids/pinhole-sweeper.webp"
                          alt="The Pinhole Sweeper on the Boardman River"
                        />
                      </figure>
                    </div>
                    <div className="rapid-card">
                      <h3>Ropeswing Strainer</h3>
                      <p>
                        Identified by what remains of a rope swing hanging from
                        a tree, this strainer is quickly followed by a sweeper
                        on the right side of the river. As the river bends left,
                        the current will naturally direct you into both of these
                        hazards.
                      </p>
                      <figure>
                        <img
                          src="/images/keystone-rapids/ropeswing-strainer.webp"
                          alt="The Ropeswing Strainer on the Boardman River"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>

            <Reveal variant="up" delay={380}>
              <section id="rules" className="content-wrapper">
                <h2>Rules and Regulations</h2>
                <p>
                  This section of the Boardman River is managed by the{" "}
                  <a
                    href="https://natureiscalling.org/grand-traverse-natural-education-reserve"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Grand Traverse Conservation District
                  </a>{" "}
                  and is subject to policies in place to protect the natural
                  resources within the Grand Traverse Natural Education Reserve.
                </p>
                <p>
                  Be sure to respect all traffic laws, practice{" "}
                  <a
                    href="https://lnt.org/why/7-principles/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leave No Trace (LNT)
                  </a>
                  , and adhere to the rules and regulations posted at
                  trailheads.
                </p>

                <hr className="section-divider" />

                <div className="vrt-spc"></div>
                <div className="row row">
                  <div className="cnt">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/WUfAAGwQfqM?si=VlmRU9561xTeTHmq"
                      title="The Boardman River - Keystone Rapids"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </section>
            </Reveal>
            <div className="vrt-spc"></div>
          </article>
        </main>
      </div>
    </>
  );
};

export default KeystoneRapidsGuide;

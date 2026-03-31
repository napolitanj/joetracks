import { useEffect, useState } from "react";
import "/src/styles/sleeping-bear-guide.css";
import "/src/styles/shared.css";
import Reveal from "./ui/Reveal";
import SEO from "./SEO";

const SleepingBearGuide = () => {
  const [animate, setAnimate] = useState(false);
  const [overviewIndex, setOverviewIndex] = useState(0);

  const overviewImages = [
    {
      src: "/images/ski-sleeping-bear/overview-1.png",
      alt: "Overview map of the Shauger Hill ski area",
      caption:
        "3D renderings of the Shauger Hill zone. Tap the arrows to rotate the view.",
    },
    {
      src: "/images/ski-sleeping-bear/overview-2.png",
      alt: "3D rendering of the Shauger Hill ascent route",
      caption:
        "3D renderings of the Shauger Hill zone. Tap the arrows to rotate the view.",
    },
    {
      src: "/images/ski-sleeping-bear/overview-3.png",
      alt: "3D rendering of the Shauger Hill descent and return route",
      caption:
        "3D renderings of the Shauger Hill zone. Tap the arrows to rotate the view.",
    },
  ];
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO
        title="Skiing Sleeping Bear Dunes: Shauger Hill Field Guide | JoeTracks"
        description="Field-tested guide to skiing Shauger Hill at Sleeping Bear Dunes National Lakeshore — conditions assessment, gear list, approach beta, and a full trip report."
        canonical="https://joetracks.com/ski-sleeping-bear-dunes"
        image="https://joetracks.com/images/ski-sleeping-bear/ski-sleeping-bear-banner.png"
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Skiing Sleeping Bear Dunes: Shauger Hill Field Guide",
            description:
              "Field-tested guide to skiing Shauger Hill at Sleeping Bear Dunes National Lakeshore with conditions assessment, gear list, approach beta, and trip report.",
            url: "https://joetracks.com/ski-sleeping-bear-dunes",
            image:
              "https://joetracks.com/images/ski-sleeping-bear/ski-sleeping-bear-banner.png",
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Skiing Sleeping Bear Dunes: Shauger Hill Field Guide",
            description:
              "A detailed guide to skiing Shauger Hill at Sleeping Bear Dunes National Lakeshore — conditions assessment tools, gear list, approach and return routes, and a full trip report from March 2026.",
            image:
              "https://joetracks.com/images/ski-sleeping-bear/ski-sleeping-bear-banner.png",
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
            url: "https://joetracks.com/ski-sleeping-bear-dunes",
            mainEntityOfPage: "https://joetracks.com/ski-sleeping-bear-dunes",
            datePublished: "2026-03-16",
            dateModified: "2026-03-16",
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
                name: "Skiing Sleeping Bear Dunes: Shauger Hill Field Guide",
                item: "https://joetracks.com/ski-sleeping-bear-dunes",
              },
            ],
          },
        ]}
      />

      <div className="guide sleeping-bear-guide">
        <main className="container" id="page" role="main">
          <article className="sections">
            <Reveal delay={0}>
              <section className="hero sleeping-bear-hero sleeping-bear-bg">
                <div className="hero-text">
                  <h1 className={animate ? "animate" : ""}>
                    Skiing Sleeping Bear Dunes: A Field Guide to Shauger Hill
                  </h1>
                </div>
              </section>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <section className="content-wrapper dis-col">
                <div id="overview" className="dis-row sleeping-bear-intro">
                  <div className="intro-image-wrapper section-half">
                    <img
                      src="/images/ski-sleeping-bear/ski-sleeping-bear-intro.png"
                      alt="a skier descending sleeping bear dunes"
                      className="intro-image"
                    />
                    <p className="image-caption">
                      Skiable conditions are rare, but Sleeping Bear offers one
                      of the largest off-piste sustained slopes in the Great
                      Lakes region.
                    </p>
                  </div>
                  <div className="intro-text section-half">
                    <p>
                      Backcountry skiing in Michigan is more niche than in other
                      regions of the country. Snowfall tends to be shallower and
                      less predictable, but when good conditions are found, so
                      is untapped potential.
                    </p>
                    <p>
                      The Sleeping Bear Dunes National Lakeshore shines as a
                      backcountry skiing destination following warmer snowstorms
                      that produce dense snow. The centerpiece is the 450-foot
                      descent from Shauger Hill to Lake Michigan. Connecting
                      turns from top to bottom takes specific gear, planning,
                      and rare conditions — this guide covers all of it.
                    </p>
                    <div className="sleeping-bear-top-meta">
                      <p className="link-block">
                        <a
                          href="https://caltopo.com/m/1CRAHUN#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="stats-link"
                        >
                          Click here for an interactive CalTopo map of the zone.
                        </a>
                      </p>
                      <p className="sleeping-bear-quick-nav">
                        Below is my <a href="#gear-list">gear list</a>,{" "}
                        <a href="#beta">beta</a>, and a{" "}
                        <a href="#trip-report">detailed trip report</a>.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="section-divider" />
              </section>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <section className="content-wrapper disclaimer">
                <p className="preFade">
                  Backcountry skiing is dangerous. Various hazards and remote
                  travel elevate the consequences of injury or equipment
                  failure, and can put both the environment and rescuers at
                  risk. This guide is designed for skiers with the knowledge,
                  conditioning, and gear to engage in this activity safely and
                  sustainably.
                </p>
                <p className="preFade">
                  <em>
                    JoeTracks is not responsible for what any individual(s)
                    might choose to do with this information.
                  </em>
                </p>
                <hr className="section-divider" />
              </section>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <section className="content-wrapper">
                <div className="dis-row g-2">
                  <div className="section-half">
                    <div className="layout grid-12 columns-12">
                      <figure className="block-image-figure intrinsic">
                        <img
                          alt="a view of Sleeping Bear Dunes from the Empire Buffs Trail"
                          className="loaded"
                          src="/images/ski-sleeping-bear/empire-bluffs-view.png"
                        />
                        <figcaption className="image-caption-wrapper">
                          <div className="image-caption">
                            <p className="sqsrte-small preFade">
                              A view of Shauger Hill from the Empire Bluffs
                              Trail in the summer.
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                    <div id="rules" className="block html-block block-html">
                      <h4 className="preFade">
                        <strong>Rules, Regulations, and Etiquette</strong>
                      </h4>

                      <p className="preFade">
                        Skiing is permitted within the Lakeshore where snow
                        cover exists.{" "}
                        <strong>
                          A National Park Pass is required for any travel within
                          park boundaries
                        </strong>
                        , and can be acquired at the Philip A. Hart Visitor
                        Center in Empire.
                      </p>
                      <p className="preFade">
                        The Sleeping Bear Dunes is a fragile ecosystem. Safety,
                        the integrity of the ecosystem, and respect for park
                        regulations must be prioritized.
                      </p>
                      <p className="preFade">
                        <em>
                          Please be a steward of these public lands. Failure to
                          do so compromises both the integrity of the
                          environment and our privilege to ski within park
                          boundaries.{" "}
                          <strong>
                            If you are not confident you can travel safely and
                            sustainably, do not go.
                          </strong>
                        </em>
                      </p>
                      <div id="gear-list">
                        <h4 className="preFade">
                          <strong>Gear</strong>
                        </h4>
                        <ul>
                          <li>
                            <p className="preFade">
                              National Park Pass (required for access, even when
                              staff is not present)
                            </p>
                          </li>
                          <li>
                            <p className="preFade">
                              skis, boots, climbing skins, and poles
                            </p>
                          </li>
                          <li>
                            <p className="preFade">
                              probe (recommended for depth assessment only)
                            </p>
                          </li>
                          <li>
                            <p className="preFade">20–30L ski pack</p>
                          </li>
                          <li>
                            <p className="preFade">1 liter of water</p>
                          </li>
                          <li>
                            <p className="preFade">skinning gloves</p>
                          </li>
                          <li>
                            <p className="preFade">skiing gloves</p>
                          </li>
                          <li>
                            <p className="preFade">headlamp</p>
                          </li>
                          <li>
                            <p className="preFade">
                              skin wax (heavy snow will glob above 32°F)
                            </p>
                          </li>
                          <li>
                            <p className="preFade">
                              charged smartphone with maps downloaded on{" "}
                              <a
                                href="https://caltopo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                CalTopo
                              </a>{" "}
                              or{" "}
                              <a
                                href="https://www.gaiagps.com/hike/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Gaia GPS
                              </a>
                            </p>
                          </li>
                          <li>
                            <p className="preFade">sunscreen</p>
                          </li>
                          <li>
                            <p className="preFade">
                              red 12–36°F ski wax (recommended for warm storms)
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="block html-block block-html">
                      <div className="block-content">
                        <div id="interactive-map" className="dis-col">
                          <h4 className="preFade">
                            <strong>Interactive Map</strong>
                          </h4>
                          <a
                            href="https://caltopo.com/m/1CRAHUN#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                          >
                            <figure className="block-image-figure intrinsic">
                              <img
                                alt="A map of skiing areas near sleeping bear"
                                src="/images/ski-sleeping-bear/overview-map.png"
                              />
                              <div className="image-caption">
                                <p className="sqsrte-small preFade">
                                  Click the preview image above to view the
                                  interactive CalTopo map.
                                </p>
                              </div>
                            </figure>
                          </a>
                          <p>
                            The interactive map can be viewed in a browser for
                            free without an account on both your computer and
                            smartphone. Clicking elements such as routes and ski
                            zones will open a window offering notes, images, and
                            terrain statistics. See the{" "}
                            <a
                              href="https://joetracks.com/caltopo-guide"
                              target="_blank"
                              rel="noopener noreferrer"
                              className=""
                            >
                              Trip Planning With CalTopo Guide
                            </a>{" "}
                            for additional information on preparing for your
                            trip with this tool.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-half">
                    <div className="block html-block block-html">
                      <div className="block-content">
                        <div id="beta" className="dis-col">
                          <h4 className="preFade">
                            <strong>Beta</strong>
                          </h4>
                          <p className="preFade">
                            <strong>Parking and access:</strong>
                          </p>
                          <p className="preFade">
                            The best access for Shauger Hill is the North Bar
                            Lake parking lot. After a major storm, the lot will
                            likely be inaccessible, requiring you to park on
                            North Bar Lake Road — after the March 2026 storm,
                            even that road took a day to clear. Alternative
                            access points are the Shauger Hill Trailhead and
                            Windy Moraine Trailhead, both requiring a much
                            longer approach and return. If road access is
                            limited, use good judgment about where you park.
                            Don't block driveways that plows will continue
                            working to clear.
                          </p>
                          <p className="preFade">
                            Private property exists along the Lakeshore between
                            the dunes and North Bar Lake. Respect private
                            property, know where it is by reviewing the map, and
                            take care not to trespass.
                          </p>
                          <p className="preFade">
                            <strong>Approach and return route:</strong>
                          </p>
                          <p className="preFade">
                            From North Bar Lake, follow North Bar Lake Road
                            north to Shauger Hill Road (closed in winter).
                            Follow the road up the gully to its apex where the
                            road makes a distinct right turn east. Roughly 100
                            feet after, you'll see signage on your left and a
                            closed road — follow that path northwest 0.1 miles
                            to Pierce Stocking Scenic Drive. Head left, west, to
                            the Dunes Overlook. Total approach from the lot is
                            roughly 1.5 miles and 451 vertical feet.
                          </p>
                          <p className="preFade">
                            To return to North Bar Lake, the simplest route is
                            the 1.3-mile walk along the lakeshore. An
                            alternative option is to ascend the South Gully back
                            to Pierce Stocking Scenic Drive, and follow your
                            ascent route back to your car.
                          </p>
                          <p className="preFade">
                            <strong>Assessing conditions:</strong>
                          </p>
                          <p className="preFade">
                            Good conditions for skiing the dunes are rare, and
                            assessing snowfall remotely before committing to the
                            drive out is highly recommended. Powdery snow — even
                            when deep — is scoured off the dunes by wind and
                            invites collisions with objects below the surface.
                            Dense snow creates a thicker base after
                            consolidation and lets skiers float on top. I watch
                            for at least 2 inches of SWE on the surface with a
                            snow density at or above 15%.
                          </p>
                          <p className="preFade">
                            For snowpack fundamentals and a remote assessment
                            toolkit, see the{" "}
                            <a
                              href="https://joetracks.com/remote-forecasting-tools"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              JoeTracks forecasting guide
                            </a>
                            . For precise storm totals near the dunes, NOAA's
                            historical data from the{" "}
                            <a
                              href="https://www.weather.gov/wrh/climate?wfo=apx"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Maple City weather station
                            </a>{" "}
                            — 10 miles from the Lakeshore — is the most reliable
                            reference. Pull the daily data report for the month,
                            set your date range, and look for your storm window.
                          </p>
                          <p className="preFade">
                            <strong>Bathrooms, water, and services:</strong>
                          </p>
                          <p className="preFade">
                            The best stop for gas, bathrooms, water, and
                            supplies is the Empire EZ Mart at the intersection
                            of M22 and M72. Pit toilets are open at the North
                            Bar Lake parking lot but will likely be snowed in
                            after a major storm. The Dunes Overlook pit toilets
                            were blocked by snow on my March 2026 visit. Bring
                            everything you'll need for your trip, and pack
                            everything out.
                          </p>
                          <p className="preFade">
                            <strong>Staying safe:</strong>
                          </p>
                          <p className="preFade">
                            Traveling with a partner is highly recommended.
                            Leave a route plan with a trusted person before you
                            go. Include a point in time they should be concerned
                            if they do not hear from you, and numbers to call
                            should they not. This is a remote area, cell
                            coverage is unreliable, and conditions can change
                            quickly after a storm.
                          </p>
                          <p className="preFade">
                            While avalanches in this region are unlikely, they
                            have been observed. Both burial and being swept into
                            "terrain traps" including Lake Michigan are real
                            risks. Knowledge of avalanche hazards and rescue
                            gear are both essential to safe backcountry skiing —{" "}
                            <strong>if in doubt, do not go.</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dis-row g-2">
                  <figure className="block-image-figure intrinsic">
                    <div className="overview-carousel">
                      <button
                        className="carousel-btn carousel-btn--prev"
                        onClick={() =>
                          setOverviewIndex((i) =>
                            i === 0 ? overviewImages.length - 1 : i - 1,
                          )
                        }
                        aria-label="Previous image"
                      >
                        ‹
                      </button>

                      <img
                        src={overviewImages[overviewIndex].src}
                        alt={overviewImages[overviewIndex].alt}
                      />

                      <button
                        className="carousel-btn carousel-btn--next"
                        onClick={() =>
                          setOverviewIndex((i) =>
                            i === overviewImages.length - 1 ? 0 : i + 1,
                          )
                        }
                        aria-label="Next image"
                      >
                        ›
                      </button>

                      <div className="carousel-dots">
                        {overviewImages.map((_, i) => (
                          <button
                            key={i}
                            className={`carousel-dot${i === overviewIndex ? " active" : ""}`}
                            onClick={() => setOverviewIndex(i)}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    <figcaption className="image-caption-wrapper">
                      <div className="image-caption">
                        <p className="sqsrte-small preFade">
                          {overviewImages[overviewIndex].caption}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="block horizontalrule-block block-horizontalrule">
                  <div className="block-content">
                    <hr />
                  </div>
                </div>
              </section>
            </Reveal>
            <Reveal variant="up" delay={260}>
              <section id="trip-report" className="page-section">
                <div className="section-border">
                  <div className="section-background"></div>
                </div>
                <div className="content-wrapper">
                  <div className="content">
                    <div className="row row">
                      <div className="col col-12 span-12">
                        <h2 className="section-header">
                          Skiing Sleeping Bear Dunes: Shauger Hill Trip Report
                        </h2>

                        {/* ── Row 1: Day 1 setup ── text left, road image right */}
                        <div className="dis-row g-2">
                          <div className="dis-col section-half">
                            <p className="preFade">
                              I spent Monday evening monitoring snowfall data
                              from the NOHRSC and the Maple City weather
                              station. For the first time all winter, storm
                              totals were favoring Leelanau County — including
                              the Lakeshore. Sleeping Bear Dunes went from bare
                              ground to 28 inches of snow in less than 36 hours
                              at roughly 15% SWE.
                            </p>
                            <p className="preFade">
                              On Tuesday, I drove to work with my equipment
                              loaded in the car, hopeful the county's plows
                              could catch up. By the end of the workday, roads
                              had cleared enough for my 2003 Honda Accord to
                              make it to Empire. I was prepared for North Bar
                              Lake Road to still be unplowed, but it was
                              well-cleared all the way to Larahr Road.
                            </p>
                            <p className="preFade">
                              I parked on the west side of the road, about 50
                              feet south of Larahr Road — far enough to avoid
                              blocking any plows sent to clear the path to the
                              North Bar Lake parking lot.
                            </p>
                          </div>
                          <figure className="section-half">
                            <img
                              alt="a seasonal road covered in snow"
                              src="/images/ski-sleeping-bear/shauger-hill-road.png"
                            />
                            <figcaption className="image-caption-wrapper">
                              <div className="image-caption">
                                <p className="sqsrte-small preFade">
                                  North Bar Lake Road transitions into the
                                  seasonal Shauger Hill Road just north of the
                                  parking lot. Downed trees may be present until
                                  cleared by the NPS in late spring.
                                </p>
                              </div>
                            </figcaption>
                          </figure>
                        </div>

                        {/* ── Full-width approach text ── */}
                        <div className="block html-block block-html">
                          <div className="block-content">
                            <div className="html-content">
                              <p className="preFade">
                                I skinned along Shauger Hill Road — closed in
                                winter, no signs of other travel, snow depth a
                                full two feet from the storm. Route-finding was
                                straightforward: stick to the road and navigate
                                around fallen trees as needed. After 0.75 miles
                                and 335 vertical feet of climbing, I took a left
                                turn at the top of the gully and hiked northwest
                                from the road for 0.1 miles to Pierce Stocking
                                Scenic Drive (closed in the winter).
                              </p>
                              <p className="preFade">
                                Another 0.75 miles and 116 vertical feet
                                northwest along the drive — past the North Bar
                                Lake Overlook — led me to the Sleeping Bear
                                Dunes Overlook parking area. Just beyond that
                                lies "The 450," a large, steep dune descending
                                into Lake Michigan.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* ── Row 2: Day 1 descent ── dune image left, text right */}
                        <div className="dis-row g-2">
                          <figure className="block-image-figure section-half intrinsic">
                            <div className="image-block-wrapper preSlide">
                              <div className="image-shape-container-element has-aspect-ratio">
                                <img
                                  alt="a view of a snow covered sand dune"
                                  src="/images/ski-sleeping-bear/450-dune.png"
                                />
                              </div>
                            </div>
                            <figcaption className="image-caption-wrapper">
                              <div className="image-caption">
                                <p className="sqsrte-small preFade">
                                  A view of "The 450" from the lakeshore. I
                                  navigated thin snow at the bottom by
                                  traversing through patches of coverage on the
                                  right side of the image above.
                                </p>
                              </div>
                            </figcaption>
                          </figure>
                          <div className="section-half">
                            <p className="preFade">
                              Peaking over the crest of the dune toward Lake
                              Michigan, it looked viable to ski the entire pitch
                              top to bottom. The snow was firm and chalky, but
                              nothing unusual for Midwest skiing. The bottom of
                              the dune required a short stretch of route finding
                              through dry patches, but I made it to the lake
                              without removing my skis.
                            </p>
                            <p className="preFade">
                              Intending to return the next day, I hiked south to
                              North Bar Lake in just my ski boots. The sand was
                              as firm as concrete after the storm — skinning
                              along the icy shore would have been more trouble
                              than it was worth.
                            </p>
                          </div>
                        </div>

                        {/* ── Row 3: Day 2 ── text left, two stacked images right */}
                        <div className="dis-row g-2">
                          <div className="section-half">
                            <p className="preFade">
                              The next two days were streamlined by the existing
                              skin track. Twenty minutes from the car to the
                              transition point at the Overlook felt trivial
                              compared to approaches out west. An ascent route I
                              refer to as the "South Gully" near the southern
                              terminus of the dunes offered a mellow ramp back
                              to the ridge. I was able to transition to skins,
                              climb back to the ridge, transition back, and ski
                              to the bottom as a full circuit in just over 30
                              minutes — suggesting that roughly 1,000 vertical
                              feet of skiing per hour is likely possible for the
                              highly motivated.
                            </p>
                          </div>
                          <div className="section-half trip-report-stacked-images">
                            <figure className="block-image-figure intrinsic">
                              <img
                                alt="a skier hiking uphill through a forest with a lake behind him"
                                src="/images/ski-sleeping-bear/ascent-route.png"
                              />
                              <figcaption className="image-caption-wrapper">
                                <div className="image-caption">
                                  <p className="sqsrte-small preFade">
                                    The gully near the southern terminus of the
                                    dunes — a clean circuit back to the ridge.
                                  </p>
                                </div>
                              </figcaption>
                            </figure>
                          </div>
                        </div>

                        {/* ── Row 4: Day 3 ── gully access image left, text right */}
                        <div className="dis-row g-2">
                          <figure className="section-half">
                            <img
                              alt="a skier points to a ridge with his pole"
                              src="/images/ski-sleeping-bear/gully-access.png"
                            />
                            <figcaption className="image-caption-wrapper">
                              <div className="image-caption">
                                <p className="sqsrte-small preFade">
                                  The ascent gully can be easily accessed where
                                  the dune terminates about 0.25 miles south of
                                  "The 450." Take care to prevent erosion by
                                  only climbing where there is snow cover.
                                </p>
                              </div>
                            </figcaption>
                          </figure>
                          <div className="section-half">
                            <p className="preFade">
                              On the third day, snow quality improved to "mashed
                              potatoes" but the last hundred feet were
                              impossible to ski without hitting sand and rocks
                              beneath. Thankfully, the rocks on Lake Michigan
                              are well-polished — my bases received no
                              significant damage.
                            </p>
                            <p className="preFade">
                              With diminishing returns on the main dune, I
                              explored an apron-shaped dune, "The Pyramid,"
                              further south that was accessible from the South
                              Gully skin track. About 100 feet less vertical, it
                              held snow from top to bottom and was sprinkled
                              with fun features to navigate.
                            </p>
                          </div>
                        </div>

                        {/* ── Row 5: Closing ── text left, stop sign glades image right */}
                        <div className="dis-row g-2">
                          <div className="section-half">
                            <p className="preFade">
                              Attempting one final lap as temperatures spiked, I
                              descended into the "Stop Sign Glades," a
                              solar-facing forest just south of the parking lot.
                              Snow quality was grippy garbage by the time I
                              dropped. The trees were tight, but there's
                              potential to pick your way along an enjoyable line
                              after some scouting — if you catch it before the
                              snow deteriorates.
                            </p>
                            <p className="preFade">
                              From the glades, I returned to the car along the
                              same route as the previous day. As I arrived, NPS
                              staff were running a bulldozer to clear Larahr
                              Road to the parking lot — a good reminder not to
                              park anywhere that might block them.
                            </p>
                            <p className="preFade">
                              It was hard to tear myself away from the main dune
                              after the March 2026 storm. I have reason to
                              believe there is more potential within the
                              Sleeping Bear Dunes National Lakeshore, and this
                              guide will continue to evolve as other storms
                              produce conditions worth reporting.
                            </p>
                            <p className="preFade">
                              Thanks for taking the time to read. Enjoy the
                              video below if you're looking for more visual
                              detail from my trip.
                            </p>
                            <p className="preFade">
                              If you found this content helpful, please share
                              this guide with anyone you feel would value the
                              information, and consider subscribing to the{" "}
                              <a
                                href="https://joetracks.kit.com/14ee2d887c"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                JoeTracks newsletter.
                              </a>{" "}
                              It's a free way to support this platform, and
                              you'll be the first to know when new guides are
                              published.
                            </p>
                            <p className="preFade">Be safe out there.</p>
                          </div>
                          <figure className="section-half">
                            <div className="image-block-wrapper preSlide">
                              <div className="image-shape-container-element has-aspect-ratio">
                                <img
                                  alt="a south-facing view of the entrance to the Stop Sign Glades"
                                  src="/images/ski-sleeping-bear/stop-sign-glades.png"
                                />
                              </div>
                            </div>
                            <figcaption className="image-caption-wrapper">
                              <div className="image-caption">
                                <p className="sqsrte-small preFade">
                                  A south-facing view of the entrance to the
                                  "Stop Sign Glades."
                                </p>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="section-divider" />
                <div className="vrt-spc"></div>
                <div className="row row">
                  <div className="cnt">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/Xh-jo2icR5w?si=bYtAB8xdYpBpNP50"
                      title="Skiing Sleeping Bear Dunes — Shauger Hill"
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

export default SleepingBearGuide;

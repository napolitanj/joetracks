import "/src/styles/shared.css";
import { Link } from "react-router-dom";
import "/src/styles/manitou-guide.css";
import { useEffect, useState } from "react";
import Reveal from "./ui/Reveal";
import SEO from "./SEO";
import NewsletterCapture from "./NewsletterCapture";
import LNTNotice from "./guide/LNTNotice";
import ManagedBy from "./guide/ManagedBy";
import SupportNotice from "./guide/SupportNotice";

const PRODUCT_URL =
  "https://joetracks.kit.com/products/north-manitou-island-backpacking-guide";

const NorthManitouGuide = () => {
  const [animate, setAnimate] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO
        title="North Manitou Island Backpacking & Camping Guide | JoeTracks"
        description="Ferry and charter access, permits and fees, hazards, packing list, and route planning for backpacking North Manitou Island. Field notes from a decade of trips."
        canonical="https://joetracks.com/north-manitou-island-guide"
        image="https://joetracks.com/images/north-manitou/north-manitou-island-backpacking.webp"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "North Manitou Island Backpacking & Camping Guide",
            description:
              "Ferry and charter access, permits and fees, hazards, packing list, and route planning for backpacking North Manitou Island. Field notes from a decade of trips.",
            url: "https://joetracks.com/north-manitou-island-guide",
            image:
              "https://joetracks.com/images/north-manitou/north-manitou-island-backpacking.webp",
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "North Manitou Island Backpacking & Camping Guide",
            description:
              "Ferry and charter access, permits and fees, hazards, packing list, and route planning for backpacking North Manitou Island. Field notes from a decade of trips.",
            image:
              "https://joetracks.com/images/north-manitou/north-manitou-island-backpacking.webp",
            author: {
              "@type": "Person",
              name: "Joe Napolitan",
              url: "https://joetracks.com",
            },
            publisher: {
              "@type": "Organization",
              name: "JoeTracks",
            },
            url: "https://joetracks.com/north-manitou-island-guide",
            mainEntityOfPage:
              "https://joetracks.com/north-manitou-island-guide",
            datePublished: "2026-02-20",
            dateModified: "2026-11-02",
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
                name: "North Manitou Island Backpacking & Camping Guide",
                item: "https://joetracks.com/north-manitou-island-guide",
              },
            ],
          },
        ]}
      />

      <div className="guide manitou-guide">
        <main className="container" id="page" role="main">
          <article className="sections">
            <section className="hero manitou-bg manitou-hero">
              <div className="hero-text">
                <h1 className={animate ? "animate" : ""}>
                  How to Plan a Backpacking Trip to North Manitou Island
                </h1>
                <p className="manitou-hero-subtitle">
                  Ferry logistics, route planning, hazards, and practical field
                  notes for a confident North Manitou Island trip.
                </p>
              </div>
            </section>

            <section className="content-wrapper manitou-top-meta">
              <p className="alert-text">
                <strong>NOTICE:</strong> The Manitou Island Transit will not be
                operating during the 2026 season while new docks are under
                construction on both islands.{" "}
                <strong>
                  Currently, the only charter service offering passage to the
                  island is Manitou Passage LLC. Contact Jimmy at 231-218-5853.
                </strong>{" "}
                <a
                  href="https://www.nps.gov/slbe/planyourvisit/northmanitouisland.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Click here for additional details about the closure.{" "}
                </a>
              </p>{" "}
            </section>

            <Reveal variant="up" delay={80}>
              <section className="content-wrapper dis-col">
                <div className="dis-row g-2">
                  <div className="section-half">
                    <h2>What is North Manitou Island?</h2>
                    <p>
                      North Manitou Island is a part of the Sleeping Bear Dunes
                      National Lakeshore and is located roughly 10 miles west of
                      the small fishing town of Leland, which is about a
                      40-minute drive from Traverse City. The last settlements
                      on North Manitou Island were abandoned over a century ago,
                      leaving the island devoid of human civilization aside from
                      the small village on the eastern shore where park rangers
                      reside.
                    </p>
                    <p>
                      Aside from its pristine natural beauty and
                      Caribbean-colored water, camping on North Manitou Island
                      offers visitors established trail systems and diverse
                      terrain that beckons hikers of all skill levels. With 21
                      miles of shoreline and a total landmass of just over 22
                      square miles, backpacking North Manitou Island offers some
                      of the most remote yet accessible wilderness in the Great
                      Lakes Region.
                    </p>
                  </div>
                  <div className="section-half">
                    <figure>
                      <img
                        src={`${
                          import.meta.env.BASE_URL
                        }images/north-manitou/north-manitou-island.webp`}
                        alt="North Manitou Island West Shore"
                        className="intro-image"
                      />
                      <figcaption>
                        <p>
                          The Island’s west shore offers pristine beaches,
                          massive dunes, spectacular sunsets and incredible
                          stargazing.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <hr className="section-divider" />
              </section>
            </Reveal>
            <div className="content-wrapper">
              <div className="dis-row g-2">
                <div className="section-half">
                  <figure className="cnt">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/north-manitou/manitou-sunset.webp`}
                      alt="North Manitou Island Sunset"
                    />
                  </figure>
                </div>
                <div className="section-half">
                  <h3>This North Manitou Island backpacking guide includes…</h3>

                  {/* Need hyperlinking via bookmarks added */}
                  <ul>
                    <li>
                      <p>
                        <a href="#essential-information">
                          Essential information.
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#hazards">Hazards you’ll encounter.</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#packing-list">
                          North Manitou Island Packing List.
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#ferry-passage">
                          Booking passage on the North Manitou Island Ferry.
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#permits-and-fees">
                          North Manitou Island Camping permits and entrance fee
                          information.
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#what-to-do">
                          What to do on North Manitou Island.
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#planning-your-route">
                          North Manitou Island Map and details on planning your
                          route.
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* ── Mid-page CTA ── */}
              <Reveal variant="up" delay={140}>
                <hr className="section-divider" />
                <section
                  id="guide-cta"
                  className="content-wrapper col cnt-vrt cnt-hrz"
                >
                  <div className="col cnt-vrt cnt-hrz">
                    <h2>Get the Complete Guide</h2>
                    <p>
                      The 33-page North Manitou Island guidebook picks up where
                      this page stops. Six sections of the island, each with a
                      custom map, every trail scouted and detailed, pointers for
                      finding the best camping and beaches, ranked, and four
                      itineraries. Built from scouting 75 miles both on and off
                      trail over six days on the island.
                    </p>
                    <a
                      href={PRODUCT_URL}
                      className="nmi-buy-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy the Guide ($20)
                    </a>
                  </div>
                  <div className="nmi-preview-row">
                    <figure>
                      <img
                        className="nmi-preview-img"
                        src={`${import.meta.env.BASE_URL}images/north-manitou/guide-preview-1.webp`}
                        alt="A section page from the North Manitou Island guide showing the South Island map"
                        loading="lazy"
                        width="850"
                        height="1100"
                      />
                      <figcaption>
                        Six island sections, each with its own custom map
                        marking landmarks.
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        className="nmi-preview-img"
                        src={`${import.meta.env.BASE_URL}images/north-manitou/guide-preview-2.webp`}
                        alt="The island-by-section legend and the ranked beaches table from the guide"
                        loading="lazy"
                        width="850"
                        height="1100"
                      />
                      <figcaption>
                        Every beach ranked for water, access, and camping.
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        className="nmi-preview-img"
                        src={`${import.meta.env.BASE_URL}images/north-manitou/guide-preview-3.webp`}
                        alt="An itinerary page from the North Manitou Island guide"
                        loading="lazy"
                        width="850"
                        height="1100"
                      />
                      <figcaption>
                        Four itineraries, from a weekend to six days.
                      </figcaption>
                    </figure>
                  </div>{" "}
                  <hr className="section-divider" />
                </section>
              </Reveal>

              {/* ── What's in the Guide ── */}
              <Reveal variant="up" delay={200}>
                <section id="the-guide" className="content-wrapper">
                  <h2>What's in the Guide</h2>
                  <p>
                    The guide splits the island into six sections. Each one gets
                    its own map, a walk through its landmarks and terrain, notes
                    on water, and an honest account of where camping works.
                  </p>
                  <div className="nmi-sections-grid">
                    <div className="nmi-section-card">
                      <h3>The Village & Campground</h3>
                      <p>
                        Where the boat lands and the beginning of your journey
                        on the island. The island's only amenities and
                        designated campsites, a large concentration of
                        historical landmarks, and the ranger station.
                      </p>
                    </div>
                    <div className="nmi-section-card">
                      <h3>South Island</h3>
                      <p>
                        Some of the best beaches and camping, and the annual
                        piping plover nesting closure at Dimmick's Point.
                        Historic landmarks including the cemetery, Bourniques
                        cottage, several homesteads.
                      </p>
                    </div>
                    <div className="nmi-section-card">
                      <h3>South-Central Island</h3>
                      <p>
                        Tamarack Lake, the site of the old school, Centerline
                        Trail, and four groundwater springs.
                      </p>
                    </div>
                    <div className="nmi-section-card">
                      <h3>West-Central Island</h3>
                      <p>
                        The best sunset-facing camping. The former site of
                        Crescent City, Swenson's Barn, ruins of an old dock, and
                        massive dune formations.
                      </p>
                    </div>
                    <div className="nmi-section-card">
                      <h3>East-Central Island</h3>
                      <p>
                        Lake Manitou, trails navigating the interior, Frank's
                        Farm, and a historic orchard.
                      </p>
                    </div>
                    <div className="nmi-section-card">
                      <h3>North Island</h3>
                      <p>
                        The Pot Holes, Paul Maleski's Place, and Stormer's Camp.
                        The most rugged terrain on the island, with plenty to
                        offer experienced bushwhackers.
                      </p>
                    </div>
                  </div>
                </section>
              </Reveal>

              {/*
            ── Watch ── Uncomment and drop in the embed URL when the video is up.
            <Reveal variant="up" delay={260}>
              <section id="watch" className="content-wrapper">
                <h2>Watch: Backpacking North Manitou Island</h2>
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Backpacking North Manitou Island"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>
            </Reveal>
            */}

              <div>
                <hr className="section-divider" />
              </div>
              <Reveal as="section" variant="up" delay={300}>
                <div className="section-header">
                  <h2>How to Get to North Manitou Island</h2>
                </div>
                <div className="dis-row g-2">
                  <figure className="section-half cnt">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/north-manitou/north-manitou-island-transit.webp`}
                      alt="North Manitou Island Transit Docks"
                    />
                  </figure>
                  <div className="section-half">
                    <h3 id="ferry-passage">
                      Book Passage on the North Manitou Island Ferry
                    </h3>
                    <p>
                      Before making any other plans, make sure you can
                      book&nbsp;
                      <a
                        href="https://manitoutransit.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Manitou Island Transit
                      </a>
                      &nbsp; tickets to and from the island on the days you wish
                      to go. Fares and the sailing schedule change from season
                      to season, so confirm current rates with the operator
                      rather than planning around a number you read anywhere,
                      including here.
                    </p>
                    <p>
                      The ferry schedule is dependent on the time of year you
                      go. During peak season, July 1 - Labor Day, the ferry runs
                      daily.
                    </p>
                    <p>
                      <a
                        href="https://manitoutransit.com/rates-schedule/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to see the ferry schedule and book tickets.
                      </a>
                    </p>
                  </div>
                </div>
                <div className="vrt-spc"></div>
                <div className="dis-row g-2">
                  <div className="section-half">
                    <h3 id="permits-and-fees">
                      North Manitou Island Permits and Entrance Fee
                    </h3>
                    <p>
                      You will pay for your permits and entrance fee upon
                      arriving at the Manitou Island Transit Ticket Office. If
                      you possess an&nbsp;
                      <a
                        href="https://www.nps.gov/planyourvisit/passes.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NPS America the Beautiful Annual Pass
                      </a>
                      , you do not have to pay an entrance fee.
                    </p>
                    <ul>
                      <li>
                        <p>The entrance fee is $25 per vehicle.</p>
                      </li>
                      <li>
                        <p>
                          Backcountry camping permits are $10 per night for an
                          individual.
                        </p>
                      </li>
                      <li>
                        <p>
                          Backcountry camping permits are $30 per night for
                          groups of four or more.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <figure className="section-half cnt">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/north-manitou/leelanau-penninsula-google-earth-graphic.webp`}
                      alt="A photo showing the route of north manitou island transit"
                    />
                  </figure>
                </div>
                <div className="vrt-spc"></div>
                <div className="dis-row g-2">
                  <figure className="section-half">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/north-manitou/leland-fishtown-cheese-shanty.webp`}
                      alt="A picture of Leland Fishtown"
                    />
                    <figcaption>
                      <div>
                        <p>
                          Fishtown is located on the west side of Leland,
                          between M-22 and Lake Michigan.&nbsp;
                          <a
                            href="https://www.villagecheeseshanty.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            The Village Cheese Shanty
                          </a>
                          &nbsp; is a Leelanau Peninsula novelty and well worth
                          a visit, but be aware wait times for sandwiches can be
                          an hour.
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                  <div className="section-half">
                    <div>
                      <h3>Getting to the Manitou Island Transit in Leland</h3>
                      <p>
                        <a
                          href="https://maps.app.goo.gl/X9UEGV8wREY3KEBdA"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Here is a Google Maps pin for the location of the
                          Manitou Island Transit office.
                        </a>
                      </p>
                      <p>
                        The Manitou Island Transit office is located near the
                        docks in Leland’s historic “Fishtown.”&nbsp;
                        <strong>
                          Plan to arrive at least an hour early to check in.
                        </strong>
                      </p>
                      <p>
                        If you have a group, I recommended dropping everyone off
                        in Fishtown before going to park your vehicle several
                        blocks away between Cedar Street and Grand Avenue, near
                        the{" "}
                        <a
                          href="https://maps.app.goo.gl/vKevyf4rwznDyMEw6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Leland Fire Department
                        </a>
                      </p>
                      <p>
                        Sometimes the Manitou Island Transit runs shuttles, but
                        if they’re not, the walk isn’t far considering you’re
                        about to go backpacking.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="vrt-spc"></div>
                <div className="dis-row g-2">
                  <div className="section-half">
                    <h3>Boarding and Disembarking the Transit</h3>
                    <p>
                      Be near the docks, ready to leave on time. When the
                      Manitou Island Transit is prepared, they will ask guests
                      to board and stow their backpacks. Keep whatever you need
                      for the 1-hour and 15-minute voyage handy, as it is likely
                      all your belongings will be buried beneath other people’s
                      gear.
                    </p>
                    <p>
                      It is good form and expected of you both when you arrive
                      at the island and return to Leland to stand in line on the
                      dock and help unload everyone’s backpack.
                    </p>
                  </div>
                  <figure className="section-half">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/north-manitou/Leland-Manitou-Island-Transit.webp`}
                      alt="North Manitou Island Transit Map"
                    />
                    <figcaption>
                      <div>
                        <p>
                          Fishtown can be chaotic around the time of departure,
                          so ensure that you arrive on time with your gear in
                          order.
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
              <div>
                <hr className="section-divider" />
              </div>
              <Reveal as="section" variant="up" delay={140}>
                <div id="dis-col">
                  <div className="section-header">
                    <h2 id="essential-information">
                      Essential Information for Visiting North Manitou Island
                    </h2>
                  </div>
                </div>
                <div className="dis-row g-2">
                  <figure className="section-half">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/north-manitou/north-manitou-island-backpacking.webp`}
                      alt="North Manitou Island Backpackers"
                    />
                  </figure>
                  <div className="section-half">
                    <p>
                      There are several things to consider before visiting North
                      Manitou Island:
                    </p>
                    <ul>
                      <li>
                        <p>
                          There are no restaurants, lodges, showers, bathrooms,
                          shops or air-conditioned buildings. Aside from a water
                          spigot and composting toilet in the village, there are
                          no amenities. Be ready to rough it.
                        </p>
                      </li>
                      <li>
                        <p>
                          You should be able to walk several miles a day with a
                          weighted pack and possess:
                        </p>
                        <ul>
                          <li>
                            <p>
                              A complete understanding of&nbsp;
                              <a
                                href="https://lnt.org/why/7-principles/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Leave No Trace (LNT
                              </a>
                              ).
                            </p>
                          </li>
                          <li>
                            <p>
                              A basic understanding of wilderness backpacking.
                            </p>
                          </li>
                          <li>
                            <p>
                              <a
                                href="https://backcountry.tnu8.net/ZVLKoX"
                                target="_blank"
                                rel="sponsored noopener noreferrer"
                              >
                                The gear to do it<em>.</em>
                              </a>
                            </p>
                          </li>
                        </ul>
                        <p className="nmi-affiliate-note">
                          Gear links on this page are affiliate links. If you
                          buy through one I earn a small commission at no extra
                          cost to you.
                        </p>
                      </li>
                      <li>
                        <p>
                          You need to purchase Manitou Island Transit tickets
                          from Leland in advance. You can travel to the island
                          using a vessel of your own, but I do not recommend
                          attempting this.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal as="section" variant="up" delay={220}>
                <div className="dis-row g-2">
                  <div className="dis-col section-half">
                    <div>
                      <hr className="section-divider" />
                    </div>
                    <div>
                      <h3 id="hazards">Hazards on North Manitou Island</h3>
                      <p>
                        Most outdoor enthusiasts will probably find the island's
                        topography, flora, and fauna very forgiving. There are
                        no large predators, and the terrain is primarily flat
                        unless one chooses to climb steep dunes on the island's
                        northwest side (these formations are fragile and crumble
                        easily). If you're using good judgment, you will be safe
                        from serious injury or death. 
                      </p>
                      <p>
                        <strong>
                          Nonetheless, the island is remote, cell service is
                          unreliable,
                          <em>
                            and help is very far away if you do end up needing
                            it.
                          </em>
                        </strong>
                      </p>
                      <p>
                        Here are the potential risks you need to be aware of:
                      </p>
                      <ul>
                        <li>
                          <p>
                            <strong>Drowning / Rip Currents</strong>. As with
                            any lakeshore on Lake Michigan, there can be
                            significant wave events and powerful rip currents,
                            especially on the island's west shore. Be mindful
                            that if swimming in dangerous conditions goes south,
                            you will likely be unable to call for help, and even
                            if you do, it's hours away.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>Deadfall. </strong>Storms and extreme wind
                            events create a hazard to your campsite. Always be
                            sure that you position your camp well away from any
                            branches or trees that could fall and injure you.
                          </p>
                        </li>
                        <li>
                          <p>
                            <a
                              href="https://americanhiking.org/ticks/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>Ticks</strong>
                            </a>
                            <strong>. </strong>These arachnids can cause Lyme
                            Disease and are very, very prevalent on the island.
                            Wearing long pants is recommended, especially when
                            bushwhacking. It is a good habit to check{" "}
                            <em>your entire body </em>for ticks every evening
                            and after prolonged periods of sitting.
                          </p>
                        </li>
                        <li>
                          <p>
                            <a
                              href="https://www.massaudubon.org/nature-wildlife/plants/poison-ivy"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>Poison Ivy</strong>
                            </a>
                            <strong>. </strong>Know how to identify it and wear
                            long pants when hiking off-trail. It is widespread
                            across the island.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>Swimmer’s Itch.</strong> Cercarial
                            dermatitis is an unpleasant skin rash caused by
                            parasites carried by snails. The parasite exists in
                            Lake Manitou and Tamarack Lake, so consider saving
                            your swimming for Lake Michigan.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>Insects. </strong>Mosquitoes and blackflies
                            are <em>abundant </em>from June through August.
                            Prepare accordingly with face net and a proper
                            shelter.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>Chipmunks. </strong>Commonly referred to as
                            micro-bears, the small rodents will chew their way
                            through unattended backpacks, tents and food bags
                            that you fail to hang. Hang&nbsp;
                            <strong>all </strong>scented items (even things like
                            toothpaste, sunscreen, and lip balm).
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>Hypothermia. </strong>Keep yourself and your
                            gear well-waterproofed. Even during the summer,
                            prolonged periods of heavy rain and wind can drop
                            your core temperature to dangerous levels.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div id="block-yui_3_17_2_1_1628111893930_47804">
                      <figure id="yui_3_17_2_1_1753204324355_131">
                        <img
                          src={`${
                            import.meta.env.BASE_URL
                          }images/north-manitou/north-manitou-island-camping.webp`}
                          alt="North Manitou Island Hammocks"
                        />
                        <figcaption>
                          <div>
                            <p>
                              Hammocks aren’t an essential item, but they’re
                              well-worth the weight.
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="section-half">
                    <div>
                      <hr className="section-divider" />
                    </div>
                    <div>
                      <div>
                        <h3 id="packing-list">
                          North Manitou Island Packing List
                        </h3>
                        <p>
                          Everyone has their own style. In addition to what you
                          bring to eat, here’s my recommended packing list:
                        </p>
                        <p>
                          <strong>Gear</strong>
                        </p>
                        <ul>
                          <li>
                            <p>
                              <a
                                href="https://www.osprey.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Backpack (40+ liters recommended)
                              </a>
                            </p>
                          </li>
                          <li>
                            <p>
                              Water-proof pack cover or a large garbage bag
                              lining your pack
                            </p>
                          </li>
                          <li>
                            <p>Sleeping bag rated to 40°F or colder</p>
                          </li>
                          <li>
                            <p>Sleeping pad</p>
                          </li>
                          <li>
                            <p>Shelter that includes a bug net</p>
                          </li>
                          <li>
                            <p>Headlamp + spare batteries</p>
                          </li>
                          <li>
                            <p>Cooking stove + fuel</p>
                          </li>
                          <li>
                            <p>A pot for cooking and eating</p>
                          </li>
                          <li>
                            <p>Eating utensil</p>
                          </li>
                          <li>
                            <p>2 liters of water storage at a minimum</p>
                          </li>
                          <li>
                            <p>
                              Water filter, Aquamira, Iodine tablets, or other
                              purification
                            </p>
                          </li>
                          <li>
                            <p>Trowel or spade for digging cat holes</p>
                          </li>
                          <li>
                            <p>Cellular phone</p>
                          </li>
                          <li>
                            <p>Map and compass</p>
                          </li>
                          <li>
                            <p>Stocked first-aid kit</p>
                          </li>
                          <li>
                            <p>
                              Bags and at least 25 feet of cord for hanging food
                            </p>
                          </li>
                          <li>
                            <p>Multi-tool or knife</p>
                          </li>
                        </ul>
                        <p>
                          <strong>
                            Clothing (may vary depending on the month)
                          </strong>
                        </p>
                        <ul>
                          <li>
                            <p>
                              <a
                                href="https://www.fleetfeet.com/s/traversecity?srsltid=AfmBOoovF2cdhLD-TbyN3tgq3JJsKGL3IRUSVzKNLCrIu66CZletJTG_"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Hiking shoes/boots
                              </a>
                            </p>
                          </li>
                          <li>
                            <p>Water-compatible camp shoes</p>
                          </li>
                          <li>
                            <p>Non-cotton short-sleeved hiking shirt</p>
                          </li>
                          <li>
                            <p>Non-cotton light hoody/sun shirt</p>
                          </li>
                          <li>
                            <p>
                              Non-cotton fleece or lightweight insulated jacket
                            </p>
                          </li>
                          <li>
                            <p>Rain jacket or poncho</p>
                          </li>
                          <li>
                            <p>Non-cotton hiking pants</p>
                          </li>
                          <li>
                            <p>Non-cotton shorts</p>
                          </li>
                          <li>
                            <p>Several pairs of non-cotton underwear</p>
                          </li>
                          <li>
                            <p>
                              Non-cotton hiking socks (one pair per day is
                              recommended)
                            </p>
                          </li>
                          <li>
                            <p>Sunhat + sunglasses</p>
                          </li>
                          <li>
                            <p>Swimsuit</p>
                          </li>
                        </ul>
                        <p>
                          <strong>Other Items</strong>
                        </p>
                        <ul>
                          <li>
                            <p>Sunscreen</p>
                          </li>
                          <li>
                            <p>Insect repellent</p>
                          </li>
                          <li>
                            <p>At least two lighters or water-proof matches</p>
                          </li>
                          <li>
                            <p>Face net for insects</p>
                          </li>
                          <li>
                            <p>Non-scented, biodegradable toilet paper</p>
                          </li>
                          <li>
                            <p>Toothbrush + toothpaste</p>
                          </li>
                          <li>
                            <p>Hand sanitizer</p>
                          </li>
                          <li>
                            <p>Biodegradable camp soap</p>
                          </li>
                          <li>
                            <p>
                              Personal items such as prescription drugs,
                              menstrual products, glasses or contacts + solution
                            </p>
                          </li>
                          <li>
                            <p>Hammock + eco-friendly straps (recommended)</p>
                          </li>
                          <li>
                            <p>
                              Book, journal, binoculars, fishing rod, cards or
                              other comfort items
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <div>
                <hr className="section-divider" />
              </div>
              <NewsletterCapture />
              <div>
                <hr className="section-divider" />
              </div>

              <div className="dis-row g-2">
                <div className="dis-col section-half">
                  <div>
                    <h3 id="what-to-do">Arriving at the Island</h3>
                    <p>
                      Once you have your gear, head to the village for the
                      ranger orientation. There, you’ll find a composting privy
                      and a water spigot if you need to fill your bottles.
                    </p>
                    <p>
                      Once the orientation is complete, you’re free to explore!
                      If you want to secure a campsite in the village
                      campground, head there right away as they are first come,
                      first serve. Make sure you clip your permit outside your
                      site and adhere to the occupancy rules.
                      <br />
                      <br />
                      Beyond the village campground the whole island is
                      wilderness, and the Park Service does not designate
                      campsites. Camping is dispersed, which means finding a
                      legal spot is a skill rather than a lookup. Use ground
                      that has already been impacted rather than clearing
                      something new, and mind the 300-foot setbacks. The{" "}
                      <a href="#guide-cta">full guidebook</a> covers where
                      camping works in each section of the island.
                    </p>
                    <h3 id="planning-your-route">Planning Your Route</h3>
                    <p>
                      I’ve generated a high-resolution, shaded topographic North
                      Manitou Island hiking map. Click the image to open it in a
                      new window where you can save it to your smartphone or
                      computer. The National Park Service has also created a map
                      that includes notable landmarks that you can find {""}
                      <a
                        href="https://www.nps.gov/slbe/planyourvisit/north-manitou-island-map.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                    <p>
                      Whether you’re new to backpacking or experienced, I
                      recommend checking out my guide on {""}
                      <a href="/caltopo-guide">
                        how to use CalTopo to plan a route
                      </a>
                      . It’s a great way to head to the island with a
                      well-constructed plan about how much distance and
                      elevation you’ll be hiking each day.
                    </p>
                  </div>
                  <div className="vrt-spc"></div>
                  <div className="button-container">
                    <a className="button" href="/caltopo-guide">
                      {" "}
                      Plan Your Hike{" "}
                    </a>
                  </div>
                </div>
                <div className="section-half cnt">
                  <figure id="yui_3_17_2_1_1753204324355_187">
                    <a
                      id="yui_3_17_2_1_1753204324355_186"
                      href={`${import.meta.env.BASE_URL}images/north-manitou/North-manitou-island-topo-map.webp`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${
                          import.meta.env.BASE_URL
                        }images/north-manitou/North-manitou-island-topo-map.webp`}
                        alt="North Manitou Island topographic map"
                      />
                    </a>
                  </figure>
                </div>
              </div>
              <hr className="section-divider" />

              <div>
                <h3>Have a great trip!</h3>
                <p>
                  Make sure you’re at the docks on time for pickup at 11:00 am
                  the day of departure, and you’re all set to go.
                </p>
                <p>
                  For me, the journey home is as much a part of every trip to
                  Manitou as the Island itself. If time allows (it is only open
                  7 a.m. - 3 p.m.), {""}
                  <a
                    href="https://www.9beanrows.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    9 Bean Rows
                  </a>{" "}
                  on the way to Sutton's Bar serves incredible wood-fired Pizza.{" "}
                  {""}
                  <a
                    href="https://hoplotbrewing.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hop Lot Brewing Company
                  </a>{" "}
                  in Sutton's Bay offers craft beer, barbeque, and the best beer
                  garden I've ever seen. I often struggle to decide between the
                  two.
                </p>

                {/* ── FAQ ── */}
                <Reveal variant="up" delay={440}>
                  <section id="faq" className="content-wrapper">
                    <h2>Frequently Asked Questions</h2>
                    <div className="nmi-faq-list">
                      <div className="nmi-faq-item">
                        <button
                          className="nmi-faq-summary"
                          aria-expanded={openFaq === 0}
                          onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                        >
                          How do you get to North Manitou Island?
                          <span className="nmi-faq-icon" aria-hidden="true">
                            {openFaq === 0 ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className="nmi-faq-answer-wrapper"
                          aria-hidden={openFaq !== 0}
                        >
                          <div className="faq-answer">
                            <p>
                              By boat only, from Leland. Manitou Island Transit
                              has run the ferry out of Fishtown for generations,
                              and a charter holding a Commercial Use
                              Authorization serves the island as well. Which of
                              them is running depends on the year and the state
                              of the dock, so confirm before you plan around
                              either.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nmi-faq-item">
                        <button
                          className="nmi-faq-summary"
                          aria-expanded={openFaq === 1}
                          onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                        >
                          Is the ferry running in 2027?
                          <span className="nmi-faq-icon" aria-hidden="true">
                            {openFaq === 1 ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className="nmi-faq-answer-wrapper"
                          aria-hidden={openFaq !== 1}
                        >
                          <div className="faq-answer">
                            <p>
                              Unclear as of November 2026. The Park Service has
                              been relocating the docks on both Manitou islands
                              and expects to publish an operational update in
                              early January 2027 covering dock access and
                              transportation. That posting is the authority, not
                              this page.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nmi-faq-item">
                        <button
                          className="nmi-faq-summary"
                          aria-expanded={openFaq === 2}
                          onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                        >
                          Do you need a permit to camp on North Manitou Island?
                          <span className="nmi-faq-icon" aria-hidden="true">
                            {openFaq === 2 ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className="nmi-faq-answer-wrapper"
                          aria-hidden={openFaq !== 2}
                        >
                          <div className="faq-answer">
                            <p>
                              Yes, two things. An entrance pass for Sleeping
                              Bear Dunes and a Backcountry Use Permit, which
                              runs $10 per night for an individual and $30 per
                              night for groups of four or more. They are
                              separate and you need both.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nmi-faq-item">
                        <button
                          className="nmi-faq-summary"
                          aria-expanded={openFaq === 3}
                          onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                        >
                          Where can you camp on North Manitou Island?
                          <span className="nmi-faq-icon" aria-hidden="true">
                            {openFaq === 3 ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className="nmi-faq-answer-wrapper"
                          aria-hidden={openFaq !== 3}
                        >
                          <div className="faq-answer">
                            <p>
                              The Village Campground has the island's only
                              designated sites, eight plus one group site.
                              Everywhere else is the Sleeping Bear Dunes
                              Wilderness, where the Park Service does not
                              designate campsites and dispersed camping is
                              allowed outside the setbacks: 300 feet from the
                              Lake Michigan high water mark, from lakes, ponds
                              and streams, from buildings and other camps, and
                              from any posted No Camping sign.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nmi-faq-item">
                        <button
                          className="nmi-faq-summary"
                          aria-expanded={openFaq === 4}
                          onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                        >
                          Is there drinking water on North Manitou Island?
                          <span className="nmi-faq-icon" aria-hidden="true">
                            {openFaq === 4 ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className="nmi-faq-answer-wrapper"
                          aria-hidden={openFaq !== 4}
                        >
                          <div className="faq-answer">
                            <p>
                              There is a spigot in the village when the village
                              is open. Everywhere else you are filtering from
                              Lake Michigan, Lake Manitou, or the creek near
                              Pole Bridge. Treat everything, and do not plan
                              around the springs; most of them are muddy pits.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nmi-faq-item">
                        <button
                          className="nmi-faq-summary"
                          aria-expanded={openFaq === 5}
                          onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                        >
                          Are dogs allowed on North Manitou Island?
                          <span className="nmi-faq-icon" aria-hidden="true">
                            {openFaq === 5 ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className="nmi-faq-answer-wrapper"
                          aria-hidden={openFaq !== 5}
                        >
                          <div className="faq-answer">
                            <p>
                              No. Pets are prohibited on both Manitou islands.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nmi-faq-item">
                        <button
                          className="nmi-faq-summary"
                          aria-expanded={openFaq === 6}
                          onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                        >
                          How long does it take to backpack North Manitou
                          Island?
                          <span className="nmi-faq-icon" aria-hidden="true">
                            {openFaq === 6 ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className="nmi-faq-answer-wrapper"
                          aria-hidden={openFaq !== 6}
                        >
                          <div className="faq-answer">
                            <p>
                              Two days gets you a shoreline overnighter. Four
                              days completes the South Island Loop. Five or six
                              days tours most of the island at low daily
                              mileage. There are 23.65 miles of maintained trail
                              and another 13.56 miles of mapped unmaintained
                              trail.
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
                      <h2>Ready to Backpack North Manitou?</h2>
                      <p>
                        The complete 33-page guide built from six days of
                        fieldwork and 75 miles scouted on foot, so your first
                        trip does not have to be the one where you figure it
                        out.
                      </p>
                      <a
                        href={PRODUCT_URL}
                        className="nmi-buy-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy the Guide ($20)
                      </a>
                    </div>
                  </section>
                </Reveal>
                <div className="guide-footer-attributions content-wrapper">
                  <ManagedBy organization="sleepingBearDunes" />
                  <LNTNotice />
                  <SupportNotice />
                </div>
                <div className="vrt-spc"></div>
              </div>
            </div>
          </article>
        </main>
        <Link to="/guides" className="back-to-guides">
          ← Back to Guides
        </Link>
      </div>
    </>
  );
};

export default NorthManitouGuide;

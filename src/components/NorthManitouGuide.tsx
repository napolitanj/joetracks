import "/src/styles/shared.css";
import "/src/styles/manitou-guide.css";
import { useEffect, useState } from "react";

const NorthManitouGuide = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="guide">
      <main className="container" id="page" role="main">
        <article className="sections">
          <section className="hero manitou-bg">
            <div className="hero-text">
              <h1 className={animate ? "animate" : ""}>
                How to Plan a Backpacking Trip to North Manitou Island
              </h1>
            </div>
          </section>
          <section className="content-wrapper dis-col">
            <div className="dis-row g-2">
              <div className="section-half">
                <h2>What is North Manitou Island?</h2>
                <p>
                  North Manitou Island is a part of the Sleeping Bear Dunes
                  National Lakeshore and is located roughly 10 miles west of the
                  small fishing town of Leland, which is about a 40-minute drive
                  from Traverse City. The last settlements on North Manitou
                  Island were abandoned over a century ago, leaving the island
                  devoid of human civilization aside from the small village on
                  the eastern shore where park rangers reside.
                </p>
                <p>
                  Aside from its pristine natural beauty and Caribbean-colored
                  water, camping on North Manitou Island offers visitors
                  established trail systems and diverse terrain that beckons
                  hikers of all skill levels. With 21 miles of shoreline and a
                  total landmass of just over 22 square miles, backpacking North
                  Manitou Island offers some of the most remote yet accessible
                  wilderness in the Great Lakes Region.
                </p>
              </div>
              <div className="section-half">
                <figure>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/north-manitou/north-manitou-island.webp"
                    alt="North Manitou Island West Shore`}
                    className="intro-image"
                  />
                  <figcaption>
                    <p>
                      The Island’s west shore offers pristine beaches, massive
                      dunes, spectacular sunsets and incredible stargazing.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <hr className="section-divider" />
          </section>
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
                <h4>Our North Manitou Island backpacking guide includes…</h4>

                {/* Need hyperlinking via bookmarks added */}
                <ul>
                  <li>
                    <p>
                      <a>Essential information.</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a>Hazards you’ll encounter.</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a>North Manitou Island Packing List.</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a>Booking passage on the North Manitou Island Ferry.</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a>
                        North Manitou Island Camping permits and entrance fee.
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a>What to do on North Manitou Island.</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a>
                        North Manitou Island Map and details on planning your
                        route.
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <hr className="section-divider" />
            </div>
            <section>
              <div id="dis-col">
                <div className="section-header">
                  <h2>
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
                            >
                              Leave No Trace (LNT
                            </a>
                            ).
                          </p>
                        </li>
                        <li>
                          <p>
                            A basic understanding of wilderness backpacking .
                          </p>
                        </li>
                        <li>
                          <p>
                            <a
                              href="https://backcountrynorth.com/"
                              target="_blank"
                            >
                              The gear to do it<em>.</em>
                            </a>
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>
                        You need to purchase Manitou Island Transit tickets from
                        Leland in advance. You can travel to the island using a
                        vessel of your own, but we do not recommend attempting
                        this.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div className="dis-row g-2">
                <div className="dis-col section-half">
                  <div>
                    <hr className="section-divider" />
                  </div>
                  <div>
                    <h3>Hazards on North Manitou Island</h3>
                    <p>
                      Most outdoor enthusiasts will probably find the island's
                      topography, flora, and fauna very forgiving. There are no
                      large predators, and the terrain is primarily flat unless
                      one chooses to climb steep dunes on the island's northwest
                      side (these formations are fragile and crumble easily). If
                      you're using good judgment, you will be safe from serious
                      injury or death. 
                    </p>
                    <p>
                      <strong>
                        Nonetheless, the island is remote, cell service is
                        unreliable,
                        <em>
                          and help is very far away if you do end up needing it.
                        </em>
                      </strong>
                    </p>
                    <p>Here are the potential risks you need to be aware of:</p>
                    <ul>
                      <li>
                        <p>
                          <strong>Drowning / Rip Currents</strong>. As with any
                          lakeshore on Lake Michigan, there can be significant
                          wave events and powerful rip currents, especially on
                          the island's west shore. Be mindful that if swimming
                          in dangerous conditions goes south, you will likely be
                          unable to call for help, and even if you do, it's
                          hours away.
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
                          <a>
                            <strong>Ticks</strong>
                          </a>
                          <strong>. </strong>These tiny insects can cause Lyme
                          Disease and are very, very prevalent on the island.
                          Wearing long pants is recommended, especially when
                          bushwhacking. It is a good habit to check{" "}
                          <em>your entire body </em>for ticks every evening and
                          after prolonged periods of sitting.
                        </p>
                      </li>
                      <li>
                        <p>
                          <a>
                            <strong>Poison Ivy</strong>
                          </a>
                          <strong>. </strong>Know how to identify it and wear
                          long pants when hiking off-trail. It is widespread
                          across the island.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Swimmers Itch.</strong> Cercarial dermatitis
                          is an unpleasant skin rash caused by parasites carried
                          by snails. The parasite exists in Lake Manitou and
                          Tamarack Lake, so consider saving your swimming for
                          Lake Michigan.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Insects. </strong>Mosquitos and blackflies are{" "}
                          <em>abundant </em>from June through August. Prepare
                          accordingly with face net and a proper shelter.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Chipmunks. </strong>Commonly referred to as
                          micro-bears, the small rodents will chew their way
                          through unattended backpacks, tents and food bags that
                          you fail to hang. Hang&nbsp;
                          <strong>all </strong>scented items (even things like
                          toothpaste, sunscreen, and lip balm).
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Hypothermia. </strong>Keep yourself and your
                          gear well-waterproofed. Even during the summer,
                          prolonged periods of heavy rain and wind can drop your
                          core temperature to dangerous levels.
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
                            Hammocks aren’t a essential item, but they’re
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
                      <h3>North Manitou Island Packing List</h3>
                      <p>
                        Everyone has their own style. In addition to what you
                        bring to eat, here’s our recommended packing list:
                      </p>
                      <p>
                        <strong>Gear</strong>
                      </p>
                      <ul>
                        <li>
                          <p>
                            <a>
                              Backpack that fits everything you need (40+
                              liters)
                            </a>
                          </p>
                        </li>
                        <li>
                          <p>
                            Water-proof pack cover or a large garbage bag lining
                            your pack
                          </p>
                        </li>
                        <li>
                          <p>Sleeping bag rated for 40 Fahrenheit or warmer</p>
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
                            Water filter, <a>Aquamira</a>, Iodine tablets, or
                            other purification
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
                        <strong>Clothing</strong>
                      </p>
                      <ul>
                        <li>
                          <p>
                            <a>Hiking shoes/boots</a>
                          </p>
                        </li>
                        <li>
                          <p>Water-compatible camp shoes.</p>
                        </li>
                        <li>
                          <p>Non-cotton short-sleeved hiking shirt</p>
                        </li>
                        <li>
                          <p>Non-cotton Light, long-sleeved hoody/sun shirt</p>
                        </li>
                        <li>
                          <p>
                            Non-cotton Fleece or lightweight insulated jacket
                            warm-layer
                          </p>
                        </li>
                        <li>
                          <p>Rain jacket + rain pants</p>
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
                          <p>Insect repellant</p>
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
                            Personal items such as prescription drugs, feminine
                            hygiene products, glasses or contacts + solution
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
            </section>
            <div>
              <hr className="section-divider" />
            </div>
            <section>
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
                  <h3>Book Passage on the North Manitou Island Ferry</h3>
                  <p>
                    Before making any other plans, make sure you can book&nbsp;
                    <a href="https://manitoutransit.com/" target="_blank">
                      Manitou Island Transit
                    </a>
                    &nbsp; tickets to and from the island on the days you wish
                    to go. As of 2021, round trip tickets are:
                  </p>
                  <ul>
                    <li>
                      <p>$45 per adult</p>
                    </li>
                    <li>
                      <p>$23 for children 12 and younger</p>
                    </li>
                    <li>
                      <p>Free for children two and younger</p>
                    </li>
                  </ul>
                  <p>
                    The ferry schedule is dependent on the time of year you go.
                    During peak season, July 1 - Labor Day, the ferry runs
                    daily.
                  </p>
                  <p>
                    <a
                      href="https://manitoutransit.com/rates-schedule/"
                      target="_blank"
                    >
                      Click here to see the ferry schedule and book tickets.
                    </a>
                  </p>
                </div>
              </div>
              <div className="vrt-spc"></div>
              <div className="dis-row g-2">
                <div className="section-half">
                  <h3>North Manitou Island Permits and Entrance Fee</h3>
                  <p>
                    You will pay for your permits and entrance fee upon arriving
                    at the Manitou Island Transit Ticket Office. If you possess
                    an&nbsp;
                    <a
                      href="https://www.nps.gov/planyourvisit/passes.htm"
                      target="_blank"
                    >
                      NPS America the Beautiful Annual Pass
                    </a>
                    , you do not have to pay an entrance fee.
                  </p>
                  <ul>
                    <li>
                      <p>The entrance fee is $25 per car or group.</p>
                    </li>
                    <li>
                      <p>
                        Camping permits are $10 per night for groups of 4 or
                        less.
                      </p>
                    </li>
                    <li>
                      <p>
                        Camping permits are $20 per night for groups of 10 or
                        less.
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
                    }images/north-manitou/leland-fishtown-cheese-shanty.webp"
                    alt="A picture of Leland Fishtown`}
                  />
                  <figcaption>
                    <div>
                      <p>
                        Fishtown is located on the west side of Leland, between
                        M-22 and Lake Michigan.&nbsp;
                        <a
                          href="https://www.villagecheeseshanty.com/"
                          target="_blank"
                        >
                          The Village Cheese Shanty
                        </a>
                        &nbsp; is a Leelanau Peninsula novelty and well worth a
                        visit, but be aware wait times for sandwiches can be an
                        hour.
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
                      >
                        Leland Fire Department
                      </a>
                    </p>
                    <p>
                      Sometimes the Manitou Island Transit runs shuttles, but if
                      they’re not, the walk isn’t far considering you’re about
                      to go backpacking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vrt-spc"></div>
              <div className="dis-row g-2">
                <div className="section-half">
                  <h3>Boarding and Disembarking the Transit</h3>
                  <p>
                    Be near the docks, ready to leave on time. When the Manitou
                    Island Transit is prepared, they will ask guests to board
                    and stow their backpacks. Keep whatever you need for the
                    1-hour and 15-minute voyage handy, as it is likely all your
                    belongings will be buried beneath other people’s gear.
                  </p>
                  <p>
                    It is good form and expected of you both when you arrive at
                    the island and return to Leland to stand in line on the dock
                    and help unload everyone’s backpack.
                  </p>
                </div>
                <figure className="section-half">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/north-manitou/Leland-Manitou-Island-Transit.webp"
                    alt="North Manitou Island Transit Map`}
                  />
                  <figcaption>
                    <div>
                      <p>
                        Fishtown can be chaotic around the time of departure, so
                        ensure that you arrive on time with your gear in order.
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
            <div>
              <hr className="section-divider" />
            </div>

            <div className="dis-row g-2">
              <div className="dis-col section-half">
                <div>
                  <h3>Arriving at the Island</h3>
                  <p>
                    Once you have your gear, head to the village for the ranger
                    orientation. There, you’ll find a composting privy and a
                    water spigot if you need to fill your bottles.
                  </p>
                  <p>
                    Once the orientation is complete, you’re free to explore! If
                    you want to secure a campsite in the village campground, we
                    recommend heading there right away as they are first come,
                    first serve. Make sure you clip your permit outside your
                    site and adhere to the occupancy rules.
                    <br />
                    <br />
                    Beyond the village campground, there are many popular spots
                    along the island's west side near and south of Swenson's, on
                    the east side of Lake Manitou, and along the east side of
                    the island south of the docks. These locations will be
                    primitive but mostly obvious as you hike along the beach or
                    designated trail. Some campsites are more secluded than
                    others and require a bit of exploration to find. Remember to
                    adhere to the LNT code of ethics when camping and that using
                    a primitive campsite that has already seen significant
                    impact from previous campers is always better than trampling
                    down a new campsite.
                  </p>
                  <h3>Planning Your Route</h3>
                  <p>
                    We’ve generated a high-resolution, shaded topographic North
                    Manitou Island hiking map. Click the image to open it in a
                    new window where you can save it to your smartphone or
                    computer. The National Park Service has also created a map
                    that includes notable landmarks that you can find {""}
                    <a
                      href="https://www.nps.gov/slbe/planyourvisit/north-manitou-island-map.htm"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </p>
                  <p>
                    Whether you’re new to backpacking or experienced, we highly
                    recommend checking out our guide on {""}
                    <a>how to use CalTopo to plan a route</a>. It’s a great way
                    to head to the island with a well-constructed plan about how
                    much distance and elevation you’ll be hiking each day.
                  </p>
                </div>
                <div className="vrt-spc"></div>
                <div className="button-container">
                  <a className="button"> Plan Your Hike </a>
                </div>
              </div>
              <div className="section-half cnt">
                <figure id="yui_3_17_2_1_1753204324355_187">
                  {/* Need hyperlinking to big map */}
                  <a id="yui_3_17_2_1_1753204324355_186">
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
                Make sure you’re at the docks on time for pickup at 11:00 am the
                day of departure, and you’re all set to go.
              </p>
              <p>
                For me, the journey home is as much a part of every trip to
                Manitou as the Island itself. If time allows (it is only open 7
                a.m. - 3 p.m.), {""}
                <a href="https://www.9beanrows.com/" target="_blank">
                  9 Bean Rows
                </a>{" "}
                on the way to Sutton's Bar serves incredible wood-fired Pizza.{" "}
                {""}
                <a href="https://hoplotbrewing.com/" target="_blank">
                  Hop Lot Brewing Company
                </a>{" "}
                in Sutton's Bay offers craft beer, barbeque, and the best beer
                garden I've ever seen. I often struggle to decide between the
                two.
              </p>
              <p>
                We hope you enjoyed this guide and found it helpful. Please
                share it with others if you did! If you have any feedback or
                questions, please reach out to us using our contact form. Also,
                be sure to subscribe below, so you stay up to date with new
                guides we publish each month. Have a nice trip!
              </p>
            </div>
          </div>
          <div className="vrt-spc"></div>
        </article>
      </main>
    </div>
  );
};

export default NorthManitouGuide;

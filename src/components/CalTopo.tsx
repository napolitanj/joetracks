import { useEffect, useState } from "react";
import "/src/styles/shared.css";
import "/src/styles/caltopo.css";

const CalTopo = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div>
        <div className="clearfix site-wrapper">
          <main className="container">
            <article className="sections">
              <section className="content-width--medium horizontal-alignment--center vertical-alignment--middle has-background black">
                <div className="section-border">
                  <div className="section-background">
                    <img src="./public/images/caltopo/pictured+rocks.webp" />
                    <div className="section-background-overlay"></div>
                  </div>
                </div>
                <div className="content-wrapper">
                  <div className="content">
                    <div className="sqs-layout sqs-grid-12 columns-12">
                      <div className="row sqs-row">
                        <div className="col sqs-col-12 span-12">
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h1 className="preSlide slideIn">
                                  <strong>How to Use CalTopo</strong>
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="page-section layrtical-alignment--middle">
                <div className="section-border">
                  <div className="section-background"></div>
                </div>
                <div className="content-wrapper">
                  <div className="content">
                    <div className="sqs-layout sqs-grid-12 columns-12">
                      <div className="row sqs-row">
                        <div className="col sqs-col-12 span-12">
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h3 className="preSlide slideIn">
                                      Why is CalTopo useful?
                                    </h3>
                                    <p className="preFade fadeIn">
                                      Learning to use CalTopo is among the most
                                      valuable skills available for planning
                                      your next adventure. Mastering the basics
                                      of Caltopo’s interface not only allows you
                                      to embark on a journey well-informed but
                                      also allows you to leave folks back home
                                      with a comprehensive plan if you go
                                      missing. Thus, learning CalTopo will
                                      enable you to better plan and executes
                                      excursions while vastly increasing your
                                      margin of safety.
                                    </p>
                                    <p className="preFade fadeIn">
                                      With dozens of valuable features, learning
                                      how to use CalTopo can appear to be a
                                      daunting task. Fear not; we’ve taken the
                                      time to consolidate its most valuable
                                      aspects into a quick and easy guide. The
                                      information on this page will help you
                                      build an understanding of CalTopo’s
                                      interface so you can get back to planning
                                      your trip and head outside!
                                    </p>
                                    <p className="preFade fadeIn">
                                      <em>
                                        CalTopo's features are extensive. This
                                        guide covers what is available to users
                                        with the free account and is essential
                                        to use the software efficiently. This
                                        guide is best viewed on a laptop or
                                        desktop.
                                      </em>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <figure className="sqs-block-image-figure intrinsic">
                                <div className="image-block-wrapper preSlide slideIn">
                                  <div className="sqs-image-shape-container-element has-aspect-ratio">
                                    <img
                                      className="loaded"
                                      src="public/images/caltopo/caltopo.webp"
                                    />
                                  </div>
                                </div>
                                <figcaption className="image-caption-wrapper">
                                  <div className="image-caption">
                                    <p className="sqsrte-small preFade fadeIn">
                                      A screenshot of CalTopo’s interface with a
                                      user-designed route and its corresponding
                                      elevation profile.
                                    </p>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h3 className="preSlide">Contents</h3>
                                <p className="preFade">
                                  All of this information and much more is
                                  included in our
                                  <a href="https://www.originexpeditions.org/trip-planning">
                                    3-hour Trip Planning Class.
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628020643548_10194">
                                        A Tour of CalTopo’s Interface
                                      </a>
                                    </h4>
                                    <ul>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628022862352_4194">
                                            Scale
                                          </a>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628023782837_9485">
                                            Position of Mouse on Map
                                          </a>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628023782837_9485">
                                            Changing Units and Other Settings
                                          </a>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628022862352_16189">
                                            CalTopo's Measure Tool
                                          </a>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628024541841_52185">
                                            CalTopo's Add Object Tool
                                          </a>
                                        </p>
                                      </li>
                                    </ul>
                                    <h4 className="preFade">
                                      <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628097951063_33710">
                                        How to Draw a Route With CalTopo
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628026178265_15061">
                                        How to Use CalTopo’s Map Layers Feature
                                        to Change the Appearance of Your Map
                                      </a>
                                    </h4>
                                    <ul>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628026178265_19333">
                                            CalTopo Base Layers
                                          </a>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628027679941_94105">
                                            Stacking Base Layers With CalTopo
                                          </a>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628030145378_24281">
                                            Caltopo Map Overlays
                                          </a>
                                        </p>
                                      </li>
                                    </ul>
                                    <h4 className="preFade">
                                      <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628091741835_96279">
                                        How to Export and Print Topo Maps With
                                        CalTopo
                                      </a>
                                    </h4>
                                    <ul>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628091741835_153397">
                                            Printable topo maps
                                          </a>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628091741835_233193">
                                            Export
                                          </a>
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h3 className="preSlide">
                                  A Tour of CalTopo’s Interface
                                </h3>
                                <p className="preFade">
                                  Head over to
                                  <a href="http://www.caltopo.com/">
                                    www.caltopo.com
                                  </a>
                                  in a separate window where you’ll see
                                  CalTopo’s interface open to its default
                                  appearance pictured below. If you have created
                                  an account and used CalTopo before, it will
                                  open to your last-used map position and
                                  settings.
                                </p>
                                <p className="preFade">
                                  We highly recommend that you sign up or link
                                  an account to CalTopo as it allows you to save
                                  projects you create.
                                </p>
                                <p className="preFade">
                                  Hover over the image below with your mouse to
                                  identify several key features of the interface
                                  that this guide will cover first.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="image-swap-container">
                            <img
                              className="img-default"
                              src="./public/images/caltopo/caltopobasic.png"
                            />
                            <img
                              className="img-hover"
                              src="./public/images/caltopo/caltopoguide.png"
                            />
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <strong>Scale</strong>
                                    </h4>
                                    <p className="preFade">
                                      As with a standard topographic map (future
                                      link), CalTopo includes a scale that
                                      <strong>
                                        indicates the ratio of distance to the
                                        corresponding space on the map
                                      </strong>
                                      pictured. You will notice that this scale
                                      changes as you zoom in and out.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <strong>Position of Mouse on Map</strong>
                                    </h4>
                                    <p className="preFade">
                                      As the title suggests, the small window in
                                      the upper right corner
                                      <strong>
                                        displays positional information
                                      </strong>
                                      depending on the mouse's location on the
                                      map. This information and the units
                                      displayed can be changed - how to do so is
                                      discussed below.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <strong>
                                        Changing Units and Other Settings
                                      </strong>
                                    </h4>
                                    <p className="preFade">
                                      Before proceeding,
                                      <strong>click "Settings"</strong>
                                      directly above the positioning window. The
                                      menu pictured provides options to
                                      customize the interface.
                                    </p>
                                    <p className="preFade">
                                      <em>
                                        Ensure that your measurement units are
                                        as desired.
                                      </em>
                                      If you're accustomed to using U.S. units
                                      of measurement (inches, feet, miles,
                                      etc.), select the dropdown menu next to
                                      "units" and select "Imperial."
                                    </p>
                                    <p className="preFade">
                                      At the bottom of the menu, you will find
                                      the option to change the position
                                      displayed in the window. You can choose to
                                      display the location of where the map is
                                      centered rather than on the mouse.
                                    </p>
                                    <p className="preFade">
                                      There are additional options, including:
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="preFade">
                                          Placing a Universal Transverse
                                          Mercator (UTM) grid on the map,
                                          similar to that seen a standard USGS
                                          topographic map.
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          The option to update the URL when you
                                          move your map, allowing you to create
                                          a shareable link to the exact
                                          positioning of your map.
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          The option to change the coordinate
                                          units in the positioning window.
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="iault individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img
                                            className="loaded"
                                            src="./public/images/caltopo/Caltopo-interface-settings-menu.webp"
                                          />
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-8 span-8">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <strong>CalTopo's Measure Tool</strong>
                                      📏
                                    </h4>
                                    <p className="preFade">
                                      CalTopo's Measure Tool offers a quick way
                                      to acquire a variety of information with
                                      your map. Click the 📏 icon to see the
                                      dropdown menu in the picture. It's
                                      important to note that CalTopo's interface
                                      will not save this information for you. If
                                      you wish to keep the information, use the
                                      <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628024541841_52185">
                                        "+Add" tool
                                      </a>
                                      .
                                    </p>
                                    <p className="preFade">
                                      <em>
                                        Take a moment to familiarize yourself
                                        with their functions,
                                      </em>
                                      the most important of which we explain
                                      below.
                                    </p>
                                    <p className="preFade">
                                      <span>
                                        <strong>
                                          Position &amp; Elevation
                                        </strong>
                                      </span>
                                    </p>
                                    <p className="preFade">
                                      As the name suggests, clicking "Position
                                      &amp; Elevation" will provide a popup
                                      window with positional information,
                                      including:
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="preFade">Coordinates</p>
                                      </li>
                                      <li>
                                        <p className="preFade">Elevation</p>
                                      </li>
                                      <li>
                                        <p className="preFade">Slope Angle</p>
                                      </li>
                                      <li>
                                        <p className="preFade">Slope Aspect</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-4 span-4">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <img
                                          className="loaded"
                                          src="./public/images/caltopo/Caltopo-interface-measure-menu.webp"
                                        />
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p className="preFade">
                                  <a href="https://forecast.weather.gov/MapClick.php?lat=34.19605&amp;lon=-117.31178#.YQmvuY5KhPY">
                                    <span>
                                      <strong>NOAA Forecast</strong>
                                    </span>
                                  </a>
                                </p>
                                <p className="preFade">
                                  Clicking "NOAA Forecast" will open a separate
                                  web browser window with a weather forecast
                                  specific to the exact location selected. NOAA
                                  (weather.gov) point forecasts provide the most
                                  reliable weather forecasts for any given area.
                                </p>
                                <p className="preFade">
                                  <span>
                                    <strong>Distance</strong>
                                  </span>
                                </p>
                                <p className="preFade">
                                  CalTopo's Distance tool displays the length of
                                  a line drawn on the map.
                                  <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628097951063_36289">
                                    How to do this
                                  </a>
                                  is described in detail below.
                                </p>
                                <p className="preFade">
                                  <span>
                                    <strong>Bearing</strong>
                                  </span>
                                </p>
                                <p className="preFade">
                                  CalTopo's Bearing tool provides you with a
                                  compass bearing between two points selected on
                                  the map. This tool is handy if you plan to
                                  travel off-trail along your route.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block image-block sqs-block-image sqs-col-6 span-6 float float-left sqs-text-ready">
                            <div className="sqs-block-content">
                              <div className="image-block-ou-animation-site-default individual-text-animation-site-default">
                                <figure className="sqs-block-image-figure intrinsic">
                                  <div className="image-block-wrapper preSlide">
                                    <img src="./public/images/caltopo/Caltopo-interface-settings-menu.webp" />
                                  </div>
                                  <figcaption className="image-caption-wrapper">
                                    <div className="image-caption">
                                      <p className="sqsrte-small preFade">
                                        The window below the map displays the
                                        profile of the line drawn on the map.
                                        The black circle on the line corresponds
                                        to the position on the profile where the
                                        mouse is hovering.
                                      </p>
                                    </div>
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p className="preFade">
                                  <span>
                                    <strong>Profile</strong>
                                  </span>
                                </p>
                                <p className="preFade">
                                  CalTopo's Profile tool is similar to the
                                  Distance tool but offers more information
                                  about the line drawn, including:
                                </p>
                                <ul>
                                  <li>
                                    <p className="preFade">
                                      A visual representation of the elevation
                                      profile of the line drawn. You can hover
                                      over a position on the profile to see its
                                      corresponding location on the map.
                                    </p>
                                  </li>
                                  <li>
                                    <p className="preFade">
                                      A range indicating the highest and lowest
                                      point of the route.
                                    </p>
                                  </li>
                                  <li>
                                    <p className="preFade">
                                      Total elevation gained and lost.
                                    </p>
                                  </li>
                                </ul>
                                <p className="preFade">
                                  Click "expand" to open a more detailed view of
                                  your profile, as pictured below, and the
                                  option to save the profile as an image or PDF.
                                </p>
                                <p className="preFade"></p>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                            <div className="sqs-block-content">
                              <div className="image-block-l-animation-site-default individual-text-animation-site-default">
                                <figure className="sqs-block-image-figure intrinsic">
                                  <div className="image-block-wrapper preSlide">
                                    <div className="image-block-wrapper preSlide">
                                      <img src="./public/images/caltopo/Caltopo-interface-measure-profile.webp" />
                                    </div>
                                  </div>
                                  <figcaption className="image-caption-wrapper">
                                    <div className="image-caption">
                                      <p className="sqsrte-small preFade">
                                        Note the colored bars beneath the
                                        profile that indicate the following at
                                        any given point on your profile: slope
                                        angle, land cover and tree cover.
                                      </p>
                                    </div>
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="col sqs-col-5 span-5">
                            <figure className="sqs-block-image-figure intrinsic">
                              <div className="image-block-wrapper preSlide">
                                <div className="image-block-wrapper preSlide">
                                  <img src="./public/images/caltopo/Caltopo-interface-profile.webp" />
                                </div>
                              </div>
                            </figure>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p className="sqsrte-large preFade">
                                  <em>Take a brief moment to try the</em>
                                  <strong>
                                    <em>NOAA Forecast</em>
                                  </strong>
                                  <em>and</em>
                                  <strong>
                                    <em>Profile</em>
                                  </strong>
                                  <em>tools before continuing on.</em>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-5 span-5">
                              <figure className="sqs-block-image-figure intrinsic">
                                <div className="image-block-wrapper preSlide">
                                  <div className="image-block-wrapper preSlide">
                                    <img src="./public/images/caltopo/Caltopo-interface-map-with-objects.webp" />
                                  </div>
                                </div>
                              </figure>
                            </div>
                            <div className="col sqs-col-7 span-7">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      CalTopo’s Add Object Tool
                                    </h4>
                                    <p className="preFade">
                                      Clicking “+Add” on the left creates the
                                      collapsible dropdown menu pictured. This
                                      menu offers many of the same options as
                                      the Measure tool, with additional features
                                      to customize your map. Most importantly,
                                      using the +Add tool allows you to save
                                      your work. You can use these tools to
                                      create detailed maps like the one pictured
                                      below.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img src="./How to Use CalTopo — Origin Expeditions_files/Caltopo-interface-map-with-objects.jpg" />
                                        </div>
                                      </div>
                                      <figcaption className="image-caption-wrapper">
                                        <div className="image-caption">
                                          <p className="sqsrte-small preFade">
                                            A CalTopo Map with objects added to
                                            indicate routes and campsites
                                            day-by-day. Each line can be
                                            selected to observe route
                                            information, including a profile.
                                          </p>
                                        </div>
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h3 className="preSlide">
                                  How to Draw a Route With CalTopo
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      To draw a route, use the “Measure:
                                      Distance/Profile” tool or the '“+Add:
                                      Line” tool. You’ll see a number of shaded
                                      yellow lines appear that follow roads and
                                      trails as seen in the picture. You can
                                      click on one of these lines to “snap” your
                                      route to it.
                                    </p>
                                    <p className="preFade">
                                      In the upper left corner of your display,
                                      you’ll see a “Snap To” dropdown menu. This
                                      allows you to move the pre-established
                                      yellow lines to different types of
                                      features. For example, hover your mouse
                                      over the image to see how selecting
                                      “Hydro” allows you to snap your route to
                                      waterways.
                                    </p>
                                    <p className="preFade">
                                      Click anywhere to add length to your
                                      route, and press “Esc” to undo an action.
                                      Double click to finish your route.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block code-block sqs-block-code">
                                <div className="sqs-block-content">
                                  <div className="image-swap-container">
                                    <img
                                      className="img-default"
                                      src="./public/images/caltopo/caltopo-snap-osm.png"
                                    />
                                    <img
                                      className="img-hover"
                                      src="./public/images/caltopo/caltopo-snap-hydro.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h3 className="preSlide">
                                  How to Use CalTopo’s Map Layers Feature to
                                  Change the Appearance of Your Map
                                </h3>
                                <p className="preFade">
                                  Using only the tools above, you can gather a
                                  wealth of information for planning your next
                                  adventure and begin to create detailed maps
                                  for future reference. The next step in
                                  learning proficiency with CalTopo is building
                                  an understanding of its Map Layers feature.
                                </p>
                                <p className="preFade">
                                  In short, Caltopo’s Map Layer feature allows
                                  you to change the appearance of your map. This
                                  allows you to gather a more well-rounded
                                  understanding of terrain and make your final
                                  product more user friendly if you chose to
                                  <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628091741835_96279">
                                    print your map or export it as a file
                                  </a>
                                  .
                                </p>
                                <h4 className="preFade">
                                  <strong>CalTopo Base Layers</strong>
                                </h4>
                                <p className="preFade">
                                  The Caltopo Base Layer determines the
                                  appearance of the map on your screen. You’ll
                                  notice that there’s a dropdown menu with
                                  several map layer options. Below we’ve
                                  outlined some of the most commonly used
                                  layers.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img src="./public/images/caltopo/Caltopo-mapbuilder-overlay.webp" />
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      <strong>MapBuilder Topo</strong>
                                    </p>
                                    <p className="preFade">
                                      CalTopo’s MapBuilder Topo layer is a
                                      simplified version of your standard USGS
                                      topographic map (link). This is an
                                      excellent place to start. It contains
                                      imagery for just about any location in a
                                      consolidated, easy-to-understand format.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img src="./public/images/caltopo/Caltopo-scanned-topos-overlay.webp" />
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      <strong>Scanned Topos</strong>
                                    </p>
                                    <p className="preFade">
                                      CalTopo’s Scanned Topos layer will display
                                      a topographic map overlay identical to
                                      that seen on a standard USGS topographic
                                      map. This layer offers more detail than
                                      what is shown on the MapBuilder Topo layer
                                      and is recommended for more detailed trip
                                      planning.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img src="./public/images/caltopo/Caltopo-forest-service-overlay.webp" />
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      <strong>Forest Service</strong>
                                    </p>
                                    <p className="preFade">
                                      CalTopo’s Forest Service layer, when
                                      available, offers information formatted by
                                      the United States Forest Service (USFS).
                                      Generally, it resembles the Scanned Topo
                                      layer but can include or exclude
                                      information depending on the location. For
                                      this reason, it can be helpful to examine
                                      both layers when considering travel in
                                      undeveloped areas.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-hidden design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img src="./public/images/caltopo/Caltopo-shaded-relief-overlay.webp" />
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      <strong>Shaded Relief</strong>
                                    </p>
                                    <p className="preFade">
                                      CalTopo’s Shaded Relief layer displays a
                                      black and white image of an area with
                                      slope shading. The shading adds a
                                      “3D-like” appearance to the terrain,
                                      offering an easily understood
                                      visualization of a particular area. This
                                      layer is especially useful when
                                      <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628027679941_85937">
                                        stacked with other layers
                                      </a>
                                      .
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p className="preFade">
                                  In addition to the base layers displayed
                                  above, several others are offered in the free
                                  version of CalTopo with many more in paid
                                  plans. Notably,
                                  <strong>Global Imagery</strong>
                                  is a layer that provides a map display that is
                                  essentially the equivalent of Google Maps’
                                  satellite view. Also of note is
                                  <strong>OpenSteetMap,</strong>a layer that
                                  offers a more detailed version of Google Maps’
                                  standard street map view.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p className="sqsrte-large preFade">
                                  <em>
                                    Take a moment to select each of the layers
                                    to examine their features.
                                  </em>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h4 className="preFade">
                                  <strong>
                                    Stacking Base Layers With CalTopo
                                  </strong>
                                </h4>
                                <p className="preFade">
                                  Beneath the option to select a base layer, you
                                  will see another option: + Stack Base Layer.
                                  In essence, this allows you to combine two map
                                  layers. This feature is handy when it comes to
                                  building a well-rounded understanding of the
                                  terrain you’re looking at.
                                </p>
                                <p className="preFade">
                                  The example pictured demonstrates this feature
                                  well. Hover your mouse over the image to see
                                  what a Scanned Topo layer of Mount Hood looks
                                  like when stacking the Shaded Relief layer
                                  with 60% opacity.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block code-block sqs-block-code">
                            <div className="sqs-block-content">
                              <div className="image-swap-container">
                                <img
                                  className="img-default"
                                  src="./public/images/caltopo/Caltopo-Mount-hood-stacked-layers.png"
                                />
                                <img
                                  className="img-hover"
                                  src="./public/images/caltopo/Caltopo-Mount-hood-stacked-layers2.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h4 className="preFade">
                                  <strong>Caltopo Map Overlays</strong>
                                </h4>
                                <p className="preFade">
                                  In addition to Base Layers, CalTopo’s Map
                                  Layers menu offers a list of options you can
                                  select to add additional features to your map.
                                  You can see the three we find most useful
                                  below by hovering over the Scanned Topo map of
                                  Black Canyon of the Gunnison with your mouse.
                                  Be sure to try each in your own interface to
                                  see for yourself what they offer.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="image-swap-container">
                              <img
                                className="img-default"
                                src="./public/images/caltopo/Caltopo-overlay-base.png"
                              />
                              <img
                                className="img-hover"
                                src="./public/images/caltopo/Caltopo-overlay-mapbuilder.png"
                              />
                            </div>

                            <div className="col sqs-col-5 span-5">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      <strong>MapBuilder Overlay</strong>
                                    </p>
                                    <p className="preFade">
                                      Select this overlay to add the features of
                                      CalTopo’s MapBuilder Topo layer to any
                                      other map layer. This overlay is useful if
                                      you want to, for example, add the vividly
                                      outlined information of the MapBuilder
                                      Topo layer to the comprehensive detail of
                                      a Scanned Topo map.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="image-swap-container">
                              <img
                                className="img-default"
                                src="./public/images/caltopo/Caltopo-overlay-base.png"
                              />
                              <img
                                className="img-hover"
                                src="./public/images/caltopo/caltopo-overlay-slopeangle.png"
                              />
                            </div>
                            <div className="col sqs-col-5 span-5">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      <strong>Slope Angle Shading</strong>
                                    </p>
                                    <p className="preFade">
                                      As the name suggests, this overlay adds
                                      color shading to slopes depending on their
                                      angle. This feature is handy for planning
                                      backcountry skiing routes as it
                                      essentially highlights any pitch
                                      susceptible to avalanches.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-7 span-7">
                              <div className="sqs-block code-block sqs-block-code">
                                <div className="sqs-block-content">
                                  <div className="image-swap-container">
                                    <img
                                      className="img-default"
                                      src="./public/images/caltopo/Caltopo-overlay-base.png"
                                    />
                                    <img
                                      className="img-hover"
                                      src="./public/images/caltopo/caltopo-overlay-public-lands.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-5 span-5">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      <strong>Public Lands</strong>
                                    </p>
                                    <p className="preFade">
                                      This layer shades your map depending on
                                      which land management agency governs a
                                      particular area. This layer is beneficial
                                      in determining the terms by which you can
                                      access and use specific locations.
                                    </p>
                                    <p className="preFade">
                                      For example, suppose you wanted to know
                                      where you could operate an aerial drone
                                      near Black Canyon of the Gunnison. In that
                                      case, you could use this map to determine
                                      the National Park Service boundary (shaded
                                      in purple) where aerial drones are
                                      prohibited.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h3 className="preSlide">
                                  How to Export and Print Your Map With CalTopo
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block image-block sqs-block-image sqs-col-6 span-6 float float-right sqs-text-ready">
                            <figure className="sqs-block-image-figure intrinsic">
                              <div className="image-block-wrapper preSlide">
                                <div className="sqs-image-shape-container-element has-aspect-ratio">
                                  <img src="./public/images/caltopo/caltopo-print-export.webp" />
                                </div>
                              </div>
                            </figure>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p className="preFade">
                                  For the last part of this guide, we will
                                  introduce CalTopo's print and export tools.
                                </p>
                                <p className="preFade">
                                  You'll find the print icon 🖨️ just above the
                                  measure icon 📏 on the left side of your
                                  interface. The export option is located in the
                                  map objects window, which you will need to
                                  open if you collapsed it earlier.
                                </p>
                                <p className="preFade"></p>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img src="./public/images/caltopo/caltopo-print.webp" />
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <strong>Print</strong>
                                    </h4>
                                    <p className="preFade">
                                      When you click on the print icon, CalTopo
                                      will open a new window for a printing
                                      page. Your access to features is somewhat
                                      limited with the free account, and for the
                                      sake of learning, we'll only cover a few.
                                    </p>
                                    <p className="preFade">
                                      <strong>Format</strong>
                                    </p>
                                    <p className="preFade">
                                      You have the option to create a JPEG
                                      image, PDF or print a paper map. Each
                                      image generated comes with a scale and
                                      declination indicator and has its own
                                      advantages:
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="preFade">
                                          JPEG is a standard image that can
                                          easily be copied into a trip itinerary
                                          or shared via text message.
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          PDF creates a shareable link to your
                                          map. The free version only allows it
                                          to be shared for 1 week.
                                        </p>
                                      </li>
                                      <li>
                                        <p className="preFade">
                                          Order a Paper Map opens a window to
                                          <a href="https://mountyn.co/">
                                            The Mountyn Co's
                                          </a>
                                          website. There you can see a digital
                                          copy of your map and choose to print
                                          it on traditional or synthetic paper.
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p className="preFade">
                                  <strong>Grid Lines</strong>
                                </p>
                                <p className="preFade">
                                  This allows you to add a UTM grid to your
                                  printed map. The grid is visible when you
                                  generate your map.
                                </p>
                                <p className="preFade">
                                  <strong>Pages</strong>
                                </p>
                                <p className="preFade">
                                  Choose between landscape and portrait. If
                                  you're generating a PDF, it allows you to
                                  create several pages at once.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row">
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <h4 className="preFade">
                                      <strong>Export</strong>
                                    </h4>
                                    <p className="preFade">
                                      Exporting your map as a file allows your
                                      route and other features to be imported to
                                      your handheld GPS or smartphone
                                      applications like GAIA GPS and Avenza
                                      Maps. You can also import KML files on
                                      Google Earth. This is an excellent way to
                                      visualize your route before heading out
                                      into the backcountry and create
                                      outstanding graphics for a trip itinerary.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <figure className="sqs-block-image-figure intrinsic">
                                  <div className="image-block-wrapper preSlide">
                                    <div className="sqs-image-shape-container-element has-aspect-ratio">
                                      <img src="./public/images/caltopo/google-earth-import-sample.webp" />
                                    </div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                            <div className="col sqs-col-6 span-6">
                              <div className="sqs-block image-block sqs-block-image sqs-text-ready">
                                <div className="sqs-block-content">
                                  <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                                    <figure className="sqs-block-image-figure intrinsic">
                                      <div className="image-block-wrapper preSlide">
                                        <div className="sqs-image-shape-container-element has-aspect-ratio">
                                          <img src="./public/images/caltopo/caltopo-export.webp" />
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                <div className="sqs-block-content">
                                  <div className="sqs-html-content">
                                    <p className="preFade">
                                      For the export option to be available,
                                      you'll need to create map objects using
                                      the
                                      <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628024541841_52185">
                                        "+Add" tool
                                      </a>
                                      mentioned above. Once you've made objects
                                      and click export, a window like the one
                                      pictured above will appear.
                                    </p>
                                    <p className="preFade">
                                      Simply select which features you would
                                      like to export in the file and click
                                      export to download it to your computer.
                                      From there, you can import your file to
                                      your handheld or other applications, a
                                      topic that we'll cover in a future guide.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                            <div className="sqs-block-content">
                              <hr />
                            </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html">
                            <div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h3 className="preSlide">
                                  Have fun out there!
                                </h3>
                                <p className="preFade">
                                  CalTopo's desktop version has the most
                                  streamlined and user-friendly mapping
                                  interface available for free anywhere on the
                                  internet. It is one of the most valuable tools
                                  for planning trips and allows you to leave
                                  folks at home with a detailed plan. While
                                  picking a hike from a menu from an application
                                  AllTrails can be easy, there is a novelty to
                                  using CalTopo's tools to plan a trek of your
                                  own.
                                </p>
                                <p className="preFade">
                                  Take the time to practice what you've learned,
                                  build a route and get out there and hike! Be
                                  sure to share this page with others you
                                  believe would value the information, and
                                  subscribe below to stay up to date when we
                                  release new guides.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row sqs-row"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CalTopo;

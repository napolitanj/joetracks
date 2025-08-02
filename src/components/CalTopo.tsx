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
    <div className="guide">
      <main className="container">
        <article className="sections">
          <div className="hero caltopo-bg">
            <div className="hero-text">
              <h1 className={animate ? "animate" : ""}>How to Use CalTopo</h1>
            </div>
          </div>
          <div className="content-wrapper">
            <section className="dis-row g-2">
              <div className="section-half">
                <h3 className="preSlide slideIn">Why is CalTopo useful?</h3>
                <p className=" fadeIn">
                  Learning to use CalTopo is among the most valuable skills
                  available for planning your next adventure. Mastering the
                  basics of Caltopo’s interface not only allows you to embark on
                  a journey well-informed but also allows you to leave folks
                  back home with a comprehensive plan if you go missing. Thus,
                  learning CalTopo will enable you to better plan and executes
                  excursions while vastly increasing your margin of safety.
                </p>
                <p className=" fadeIn">
                  With dozens of valuable features, learning how to use CalTopo
                  can appear to be a daunting task. Fear not; we’ve taken the
                  time to consolidate its most valuable aspects into a quick and
                  easy guide. The information on this page will help you build
                  an understanding of CalTopo’s interface so you can get back to
                  planning your trip and head outside!
                </p>
                <p className=" fadeIn">
                  <em>
                    CalTopo's features are extensive. This guide covers what is
                    available to users with the free account and is essential to
                    use the software efficiently. This guide is best viewed on a
                    laptop or desktop.
                  </em>
                </p>
              </div>

              <figure className="section-half dis-col g-2 cnt">
                <img
                  className="loaded"
                  src="public/images/caltopo/caltopo.webp"
                />
                <figcaption className="image-caption-wrapper">
                  <div className="image-caption">
                    <p className="sqsrte-small fadeIn">
                      A screenshot of CalTopo’s interface with a user-designed
                      route and its corresponding elevation profile.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </section>
            <div className="section-divider"></div>
            <section className="dis-col">
              <div className="sqs-html">
                <h3 className="preSlide">Contents</h3>
              </div>
              <div className="dis-row g-2">
                <div className="section-half">
                  <h4>
                    <a href="#tour-caltopo-interface">
                      A Tour of CalTopo’s Interface
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <p>Scale</p>
                    </li>
                    <li>
                      <p>Position of Mouse on Map</p>
                    </li>
                    <li>
                      <p>Changing Units and Other Settings</p>
                    </li>
                    <li>
                      <p>CalTopo's Measure Tool</p>
                    </li>
                    <li>
                      <p>CalTopo's Add Object Tool</p>
                    </li>
                  </ul>
                  <h4>
                    <a href="#draw-a-route-caltopo">
                      How to Draw a Route With CalTopo
                    </a>
                  </h4>
                </div>
                <div className="section-half">
                  <h4>
                    <a href="#change-caltopo-appearance">
                      How to Use CalTopo’s Map Layers Feature to Change the
                      Appearance of Your Map
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <p>CalTopo Base Layers</p>
                    </li>
                    <li>
                      <p>Stacking Base Layers With CalTopo</p>
                    </li>
                    <li>
                      <p>Caltopo Map Overlays</p>
                    </li>
                  </ul>
                  <h4>
                    <a href="#export-caltopo-map">
                      How to Export and Print Topo Maps With CalTopo
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <p>Printable topo maps</p>
                    </li>
                    <li>
                      <p>Export</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <div className=" horizontalrule-block -horizontalrule">
              <div className="section-divider"></div>
            </div>
            <section id="tour-caltopo-interface" className="dis-col">
              <div className="cnt">
                <h3 className="preSlide">A Tour of CalTopo’s Interface</h3>
              </div>
              <div>
                <p>
                  Head over to {""}
                  <a href="http://www.caltopo.com/" target="_blank">
                    www.caltopo.com
                  </a>
                  {""} in a separate window where you’ll see CalTopo’s interface
                  open to its default appearance pictured below. If you have
                  created an account and used CalTopo before, it will open to
                  your last-used map position and settings.
                </p>
                <p>
                  We highly recommend that you sign up or link an account to
                  CalTopo as it allows you to save projects you create.
                </p>
                <p>
                  Hover over the image below with your mouse to identify several
                  key features of the interface that this guide will cover
                  first.
                </p>
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
            </section>
            <div className="vrt-spc"></div>
            <section>
              <div className="dis-row g-2">
                <div className="section-half">
                  <div>
                    <h4>
                      <strong>Scale</strong>
                    </h4>
                    <p>
                      As with a standard topographic map (future link), CalTopo
                      includes a scale that {""}
                      <strong>
                        indicates the ratio of distance to the corresponding
                        space on the map
                      </strong>
                      {""} pictured. You will notice that this scale changes as
                      you zoom in and out.
                    </p>
                  </div>
                  <div>
                    <h4>
                      <strong>Changing Units and Other Settings</strong>
                    </h4>
                    <p>
                      Before proceeding, {""}
                      <strong>click "Settings"</strong>
                      {""} directly above the positioning window. The menu
                      pictured provides options to customize the interface.
                    </p>
                    <p>
                      <em>
                        Ensure that your measurement units are as desired.
                      </em>
                      If you're accustomed to using U.S. units of measurement
                      (inches, feet, miles, etc.), select the dropdown menu next
                      to "units" and select "Imperial."
                    </p>
                    <p>
                      At the bottom of the menu, you will find the option
                      to change the position displayed in the window. You can
                      choose to display the location of where the map is
                      centered rather than on the mouse.
                    </p>
                    <p>There are additional options, including:</p>
                    <ul>
                      <li>
                        <p>
                          Placing a Universal Transverse Mercator (UTM) grid on
                          the map, similar to that seen a standard USGS
                          topographic map.
                        </p>
                      </li>
                      <li>
                        <p>
                          The option to update the URL when you move your map,
                          allowing you to create a shareable link to the exact
                          positioning of your map.
                        </p>
                      </li>
                      <li>
                        <p>
                          The option to change the coordinate units in the
                          positioning window.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-half cnt">
                  <h4>
                    <strong>Position of Mouse on Map</strong>
                  </h4>
                  <p>
                    As the title suggests, the small window in the upper right
                    corner {""}
                    <strong>displays positional information</strong>
                    {""} depending on the mouse's location on the map. This
                    information and the units displayed can be changed - how to
                    do so is discussed below.
                  </p>
                  <figure>
                    <img
                      className="loaded"
                      src="./public/images/caltopo/Caltopo-interface-settings-menu.webp"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <div className="vrt-spc"></div>
            <section className="dis-row g-2">
              <div className="sqs-html">
                <h4>
                  <strong>CalTopo's Measure Tool</strong>
                  {""} 📏
                </h4>
                <p>
                  CalTopo's Measure Tool offers a quick way to acquire a variety
                  of information with your map. Click the 📏 icon to see the
                  dropdown menu in the picture. It's important to note that
                  CalTopo's interface will not save this information for you. If
                  you wish to keep the information, use the {""}
                  <a href="#add-object">"+Add" tool</a>.
                </p>
                <p>
                  <em>
                    Take a moment to familiarize yourself with their functions,
                  </em>
                  the most important of which we explain below.
                </p>
                <p>
                  <span>
                    <strong>Position &amp; Elevation</strong>
                  </span>
                </p>
                <p>
                  As the name suggests, clicking "Position &amp; Elevation" will
                  provide a popup window with positional information, including:
                </p>
                <ul>
                  <li>
                    <p>Coordinates</p>
                  </li>
                  <li>
                    <p>Elevation</p>
                  </li>
                  <li>
                    <p>Slope Angle</p>
                  </li>
                  <li>
                    <p>Slope Aspect</p>
                  </li>
                </ul>
              </div>
              <figure>
                <img
                  className="loaded"
                  src="./public/images/caltopo/Caltopo-interface-measure-menu.webp"
                />
              </figure>
            </section>
            <div className="vrt-spc"></div>
            <section className="dis-col">
              <div className="sqs-html">
                <p>
                  <a
                    href="https://forecast.weather.gov/MapClick.php?lat=34.19605&amp;lon=-117.31178#.YQmvuY5KhPY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <strong>NOAA Forecast</strong>
                    </span>
                  </a>
                </p>
                <p>
                  Clicking "NOAA Forecast" will open a separate web browser
                  window with a weather forecast specific to the exact location
                  selected. NOAA (weather.gov) point forecasts provide the most
                  reliable weather forecasts for any given area.
                </p>
                <p>
                  <span>
                    <strong>Distance</strong>
                  </span>
                </p>
                <p>
                  CalTopo's Distance tool displays the length of a line drawn on
                  the map. {""}
                  <a
                    href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628097951063_36289"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How to do this
                  </a>
                  {""} is described in detail below.
                </p>
                <p>
                  <span>
                    <strong>Bearing</strong>
                  </span>
                </p>
                <p>
                  CalTopo's Bearing tool provides you with a compass bearing
                  between two points selected on the map. This tool is handy if
                  you plan to travel off-trail along your route.
                </p>
              </div>
            </section>
            <div className="vrt-spc"></div>
            <section className="dis-row g-2 cnt">
              <figure className="section-half">
                <div>
                  <img src="./public/images/caltopo/Caltopo-interface-measure-profile.webp" />
                </div>
                <figcaption className="image-caption-wrapper">
                  <div className="image-caption">
                    <p className="sqsrte-small">
                      The window below the map displays the profile of the line
                      drawn on the map. The black circle on the line corresponds
                      to the position on the profile where the mouse is
                      hovering.
                    </p>
                  </div>
                </figcaption>
              </figure>
              <div className="section-half">
                <p>
                  <span>
                    <strong>Profile</strong>
                  </span>
                </p>
                <p>
                  CalTopo's Profile tool is similar to the Distance tool but
                  offers more information about the line drawn, including:
                </p>
                <ul>
                  <li>
                    <p>
                      A visual representation of the elevation profile of the
                      line drawn. You can hover over a position on the profile
                      to see its corresponding location on the map.
                    </p>
                  </li>
                  <li>
                    <p>
                      A range indicating the highest and lowest point of the
                      route.
                    </p>
                  </li>
                  <li>
                    <p>Total elevation gained and lost.</p>
                  </li>
                </ul>
                <p>
                  Click "expand" to open a more detailed view of your profile,
                  as pictured below, and the option to save the profile as an
                  image or PDF.
                </p>
                <p></p>
              </div>
            </section>
            <div className="vrt-spc"></div>
            <section>
              <div className=" image-block -image sqs-text-ready">
                <div>
                  <div className="image-block-l-animation-site-default individual-text-animation-site-default">
                    <figure>
                      <div>
                        <div>
                          <img src="./public/images/caltopo/Caltopo-interface-profile.webp" />
                        </div>
                      </div>
                      <figcaption className="image-caption-wrapper">
                        <div className="image-caption">
                          <p className="sqsrte-small">
                            Note the colored bars beneath the profile that
                            indicate the following at any given point on your
                            profile: slope angle, land cover and tree cover.
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
            <div className="section-divider"></div>
            <div className="vrt-spc"></div>
            <section className="big-txt cnt">
              <p>
                <em>Take a brief moment to try the {""}</em>
                <strong>
                  <em>NOAA Forecast</em>
                </strong>
                <em>
                  {""} and {""}
                </em>
                <strong>
                  <em>Profile {""}</em>
                </strong>
                <em>tools before continuing on.</em>
              </p>
            </section>
            <div className="section-divider"></div>
            <div className="vrt-spc"></div>
            <section className="dis-row g-2 cnt">
              <figure className="section-half">
                <img src="./public/images/caltopo/Caltopo-interface-add-object.webp" />
              </figure>
              <div id="add-object" className="section-half">
                <div>
                  <h4>CalTopo’s Add Object Tool</h4>
                  <p>
                    Clicking “+Add” on the left creates the collapsible dropdown
                    menu pictured. This menu offers many of the same options as
                    the Measure tool, with additional features to customize your
                    map. Most importantly, using the +Add tool allows you to
                    save your work. You can use these tools to create detailed
                    maps like the one pictured below.
                  </p>
                </div>
                <figure>
                  <div>
                    <div className="sqs-image-shape-container-element has-aspect-ratio">
                      <img src="./public/images/caltopo/Caltopo-interface-map-with-objects.webp" />
                    </div>
                  </div>
                  <figcaption className="image-caption-wrapper">
                    <div className="image-caption">
                      <p className="sqsrte-small">
                        A CalTopo Map with objects added to indicate routes and
                        campsites day-by-day. Each line can be selected to
                        observe route information, including a profile.
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
            <div className="section-divider"></div>
            <section id="draw-a-route-caltopo" className="dis-col g-2">
              <div>
                <h3 className="preSlide">How to Draw a Route With CalTopo</h3>
              </div>
              <div className="dis-row g-2">
                <div className="section-half">
                  <p>
                    To draw a route, use the “Measure: Distance/Profile” tool or
                    the '“+Add: Line” tool. You’ll see a number of shaded yellow
                    lines appear that follow roads and trails as seen in the
                    picture. You can click on one of these lines to “snap” your
                    route to it.
                  </p>
                  <p>
                    In the upper left corner of your display, you’ll see a “Snap
                    To” dropdown menu. This allows you to move the
                    pre-established yellow lines to different types of features.
                    For example, hover your mouse over the image to see how
                    selecting “Hydro” allows you to snap your route to
                    waterways.
                  </p>
                  <p>
                    Click anywhere to add length to your route, and press “Esc”
                    to undo an action. Double click to finish your route.
                  </p>
                </div>
                <div className="section-half cnt">
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
            </section>
            <div className="section-divider"></div>
            <section id="change-caltopo-appearance" className="dis-col g-2">
              <div className="sqs-html">
                <h3 className="preSlide">
                  How to Use CalTopo’s Map Layers Feature to Change the
                  Appearance of Your Map
                </h3>
                <p>
                  Using only the tools above, you can gather a wealth of
                  information for planning your next adventure and begin to
                  create detailed maps for future reference. The next step in
                  learning proficiency with CalTopo is building an understanding
                  of its Map Layers feature.
                </p>
                <p>
                  In short, Caltopo’s Map Layer feature allows you to change the
                  appearance of your map. This allows you to gather a more
                  well-rounded understanding of terrain and make your final
                  product more user friendly if you chose to {""}
                  <a href="#export-caltopo-map">
                    print your map or export it as a file
                  </a>
                  .
                </p>
                <div className="cnt">
                  <h4>
                    <strong>CalTopo Base Layers</strong>
                  </h4>
                </div>
                <p>
                  The Caltopo Base Layer determines the appearance of the map on
                  your screen. You’ll notice that there’s a dropdown menu with
                  several map layer options. Below we’ve outlined some of the
                  most commonly used layers.
                </p>
              </div>
              <div className="dis-row g-2">
                <div>
                  <figure>
                    <img src="./public/images/caltopo/Caltopo-mapbuilder-overlay.webp" />
                  </figure>

                  <p className="cnt">
                    <strong>MapBuilder Topo</strong>
                  </p>
                  <p>
                    CalTopo’s MapBuilder Topo layer is a simplified version of
                    your standard USGS topographic map (link). This is an
                    excellent place to start. It contains imagery for just about
                    any location in a consolidated, easy-to-understand format.
                  </p>
                </div>

                <div>
                  <figure>
                    <img src="./public/images/caltopo/Caltopo-scanned-topos-overlay.webp" />
                  </figure>

                  <div>
                    <p className="cnt">
                      <strong>Scanned Topos</strong>
                    </p>
                    <p>
                      CalTopo’s Scanned Topos layer will display a topographic
                      map overlay identical to that seen on a standard USGS
                      topographic map. This layer offers more detail than what
                      is shown on the MapBuilder Topo layer and is recommended
                      for more detailed trip planning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dis-row g-2">
                <div>
                  <figure>
                    <img src="./public/images/caltopo/Caltopo-forest-service-overlay.webp" />
                  </figure>

                  <div>
                    <p className="cnt">
                      <strong>Forest Service</strong>
                    </p>
                    <p>
                      CalTopo’s Forest Service layer, when available, offers
                      information formatted by the United States Forest Service
                      (USFS). Generally, it resembles the Scanned Topo layer but
                      can include or exclude information depending on the
                      location. For this reason, it can be helpful to examine
                      both layers when considering travel in undeveloped areas.
                    </p>
                  </div>
                </div>
                <div>
                  <figure>
                    <div>
                      <div className="sqs-image-shape-container-element has-aspect-ratio">
                        <img src="./public/images/caltopo/Caltopo-shaded-relief-overlay.webp" />
                      </div>
                    </div>
                  </figure>

                  <div>
                    <p className="cnt">
                      <strong>Shaded Relief</strong>
                    </p>
                    <p>
                      CalTopo’s Shaded Relief layer displays a black and white
                      image of an area with slope shading. The shading adds a
                      “3D-like” appearance to the terrain, offering an easily
                      understood visualization of a particular area. This layer
                      is especially useful when {""}
                      <a href="#stacking-layers">stacked with other layers</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  In addition to the base layers displayed above, several others
                  are offered in the free version of CalTopo with many more in
                  paid plans. Notably, {""}
                  <strong>Global Imagery</strong>
                  {""} is a layer that provides a map display that is
                  essentially the equivalent of Google Maps’ satellite view.
                  Also of note is {""}
                  <strong>OpenSteetMap,</strong>
                  {""} a layer that offers a more detailed version of Google
                  Maps’ standard street map view.
                </p>
              </div>
              <div className=" horizontalrule-block -horizontalrule">
                <div>
                  <hr />
                </div>
              </div>
            </section>
            <div className="section-divider"></div>
            <section>
              <div className="vrt-spc"></div>
              <p className="big-txt cnt">
                <em>
                  Take a moment to select each of the layers to examine their
                  features.
                </em>
              </p>
            </section>
            <div className="section-divider"></div>
            <div className=" horizontalrule-block -horizontalrule">
              <div>
                <hr />
              </div>
            </div>
            <section id="stacking-layers" className="dis-col g-2">
              <div>
                <h4 className="cnt">
                  <strong>Stacking Base Layers With CalTopo</strong>
                </h4>
                <p>
                  Beneath the option to select a base layer, you will see
                  another option: + Stack Base Layer. In essence, this allows
                  you to combine two map layers. This feature is handy when it
                  comes to building a well-rounded understanding of the terrain
                  you’re looking at.
                </p>
                <p>
                  The example pictured demonstrates this feature well. Hover
                  your mouse over the image to see what a Scanned Topo layer of
                  Mount Hood looks like when stacking the Shaded Relief layer
                  with 60% opacity.
                </p>
              </div>

              <div className=" code-block -code">
                <img
                  className="img-default"
                  src="./public/images/caltopo/Caltopo-Mount-hood-stacked-layers.png"
                />
                <img
                  className="img-hover"
                  src="./public/images/caltopo/Caltopo-Mount-hood-stacked-layers2.png"
                />
              </div>
            </section>
            <section className="dis-col g-2">
              <div>
                <h4 className="cnt">
                  <strong>Caltopo Map Overlays</strong>
                </h4>
                <p>
                  In addition to Base Layers, CalTopo’s Map Layers menu offers a
                  list of options you can select to add additional features to
                  your map. You can see the three we find most useful below by
                  hovering over the Scanned Topo map of Black Canyon of the
                  Gunnison with your mouse. Be sure to try each in your own
                  interface to see for yourself what they offer.
                </p>
              </div>
              <div className="dis-row g-2 cnt">
                <div className="section-half image-swap-container">
                  <img
                    className="img-default"
                    src="./public/images/caltopo/Caltopo-overlay-base.png"
                  />
                  <img
                    className="img-hover"
                    src="./public/images/caltopo/Caltopo-overlay-mapbuilder.png"
                  />
                </div>
                <div className="section-half">
                  <p>
                    <strong>MapBuilder Overlay</strong>
                  </p>
                  <p>
                    Select this overlay to add the features of CalTopo’s
                    MapBuilder Topo layer to any other map layer. This overlay
                    is useful if you want to, for example, add the vividly
                    outlined information of the MapBuilder Topo layer to the
                    comprehensive detail of a Scanned Topo map.
                  </p>
                </div>
              </div>
              <div className="dis-row g-2 cnt">
                <div className="section-half image-swap-container">
                  <img
                    className="img-default"
                    src="./public/images/caltopo/Caltopo-overlay-base.png"
                  />
                  <img
                    className="img-hover"
                    src="./public/images/caltopo/caltopo-overlay-slopeangle.png"
                  />
                </div>
                <div className="section-half">
                  <p>
                    <strong>Slope Angle Shading</strong>
                  </p>
                  <p>
                    As the name suggests, this overlay adds color shading to
                    slopes depending on their angle. This feature is handy for
                    planning backcountry skiing routes as it essentially
                    highlights any pitch susceptible to avalanches.
                  </p>
                </div>
              </div>
              <div className="dis-row g-2 cnt">
                <div className="section-half image-swap-container">
                  <img
                    className="img-default"
                    src="./public/images/caltopo/Caltopo-overlay-base.png"
                  />
                  <img
                    className="img-hover"
                    src="./public/images/caltopo/caltopo-overlay-public-lands.png"
                  />
                </div>

                <div className="section-half">
                  <p>
                    <strong>Public Lands</strong>
                  </p>
                  <p>
                    This layer shades your map depending on which land
                    management agency governs a particular area. This layer is
                    beneficial in determining the terms by which you can access
                    and use specific locations.
                  </p>
                  <p>
                    For example, suppose you wanted to know where you could
                    operate an aerial drone near Black Canyon of the Gunnison.
                    In that case, you could use this map to determine the
                    National Park Service boundary (shaded in purple) where
                    aerial drones are prohibited.
                  </p>
                </div>
              </div>
            </section>
            <div className="section-divider"></div>
            <section id="export-caltopo-map" className="dis-col g-2">
              <div>
                <h3 className="preSlide">
                  How to Export and Print Your Map With CalTopo
                </h3>
              </div>

              <div className="dis-row g-2">
                <div className="section-half">
                  <p>
                    For the last part of this guide, we will introduce CalTopo's
                    print and export tools.
                  </p>
                  <p>
                    You'll find the print icon 🖨️ just above the measure icon 📏
                    on the left side of your interface. The export option is
                    located in the map objects window, which you will need to
                    open if you collapsed it earlier.
                  </p>
                  <p></p>
                </div>
                <figure className="section-half">
                  <img src="./public/images/caltopo/caltopo-print-export.webp" />
                </figure>
              </div>
              <div className="dis-row g-2 cnt">
                <div className="section-half">
                  <figure>
                    <img src="./public/images/caltopo/caltopo-print.webp" />
                  </figure>
                </div>
                <div className="section-half">
                  <h4>
                    <strong>Print</strong>
                  </h4>
                  <p>
                    When you click on the print icon, CalTopo will open a new
                    window for a printing page. Your access to features is
                    somewhat limited with the free account, and for the sake of
                    learning, we'll only cover a few.
                  </p>
                  <p>
                    <strong>Format</strong>
                  </p>
                  <p>
                    You have the option to create a JPEG image, PDF or print a
                    paper map. Each image generated comes with a scale and
                    declination indicator and has its own advantages:
                  </p>
                  <ul>
                    <li>
                      <p>
                        JPEG is a standard image that can easily be copied into
                        a trip itinerary or shared via text message.
                      </p>
                    </li>
                    <li>
                      <p>
                        PDF creates a shareable link to your map. The free
                        version only allows it to be shared for 1 week.
                      </p>
                    </li>
                    <li>
                      <p>
                        Order a Paper Map opens a window to {""}
                        <a href="https://mountyn.co/">The Mountyn Co's</a>
                        {""} website. There you can see a digital copy of your
                        map and choose to print it on traditional or synthetic
                        paper.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p>
                  <strong>Grid Lines</strong>
                </p>
                <p>
                  This allows you to add a UTM grid to your printed map. The
                  grid is visible when you generate your map.
                </p>
                <p>
                  <strong>Pages</strong>
                </p>
                <p>
                  Choose between landscape and portrait. If you're generating a
                  PDF, it allows you to create several pages at once.
                </p>
              </div>
              <div className="dis-row g-2">
                <div className="dis-col g-2">
                  <div>
                    <h4>
                      <strong>Export</strong>
                    </h4>
                    <p>
                      Exporting your map as a file allows your route and other
                      features to be imported to your handheld GPS or smartphone
                      applications like GAIA GPS and Avenza Maps. You can also
                      import KML files on Google Earth. This is an excellent way
                      to visualize your route before heading out into the
                      backcountry and create outstanding graphics for a trip
                      itinerary.
                    </p>
                  </div>
                  <figure>
                    <img src="./public/images/caltopo/google-earth-import-sample.webp" />
                  </figure>
                </div>
                <div>
                  <div className=" image-block -image sqs-text-ready">
                    <div>
                      <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                        <figure>
                          <div>
                            <div className="sqs-image-shape-container-element has-aspect-ratio">
                              <img src="./public/images/caltopo/caltopo-export.webp" />
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="sqs-html">
                        <p>
                          For the export option to be available, you'll need to
                          create map objects using the {""}
                          <a href="https://www.originexpeditions.org/caltopo-guide#block-yui_3_17_2_1_1628024541841_52185">
                            "+Add" tool
                          </a>
                          {""} mentioned above. Once you've made objects and
                          click export, a window like the one pictured above
                          will appear.
                        </p>
                        <p>
                          Simply select which features you would like to export
                          in the file and click export to download it to your
                          computer. From there, you can import your file to your
                          handheld or other applications, a topic that we'll
                          cover in a future guide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="section-divider"></div>
            <section>
              <div>
                <div className="sqs-html">
                  <h3 className="preSlide">Have fun out there!</h3>
                  <p>
                    CalTopo's desktop version has the most streamlined and
                    user-friendly mapping interface available for free anywhere
                    on the internet. It is one of the most valuable tools for
                    planning trips and allows you to leave folks at home with a
                    detailed plan. While picking a hike from a menu from an
                    application AllTrails can be easy, there is a novelty to
                    using CalTopo's tools to plan a trek of your own.
                  </p>
                  <p>
                    Take the time to practice what you've learned, build a route
                    and get out there and hike! Be sure to share this page with
                    others you believe would value the information, and
                    subscribe below to stay up to date when we release new
                    guides.
                  </p>
                </div>
              </div>
            </section>
            <div className="vrt-spc"></div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default CalTopo;

import { useEffect, useState } from "react";
import "/src/styles/sneffels-guide.css";
import "/src/styles/shared.css";

const SneffelsGuide = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="guide">
      <main className="container" id="page" role="main">
        <article className="sections">
          <section className="hero sneffels-bg">
            <div className="hero-text">
              <h1 className={animate ? "animate" : ""}>
                A Detailed Guide for Skiing Mount Sneffels’ Snake Couloir
              </h1>
            </div>
          </section>
          <section className="content-wrapper dis-col">
            <div className="dis-row sneffels-intro">
              <div className="intro-image-wrapper section-half">
                <img
                  src="./public/images/sneffels/yankee-boy-teakettle-skiing.webp"
                  alt="Yankee Boy Basin offers a plethora of couloirs, steep faces, and massive bowls."
                  className="intro-image"
                />
                <p className="image-caption">
                  Yankee Boy Basin offers a plethora of couloirs, steep faces,
                  and massive bowls.
                </p>
              </div>
              <div className="intro-text section-half">
                <p>
                  If you're a fanatic about backcountry skiing in the San Juans
                  (or anywhere for that matter), Yankee Boy Basin is well worth
                  your time. Located roughly 5 miles east from Ouray, the mecca
                  of human-powered San Juan skiing holds enough terrain to
                  justify multi-day camping trips every spring. While you can
                  access many classic descents via the basin, the most iconic is
                  undoubtedly skiing the Snake Couloir on Mount Sneffels.
                </p>
                <p>
                  To ski the Snake Couloir, you must descend roughly 600 feet
                  northwest from the 14,157-foot summit of Mount Sneffels before
                  "dog-legging" northeast and steepening into a narrow choke.
                  Shortly after the choke, the couloir opens into a wide apron
                  that leads further into a massive basin – resulting in up to
                  3000 vertical feet of skiing if you choose to descend to
                  Wilson Creek. Accessing the snake couloir requires a long
                  approach, a 30-foot pitch of class 4 scrambling in ski/board
                  boots and a mandatory 100-foot rappel.
                </p>
                <p className="link-block">
                  <a
                    href="https://www.gaiagps.com/public/WUlcE7cmxPPVrQFDciyrMKw7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stats-link"
                  >
                    Here's our map, stats, and profile from our tour.
                  </a>
                </p>
                <p>
                  Below is our <a href="#gear-list">gear list</a>,{" "}
                  <a href="#beta">beta</a>, and a{" "}
                  <a href="#trip-report">detailed trip report</a>.
                </p>
              </div>
            </div>
            <hr className="section-divider" />
          </section>
          <section className="content-wrapper">
            <p className="preFade">
              Ski mountaineering is an inherently dangerous activity.
              Individuals who choose to participate in this sport are exposed to
              various hazards beyond their control that may result in death.
              This post is designed to tell a story and provide as much
              information as possible to educate readers. Adequate&nbsp;
              <a href="https://www.14ers.com/safety.php" target="_blank">
                preparation
              </a>
              , conditioning, and&nbsp;
              <a href="https://avtraining.org/recprogram/" target="_blank">
                education
              </a>
              &nbsp;are essential to engage in this activity safely.&nbsp;
              <a href="http://www.klingmountainguides.com/" target="_blank">
                Hire a guide
              </a>
              &nbsp;if you wish to embark on this adventurer and are unsure of
              your capabilities.
            </p>
            <p className="preFade">
              <em>
                Origin Expeditions is not responsible for what any individual(s)
                might choose to do with this information.
              </em>
            </p>
            <hr className="section-divider" />
          </section>
          <section className="content-wrapper">
            <div className="dis-row g-2">
              <div className="section-half">
                <div className="layout grid-12 columns-12">
                  <figure className="block-image-figure intrinsic">
                    <div className="image-shape-container-element has-aspect-ratio">
                      <img
                        alt="Two slings around large rocks on the southwest side of the summit, backed up by 1” tubular webbing we brought. There is a taped carabiner attached to the cords."
                        className="loaded"
                        src="./public/images/sneffels/mount-sneffels-rappel-anchor.webp"
                      />
                    </div>
                    <figcaption className="image-caption-wrapper">
                      <div className="image-caption">
                        <p className="sqsrte-small preFade">
                          Two slings around large rocks on the southwest side of
                          the summit, backed up by 1” tubular webbing we
                          brought. There is a taped carabiner attached to the
                          cords.
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div id="gear-list" className="block html-block block-html">
                  <h4 className="preFade">
                    <strong>Gear</strong>
                  </h4>
                  <ul>
                    <li>
                      <p className="preFade">
                        skis, boots, skins, pole, and&nbsp;
                        <a
                          href="https://www.rei.com/product/885298/black-diamond-whippet-backcountry-ski-pole-single"
                          target="_blank"
                        >
                          whippet
                        </a>
                        &nbsp;(wasn’t necessary)
                      </p>
                    </li>
                    <li>
                      <p className="preFade">beacon, shovel, probe</p>
                    </li>
                    <li>
                      <p className="preFade">crampons, ice ax</p>
                    </li>
                    <li>
                      <p className="preFade">30L ski pack</p>
                    </li>
                    <li>
                      <p className="preFade">
                        70m 9.8mm rope. 60m would work but require some steep
                        down-climbing in snow. I recommend two 35m, 6-7mm ropes
                        if you’ve got them - the 70m was heavy.
                      </p>
                    </li>
                    <li>
                      <p className="preFade">alpine harness</p>
                    </li>
                    <li>
                      <p className="preFade">2 locking carabiners</p>
                    </li>
                    <li>
                      <p className="preFade">rappel device</p>
                    </li>
                    <li>
                      <p className="preFade">rappel extension webbing</p>
                    </li>
                    <li>
                      <p className="preFade">1m cordelette for prussik</p>
                    </li>
                    <li>
                      <p className="preFade">
                        7m of 1” webbing for anchor backup
                      </p>
                    </li>
                    <li>
                      <p className="preFade">2 pairs of gloves</p>
                    </li>
                    <li>
                      <p className="preFade">1.5 liters of water</p>
                    </li>
                    <li>
                      <p className="preFade">headlamp</p>
                    </li>
                    <li>
                      <p className="preFade">
                        smartphone with maps downloaded on&nbsp;
                        <a href="https://www.gaiagps.com/hike/" target="_blank">
                          GAIA GPS
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="preFade">sunscreen</p>
                    </li>
                  </ul>
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
                        <strong>Rappel Anchor:</strong>
                      </p>
                      <p className="preFade">
                        <em>
                          There is an anchor on the southwest side of the summit
                        </em>
                        (towards Telluride). The anchor consisted of two 6mm
                        cordelettes and a taped-up carabiner slung around a
                        group of boulders. I backed it up with my webbing for
                        Evan's rappel and then removed it for my descent as the
                        cords seemed solid. Because this anchor is located about
                        10 feet from the edge, I highly recommend a 70m rope.
                        Rumor has it that there are fixed bolts on the summit,
                        but I could not find any.
                      </p>
                      <p className="preFade">
                        <strong>Trailhead:</strong>
                      </p>
                      <p className="preFade">
                        Contact&nbsp;
                        <a
                          href="https://www.ouraymountainsports.com/"
                          target="_blank"
                        >
                          Ouray Mountain Sports
                        </a>
                        &nbsp;or&nbsp;
                        <a
                          href="http://www.ci.ouray.co.us/city_offices/public_works/index.php"
                          target="_blank"
                        >
                          Ouray Public Works Department
                        </a>
                        &nbsp;for information about country road 361. You
                        can&nbsp;
                        <a
                          href="https://goo.gl/maps/ZH35mnpxiZBMqg8f7"
                          target="_blank"
                        >
                          access the road from US Highway 550, just south of
                          Ouray after the first switchback
                        </a>
                        . 2 years ago, we were able to park nearly a mile west
                        from Camp Bird on the last week of April. On May 1st,
                        they begin plowing from Camp Bird to the pit toilet just
                        north of Stoney Mountain (it was clear by May 4th in
                        2017). This year, the road was closed over a mile east
                        of Camp Bird, resulting in a considerably longer tour.
                      </p>
                      <p className="preFade">
                        <strong>Bathrooms and water:</strong>
                      </p>
                      <p className="preFade">
                        In 2017 the pit toilets in the basin were unlocked (even
                        before they plowed the road). In 2019 they were not; I'm
                        guessing 2017 was a fluke. If you're planning on camping
                        at the trailhead, be sure to bring what you need to
                        dispose of waste. You can harvest water from a couple of
                        different locations on the approach. As Yankee Boy sees
                        plenty of traffic, I recommend water purification. I had
                        exhausted 1.5 liters of water by the time we had
                        ascended back to the base of Lavender Couloir - bring
                        more if you think you'll need it.
                      </p>
                      <p className="preFade">
                        <strong>Exit:</strong>
                      </p>
                      <p className="preFade">
                        While there's always the option to ski another thousand
                        feet into Blaine Basin, the fastest way out is to trend
                        skiers right out of the couloir to a band of cliffs (see
                        the picture below). Depending on how much snow there is,
                        you can descend through the cliffs. Otherwise, ski
                        around the cliff band and traverse skiers right,
                        maintaining as much elevation as you can. You then must
                        ascend 1000 feet back to the saddle at the base of
                        Lavender Couloir. We were both exhausted by the time we
                        were making this ascent. Depending on the time of
                        year, you might be able to shuttle a car and follow
                        Wilson Creek out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dis-row g-2">
              <div className="section-half">
                <figure className="block-image-figure intrinsic">
                  <img
                    alt="Overview map."
                    src="./public/images/sneffels/mount-sneffels-snake-couloir-map.webp"
                  />
                  <div className="image-caption">
                    <p className="sqsrte-small preFade">Overview map.</p>
                  </div>
                </figure>
              </div>
              <div className="section-half">
                <figure className="block-image-figure intrinsic">
                  <img
                    alt="A view of Sneffels’ north face. Conditions permitting, follow the red line to save yourself some vert for the traverse. Alternatively, descend skiers left around the cliffs and traverse high above the lower group of turns in the photograph."
                    src="./public/images/sneffels/mount-sneffels-snake-couloir-exit.webp"
                  />
                  <figcaption className="image-caption-wrapper">
                    <div className="image-caption">
                      <p className="sqsrte-small preFade">
                        A view of Sneffels’ north face. Conditions permitting,
                        follow the red line to save yourself some vert for the
                        traverse. Alternatively, descend skiers left around the
                        cliffs and traverse high above the lower group of turns
                        in the photograph.
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="block horizontalrule-block block-horizontalrule">
              <div className="block-content">
                <hr />
              </div>
            </div>
            <hr className="section-divider" />
          </section>
          <section id="trip-report" className="page-section">
            <div className="section-border">
              <div className="section-background"></div>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="row row">
                  <div className="col col-12 span-12">
                    <h2 className="section-header">
                      Mount Sneffels and the Snake Couloir Trip Report
                    </h2>
                    <div className="row row">
                      <div className="dis-row g-2">
                        <div className="dis-col section-half">
                          <p className="preFade">
                            I woke in my car at 4 am, which I had parked about a
                            half-mile from the road closure. I immediately
                            turned my car on and blasted heat into my ski boots,
                            which I had positioned beneath the front passenger
                            vents the night before. I saw the light in Evan's
                            car turn on as I simultaneously dressed, ate and
                            hydrated. Once ready, we both drove our cars to the
                            parking area closer to the closure.
                          </p>
                          <p className="preFade">
                            Another group of four gearing up at the trailhead
                            was also headed for the Snake Couloir. Feeling
                            pretty cold and eager to get ahead of them, I
                            decided to start hiking as Evan made some final
                            preparations. I carried my skis over my shoulder as
                            the first half mile past the closure was a dirt
                            road. After I had passed a section of road
                            identified by an overhang of rock and ice, I was
                            able to put on my skins for the remainder of the
                            approach.
                          </p>
                        </div>
                        <figure className="section-half">
                          <img
                            alt="mount-sneffels-snake-couloir-approach"
                            src="./public/images/sneffels/mount-sneffels-snake-couloir-approach.webp"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="block html-block block-html">
                      <div className="block-content">
                        <div className="html-content">
                          <p className="preFade">
                            I passed Camp Bird and enjoyed watching first light
                            on Stoney Mountain. Not long after, I rounded a
                            corner and Sneffels popped into view. You'll pass a
                            bridge on the left that leads to the Wheel of
                            Fortune Mine. A quarter-mile after this point, you
                            can continue to follow the road, or if you're
                            feeling confident, stay high and shoot through the
                            trees to save some time. Meet the road again and
                            follow it west to the pit toilet.
                          </p>
                          <p className="preFade">
                            As I reached the pit toilet, I was able to see a
                            party of four ascending the slope to my right; I
                            assumed to ski Teakettle Mountain. I also noticed a
                            group of three further ahead headed towards
                            Sneffels. These parties had pitched tents by the
                            toilet just as we had in 2017 - I guess it's no
                            secret that this is a prime spot to base camp for
                            Yankee Boy Basin ski missions.
                          </p>
                          <p className="preFade">
                            The route continued to the looker's right of a large
                            hill and past an almost entirely buried sign that
                            marks the summer trailhead for Mount Sneffels. Less
                            than a half-mile further, we arrived at the base of
                            Sneffels's south apron. At this point, we had
                            completed roughly 6 miles and 3,600 vertical feet of
                            elevation gain.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dis-row g-2">
                      <figure className="block-image-figure intrinsic">
                        <div className="image-block-wrapper preSlide">
                          <div className="image-shape-container-element has-aspect-ratio">
                            <img
                              alt="Gazing west in Yankee Boy Basin. Kismet Peak to the right blocks Mount Sneffels from view."
                              src="./public/images/sneffels/yankee-boy-basin-winter.webp"
                            />
                          </div>
                        </div>
                        <figcaption className="image-caption-wrapper">
                          <div className="image-caption">
                            <p className="sqsrte-small preFade">
                              Gazing west in Yankee Boy Basin. Kismet Peak to
                              the right blocks Mount Sneffels from view.
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                      <div className="col col-6 span-6">
                        <div className="html-content">
                          <p className="preFade">
                            Fortunately, the snow was soft enough for us to skin
                            to the lower saddle. Upon reaching the top, a
                            relentless 40 mile per hour wind and blowing snow
                            kindly greeted us. I took advantage of a rock
                            formation to shield myself from the wind and throw
                            my harness on preemptively. The saddle provides a
                            view of the next 600 feet we'd ascend - the long,
                            steep slog that is Lavender Couloir.
                          </p>
                          <p className="preFade">
                            Two years ago, our party boot-packed the couloir, a
                            cold, waist-deep hell. This time around, we elected
                            to keep our skins during our entire ascent. Even
                            with plenty of tricky kick-turns, this ended up
                            being a considerably less miserable way to the top.
                            Upon reaching the upper saddle, I slapped on my
                            crampons and grabbed my ice ax to prepare for what I
                            consider to be the route's crux.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dis-row g-2">
                      <figure className="section-half">
                        <img
                          alt="The “Birthday Chutes” descend Sneffels’s southeast face.  The party ahead is seen skinning to the lower saddle where the Lavender Couloir begins."
                          src="./public/images/sneffels/Mount-sneffels-birthday-chutes.webp"
                        />
                        <figcaption className="image-caption-wrapper">
                          <div className="image-caption">
                            <p className="sqsrte-small preFade">
                              The “Birthday Chutes” descend Sneffels’s southeast
                              face. The party ahead is seen skinning to the
                              lower saddle where the Lavender Couloir begins.
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                      <figure className="section-half">
                        <img
                          alt="A view of the Lavender Couloir from the upper saddle looking towards the lower saddle."
                          src="./public/images/sneffels/mount-sneffels-lavender-couloir.webp"
                        />

                        <figcaption className="image-caption-wrapper">
                          <div className="image-caption">
                            <p className="sqsrte-small preFade">
                              A view of the Lavender Couloir from the upper
                              saddle looking towards the lower saddle.
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="dis-row g-2">
                      <figure className="block-image-figure intrinsic">
                        <div className="image-block-wrapper preSlide">
                          <div className="image-shape-container-element has-aspect-ratio">
                            <img
                              alt="The 30-foot scramble from the upper saddle."
                              src="./public/images/sneffels/Mount-sneffels-lavender-couloir-scramble.webp"
                            />
                          </div>
                        </div>
                        <figcaption className="image-caption-wrapper">
                          <div className="image-caption">
                            <p className="sqsrte-small preFade">
                              The 30-foot scramble from the upper saddle.
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                      <div className="col col-6 span-6">
                        <div className="block html-block block-html">
                          <div className="block-content">
                            <div className="html-content">
                              <p className="preFade">
                                On the south side of the upper saddle looms a
                                30-foot scramble to the summit ridge. Many
                                online resources suggest that this bit of
                                scrambling is class 3, a sandbagged rating, in
                                my opinion. Though it may not appear steep in
                                the picture below, a fall here would drop you
                                onto jagged rocks before a plummet down the
                                Lavender Couloir. Many of the rocks are loose -
                                do not blindly trust any hold. While this
                                portion would be doable without crampons, I was
                                happy to have mine. The adze of my ice ax was
                                invaluable for chopping away at the snow, which
                                was primarily faceted and useless for kicking
                                steps. You’ll also be doing this portion in your
                                ski/board boots with the rest of your equipment
                                on your backpack banging into the rocks above
                                you.
                              </p>
                              <p className="preFade">
                                <em>Be prepared for class 4 scrambling</em>.
                              </p>
                              <p className="preFade">
                                The party ahead chose to forgo this portion of
                                the ascent by skinning climbers left out of the
                                couloir about two-thirds the way up. While also
                                a viable option, this route spares you no
                                exposure to a high-consequence tumble down the
                                southeast face of the mountain. Judging from the
                                appearance of their tracks, the snow on this
                                variation was sun-baked and firm.
                              </p>
                              <p className="preFade">
                                I made my way to the top of the scramble while
                                Evan stood clear of falling ice and choss. Once
                                I gained the ridge, I proceeded along the mildly
                                exposed traverse above the Birthday Chutes,
                                minding the cornice to my right. Happy to have
                                my crampons here, I elected to navigate above a
                                rock outcropping that was the last tricky
                                obstacle before the final steps to the summit.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="block image-block block-image text-ready">
                          <div className="block-content">
                            <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default">
                              <figure className="block-image-figure intrinsic">
                                <div className="image-block-wrapper preSlide">
                                  <div className="image-shape-container-element has-aspect-ratio">
                                    <img
                                      alt="A view of the summit looking west from the top of the scramble."
                                      src="./public/images/sneffels/mount-sneffels-summit-ridge.webp"
                                    />
                                  </div>
                                </div>
                                <figcaption className="image-caption-wrapper">
                                  <div className="image-caption">
                                    <p className="sqsrte-small preFade">
                                      A view of the summit looking west from the
                                      top of the scramble.
                                    </p>
                                  </div>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dis-row g-2">
                      <div className="section-half">
                        <p className="preFade">
                          Upon reaching the summit, I noticed that the group
                          ahead of us had descended the south face of Sneffels
                          into the Birthday Chutes. Gazing down the summit's
                          north side, I was excited to see no tracks in the
                          Snake Couloir. As Evan made his way to the top, I
                          deployed my shovel and began digging in search of a
                          bolted anchor. After several minutes of no success, I
                          removed the rope and webbing from my pack and rigged
                          them to the existing anchor on the southwest side of
                          the summit (approximately 10 feet from the top of the
                          rappel).
                        </p>
                        <p className="preFade">
                          Eager to get out of the wind, we spent little time at
                          the summit. Evan&nbsp;
                          <a
                            href="https://www.youtube.com/watch?v=7U6tdEevJgs"
                            target="_blank"
                          >
                            rigged himself into the system
                          </a>
                          &nbsp;and proceeded first down the 100-foot rappel.
                          Once clear, I collected my webbing and followed suit.
                          We pulled the rope and quickly transitioned to ski.
                          Along with most of the climbing and the rappel behind
                          us, gazing down the undisturbed and tremendously
                          aesthetic Snake Couloir inspired plenty of excitement
                          in both of us.
                        </p>
                      </div>
                      <div className="col section-half">
                        <figure className="block-image-figure intrinsic">
                          <img
                            alt="Evan navigates the outcropping."
                            src="./public/images/sneffels/mount-sneffels-summit-ridge-skiing.webp"
                          />
                          <figcaption className="image-caption-wrapper">
                            <div className="image-caption">
                              <p className="sqsrte-small preFade">
                                Evan navigates the outcropping to avoid the
                                cornice on the adjacent side of the ridge.
                              </p>
                            </div>
                          </figcaption>
                        </figure>
                        <figure className="block-image-figure intrinsic">
                          <div className="image-block-wrapper preSlide">
                            <div className="image-shape-container-element has-aspect-ratio">
                              <img
                                alt="mount-sneffels-snake-couloir-rappelling"
                                src="./public/images/sneffels/mount-sneffels-snake-couloir-rappelling.webp"
                              />
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div className="vrt-spc"></div>
                    <div className="dis-row g-2">
                      <div className="section-half">
                        <figure className="block-image-figure intrinsic">
                          <div className="image-block-wrapper preSlide">
                            <div className="image-shape-container-element has-aspect-ratio">
                              <img
                                alt="The 100-foot rappel could be done with a 60m rope, but you’ll have a bit of steep down climbing to do."
                                src="./public/images/sneffels/mount-sneffels-snake-couloir-rappel.webp"
                              />
                            </div>
                          </div>
                          <figcaption className="image-caption-wrapper">
                            <div className="image-caption">
                              <p className="sqsrte-small preFade">
                                The 100-foot rappel could be done with a 60m
                                rope, but you’ll have a bit of steep down
                                climbing to do. I have heard rumors of skiers
                                downclimbing the entire pitch, but do not
                                recommend it.
                              </p>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="section-half dis-col">
                        <p className="preFade">My lucky day - I go first!</p>
                        <p className="preFade">
                          I made two&nbsp;
                          <a
                            href="https://avalanche.org/avalanche-encyclopedia/ski-or-slope-cut/"
                            target="_blank"
                          >
                            ski cuts
                          </a>
                          &nbsp;before dropping into the skier’s right side of
                          the couloir. Powder! After several dozen thigh-burning
                          turns, I posted up behind the rock island where the
                          route dog-legs northeast and waited for Evan to join
                          me. Here the route steepens to what I estimate is at
                          least 50 degrees and proceeds into a narrow choke. I
                          took my time, minding any buried rocks and&nbsp;
                          <a
                            href="https://avalanche.org/avalanche-encyclopedia/loose-snow-avalanche/"
                            target="_blank"
                          >
                            sluff
                          </a>
                          &nbsp;I knocked loose as I moved through this section
                          of the route. The apron beneath is broad, and buried
                          rocks were minimal. If I were to ski it again, I think
                          a straight shot would be reasonable through the choke
                          into a left turn.
                        </p>
                        <p className="preFade">
                          Once through the choke, I cut left into the softer,
                          sun-exposed snow. I relished as I cruised through
                          powder of brag-worthy quality for another thousand
                          feet before pausing to wait for Evan. We proceeded
                          skiers right in search of a route along which we could
                          traverse to along the base of Sneffels’s north face.
                          Looking down into Blaine Basin, Evan and I couldn’t
                          help but agree - there was more skiing to enjoy.
                          Neglecting the opportunity to save ourselves some
                          misery, we enjoyed another thousand feet of skiing
                          into the bowl below.
                        </p>
                        <figure className="block-image-figure intrinsic">
                          <div className="image-shape-container-element has-aspect-ratio">
                            <img
                              alt="mount-sneffels-snake-couloir"
                              src="./public/images/sneffels/mount-sneffels-snake-couloir.webp"
                            />
                          </div>
                        </figure>
                        <div className="vrt-spc"></div>
                        <figure className="block-image-figure intrinsic">
                          <img
                            alt="mount-sneffels-snake-couloir-bottom"
                            src="./public/images/sneffels/mount-sneffels-snake-couloir-bottom.webp"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="vrt-spc"></div>
                    <figure className="block-image-figure intrinsic">
                      <div className="image-block-wrapper preSlide">
                        <div className="image-shape-container-element has-aspect-ratio">
                          <img
                            alt="Evan gazing back at the route. We totaled 3000 vertical feet of skiing from the top of the couloir to this point."
                            src="./public/images/sneffels/ski-mount-sneffels-snake-couloir.webp"
                          />
                        </div>
                      </div>
                      <figcaption className="image-caption-wrapper">
                        <div className="image-caption">
                          <p className="sqsrte-small preFade">
                            Evan gazing back at the route. We totaled 3000
                            vertical feet of skiing from the top of the couloir
                            to this point.
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="dis-row g-2">
                      <div className="section-half">
                        <p className="preFade">
                          Celebration ensued before a rapid transition. We were
                          eight hours into our day and still far from the end on
                          account of our decision to ski far into the basin
                          rather than traverse. We were feeling the burn right
                          away as we began skinning back towards Sneffels.
                          Making our way looker’s left, we eventually arrived at
                          the base of the slope that would return us to the
                          lower saddle.
                        </p>
                        <p className="preFade">
                          Exhaustion kicked in by the time we started our
                          switchbacks towards the lower saddle. As we alternated
                          breaking trail, I found myself counting out 40 steps
                          between minute-long breaks. It took 3 hours total for
                          us to return to the saddle from where we transitioned
                          below. We proceeded down wind-affected crud on the
                          south apron from the top of the saddle and traversed
                          left and high through Yankee Boy Basin back to the pit
                          toilets.
                        </p>
                      </div>
                      <div className="section-half">
                        <figure className="block-image-figure intrinsic">
                          <div className="image-block-wrapper preSlide">
                            <div className="image-shape-container-element has-aspect-ratio">
                              <img
                                alt="The route to the lower saddle is to the right, behind the ridge just beyond Evan."
                                src="./public/images/sneffels/mount-sneffels-snake-couloir-skinning.webp"
                              />
                            </div>
                          </div>
                          <figcaption className="image-caption-wrapper">
                            <div className="image-caption">
                              <p className="sqsrte-small preFade">
                                The route to the lower saddle is to the right,
                                behind the ridge just beyond Evan.
                              </p>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="dis-row g-2">
                      <div className="section-half">
                        <p className="preFade">
                          I reached the Wheel of Fortune Mine from the pit
                          toilets without putting my skins on by staying high
                          and skier's left. The remainder of the route to our
                          cars was a mix of hiking over dirt and taking
                          advantage of long sections of snow alongside the road
                          to ski.
                        </p>
                        <p className="preFade">
                          In conclusion, the route totaled 15.5 miles and 7,168
                          vertical feet over 13 hours and 50 minutes. Here's a
                          short video of footage I gathered along the way.
                        </p>
                        <p className="preFade">
                          Thanks for taking the time to read. Enjoy the video
                          below if you're looking for more visual detail from
                          our trip. Please share this guide with anyone you feel
                          would value the information. Be safe out there!
                        </p>
                      </div>
                      <div className="section-half">
                        <figure className="block-image-figure intrinsic">
                          <div className="image-block-wrapper preSlide">
                            <div className="image-shape-container-element has-aspect-ratio">
                              <img
                                alt="Ascending to the lower saddle."
                                src="./public/images/sneffels/mount-sneffels-lower-saddle-ascent.webp"
                              />
                            </div>
                          </div>
                          <figcaption className="image-caption-wrapper">
                            <div className="image-caption">
                              <p className="sqsrte-small preFade">
                                Ascending to the lower saddle.
                              </p>
                            </div>
                          </figcaption>
                        </figure>
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
                      src="https://www.youtube.com/embed/x5xDWhBtSOg?si=3QV6qPqS7VNXE10l"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                  <div className="col col-2 span-2">
                    <div className="block website-component-block block-website-component sized vsize-1">
                      <div className="block-content"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="vrt-spc"></div>
        </article>
      </main>
    </div>
  );
};

export default SneffelsGuide;

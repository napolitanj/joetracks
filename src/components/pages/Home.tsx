import { Link } from "react-router-dom";
import BannerImage from "../BannerImage";
import Reveal from "../ui/Reveal";
import NewsletterCapture from "../NewsletterCapture";
import "../../styles/Home.css";

// [CONFIRM] Swap in your real channel URL.
const YOUTUBE_URL = "https://www.youtube.com/@joetracks";

type CardItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  imageSrc?: string;
  imageAlt?: string;
};

const featuredGuides: CardItem[] = [
  {
    title: "The Betsie River",
    description:
      "37 pages covering the whole river. Access points, shuttle routes, campsites, and every hazard worth knowing before you put in. Free.",
    href: "/betsie-river",
    cta: "Read the guide",
    imageSrc: "/images/betsie-river/betsie-river-card.webp",
    imageAlt: "A canoer navigating the Betsie River.",
  },
  {
    title: "North Manitou Island",
    description:
      "33 pages built on 10 trips of recon. Ferry logistics, what to pack, where to camp, key landmarks and artifacts, all in one package.",
    href: "/north-manitou-island-guide",
    cta: "Plan the trip",
    imageSrc: "/images/north-manitou/north-manitou-island.webp",
    imageAlt: "Backpacker standing on North Manitou Island shoreline",
  },
  {
    title: "Skiing the Sleeping Bear Dunes",
    description:
      "Skiing Michigan's steepest sustained slope is only possible in rare conditions. How to identify them and where to go are all covered here.",
    href: "/ski-sleeping-bear-dunes",
    cta: "Ski the dunes",
    imageSrc: "/images/ski-sleeping-bear/ski-sleeping-bear-intro.png",
    imageAlt: "A skier on the snow-covered dunes at Sleeping Bear",
  },
  {
    title: "Trip Planning with CalTopo",
    description:
      "A tutorial for a powerful, free trip-planning tool, covering the essentials behind the workflow I use for every trip on this site, start to finish.",
    href: "/caltopo-guide",
    cta: "Learn the workflow",
    imageSrc: "/images/caltopo/Caltopo-Mount-hood-stacked-layers2.png",
    imageAlt: "CalTopo map with stacked planning layers",
  },
];

const tools: CardItem[] = [
  {
    title: "Michigan Ski Tracker",
    description:
      "Mid-mountain snowfall forecasts for every ski area in Michigan, side by side. Answers one question: where is it going to snow this weekend?",
    href: "/michigan-ski-tracker",
    cta: "Check the snow",
    imageSrc: "/images/ski-tracker-preview.png",
    imageAlt: "Snowfall forecast comparison across Michigan ski areas",
  },
  {
    title: "Michigan River Conditions Tracker",
    description:
      "Live USGS gauge readings for rivers across the state, scored against their own historical range so you know whether a level is high, low, or normal for the date.",
    href: "river-conditions",
    cta: "Check the rivers",
    imageSrc: "/images/river-tracker-preview.webp",
    imageAlt: "River gauge conditions across Michigan",
  },
];

const Home = () => {
  return (
    <>
      <BannerImage />

      <Reveal as="section" className="home-section" delay={0}>
        <div className="home-container home-inner">
          <h2>Featured guides</h2>
          <p className="home-subhead">
            You shouldn't have to download apps and make accounts to get
            information about the places you want to explore. My guides are
            viewable right here in your web browser or downloadable in PDF
            format. Most are free, and revenue from paid guidebooks keeps this
            platform live.
          </p>

          <div className="home-grid home-grid-guides">
            {featuredGuides.map((item) => (
              <article key={item.href} className="home-card">
                {item.imageSrc && (
                  <Link to={item.href} className="guide-card-media">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.title}
                      loading="lazy"
                    />
                  </Link>
                )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.href} className="home-card-link">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="home-start-cta">
            <Link to="/guides" className="home-btn home-btn-secondary">
              See all guides
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={80}>
        <div className="home-container home-inner">
          <h2>Live conditions</h2>
          <p className="home-subhead">
            I wanted it to be quick and easy to know where in Michigan the snow
            is falling, and which rivers have optimal paddling conditions, so I
            built two tools to do just that. Both are free and use live data
            that updates at least once daily.
          </p>

          <div className="home-grid home-grid-two">
            {tools.map((item) => (
              <article key={item.href} className="home-card home-offer-card">
                {item.imageSrc && (
                  <figure className="home-offer-media">
                    <img
                      className="home-card-image"
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.title}
                      loading="lazy"
                    />
                  </figure>
                )}
                <div className="home-offer-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="home-start-cta">
                    <Link to={item.href} className="home-btn home-btn-primary">
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="home-section home-topo-band"
        variant="up"
        delay={160}
      >
        <div className="home-container home-inner">
          <div className="home-topo-content">
            <h2>Who's behind the project</h2>
            <p>
              I'm Joe. I live in Traverse City, Michigan, and I've spent fifteen
              years immersed in the outdoors both professionally and
              recreationally. My background spans across thru-hiking,
              bike-touring, climbing, big-water paddling, ski mountaineering,
              and more.
            </p>
            <p>
              My goal with this project is to offer others the information and
              skills they need to experience our natural resources in the ways I
              have. Everything here is built upon trips I've taken and
              technology I use. Where something is uncertain, the guide says so.
              Most guides are paired with a video showcasing the region,
              viewable on my YouTube channel.
            </p>

            <div className="home-start-cta">
              <a
                href={YOUTUBE_URL}
                className="home-btn home-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </a>
              <Link to="/about" className="home-btn home-btn-secondary">
                More about my background
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-section" variant="up" delay={240}>
        <div className="home-container home-inner">
          <div className="home-split">
            <div className="home-split-copy">
              <h2>
                Get discounted guides and stay informed about new projects
              </h2>
              <p className="home-subhead">
                Subscribing to my newsletter is free and a great way to support
                this project. Any time new content is published or I'm working
                on something new, the email list hears about it first along with
                discount codes for any paid content.
              </p>

              <NewsletterCapture />

              <p className="home-subhead home-subhead--mt">
                One or two emails per month. No spam. No sharing your
                information. Just what you need to get out there and have fun.
              </p>
            </div>

            <div className="home-split-media">
              <img
                src="/images/manitou-island-backpacking-docks.png"
                alt="Backpackers waiting for the Manitou Island ferry"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Home;

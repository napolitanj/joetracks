import { Link } from "react-router-dom";
import "../../styles/GuidesIndex.css";

type GuideItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
};

const guides: GuideItem[] = [
  {
    title: "Skiing Sleeping Bear Dunes: A Field Guide to Shauger Hill",
    description:
      "Trip planning, gear, and field notes for skiing the Sleeping Bear Dunes.",
    href: "/ski-sleeping-bear-dunes",
    cta: "Ski the Dunes",
    imageSrc: "/images/ski-sleeping-bear/ski-sleeping-bear-intro.png",
    imageAlt: "A skier on the snow-covered dunes at Sleeping Bear",
  },
  {
    title: "Planning a Backpacking Trip to North Manitou Island",
    description:
      "A practical field guide covering logistics, hazards, route structure, and planning considerations.",
    href: "/north-manitou-island-guide",
    cta: "Go Backpacking",
    imageSrc: "/images/north-manitou/north-manitou-island.webp",
    imageAlt: "Backpacker standing on North Manitou Island shoreline",
  },
  {
    title: "Paddling the Keystone Rapids — A Boardman River Guide",
    description:
      "Current conditions, paddling and bike shuttle logistics, and a detailed breakdown of each hazard.",
    href: "/boardman-river-keystone-rapids",
    cta: "Run a River",
    imageSrc: "/images/keystone-rapids/keystone-rapids-card.webp",
    imageAlt: "A paddler navigating the Boardman River's Keystone Rapids",
  },

  {
    title: "Trail Guide: Timbers Recreation Area",
    description:
      "A 250-acre preserve along Long Lake with 4.5 miles of trails, lake access, and a universally accessible loop.",
    href: "/trails/timbers-recreation-area",
    cta: "Go Hiking",
    imageSrc:
      "/images/conservancy-natural-areas/timbers-recreation-area/timbers-recreation-area-banner.webp",
    imageAlt: "Fern Lake at Timbers Recreation Area in autumn",
  },
  {
    title: "Trail Guide: Valley of the Giants",
    description: "PLACEHOLDER — short description of Valley of the Giants.",
    href: "/trails/valley-of-the-giants",
    cta: "Go Hiking",
    imageSrc:
      "/images/nct/valley-of-the-giants/valley-of-the-giants-banner.webp",
    imageAlt: "PLACEHOLDER — Valley of the Giants image alt text",
  },
  {
    title: "Trip Planning With Remote Forecasting Tools",
    description:
      "A technical trip-planning walkthrough for forecasting snow cover remotely.",
    href: "/remote-forecasting-tools",
    cta: "Find the Best Snow",
    imageSrc: "/images/remote-forecasting/google-snow-depth-overlay.webp",
    imageAlt: "Snow depth overlay map used for remote forecasting",
  },

  {
    title: "Trip Planning With CalTopo",
    description:
      "Learn the core CalTopo workflow for map reading, route building, and trip planning.",
    href: "/caltopo-guide",
    cta: "Plan Your Route",
    imageSrc: "/images/caltopo/Caltopo-Mount-hood-stacked-layers2.png",
    imageAlt: "CalTopo map with stacked planning layers",
  },
  {
    title: "Mount Sneffels: Skiing the Snake Couloir",
    description:
      "Route beta, conditions, and planning notes for Mount Sneffels' Snake Couloir.",
    href: "/ski-mount-sneffels",
    cta: "Go Skiing",
    imageSrc: "/images/sneffels/Mount-sneffels-view.webp",
    imageAlt: "Mount Sneffels viewed from the approach route",
  },
];

const GuidesIndex = () => {
  return (
    <section className="guides-index">
      <div className="guides-index-inner">
        <h1>Guides</h1>
        <p className="guides-index-intro">
          In-depth outdoor planning resources built from real trips and field
          experience.
        </p>

        <div className="guides-list">
          {guides.map((guide) => (
            <article key={guide.href} className="guide-card">
              <Link to={guide.href} className="guide-card-media">
                <img src={guide.imageSrc} alt={guide.imageAlt} loading="lazy" />
              </Link>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <Link to={guide.href} className="home-card-link">
                {guide.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesIndex;

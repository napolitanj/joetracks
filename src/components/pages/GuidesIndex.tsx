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
    title: "Backpacking North Manitou Island",
    description:
      "A practical field guide covering logistics, hazards, route structure, and planning considerations.",
    href: "/north-manitou-island-guide",
    cta: "Go Backpacking",
    imageSrc: "/images/north-manitou/north-manitou-island.webp",
    imageAlt: "Backpacker standing on North Manitou Island shoreline",
  },
  {
    title: "Remote Forecasting Tools",
    description:
      "A technical trip-planning walkthrough for forecasting snow cover remotely.",
    href: "/remote-forecasting-tools",
    cta: "Find the Best Snow",
    imageSrc: "/images/remote-forecasting/google-snow-depth-overlay.webp",
    imageAlt: "Snow depth overlay map used for remote forecasting",
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
  {
    title: "How to Trip Plan with CalTopo",
    description:
      "Learn the core CalTopo workflow for map reading, route building, and trip planning.",
    href: "/caltopo-guide",
    cta: "Plan Your Route",
    imageSrc: "/images/caltopo/Caltopo-Mount-hood-stacked-layers2.png",
    imageAlt: "CalTopo map with stacked planning layers",
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

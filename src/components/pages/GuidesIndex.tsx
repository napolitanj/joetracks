import { Link } from "react-router-dom";
import "../../styles/GuidesIndex.css";

type GuideItem = {
  title: string;
  description: string;
  href: string;
};

const guides: GuideItem[] = [
  {
    title: "North Manitou Island Guide",
    description:
      "A practical backpacking and trip-planning guide for North Manitou Island.",
    href: "/north-manitou-island-guide",
  },
  {
    title: "Remote Forecasting Tools",
    description:
      "A field-tested walkthrough for assessing snow and weather before your trip.",
    href: "/remote-forecasting-tools",
  },
  {
    title: "Mount Sneffels Guide",
    description:
      "Route beta, conditions, and planning notes for skiing the Snake Couloir.",
    href: "/ski-mount-sneffels",
  },
  {
    title: "CalTopo Guide",
    description:
      "Learn the core CalTopo workflow for map reading, route building, and export.",
    href: "/caltopo-guide",
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
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <Link to={guide.href} className="guide-read-link">
                Read
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesIndex;

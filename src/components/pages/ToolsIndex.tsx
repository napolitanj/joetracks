import { Link } from "react-router-dom";
import "../../styles/ToolsIndex.css";

type ToolItem = {
  title: string;
  description: string;
  href: string;
};

const tools: ToolItem[] = [
  {
    title: "Michigan Ski Tracker",
    description:
      "A live tracker for Michigan ski resorts with current snowfall and weather conditions. Built to make Great Lakes trip planning faster and easier.",
    href: "/michigan-ski-tracker",
  },
];

const ToolsIndex = () => {
  return (
    <section className="tools-index">
      <div className="tools-index-inner">
        <h1>Tools</h1>
        <p className="tools-index-intro">
          Small utilities I&apos;m building for outdoor planning in the Great
          Lakes.
        </p>

        <div className="tools-list">
          {tools.map((tool) => (
            <article key={tool.href} className="tool-card">
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <Link to={tool.href} className="tool-open-link">
                Open
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsIndex;

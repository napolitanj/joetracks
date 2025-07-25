import { useEffect, useState } from "react";
import portfolioData from "../../data/portfolio.json";
import { Link } from "react-router-dom";
import PortfolioFeature from "../PortfolioFeature";
import "../../styles/Portfolio.css";

type Post = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link: string;
  position: number;
  link_text: string;
};

const Portfolio = () => {
  const [features, setFeatures] = useState<Post[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isLocalhost = window.location.hostname === "localhost";
    const loggedIn = localStorage.getItem("isAuthorized") === "true";
    setIsAuthorized(isLocalhost && loggedIn);

    const cleaned = portfolioData.filter(
      (f) => f.image_url && f.image_url.startsWith("./images/")
    );
    setFeatures(cleaned.sort((a, b) => b.position - a.position));
  }, []);

  return (
    <>
      <div className="portfolio-container">
        {isAuthorized && (
          <div className="create-feature">
            <Link to="/portfolioeditor">+ Create New Feature</Link>
          </div>
        )}
        <div className={`portfolio-list ${features.length > 0 ? "show" : ""}`}>
          {features.map((feature) => (
            <PortfolioFeature
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.image_url}
              link={feature.link}
              linkText={feature.link_text}
              isAuthorized={isAuthorized}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

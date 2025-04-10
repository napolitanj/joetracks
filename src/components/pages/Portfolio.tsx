import "../../styles/Portfolio.css";
import PortfolioFeature from "../PortfolioFeature";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container">
        <PortfolioFeature></PortfolioFeature>
        <PortfolioFeature></PortfolioFeature>
        <PortfolioFeature></PortfolioFeature>
        <PortfolioFeature></PortfolioFeature>
      </div>
    </>
  );
};

export default Portfolio;

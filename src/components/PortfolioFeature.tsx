import "../styles/PortfolioFeature.css";
import { useEffect, useState } from "react";

const PortfolioFeature = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={`feature-container ${fadeIn ? "show" : ""}`}>
        <h2 className="feature-title">Portfolio Feature</h2>
        <img
          src="src/assets/images/howtousecaltopo.png"
          className="feature-image"
        ></img>
        <p className="feature-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="">Feature Link</a>
      </div>
    </>
  );
};

export default PortfolioFeature;

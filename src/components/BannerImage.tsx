import "../styles/BannerImage.css";
import { type CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BannerImage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <div className="banner-image"></div>
          <div className="banner-text">
            <div className="banner-content">
              <h1>Competence and confidence in the outdoors.</h1>
              <p className="subheader">
                Clear, practical guides and tools designed for everyone —
                accessible instantly in your browser. No apps, accounts, or
                unnecessary friction.
              </p>
              <div className="banner-cta">
                <Link to="/start-here" className="home-btn home-btn--overlay">
                  Start Here
                </Link>
                <Link to="/guides" className="home-btn home-btn-secondary">
                  Browse Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerImage;

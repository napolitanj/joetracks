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
          <div
            className="banner-text"
            style={{ "--banner-offset": `${offset}px` } as CSSProperties}
          >
            <div className="banner-content">
              <h1>Build Outdoor Confidence &amp; Competence</h1>
              <p className="subheader">
                Guides, Tools, and Resources for Adventures in the Great Lakes
              </p>
              <div className="banner-cta">
                <Link
                  to="/start-here"
                  className="banner-btn banner-btn-primary"
                >
                  Start Here
                </Link>
                <Link to="/guides" className="banner-btn banner-btn-secondary">
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

import "../styles/BannerImage.css";
import { Link } from "react-router-dom";

const BannerImage = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <div className="banner-image"></div>
          <div className="banner-text">
            <div className="banner-content">
              <h1>Competence, clarity, and confidence in the outdoors.</h1>
              <p className="subheader">
                Clear, practical guides and tools built for everyone —
                accessible instantly in your browser. No apps, accounts, or
                unnecessary friction.
              </p>
              <div className="banner-cta">
                <Link to="/guides" className="home-btn home-btn--overlay">
                  Browse Guides
                </Link>
                <Link to="/tools" className="home-btn home-btn-secondary">
                  See Tools
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

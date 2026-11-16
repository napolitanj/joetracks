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
              <h1>
                Digital tools and guides for Northern Michigan and beyond.
              </h1>
              <p className="subheader">
                Paddling routes, backpacking trips, trip-planning tutorials, and
                real-time river and snow data data across Michigan. Each guide
                is built upon real experience in the field.
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

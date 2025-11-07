import "../styles/BannerImage.css";
import { useEffect, useState } from "react";

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
            style={{ transform: `translateY(${offset}px)` }}
          >
            <h1>Joe Napolitan</h1>
            <div className="subheader">
              <p>Information Technology</p>
              <p>Full-Stack Engineering</p>
              <p>Outdoor Recreation</p>
            </div>
            <p className="tech-stack">Built with React • Vite • Cloudflare</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerImage;

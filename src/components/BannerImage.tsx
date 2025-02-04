import headerPhoto from "/src/assets/images/header-photo.jpg";
import "../styles/BannerImage.css";
import { useEffect, useState } from "react";

const BannerImage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="banner">
        <div className="banner-container"></div>
        <img src={headerPhoto} className="banner-image" alt="man skiing"></img>
        <div
          className="banner-text"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <h1>Joe Napolitan</h1>
          <div className="subheader">
            <div className="mouse"></div>
            <div>
              <p>Information Technology</p>
              <p>Front-End Engineering</p>
              <p>Outdoor Recreation</p>
              <p>Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerImage;

import "../../styles/Bio.css";
import { useEffect, useState } from "react";
import BannerImage from "../BannerImage";
import headerPhoto from "/images/bio-pic.jpg";
import { Link } from "react-router-dom";

const Bio = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <BannerImage></BannerImage>
      <div className={`bio-container ${fadeIn ? "show" : ""}`}>
        <img className="bio-pic" src={headerPhoto}></img>
        <div>
          <p>
            I'm Joe Napolitan — a Michigan-based software engineer, IT
            specialist, and former wilderness educator. Over the past decade,
            I’ve led high-stakes expeditions in Alaska, developed websites for
            enterprise brands, and supported IT systems in education and
            nonprofit settings. I currently work full-time in IT at a creative
            arts school, where I build process documentation, manage data, and
            simplify technical processes for staff and students. My background
            combines hands-on problem-solving with a deep understanding of
            people and systems — the same mindset I bring to full-stack
            development.
          </p>
          <p>
            Whether it's designing a clean user experience, writing efficient
            backend logic, or connecting real-world operations with reliable
            code, I like building things that actually make life easier. This
            site highlights some of my projects across software, automation, and
            outdoor program design — all rooted in the same goal: to create
            practical, well-crafted systems that deliver great experiences.
          </p>
        </div>
      </div>
      <section className="featured-project">
        <h2>Featured Project</h2>

        <div className="featured-simple">
          <h3>Michigan Ski Tracker</h3>
          <p>
            A live React application showing real-time NOAA snow and weather
            data for every Michigan ski resort.
          </p>
          <Link to="/michigan-ski-tracker" className="featured-btn">
            View App →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Bio;

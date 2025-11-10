import "../../styles/Bio.css";
import { useEffect, useState } from "react";
import BannerImage from "../BannerImage";
import headerPhoto from "/images/bio-pic.jpg";

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
    </>
  );
};

export default Bio;

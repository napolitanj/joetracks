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
            I'm Joe Napolitan, a Michigan-based Technical Support Specialist,
            software engineer, and former wilderness educator & ski patroller.
            Over the past decade, I’ve led backcountry expeditions in Alaska,
            worked various roles in the technology industry, led wilderness
            therapy programs for at-risk youth. Today I work full-time in IT at
            a creative arts school, where I support staff and students while
            building tools to automate workflows, manage data, and improve
            systems & documentation. I bring a mix of technical skill, hands-on
            grit, and people-first problem-solving to everything I do.
          </p>
          <p>
            What ties it all together is my drive to build things that are
            useful and real, whether its an itinerary for an awesome backpacking
            trip, a better process, or a meaningful life outside the status
            race. I’m always exploring ways to work smarter, live simpler, and
            help others do the same. This site showcases some of my personal
            projects and creative experiments across tech, content, and the
            outdoors.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bio;

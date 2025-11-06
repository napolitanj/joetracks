import "../styles/Marketing.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/tools/Carousel";

const Marketing = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const marketingImages = [
    {
      src: "/images/Marketing/4 Years Total Traffic.png",
      caption: "4-Year Traffic Growth",
    },
    {
      src: "/images/Marketing/Total Page Views 5 Years.png",
      caption: "Total Page Views (5 Years)",
    },
    {
      src: "/images/Marketing/Search Keywords 2023-2025 pt1.png",
      caption: "Top Search Keywords",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      <div className={`marketing-container ${fadeIn ? "show" : ""}`}>
        <h1>Content-Driven Growth & Web Strategy</h1>

        <p className="intro">
          Between 2020 and 2025, I led web strategy and SEO for a small
          wilderness education nonprofit. Starting from almost no organic
          traffic, the site grew into a trusted regional resource — reaching
          over <strong>11,000 total visits</strong> and{" "}
          <strong>15,000+ total pageviews</strong>. Articles I wrote and
          optimized ranked as <strong>featured snippets on Google</strong> and
          held first-page positions for niche search terms like{" "}
          <em>“North Manitou Island backpacking”</em> and{" "}
          <em>“Ski Mount Sneffels Snake Couloir.”</em>
        </p>

        <div className="section">
          <h2>The Challenge</h2>
          <p>
            The organization had great field programs but no digital visibility.
            Its content wasn’t aligned with what people searched for, and the
            site lacked authority in Google’s eyes. My goal was to build organic
            reach through genuinely useful, search-optimized content without
            paying for ads or resorting to SEO gimmicks.
          </p>
        </div>

        <div className="section">
          <h2>What I Did</h2>
          <ul>
            <li>
              Researched and targeted high-intent keywords around outdoor
              education and related niches.
            </li>
            <li>
              Wrote detailed, long-form guides — formatted for clarity, mobile
              readability, and snippet capture.
            </li>
            <li>
              Improved internal linking, metadata, and image optimization to
              strengthen crawlability and topic relevance.
            </li>
            <li>
              Reached out to <strong>Pure Michigan</strong>, the state’s
              official tourism platform, which later began linking to our{" "}
              <em>North Manitou Island Guide</em> — an outreach strategy that
              helped establish both brand and domain authority.
            </li>
            <li>
              Monitored analytics weekly to refine structure and calls to action
              based on engagement data and retention time.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Results</h2>
          <p>
            Over five years, organic traffic increased by{" "}
            <strong>500% year-over-year</strong> at peak growth. The guides
            became consistent top performers, with readers spending{" "}
            <strong>5–7 minutes on page</strong> — a strong indicator of value
            and reader intent. The <em>North Manitou Island</em> and{" "}
            <em>Mount Sneffels</em> pages together accounted for over{" "}
            <strong>9,000 combined views</strong>.
          </p>

          <Carousel
            images={marketingImages}
            autoScroll={true}
            interval={7000}
          />

          <p className="metrics-callout">
            <strong>Highlights:</strong> 11K visits, 15K total pageviews, 9.5K
            unique visitors, featured snippets on Google, 5–7 minute on-page
            engagement, and backlinks from Pure Michigan’s tourism site.
          </p>

          <p className="quote">
            “Just wanted to thank you for your detailed TR on the Mt Sneffels
            Snake Couloir. It was an invaluable resource in our successful
            outing on Sunday.” — <em>User email feedback</em>
          </p>
        </div>

        <div className="section">
          <h2>Takeaway</h2>
          <p>
            This project reinforced something simple: effective marketing starts
            with clarity and trust. By writing genuinely helpful content and
            building authentic backlinks, I created pages that both people and
            search engines valued — a long-term win for visibility and impact.
          </p>
        </div>
        <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      </div>
    </>
  );
};

export default Marketing;

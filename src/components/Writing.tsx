import "../styles/Writing.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Writing = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      <div className={`writing-container ${fadeIn ? "show" : ""}`}>
        <h2>Writing Portfolio</h2>
        <p className="intro">
          My writing bridges technical clarity, storytelling, and strategy —
          from grant proposals and SEO-optimized web copy to outdoor guides and
          feature articles. Across each project, my goal is the same: write
          clearly, connect with readers, and drive results that matter.
        </p>

        {/* Section 1: Web & SEO Writing */}
        <section className="writing-section">
          <h3>Web & SEO Writing</h3>
          <p>
            Authored long-form digital guides for outdoor recreation that
            reached thousands of organic readers and earned top Google rankings
            — including featured snippets for “North Manitou Island Guide” and
            “Ski Mount Sneffels.” My focus was building trust through clarity
            and authority.
          </p>
          <ul>
            <li>
              <strong>Results:</strong> 11,000+ total site visits between
              2021-2025, 5-7 min average read time, and partnerships with
              tourism platforms like <em>Pure Michigan</em> and{" "}
              <em>Bill & Pauls Sportshaus</em>.
            </li>
            <li>
              <strong>Samples:</strong>{" "}
              <a
                href="https://joetracks.com/north-manitou-island-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                North Manitou Island Guide
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://joetracks.com/ski-mount-sneffels"
                target="_blank"
                rel="noopener noreferrer"
              >
                A Detailed Guide for Skiing Mount Sneffels’ Snake Couloir
              </a>
            </li>
          </ul>
        </section>

        {/* Section 2: Technical & Instructional Writing */}
        <section className="writing-section">
          <h3>Technical & Instructional Writing</h3>
          <p>
            Produced documentation, guides, and website content for technology
            and IT teams — focusing on clarity, usability, and speed. My
            approach is to make complex systems understandable and easy to
            adopt.
          </p>
          <ul>
            <li>
              <strong>Focus:</strong> Translating technical processes into
              simple, actionable steps.
            </li>
            <li>
              <strong>Sample:</strong>{" "}
              <a
                href="/pdfs/it-google-site-documentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internal IT Google Site Documentation For Imaging Staff
                Computers
              </a>
              <div className="sample-preview">
                <img
                  src="../images/Writing/technical-writing-preview.png"
                  alt="Preview of documentation"
                />
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3: Grants & Proposals */}
        <section className="writing-section">
          <h3>Grants & Proposals</h3>
          <p>
            Wrote and designed successful sponsorship proposals and grant
            applications for <strong>Origin Expeditions</strong>, a wilderness
            education nonprofit I founded. Each proposal balanced narrative
            storytelling with data-driven advocacy, highlighting the health and
            community impact of outdoor access for underserved youth.
          </p>
          <ul>
            <li>
              <strong>Results:</strong> Secured <strong>$10,000+</strong> in
              private and institutional funding, including awards from{" "}
              <strong>Founders Brewing Co.</strong>, <strong>Osprey, </strong>{" "}
              <strong>Kate's Real Food</strong> and other sponsors.
            </li>
            <li>
              <strong>Approach:</strong> Combined brand visibility (web
              placement, media features) with measurable community outcomes to
              build long-term partnerships.
            </li>
            <li>
              <strong>Sample:</strong>{" "}
              <a
                href="../pdfs/Founders Brewing Grant for Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Founders Brewing Company Grant Proposal
              </a>
            </li>
          </ul>
        </section>

        {/* Section 4: Editorial & Journalism */}
        <section className="writing-section">
          <h3>Editorial & Journalism</h3>
          <p>
            Reported for <strong>The Pagosa Springs SUN</strong>, a community
            newspaper in southwest Colorado, covering local government, housing
            developments, water issues, and human-interest stories. My reporting
            followed the <strong>AP Style Guide</strong> and emphasized
            accuracy, objectivity, and clarity — grounding each piece in
            verifiable information and public impact.
          </p>
          <ul>
            <li>
              <strong>Highlights:</strong> Coverage of town council meetings,
              land-use debates, and housing challenges that informed community
              decision-making.
            </li>
            <li>
              <strong>Focus:</strong> Balanced, fact-checked reporting that
              connects civic policy with the people affected by it.
            </li>
            <li>
              <strong>Samples</strong>
            </li>
          </ul>
          <div className="writing-sample">
            <a
              href="/pdfs/ps-rental-feature.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rentals & Pagosa's Housing Crisis
            </a>
            <p>
              Feature on rising rents, shifting supply, and how affordability
              pressures are reshaping life for working families in Pagosa
              Springs.
            </p>
          </div>

          <div className="writing-sample">
            <a
              href="/pdfs/ps-water-crisis-feature.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diminishing Water Supplies in the West
            </a>
            <p>
              Reporting on the tension between development and limited water
              resources—covering rights, infrastructure planning, and long-term
              tradeoffs.
            </p>
          </div>

          <div className="writing-sample">
            <a
              href="/pdfs/ps-dog-rescue-feature.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rugby's Rescue House
            </a>
            <p>
              Human-interest piece from the San Juans: a local canine rescue and
              the community effort behind rehoming strays from Native American
              reservations.
            </p>
          </div>
        </section>

        {/* Section 5: Travel Blogs */}
        <section className="writing-section">
          <h3>Travel Blogs</h3>
          <div className="writing-samples">
            <div className="writing-sample">
              <a
                href="https://nobohippybro.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Nobo Hippy Bro" — A Thru-Hike of the Appalachian (2014)
              </a>
              <p>
                Digital field journal from a 2,185-mile thru-hike — ~8,000
                lifetime visits; single-day highs of 3,565 unique visitors and
                442 views.
              </p>
            </div>

            <div className="writing-sample">
              <a
                href="https://haulinhobo.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Haulin' Hobo" — Bike Touring Solo Across The American West
                (2013)
              </a>
              <p>
                Digital story from a self-supported, 1500-mile bicycle ride
                across the deserts and mountains of the Rockies and California's
                coast.
              </p>
            </div>
          </div>
        </section>

        <p className="outro">
          Whether it’s a grant proposal, blog post, or technical guide, my goal
          is the same — write in a way that makes information useful and ideas
          easy to act on.
        </p>
        <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      </div>
    </>
  );
};

export default Writing;

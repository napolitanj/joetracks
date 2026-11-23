import "../../styles/WritingPortfolio.css";

const WritingPortfolio = () => {
  return (
    <div className="writing-portfolio">
      <h1>Writing Portfolio</h1>
      <div className="writing-portfolio-container">
        <div className="writing-info">
          <h2 className="writing-title">Origin Expeditions Website</h2>
          <p>
            In 2018, I founded Origin Expeditions, a nonprofit focused on making
            wilderness education more accessible. I developed all external
            messaging, including the website copy, blog posts, trip
            communications, and fundraising updates, crafting a consistent and
            trusted voice for the organization. You can preview introductions to
            some of those blog posts below, or view an{" "}
            <a
              href="https://web.archive.org/web/20250612181807/https://www.originexpeditions.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              archived snapshot of the original homepage
            </a>
            .
          </p>
          <img
            src="/images/Origin-Sample-Blog.png"
            alt="Screenshot of an Origin Expeditions blog post as it appeared on the original website."
          />
        </div>
        <div className="writing-samples"></div>
      </div>
    </div>
  );
};

export default WritingPortfolio;

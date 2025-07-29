import writingData from "../../data/writingPortfolio.json";
import "../../styles/WritingPortfolio.css";

type Writing = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

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
            communications, and fundraising updates — crafting a consistent and
            trusted voice for the organization. You can preview a introductions
            to some blogs post below, or view an archived snapshot of the
            original homepage
            <a href="https://www.google.com/url?q=https://web.archive.org/web/20250612181807/https://www.originexpeditions.org/&sa=D&source=editors&ust=1753794666407241&usg=AOvVaw0t6oYGClSA3FjrjlNyy0Cr">
              &nbsp;here.
            </a>
          </p>
          <img src="./public/images/Origin-Sample-Blog.png"></img>
        </div>
        <div className="writing-samples"></div>
      </div>
    </div>
  );
};

export default WritingPortfolio;

import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <Link
            to="/"
            className="site-footer-brand-link"
            aria-label="JoeTracks Home"
          >
            <img
              src="/images/logo-lockup-white.png"
              alt="JoeTracks"
              className="site-footer-brand-image"
            />
          </Link>
          <p className="site-footer-tagline">
            Build outdoor confidence &amp; competence.
          </p>
          <Link to="/contact" className="site-footer-contact-btn">
            Contact
          </Link>
        </div>

        <div className="site-footer-divider" />

        <div className="site-footer-bottom">
          <nav className="site-footer-col" aria-label="Guides">
            <h2>
              <Link to="/guides">Guides</Link>
            </h2>
            <Link to="/north-manitou-island-guide">North Manitou Island</Link>
            <Link to="/ski-mount-sneffels">Skiing Mount Sneffels</Link>
            <Link to="/caltopo-guide">How to Use CalTopo</Link>
            <Link to="/remote-forecasting-tools">Remote Forecasting Tools</Link>
          </nav>

          <nav className="site-footer-col" aria-label="Tools">
            <h2>
              <Link to="/tools">Tools</Link>
            </h2>
            <Link to="/michigan-ski-tracker">Michigan Ski Tracker</Link>
          </nav>

          <nav className="site-footer-col" aria-label="Portfolio">
            <h2>
              <Link to="/about">About</Link>
            </h2>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

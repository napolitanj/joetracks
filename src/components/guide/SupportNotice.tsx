import "./support-notice.css";

const SupportNotice = () => (
  <div className="support-notice">
    <p className="support-notice__heading">Support the Work</p>
    <p className="support-notice__body">
      These guides, tools, and trip breakdowns are built solo and free to use.
      If something here helped you get outside, a small contribution helps fund
      the gas, gear, and time behind building the next one.
    </p>
    <a
      className="support-notice__btn"
      href="https://joetracks.kit.com/products/support"
      target="_blank"
      rel="noopener noreferrer"
    >
      Support This Project
    </a>
  </div>
);

export default SupportNotice;

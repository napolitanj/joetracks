import "./lnt-notice.css";

const LNTNotice = () => (
  <div className="lnt-notice">
    <p className="lnt-notice__heading">Visit Responsibly</p>
    <p className="lnt-notice__body">
      Public Lands depend on a culture of respect to remain enjoyable. Help keep
      them open to everyone by learning and following the seven Leave No Trace
      (LNT) principles.
    </p>
    <a
      className="lnt-notice__link"
      href="https://lnt.org/why/7-principles/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn the seven principles →
    </a>
  </div>
);

export default LNTNotice;

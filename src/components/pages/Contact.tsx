import "../../styles/Contact.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`contact-container ${fadeIn ? "show" : ""}`}>
      <div className="contact-content">
        <p className="contact-intro">
          I’m always open to connecting with people working on meaningful
          projects. Whether that’s planning your next adventure, building
          something online, or just having an honest conversation — don’t
          hesitate to reach out.
        </p>

        <div className="contact-icons">
          <a href="mailto:napolitanjoe@gmail.com" aria-label="Email">
            <img
              className="contact-icon"
              src="/images/email-icon.png"
              alt="Email"
            />
          </a>
          <a
            href="https://github.com/napolitanj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              className="contact-icon darkicon"
              src="/images/github-icon.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/joseph-napolitan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              className="contact-icon darkicon"
              src="/images/linkedin-icon.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

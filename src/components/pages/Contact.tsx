import "../../styles/Contact.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={`contact-container ${fadeIn ? "show" : ""}`}>
        <a href="mailto:napolitanjoe@gmail.com">Reach me here</a>
      </div>
    </>
  );
};

export default Contact;

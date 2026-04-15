import { useEffect, useRef, useState } from "react";
import "/src/styles/newsletter.css";

const KIT_FORM_URL = "https://app.kit.com/forms/9272089/subscriptions";
const DISMISSED_KEY = "newsletter-bar-dismissed";

const NewsletterStickyBar = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const dismissedRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY) === "1") return;

    const handleScroll = () => {
      if (dismissedRef.current) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= 0.4) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISSED_KEY, "1");
    dismissedRef.current = true;
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch(KIT_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email_address: email }).toString(),
      });
    } finally {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <div
      className={`newsletter-sticky-bar${visible ? " newsletter-sticky-bar--visible" : ""}`}
      aria-hidden={!visible}
    >
      <div className="newsletter-sticky-bar__inner">
        <span className="newsletter-sticky-bar__headline">
          Join the newsletter to support the project, know when new guides are
          published, and access exclusive content.
        </span>
        {status === "success" ? (
          <p className="newsletter-sticky-bar__confirm">
            You're in — You'll get links when new guides are posted.
          </p>
        ) : (
          <form
            className="newsletter-sticky-bar__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="email"
              className="newsletter-sticky-bar__input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              tabIndex={visible ? 0 : -1}
            />
            <button
              type="submit"
              className="newsletter-sticky-bar__btn"
              disabled={status === "loading"}
              tabIndex={visible ? 0 : -1}
            >
              {status === "loading" ? "Sending…" : "Sign Me Up"}
            </button>
          </form>
        )}
        <button
          className="newsletter-sticky-bar__dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss newsletter bar"
          tabIndex={visible ? 0 : -1}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default NewsletterStickyBar;

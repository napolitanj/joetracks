import { useState } from "react";
import "/src/styles/newsletter.css";

type Props = {
  headline?: string;
  subtext?: string;
  formUrl?: string;
};

const KIT_FORM_URL = "https://app.kit.com/forms/9272089/subscriptions";

export const NEWSLETTER_HEADLINE =
  "Get the Michigan routes and outdoor beta you can't find elsewhere.";
export const NEWSLETTER_DESCRIPTION =
  "Every month I scout, map, and document outdoor destinations in Northern Michigan: conditions, water sources, campsites, put-ins, all the details you need to get out there. Subscribers get updates I don't post anywhere else, plus discounts when paid guides launch.";

const NewsletterCapture = ({
  headline = NEWSLETTER_HEADLINE,
  subtext = NEWSLETTER_DESCRIPTION,
  formUrl,
}: Props) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch(formUrl ?? KIT_FORM_URL, {
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
    <div className="newsletter-capture content-wrapper">
      {status === "success" ? (
        <p className="newsletter-capture__confirm">
          You're in — check your inbox to confirm your email!
        </p>
      ) : (
        <>
          {headline && (
            <p className="newsletter-capture__headline">{headline}</p>
          )}
          {subtext && <p className="newsletter-capture__subtext">{subtext}</p>}
          <form
            className="newsletter-capture__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="email"
              className="newsletter-capture__input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="newsletter-capture__btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Sign Me Up"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewsletterCapture;

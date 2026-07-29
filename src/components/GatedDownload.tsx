import { useState } from "react";
import "/src/styles/gated-download.css";

type Props = {
  label: string;
  description: string;
  fileUrl: string;
  formUrl?: string;
};

const KIT_FORM_URL = "https://app.kit.com/forms/9272089/subscriptions";

const GatedDownload = ({ label, description, fileUrl, formUrl }: Props) => {
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
    <div className="gated-download content-wrapper">
      {status === "success" ? (
        <>
          <p className="gated-download__confirm">
            You're in — check your inbox to confirm your email.
          </p>
          <a
            href={fileUrl}
            download
            className="gated-download__btn gated-download__btn--file"
          >
            {label}
          </a>
        </>
      ) : (
        <>
          <p className="gated-download__headline">{label}</p>
          <p className="gated-download__subtext">{description}</p>
          <form
            className="gated-download__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="email"
              className="gated-download__input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="gated-download__btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Unlock Download"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default GatedDownload;

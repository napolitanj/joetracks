import { FormEvent, useEffect, useMemo, useState } from "react";
import "../../styles/Contact.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const links = useMemo(
    () => [
      {
        label: "Email",
        href: "mailto:napolitanjoe@gmail.com",
        icon: "/images/email-icon.png",
        external: false,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@joetracks",
        icon: "/images/youtube-icon.png",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/joseph-napolitan/",
        icon: "/images/linkedin-icon.png",
        external: true,
      },
    ],
    [],
  );

  const validate = (): FormErrors => {
    const next: FormErrors = {};

    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!emailPattern.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Message is required.";

    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSent(false);

    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(
      `JoeTracks contact from ${values.name.trim()}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\nMessage:\n${values.message.trim()}`,
    );

    window.location.href = `mailto:napolitanjoe@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setValues(initialValues);
  };

  return (
    <section className={`contact-page ${fadeIn ? "show" : ""}`}>
      <div className="contact-inner">
        <h1>Contact</h1>
        <p className="contact-subhead">
          Questions about guides, tool feedback, collaboration ideas, or
          corrections are all welcome.
        </p>

        <div className="contact-card">
          <h2>Best reasons to reach out</h2>
          <ul>
            <li>Questions about route details or planning assumptions.</li>
            <li>Bug reports or feature requests for site tools.</li>
            <li>Speaking, workshop, or collaboration inquiries.</li>
            <li>Edits, corrections, or updates to published guides.</li>
          </ul>
          <p className="contact-expectation">
            I usually reply within a few days.
          </p>
        </div>

        <div className="contact-links" aria-label="Contact channels">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="contact-link-card"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <img
                className="contact-icon"
                src={item.icon}
                alt={item.label}
                loading="lazy"
              />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <h2>Send a message</h2>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="form-error">{errors.message}</p>}

          <button type="submit" className="contact-submit">
            Send Message
          </button>
          {sent && (
            <p className="form-success">
              Thanks — your message is ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

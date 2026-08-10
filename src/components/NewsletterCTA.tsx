import "/src/styles/shared.css";
import NewsletterCapture, {
  NEWSLETTER_HEADLINE,
  NEWSLETTER_DESCRIPTION,
} from "./NewsletterCapture";

const NewsletterCTA = () => (
  <section className="content-wrapper row cnt-vrt cnt-hrz mobile-col">
    <div className="col cnt-vrt cnt-hrz">
      <h2>{NEWSLETTER_HEADLINE}</h2>
      <p>{NEWSLETTER_DESCRIPTION}</p>
    </div>
    <NewsletterCapture headline="" subtext="" />
  </section>
);

export default NewsletterCTA;

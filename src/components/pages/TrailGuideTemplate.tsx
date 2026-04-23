import { useParams, Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useState } from "react";
import { getGuideBySlug } from "../../data/guides/index";
import { Activity } from "../../types/Trailguide";
import "../../styles/TrailGuideTemplate.css";
import NewsletterCapture from "../NewsletterCapture";

const activityLabels: Record<Activity, string> = {
  hiking: "Hiking",
  fishing: "Fishing",
  hunting: "Hunting",
  paddling: "Canoe, Kayaking, SUP",
  skiing: "Skiing",
  "mountain-biking": "Mountain Biking",
  "wildlife-viewing": "Wildlife Viewing",
  "universal-access": "Universally Accessible",
  "no-hunting": "Not Hunting",
  swimming: "Swimming",
  camping: "Camping",
  cycling: "Cycling",
  birding: "Birding",
  pets: "Pets Allowed",
};

const difficultyLabel: Record<string, string> = {
  easy: "Easy",
  moderate: "Moderate",
  hard: "Hard",
};

export default function TrailGuideTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuideBySlug(slug ?? "");
  const [rulesOpen, setRulesOpen] = useState(false);

  if (!guide) {
    return (
      <div className="tg-not-found">
        <h2>Guide not found</h2>
        <Link to="/guides">← Back to Guides</Link>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{guide.title} — JoeTracks</title>
        <meta name="description" content={guide.shortDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "HikingTrail",
                name: guide.title,
                description: guide.shortDescription,
                url: `https://joetracks.com/trails/${guide.slug}`,
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: guide.location.lat,
                  longitude: guide.location.lng,
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: guide.parking,
                  addressRegion: "MI",
                  addressCountry: "US",
                },
                trailDifficulty: guide.stats.difficulty,
                publicAccess: true,
                ...(guide.stats.trailMiles && {
                  trailLength: {
                    "@type": "QuantitativeValue",
                    value: guide.stats.trailMiles,
                    unitCode: "SMI",
                  },
                }),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Guides",
                    item: "https://joetracks.com/guides",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: guide.title,
                    item: `https://joetracks.com/trails/${guide.slug}`,
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="tg-wrapper">
        {/* Hero */}
        <div className="tg-hero">
          <img
            src={guide.heroImage}
            alt={guide.title}
            className="tg-hero-img"
          />
          <div className="tg-hero-overlay">
            <div className="tg-hero-inner">
              <span className="tg-category-tag">
                {guide.category.charAt(0).toUpperCase() +
                  guide.category.slice(1)}
              </span>
              <h1 className="tg-title">{guide.title}</h1>
              <p className="tg-location">
                {guide.location.county} County &nbsp;·&nbsp;
                {guide.location.drivingMinutesFromTC} min from Traverse City
              </p>
            </div>
          </div>
        </div>

        <div className="tg-content">
          {/* Info Card */}
          <div className="tg-info-card">
            <div className="tg-info-top">
              {/* Stats 2x2 */}
              <div className="tg-stats-grid">
                {guide.stats.trailMiles && (
                  <div className="tg-stat">
                    <span className="tg-stat-value">
                      {guide.stats.trailMiles} mi
                    </span>
                    <span className="tg-stat-label">Total Trails</span>
                  </div>
                )}
                {guide.stats.suggestedRouteMiles && (
                  <div className="tg-stat">
                    <span className="tg-stat-value">
                      {guide.stats.suggestedRouteMiles} mi
                    </span>
                    <span className="tg-stat-label">Suggested Route</span>
                  </div>
                )}
                {guide.stats.acres && (
                  <div className="tg-stat">
                    <span className="tg-stat-value">{guide.stats.acres}</span>
                    <span className="tg-stat-label">Acres</span>
                  </div>
                )}
                <div className="tg-stat">
                  <span className="tg-stat-value">
                    {difficultyLabel[guide.stats.difficulty]}
                  </span>
                  <span className="tg-stat-label">Difficulty</span>
                </div>
                {guide.stats.elevationGain && (
                  <div className="tg-stat">
                    <span className="tg-stat-value">
                      {guide.stats.elevationGain} ft
                    </span>
                    <span className="tg-stat-label">Elevation Gain</span>
                  </div>
                )}
              </div>

              {/* Activities */}
              <div className="tg-activities-panel">
                <span className="tg-activities-label">Activities</span>
                <div className="tg-activities-wrap">
                  {guide.activities.map((a) => (
                    <span key={a} className="tg-activity-tag">
                      {activityLabels[a]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Getting There */}
            <div className="tg-getting-there">
              <span className="tg-gt-label">Getting There</span>
              <span className="tg-gt-address">{guide.parking}</span>
              {guide.parkingMapUrl && (
                <a
                  href={guide.parkingMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-gt-link"
                >
                  Open in Google Maps →
                </a>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="tg-map-block">
            <a
              href={guide.mapImage}
              target="_blank"
              rel="noopener noreferrer"
              className="tg-map-link"
            >
              <img
                src={guide.mapImage}
                alt={`${guide.title} trail map`}
                className="tg-map-img"
              />
              <span className="tg-map-hint">Click to open full map</span>
            </a>
          </div>

          {/* Narrative Sections */}
          {guide.sections.map((section, i) => (
            <div key={i} className="tg-section">
              <h2 className="tg-section-heading">{section.heading}</h2>
              <p className="tg-body">{section.body}</p>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt ?? ""}
                  className="tg-section-img"
                />
              )}
            </div>
          ))}

          {/* Know Before You Go */}
          <div className="tg-section tg-kbyg">
            <h2 className="tg-section-heading">Know Before You Go</h2>
            <ul className="tg-kbyg-list">
              {guide.knowBeforeYouGo.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Property Rules Accordion */}
          {guide.propertyRules && guide.propertyRules.length > 0 && (
            <div className="tg-section">
              <button
                className="tg-accordion-trigger"
                onClick={() => setRulesOpen(!rulesOpen)}
                aria-expanded={rulesOpen}
              >
                <span>Rules & Regulations</span>
                <span className="tg-accordion-icon">
                  {rulesOpen ? "−" : "+"}
                </span>
              </button>
              {rulesOpen && (
                <ul className="tg-rules-list">
                  {guide.propertyRules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Managed By */}
          {guide.managedBy && (
            <p className="tg-managed-by">Managed by {guide.managedBy}</p>
          )}
          {/* YouTube Embed */}
          {guide.youtubeEmbedId && (
            <div className="tg-section">
              <div className="tg-video-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${guide.youtubeEmbedId}`}
                  title={`${guide.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <NewsletterCapture
            headline="I publish several free guides every month."
            subtext="If you love free resources like these, subscribing to the newsletter is an easy way to support this project. Sign up to be notified when new guides are published and gain access to exclusive content."
          />
          <Link to="/guides" className="tg-back-link">
            ← Back to Guides
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
}

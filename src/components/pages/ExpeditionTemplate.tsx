import { useParams, Link } from "react-router-dom";
import { getExpeditionBySlug } from "../../data/expeditions/index";
import SEO from "../SEO";
import ChapterNav from "../expedition/ChapterNav";
import PhotoGallery from "../expedition/PhotoGallery";
import "../../styles/ExpeditionTemplate.css";

export default function ExpeditionTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const expedition = getExpeditionBySlug(slug ?? "");

  if (!expedition) {
    return (
      <div className="xp-not-found">
        <h2>Expedition not found</h2>
        <Link to="/about">← Back to About</Link>
      </div>
    );
  }

  const canonical = `https://joetracks.com/expeditions/${expedition.slug}`;

  const favorites = expedition.readerFavorites
    .map((favorite) => {
      const chapter = expedition.chapters.find((c) => c.slug === favorite.slug);
      return chapter ? { ...favorite, chapter } : null;
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);

  return (
    <>
      <SEO
        title={expedition.seoTitle ?? expedition.title}
        description={expedition.shortDescription}
        canonical={canonical}
        image={`https://joetracks.com${expedition.ogImage ?? expedition.heroImage}`}
        imageWidth={expedition.ogImage ? 1200 : undefined}
        imageHeight={expedition.ogImage ? 630 : undefined}
        ogType="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: expedition.title,
            description: expedition.shortDescription,
            url: canonical,
            image: `https://joetracks.com${expedition.heroImage}`,
            datePublished: expedition.chapters[0]?.date,
            dateModified: expedition.lastUpdated,
            author: {
              "@type": "Person",
              name: "Joe Napolitan",
              url: "https://joetracks.com/about",
            },
            publisher: {
              "@type": "Organization",
              name: "JoeTracks",
              url: "https://joetracks.com",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "About",
                item: "https://joetracks.com/about",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: expedition.title,
                item: canonical,
              },
            ],
          },
        ]}
      />

      <article className="xp-wrapper">
        <header className="xp-hero">
          {/* The hero is the LCP element: eager, prioritized, never lazy. */}
          <img
            src={expedition.heroImage}
            alt={expedition.title}
            className="xp-hero-img"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="xp-hero-overlay">
            <div className="xp-hero-inner">
              <span className="xp-eyebrow">Field Archive · {expedition.year}</span>
              <h1 className="xp-title">{expedition.title}</h1>
              <p className="xp-tagline">{expedition.tagline}</p>
            </div>
          </div>
        </header>

        <div className="xp-intro">
          {expedition.intro.map((para, i) => (
            <p key={i} className="xp-intro-body">
              {para}
            </p>
          ))}
          <p className="xp-source-note">{expedition.sourceNote}</p>
        </div>

        {favorites.length > 0 && (
          <section className="xp-favorites" aria-labelledby="reader-favorites">
            <h2 id="reader-favorites" className="xp-favorites-heading">
              Reader Favorites
            </h2>
            <p className="xp-favorites-note">{expedition.favoritesNote}</p>

            <div className="xp-favorites-grid">
              {favorites.map((favorite) => (
                <article key={favorite.slug} className="xp-fav-card">
                  {favorite.image && (
                    <a href={`#${favorite.slug}`} className="xp-fav-media">
                      <img
                        src={favorite.image}
                        alt={favorite.chapter.title}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  )}
                  <h3 className="xp-fav-title">
                    <a href={`#${favorite.slug}`}>{favorite.chapter.title}</a>
                  </h3>
                  <span className="xp-fav-meta">
                    {favorite.chapter.region
                      ? `${favorite.chapter.region} · ${favorite.chapter.dateLabel}`
                      : favorite.chapter.dateLabel}
                  </span>
                  <p className="xp-fav-blurb">{favorite.blurb}</p>
                  <a href={`#${favorite.slug}`} className="xp-fav-link">
                    Read it
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="xp-layout">
          <ChapterNav
            chapters={expedition.chapters}
            regionOrder={expedition.regionOrder}
          />

          <div className="xp-chapters">
            {expedition.chapters.map((chapter) => (
              <section key={chapter.slug} id={chapter.slug} className="xp-chapter">
                <div className="xp-chapter-head">
                  {chapter.region && (
                    <span className="xp-chapter-region">{chapter.region}</span>
                  )}
                  <h2 className="xp-chapter-title">{chapter.title}</h2>
                  <time className="xp-chapter-date" dateTime={chapter.date}>
                    {chapter.dateLabel}
                  </time>
                </div>

                {chapter.note && <p className="xp-chapter-note">{chapter.note}</p>}

                <div className="xp-chapter-body">
                  {chapter.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="xp-body"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>

                <PhotoGallery images={chapter.images} />
              </section>
            ))}
          </div>
        </div>

        <div className="vrt-spc" />
        <Link to="/about" className="xp-back-link">
          ← Back to About
        </Link>
      </article>
    </>
  );
}

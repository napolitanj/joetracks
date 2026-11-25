import { useEffect, useMemo, useState } from "react";
import "../../styles/MichiganSkiTracker.css";
import { useFavorites } from "../../hooks/useFavorites";
import SEO from "../SEO";
import MichiganSnowMap from "../MichiganSnowMap";

const API_BASE = "https://api.joetracks.com";
const FAVORITES_KEY = "joetracks_ski_favorites";

const TABS = [
  "All Regions",
  "Northern LP",
  "Southern LP",
  "Western UP",
  "Eastern UP",
  "★ Favorites",
] as const;

type Tab = (typeof TABS)[number];

type Tier =
  "STORM" | "POWDER" | "GOOD" | "REFRESH" | "FIRM" | "THIN" | "THAW" | "RAIN";

/**
 * One resort as the API returns it.
 *
 * Everything past snow24h and snow48h is optional on purpose. The page has to
 * keep working between a backend deploy and the cache refresh that follows it,
 * when the stored payload is still the previous shape. A missing field drops
 * its element rather than rendering "undefined".
 */
type Forecast = {
  resort: {
    id: string;
    name: string;
    region: string;
    lat: number;
    lon: number;
  };
  snow24h: number;
  snow48h: number;
  tier?: Tier;
  story?: string;
  snowpackTrend?: "building" | "holding" | "losing" | null;
  links?: { nwsPage?: string };
};

type AllResponse = {
  resorts: Record<string, Forecast>;
  /**
   * A one-line statewide assessment. The API still produces it, but it is not
   * rendered: it leaned on figures we no longer trust enough to publish.
   * Bring it back once there is a source worth summarising.
   */
  summary?: string;
  _lastUpdated?: number | null;
};

const TIER_LABEL: Record<Tier, string> = {
  STORM: "Storm",
  POWDER: "Powder",
  GOOD: "Good",
  REFRESH: "Refresh",
  FIRM: "Firm",
  THIN: "Thin",
  THAW: "Thaw",
  RAIN: "Rain",
};

function formatInches(value: number | null | undefined): string {
  if (value === null || value === undefined) return "—";
  if (value <= 0) return "—";
  return `${value}"`;
}

export default function MichiganSkiTracker() {
  const [activeTab, setActiveTab] = useState<Tab>("All Regions");
  const [data, setData] = useState<AllResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  const { toggleFavorite, isFavorite } = useFavorites(FAVORITES_KEY);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setFailed(false);

      try {
        const response = await fetch(`${API_BASE}/api/ski/all`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const json: AllResponse = await response.json();
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setFailed(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  /** Sorted by what is coming, because that is the question people arrive with. */
  const rows = useMemo(() => {
    const all = Object.values(data?.resorts ?? {});

    const filtered =
      activeTab === "All Regions"
        ? all
        : activeTab === "★ Favorites"
          ? all.filter((f) => isFavorite(f.resort.id))
          : all.filter((f) => f.resort.region === activeTab);

    return [...filtered].sort(
      (a, b) =>
        b.snow48h - a.snow48h ||
        b.snow24h - a.snow24h ||
        a.resort.name.localeCompare(b.resort.name),
    );
  }, [data, activeTab, isFavorite]);

  const allResorts = useMemo(
    () =>
      Object.values(data?.resorts ?? {}).map((f) => ({
        id: f.resort.id,
        name: f.resort.name,
        lat: f.resort.lat,
        lon: f.resort.lon,
      })),
    [data],
  );

  const lastUpdated = data?._lastUpdated
    ? new Date(data._lastUpdated).toLocaleString()
    : null;

  const emptyMessage =
    activeTab === "★ Favorites"
      ? "No favorites yet. Tap the star next to any resort to add it here."
      : "No resorts in this region yet. Try another tab.";

  return (
    <>
      <SEO
        title="Michigan Ski Tracker | JoeTracks"
        description="Live Michigan ski resort snowfall, snow depth and conditions tracker powered by NOAA forecasts and the NOHRSC snow analysis."
        canonical="https://joetracks.com/michigan-ski-tracker"
        image="https://joetracks.com/images/ski-tracker-preview.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Michigan Ski Tracker",
            description:
              "Live Michigan ski resort snowfall, snow depth and conditions tracker powered by NOAA forecasts.",
            url: "https://joetracks.com/michigan-ski-tracker",
            image: "https://joetracks.com/images/ski-tracker-preview.png",
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Michigan Ski Tracker",
            applicationCategory: "SportsApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            url: "https://joetracks.com/michigan-ski-tracker",
            image: "https://joetracks.com/images/ski-tracker-preview.png",
            author: { "@type": "Person", name: "Joe Napolitan" },
            publisher: { "@type": "Organization", name: "JoeTracks" },
          },
        ]}
      />

      <section className="tool-page">
        <div className="tool-hero">
          <div className="tool-hero-inner">
            <h1 className="tool-hero-title">Michigan Ski Tracker</h1>

            <p className="tool-hero-subhead">
              Forecast snowfall and conditions for every ski area in Michigan,
              ranked by where the snow is actually falling.
            </p>

            {/*
              Collapsed by default. Repeat visitors come here for the table,
              not the methodology, but the limits of the data have to be
              reachable in one click rather than not stated at all.
            */}
            <details className="mst-about">
              <summary className="mst-about-summary">
                <svg
                  className="mst-about-icon"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5" />
                  <path d="M12 7.5v.5" />
                </svg>
                Accuracy and where this data comes from
              </summary>

              <ul className="mst-about-list">
                <li>
                  Forecasts are parsed from National Weather Service gridpoint
                  data for each resort&rsquo;s mid-mountain coordinates, not the
                  nearest town. These snowfall forecasts are as accurate as
                  NOAA's instruments allow. Updated twice daily. Click the name
                  of each resort to open the full NOAA forecast.
                </li>
                <li>
                  No base depth is shown. Use the map below as a starting point
                  for determining coverage. NOAA&rsquo;s National Operational
                  Hydrologic Remote Sensing Center models snow depth nationwide
                  each day from satellite, aircraft and ground measurements.
                  That resolves which part of the state is holding snow, not how
                  much is on a single hill, so check a resort&rsquo;s website
                  for a reported base.
                </li>
                <li>
                  This tracks weather, not operations. Some resorts may be
                  closed, check their website before committing to a trip.
                </li>
              </ul>
            </details>
          </div>
        </div>

        <div className="tool-hero-inner">
          {allResorts.length > 0 && <MichiganSnowMap resorts={allResorts} />}
        </div>

        <div className="tool-hero-inner">
          <div className="mst-controls">
            <div
              className="mst-tabs"
              role="tablist"
              aria-label="Filter resorts"
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`mst-tab${activeTab === tab ? " mst-tab--active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mst-updated">
              {lastUpdated ? `Updated ${lastUpdated}` : "Updated —"}
            </div>
          </div>
        </div>

        <div className="tool-hero-inner">
          <div className="tool-results-card">
            {loading && (
              <div className="tool-loading" role="status" aria-live="polite">
                Loading the latest forecast…
              </div>
            )}

            {!loading && failed && (
              <div className="tool-empty">
                The forecast is not available right now. It refreshes twice
                daily, so try again shortly.
              </div>
            )}

            {!loading && !failed && rows.length === 0 && (
              <div className="tool-empty">{emptyMessage}</div>
            )}

            {!loading && !failed && rows.length > 0 && (
              <>
                <div className="mst-head" aria-hidden="true">
                  <span className="mst-head-cond">Status</span>
                  <span className="mst-head-resort">Resort</span>
                  <span className="mst-head-num">Next 24h</span>
                  <span className="mst-head-num">Next 48h</span>
                </div>

                <ul className="mst-list">
                  {rows.map((f) => {
                    const id = f.resort.id;
                    const favorited = isFavorite(id);
                    const tier = f.tier;

                    // Region only. No depth figure is published: the national
                    // snow-depth model is wrong by multiples at resort scale, so
                    // the conditions line reports direction of change instead.
                    const meta = f.resort.region;

                    return (
                      <li
                        key={id}
                        className={`mst-row${tier ? ` mst-row--${tier.toLowerCase()}` : ""}`}
                      >
                        {tier && (
                          <span
                            className={`mst-chip mst-chip--${tier.toLowerCase()}`}
                          >
                            {TIER_LABEL[tier]}
                          </span>
                        )}

                        <div className="mst-main">
                          <div className="mst-headline">
                            <button
                              type="button"
                              className={`mst-star${favorited ? " mst-star--active" : ""}`}
                              onClick={() => toggleFavorite(id)}
                              aria-pressed={favorited}
                              aria-label={
                                favorited
                                  ? `Remove ${f.resort.name} from favorites`
                                  : `Add ${f.resort.name} to favorites`
                              }
                            >
                              {favorited ? "★" : "☆"}
                            </button>

                            {f.links?.nwsPage ? (
                              <a
                                className="mst-resort"
                                href={f.links.nwsPage}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {f.resort.name}
                              </a>
                            ) : (
                              <span className="mst-resort">
                                {f.resort.name}
                              </span>
                            )}
                          </div>

                          <p className="mst-meta">{meta}</p>
                          {f.story && <p className="mst-story">{f.story}</p>}
                        </div>

                        <div className="mst-numbers">
                          <div className="mst-number">
                            <span className="mst-number-value">
                              {formatInches(f.snow24h)}
                            </span>
                            <span className="mst-number-label">Next 24h</span>
                          </div>
                          <div className="mst-number">
                            <span className="mst-number-value">
                              {formatInches(f.snow48h)}
                            </span>
                            <span className="mst-number-label">Next 48h</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

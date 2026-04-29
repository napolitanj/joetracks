import { useState } from "react";
import "../../styles/RiverTracker.css";
import { RIVERS, getConditionFromPercentile } from "../../data/riverConfig";
import { useRiverData } from "./useRiverData";
import { useFavorites } from "./useFavorites";
import RiverStatusBadge from "./RiverStatusBadge";
import NewsletterCapture from "../NewsletterCapture";
import SEO from "../SEO";

type Tab =
  | "★ Favorites"
  | "Northern LP"
  | "Central LP"
  | "Southern LP"
  | "Upper Peninsula";

const TABS: Tab[] = [
  "★ Favorites",
  "Northern LP",
  "Central LP",
  "Southern LP",
  "Upper Peninsula",
];

const TAB_TO_REGION: Record<Tab, string | null> = {
  "★ Favorites": null,
  "Northern LP": "Northern Lower Peninsula",
  "Central LP": "Central Lower Peninsula",
  "Southern LP": "Southern Lower Peninsula",
  "Upper Peninsula": "Upper Peninsula",
};

export default function RiverTracker() {
  const [activeTab, setActiveTab] = useState<Tab>("Northern LP");
  const [search, setSearch] = useState("");
  const { data, loading, error, lastUpdated, refresh } = useRiverData(RIVERS);
  const { toggleFavorite, isFavorite } = useFavorites();

  const isSearching = search.trim() !== "";

  const filtered = (() => {
    if (isSearching) {
      const q = search.toLowerCase();
      return RIVERS.filter((r) => r.name.toLowerCase().includes(q));
    }
    if (activeTab === "★ Favorites") {
      return RIVERS.filter((r) => isFavorite(r.id));
    }
    const region = TAB_TO_REGION[activeTab];
    return region ? RIVERS.filter((r) => r.region === region) : [];
  })();

  function handleTabClick(tab: Tab) {
    setActiveTab(tab);
    setSearch("");
  }

  const emptyMessage =
    activeTab === "★ Favorites" && !isSearching
      ? "No favorites yet — tap the star next to any river to add it here."
      : "No rivers found.";

  return (
    <>
      <SEO
        title="Michigan River Conditions | Live Flow & Gauge Data — JoeTracks"
        description="Real-time river flow rates and gauge heights for Michigan paddling rivers, updated continuously from USGS gauging stations. Compares current conditions to historical averages for every date of the year."
        canonical="https://joetracks.com/river-conditions"
        image="https://joetracks.com/images/og-river-tracker.png"
        ogType="website"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Michigan River Conditions | Live Flow & Gauge Data",
            description:
              "Real-time river flow rates and gauge heights for Michigan paddling rivers, updated continuously from USGS gauging stations.",
            url: "https://joetracks.com/river-conditions",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Michigan River Tracker",
            description:
              "Live river conditions tool for Michigan paddlers — flow rates and gauge heights from USGS Water Services, compared to historical daily averages.",
            url: "https://joetracks.com/river-conditions",
            applicationCategory: "SportsApplication",
            operatingSystem: "Web",
            author: {
              "@type": "Person",
              name: "Joe Napolitan",
              url: "https://joetracks.com",
            },
            publisher: {
              "@type": "Organization",
              name: "JoeTracks",
              logo: {
                "@type": "ImageObject",
                url: "https://joetracks.com/images/logo-lockup-teal.png",
              },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://joetracks.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tools",
                item: "https://joetracks.com/tools",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Michigan River Tracker",
                item: "https://joetracks.com/river-conditions",
              },
            ],
          },
        ]}
      />
      <section className="tool-page">
      <div className="tool-hero">
        <div className="tool-hero-inner">
          <h1 className="tool-hero-title">Michigan River Conditions</h1>
          <p className="tool-hero-subhead">
            Michigan River conditions built from live flow and gauge height
            readings across the state — pulled directly from USGS Water
            Services.
          </p>
          <ul className="tool-cred">
            <li>
              Data sourced from the USGS National Water Information System.
            </li>
            <li>Readings update continuously as gauges report.</li>
            <li>Sort by region or search for a specific river.</li>
          </ul>
          <p className="ski-note">
            Tap any river to view the full USGS gauge page. Click the star to
            store any river as a favorite in your web browser. Gauging stations
            without at least 20 historical data to generate average conditions
            are marked as "No Data."
          </p>
          <div className="content-wrapper row cnt-vrt cnt-hrz mobile-col">
            <div className="col cnt-vrt cnt-hrz">
              <h2>Enjoying this tool?</h2>
              <p>Support this project for free.</p>
            </div>
            <NewsletterCapture
              headline="I publish new guides and tools weekly."
              subtext="Subscribing to the newsletter costs nothing and supports me in building free community resources."
            />
          </div>
        </div>
      </div>

      <div className="tool-hero-inner">
        <div className="rt-controls">
          <div className="rt-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab && !isSearching}
                className={[
                  "rt-tab",
                  activeTab === tab && !isSearching ? "rt-tab--active" : "",
                  isSearching ? "rt-tab--muted" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rt-search-wrap">
            <input
              type="search"
              className="rt-search"
              placeholder="Filter rivers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Filter rivers by name"
            />
            {isSearching && (
              <p className="rt-search-hint">
                Searching all regions — clear to return to{" "}
                <strong>{activeTab}</strong>
              </p>
            )}
          </div>

          <div className="rt-updated">
            {lastUpdated
              ? `Last updated: ${lastUpdated.toLocaleString()}`
              : "Last updated: —"}
          </div>
        </div>
      </div>

      <div className="tool-hero-inner">
        <div className="tool-results-card">
          {loading && (
            <div className="tool-loading" role="status" aria-live="polite">
              Loading river conditions…
            </div>
          )}

          {!loading && error && (
            <div className="rt-error">
              <p>{error}</p>
              <button onClick={refresh} className="rt-retry">
                Retry
              </button>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="tool-empty">{emptyMessage}</div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="rt-table-container">
              <table className="tool-table">
                <thead>
                  <tr>
                    <th>River</th>
                    <th>Flow (CFS)</th>
                    <th>Gauge Height</th>
                    <th>
                      Conditions
                      <span className="rt-col-sub">
                        vs. today's historical avg
                      </span>
                    </th>
                    <th className="rt-star-cell" aria-label="Favorites" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((river) => {
                    const reading = data[river.gaugeId];
                    const condition = getConditionFromPercentile(
                      reading?.cfs ?? null,
                      reading?.percentiles ?? null,
                    );
                    const favorited = isFavorite(river.id);

                    return (
                      <tr key={river.id}>
                        <td>
                          <a
                            className="river-link"
                            href={river.usgsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {river.name}
                          </a>
                        </td>
                        <td>
                          {reading?.cfs != null ? `${reading.cfs} cfs` : "—"}
                        </td>
                        <td>
                          {reading?.ft != null ? `${reading.ft} ft` : "—"}
                        </td>
                        <td>
                          <RiverStatusBadge condition={condition} />
                        </td>
                        <td className="rt-star-cell">
                          <button
                            className={`rt-star${favorited ? " rt-star--active" : ""}`}
                            onClick={() => toggleFavorite(river.id)}
                            aria-label={
                              favorited
                                ? "Remove from favorites"
                                : "Add to favorites"
                            }
                            aria-pressed={favorited}
                          >
                            {favorited ? "★" : "☆"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="rt-disclaimer">
          Check river conditions before paddling. Gauge readings reflect
          conditions at the gauge location only. Always scout unfamiliar water.
        </p>
      </div>
    </section>
    </>
  );
}

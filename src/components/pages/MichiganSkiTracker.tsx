import { useEffect, useState } from "react";
import "../../styles/MichiganSkiTracker.css";
import { RESORTS } from "../../data/michiganResorts";
import SEO from "../SEO";

const REGIONS = [
  "All Regions",
  "Northern LP",
  "Southern LP",
  "Western UP",
  "Eastern UP",
];

export default function MichiganSkiTracker() {
  const [regionFilter, setRegionFilter] = useState("All Regions");
  const [loading, setLoading] = useState(true);
  const [forecastById, setForecastById] = useState<Record<string, any>>({});

  const API_BASE = "https://api.joetracks.com";

  // Apply region filter
  const filtered =
    regionFilter === "All Regions"
      ? RESORTS
      : RESORTS.filter((r) => r.region === regionFilter);

  const timestamps = Object.values(forecastById)
    .map((f: any) => f?._lastUpdated)
    .filter(Boolean);

  const lastUpdated =
    timestamps.length > 0
      ? new Date(Math.max(...timestamps)).toLocaleString()
      : null;

  useEffect(() => {
    async function load() {
      setLoading(true);

      const requests = RESORTS.map((resort) =>
        fetch(`${API_BASE}/api/ski/forecast/${resort.id}`)
          .then((r) => r.json())
          .then((data) => ({ id: resort.id, data }))
          .catch(() => ({ id: resort.id, data: { error: true } })),
      );

      const results = await Promise.all(requests);

      const map: Record<string, any> = {};
      for (const item of results) {
        map[item.id] = item.data;
      }

      setForecastById(map);
      console.log("Fetched per-resort forecasts:", map);

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return <div>Loading ski forecasts…</div>;
  }

  return (
    <>
      <SEO
        title="Michigan Ski Tracker | JoeTracks"
        description="Live Michigan ski resort snowfall and weather tracker powered by NOAA forecasts to support better Great Lakes trip planning."
        canonical="https://joetracks.com/michigan-ski-tracker"
        image="https://joetracks.com/images/ski-tracker-preview.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Michigan Ski Tracker",
            description:
              "Live Michigan ski resort snowfall and weather tracker powered by NOAA forecasts.",
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
            author: {
              "@type": "Person",
              name: "Joe Napolitan",
            },
            publisher: {
              "@type": "Organization",
              name: "JoeTracks",
            },
            // TODO: replace with a dedicated 1200x630 OG image for richer social previews.
          },
        ]}
      />
      <div className="ski-wrapper">
        <h1>Michigan Ski Tracker</h1>
      {/* ----- REGION FILTER UI ----- */}
      <div className="region-controls">
        <label>
          Region:
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            {REGIONS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="ski-note">
        Tap any resort to view the detailed NOAA forecast.
      </div>
      {lastUpdated && (
        <div className="last-updated">Last updated: {lastUpdated}</div>
      )}

      {/* ----- SKI TABLE ----- */}
      <div className="ski-table-container">
        <table className="ski-table">
          <thead>
            <tr>
              <th>Resort</th>
              <th>24h Snow</th>
              <th>48h Snow</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((resort) => {
              const fc = forecastById[resort.id];

              if (!fc || fc.error) {
                return (
                  <tr key={resort.id}>
                    <td className="resort-link disabled">{resort.name}</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                );
              }

              return (
                <tr key={resort.id}>
                  <td>
                    <a
                      className="resort-link"
                      href={fc.links?.nwsPage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resort.name}
                    </a>
                  </td>
                  <td className={fc.snow24h >= 10 ? "snow-alert" : ""}>
                    {fc.snow24h ?? "-"}{" "}
                    {fc.snow24h > 0 && <span className="snow-icon">❄️</span>}
                  </td>

                  <td className={fc.snow48h >= 20 ? "snow-alert" : ""}>
                    {fc.snow48h ?? "-"}{" "}
                    {fc.snow48h > 0 && <span className="snow-icon">❄️</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

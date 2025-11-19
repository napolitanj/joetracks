import { useEffect, useState } from "react";
import "../../styles/MichiganSkiTracker.css";
import { RESORTS } from "../../data/michiganResorts";

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

  useEffect(() => {
    async function load() {
      setLoading(true);

      const requests = RESORTS.map((resort) =>
        fetch(`${API_BASE}/api/ski/forecast/${resort.id}`)
          .then((r) => r.json())
          .then((data) => ({ id: resort.id, data }))
          .catch(() => ({ id: resort.id, data: { error: true } }))
      );

      const results = await Promise.all(requests);

      const map: Record<string, any> = {};
      for (const item of results) {
        map[item.id] = item.data;
      }

      setForecastById(map);
      console.log("Fetched map:", map);

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return <div>Loading ski forecasts…</div>;
  }

  return (
    <div className="ski-container">
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

      {/* ----- SKI TABLE ----- */}
      <table className="ski-table">
        <thead>
          <tr>
            <th>Resort</th>
            <th>24h Snow</th>
            <th>72h Snow</th>
            <th>Forecast</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((resort) => {
            const fc = forecastById[resort.id];

            if (!fc || fc.error) {
              return (
                <tr key={resort.id}>
                  <td>{resort.name}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Unavailable</td>
                </tr>
              );
            }

            return (
              <tr key={resort.id}>
                <td>{resort.name}</td>
                <td>{fc.snow24h ?? "-"}</td>
                <td>{fc.snow72h ?? "-"}</td>
                <td>
                  {fc?.links?.nwsPage ? (
                    <a href={fc.links.nwsPage} target="_blank" rel="noreferrer">
                      NOAA Forecast
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

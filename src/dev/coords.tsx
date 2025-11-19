import { useState, useEffect } from "react";
import { RESORTS } from "../data/michiganResorts";

export default function CoordTool() {
  const [coords, setCoords] = useState(() => {
    const saved = localStorage.getItem("coords");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("coords", JSON.stringify(coords));
  }, [coords]);

  const update = (id: string, field: "lat" | "lon", value: string) => {
    setCoords((prev: any) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const generateOutput = () => {
    let output = "export const RESORTS = [\n";
    for (const r of RESORTS) {
      const lat = coords[r.id]?.lat || 0;
      const lon = coords[r.id]?.lon || 0;
      output += `  { id: "${r.id}", name: "${r.name}", region: "${r.region}", lat: ${lat}, lon: ${lon} },\n`;
    }
    output += "];";
    navigator.clipboard.writeText(output);
    alert("Copied final file to clipboard!");
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Coordinate Entry Tool</h1>
      <p>Paste lat/lon for each resort. Your progress is auto-saved.</p>

      {RESORTS.map((r) => (
        <div
          key={r.id}
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <strong style={{ width: "220px" }}>{r.name}</strong>

          <input
            placeholder="lat"
            style={{ width: "110px" }}
            value={coords[r.id]?.lat || ""}
            onChange={(e) => update(r.id, "lat", e.target.value)}
          />

          <input
            placeholder="lon"
            style={{ width: "110px" }}
            value={coords[r.id]?.lon || ""}
            onChange={(e) => update(r.id, "lon", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={generateOutput}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Copy Final TS File
      </button>
    </div>
  );
}

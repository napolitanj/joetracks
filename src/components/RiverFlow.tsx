import { useEffect, useState } from "react";

type FlowStatus = "low" | "moderate" | "high" | "flood" | "unknown";

type FlowData = {
  cfs: number | null;
  timestamp: string | null;
  status: FlowStatus;
};

const GAUGE_ID = "04126970";

const getStatus = (cfs: number): FlowStatus => {
  if (cfs < 300) return "low";
  if (cfs < 420) return "moderate";
  if (cfs < 650) return "high";
  return "flood";
};

const STATUS_LABELS: Record<FlowStatus, string> = {
  low: "Low",
  moderate: "Ideal",
  high: "High",
  flood: "Flood Stage",
  unknown: "Unavailable",
};

const STATUS_COLORS: Record<FlowStatus, string> = {
  low: "#e0a830",
  moderate: "#3a9e5f",
  high: "#d9622b",
  flood: "#ff1900",
  unknown: "#888",
};

const RiverFlow = () => {
  const [flow, setFlow] = useState<FlowData>({
    cfs: null,
    timestamp: null,
    status: "unknown",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlow = async () => {
      try {
        const res = await fetch(
          `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${GAUGE_ID}&parameterCd=00060`,
        );
        const data = await res.json();
        const timeSeries = data.value.timeSeries[0];
        const latest = timeSeries.values[0].value[0];
        const cfs = parseFloat(latest.value);
        const timestamp = new Date(latest.dateTime).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          timeZoneName: "short",
        });
        setFlow({ cfs, timestamp, status: getStatus(cfs) });
      } catch {
        setFlow({ cfs: null, timestamp: null, status: "unknown" });
      } finally {
        setLoading(false);
      }
    };
    fetchFlow();
  }, []);

  const color = STATUS_COLORS[flow.status];

  return (
    <div className="river-flow-widget">
      <span className="river-flow-label">Current Flow</span>
      {loading ? (
        <span className="river-flow-value">—</span>
      ) : (
        <>
          <span className="river-flow-value">
            {flow.cfs !== null ? `${flow.cfs} CFS` : "Unavailable"}
          </span>
          <span className="river-flow-status" style={{ color }}>
            {STATUS_LABELS[flow.status]}
          </span>
          {flow.timestamp && (
            <span className="river-flow-timestamp">
              Updated {flow.timestamp}
            </span>
          )}
        </>
      )}
      <a
        href={`https://waterdata.usgs.gov/monitoring-location/${GAUGE_ID}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="river-flow-source"
      >
        USGS Gauge Data
      </a>
    </div>
  );
};

export default RiverFlow;

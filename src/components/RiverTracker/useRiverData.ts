import { useCallback, useEffect, useState } from "react";
import { RiverConfig } from "../../data/riverConfig";

export type Percentiles = {
  p10: number;
  p25: number;
  p75: number;
  p90: number;
};

export type GaugeReading = {
  cfs: number | null;
  ft: number | null;
  timestamp: string | null;
  percentiles: Percentiles | null;
};

export type RiverData = Record<string, GaugeReading>;

export interface UseRiverDataResult {
  data: RiverData;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  refresh: () => void;
}

const USGS_IV_URL = "https://waterservices.usgs.gov/nwis/iv/";
const USGS_STAT_URL = "https://waterservices.usgs.gov/nwis/stat/";
const USGS_CHUNK_SIZE = 10;

const STATS_CACHE_KEY = "joetracks_river_stats";
const STATS_CACHE_TTL_MS = 31 * 24 * 60 * 60 * 1000; // 31 days

// ---------------------------------------------------------------------------
// Stats cache helpers
// ---------------------------------------------------------------------------

function loadStatsCache(
  rivers: RiverConfig[],
): Record<string, Percentiles | null> | null {
  try {
    const raw = localStorage.getItem(STATS_CACHE_KEY);
    if (!raw) return null;
    const { timestamp, stats } = JSON.parse(raw);
    if (Date.now() - timestamp > STATS_CACHE_TTL_MS) return null;
    // Invalidate if any current river is missing from cache
    if (rivers.some((r) => !(r.gaugeId in stats))) return null;
    return stats;
  } catch {
    return null;
  }
}

function saveStatsCache(stats: Record<string, Percentiles | null>) {
  try {
    localStorage.setItem(
      STATS_CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), stats }),
    );
  } catch {
    // Storage full or unavailable — non-fatal, app still works without cache
  }
}

// ---------------------------------------------------------------------------
// URL builders
// ---------------------------------------------------------------------------

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
}

function buildLiveUrl(chunk: RiverConfig[]): string {
  const sites = chunk.map((r) => r.gaugeId).join(",");
  return `${USGS_IV_URL}?format=json&sites=${sites}&parameterCd=00060,00065&siteStatus=active`;
}

function buildSingleStatsUrl(gaugeId: string): string {
  const url = `${USGS_STAT_URL}?format=rdb&sites=${gaugeId}&parameterCd=00060&statReportType=daily&statType=all`;
  console.log("[RT] stats URL:", url);
  return url;
}

// ---------------------------------------------------------------------------
// Parsers
// ---------------------------------------------------------------------------

function parseLiveSeries(timeSeries: unknown[]): RiverData {
  const result: RiverData = {};

  for (const series of timeSeries) {
    try {
      const s = series as Record<string, unknown>;
      const sourceInfo = s.sourceInfo as Record<string, unknown>;
      const siteCode = sourceInfo.siteCode as Array<{ value: string }>;
      const gaugeId = siteCode[0].value;

      const variable = s.variable as Record<string, unknown>;
      const variableCode = variable.variableCode as Array<{ value: string }>;
      const paramCode = variableCode[0].value;

      const values = s.values as Array<{
        value: Array<{ value: string; dateTime: string }>;
      }>;
      const entry = values?.[0]?.value?.[0];

      if (!result[gaugeId]) {
        result[gaugeId] = {
          cfs: null,
          ft: null,
          timestamp: null,
          percentiles: null,
        };
      }

      if (!entry) continue;

      const raw = parseFloat(entry.value);
      // USGS uses -999999 as a no-data sentinel
      const numeric = Number.isFinite(raw) && raw !== -999999 ? raw : null;

      if (paramCode === "00060") {
        result[gaugeId].cfs = numeric;
        result[gaugeId].timestamp ??= entry.dateTime;
      } else if (paramCode === "00065") {
        result[gaugeId].ft = numeric;
        result[gaugeId].timestamp ??= entry.dateTime;
      }
    } catch {
      // skip malformed series entries
    }
  }

  return result;
}

// Parses a single-gauge RDB response from /nwis/stat/.
// RDB layout: '#' comment lines, header row, column-type row, then data rows.
// USGS sends \r\n line endings — split on /\r?\n/ to handle both.
// Returns percentiles for today's calendar day, or null if unavailable.
function parseOneGaugeRdb(text: string): Percentiles | null {
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const todayDay = now.getDate();

  const lines = text
    .split(/\r?\n/)
    .filter((l) => !l.startsWith("#") && l.trim() !== "");

  if (lines.length < 3) return null;

  const headers = lines[0].split("\t");
  const col = (name: string) => headers.indexOf(name);

  const monthIdx = col("month_nu");
  const dayIdx = col("day_nu");
  const countIdx = col("count_nu");
  const p10Idx = col("p10_va");
  const p25Idx = col("p25_va");
  const p75Idx = col("p75_va");
  const p90Idx = col("p90_va");

  if (
    [monthIdx, dayIdx, countIdx, p10Idx, p25Idx, p75Idx, p90Idx].some(
      (i) => i === -1,
    )
  ) {
    return null;
  }

  // lines[1] is the column-type row ("5s", "15s", …) — data starts at index 2
  for (let i = 2; i < lines.length; i++) {
    try {
      const cols = lines[i].split("\t");
      if (
        Number(cols[monthIdx]) !== todayMonth ||
        Number(cols[dayIdx]) !== todayDay
      )
        continue;

      // Require at least 20 years of history for reliable percentiles
      if (Number(cols[countIdx]) < 20) return null;

      const p10 = parseFloat(cols[p10Idx]);
      const p25 = parseFloat(cols[p25Idx]);
      const p75 = parseFloat(cols[p75Idx]);
      const p90 = parseFloat(cols[p90Idx]);

      return [p10, p25, p75, p90].every(Number.isFinite)
        ? { p10, p25, p75, p90 }
        : null;
    } catch {
      // skip malformed rows
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function nulledOut(rivers: RiverConfig[]): RiverData {
  return Object.fromEntries(
    rivers.map((r) => [
      r.gaugeId,
      { cfs: null, ft: null, timestamp: null, percentiles: null },
    ]),
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useRiverData(rivers: RiverConfig[]): UseRiverDataResult {
  const [data, setData] = useState<RiverData>(() => nulledOut(rivers));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = useCallback(
    async (signal?: AbortSignal) => {
      setLoading(true);
      setError(null);

      try {
        const ivChunks = chunkArray(rivers, USGS_CHUNK_SIZE);

        // --- Live IV data (always fresh) ---
        const ivChunkResults = await Promise.all(
          ivChunks.map((chunk) =>
            fetch(buildLiveUrl(chunk), { signal }).then((r) => {
              if (!r.ok)
                throw new Error(`USGS live data responded with ${r.status}`);
              return r.json();
            }),
          ),
        );

        const liveTimeSeries: unknown[] = ivChunkResults.flatMap(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (json) => ((json as any)?.value?.timeSeries ?? []) as unknown[],
        );

        const liveMap = parseLiveSeries(liveTimeSeries);

        // --- Historical stats (cached for 31 days) ---
        let statsMap = loadStatsCache(rivers);

        if (!statsMap) {
          // Cache miss — fetch all gauges (~once per month per visitor)
          const statsTexts = await Promise.all(
            rivers.map((river) =>
              river.gaugeId
                ? fetch(buildSingleStatsUrl(river.gaugeId), { signal })
                    .then((r) => (r.ok ? r.text() : null))
                    .catch(() => null)
                : Promise.resolve(null),
            ),
          );

          statsMap = Object.fromEntries(
            rivers.map((r, i) => [
              r.gaugeId,
              statsTexts[i] ? parseOneGaugeRdb(statsTexts[i]!) : null,
            ]),
          );

          saveStatsCache(statsMap);
        }

        // --- Merge live + stats ---
        const filled: RiverData = nulledOut(rivers);
        for (const river of rivers) {
          filled[river.gaugeId] = {
            ...(liveMap[river.gaugeId] ?? {
              cfs: null,
              ft: null,
              timestamp: null,
              percentiles: null,
            }),
            percentiles: statsMap[river.gaugeId] ?? null,
          };
        }

        setData(filled);
        setLastUpdated(new Date());
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(
          err instanceof Error ? err.message : "Failed to fetch river data",
        );
        setData(nulledOut(rivers));
      } finally {
        setLoading(false);
      }
    },
    // rivers is the module-level RIVERS constant — referentially stable
    [rivers],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [fetchData]);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, lastUpdated, refresh };
}

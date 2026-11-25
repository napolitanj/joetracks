import { useState } from "react";
import {
  DEPTH_BANDS,
  MICHIGAN_PATH,
  VIEW_H,
  VIEW_W,
  project,
  snowRasterUrl,
} from "../data/michiganMap";

export type MapResort = {
  id: string;
  name: string;
  lat: number;
  lon: number;
};

type Props = {
  resorts: MapResort[];
};

type Active = { id: string; name: string; xPct: number; yPct: number };

/**
 * Statewide modelled snow depth, with each resort marked.
 *
 * This is the honest way to show NOHRSC data. It is a broad-scale model, and a
 * shaded region communicates that, where a per-resort figure with a decimal
 * implied a precision it never had.
 *
 * The raster, the outline and the markers share one coordinate space because
 * the bounding box is ours (see data/michiganMap.ts), so there is no mapping
 * library and no projection maths at runtime.
 *
 * DEPTH ONLY. The service also publishes snow water equivalent, and this
 * component used to offer a toggle for it. It was removed deliberately. Water
 * equivalent is a runoff metric, it answers no question a skier has, and the
 * service's ramp paints its second band (0.04 to 0.2 inches) a confident blue,
 * so a trace dusting read as real snowpack. data/michiganMap.ts still carries
 * the layer id and the correct bands if it is ever wanted back.
 *
 * LAYOUT. Three pieces that regroup by width: the state, the key (heading plus
 * legend), and the prose. Narrow stacks all three. Wide puts the key and the
 * prose in separate columns beside the map, which is what keeps a 1100px card
 * from ending in a third of a page of white space.
 *
 * The name label is an HTML element positioned over the SVG rather than SVG
 * text, because inside a 1000-unit viewBox a readable font-size would make a
 * long resort name span half the state.
 */
export default function MichiganSnowMap({ resorts }: Props) {
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState<Active | null>(null);

  // NOHRSC runs daily, so a date keeps the browser from holding yesterday's
  // image without defeating caching outright.
  const cacheKey = new Date().toISOString().slice(0, 10);

  const marks = resorts.map((r) => {
    const { x, y } = project(r.lat, r.lon);
    return { ...r, x, y, xPct: (x / VIEW_W) * 100, yPct: (y / VIEW_H) * 100 };
  });

  return (
    <section className="mst-map" aria-labelledby="mst-map-title">
      <div className="mst-map-body">
        <div className="mst-map-figure">
          <svg
            className="mst-map-svg"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            role="img"
            aria-label={`Modelled snow depth across Michigan, with ${resorts.length} ski areas marked`}
            onMouseLeave={() => setActive(null)}
          >
            {/* Clip the national raster to the state so a neighbour's snow does
                not read as Michigan's. */}
            <defs>
              <clipPath id="mst-mi-clip">
                <path d={MICHIGAN_PATH} />
              </clipPath>
            </defs>

            <path d={MICHIGAN_PATH} className="mst-map-fill" />

            {!failed && (
              <image
                href={snowRasterUrl("depth", cacheKey)}
                x={0}
                y={0}
                width={VIEW_W}
                height={VIEW_H}
                clipPath="url(#mst-mi-clip)"
                onError={() => setFailed(true)}
                preserveAspectRatio="none"
              />
            )}

            <path d={MICHIGAN_PATH} className="mst-map-outline" />

            {marks.map((m) => {
              const isActive = active?.id === m.id;
              const show = () =>
                setActive({
                  id: m.id,
                  name: m.name,
                  xPct: m.xPct,
                  yPct: m.yPct,
                });

              return (
                <g
                  key={m.id}
                  className={`mst-map-pin${isActive ? " mst-map-pin--active" : ""}`}
                  tabIndex={0}
                  role="button"
                  aria-label={m.name}
                  onMouseEnter={show}
                  onFocus={show}
                  onBlur={() => setActive(null)}
                  onClick={() => (isActive ? setActive(null) : show())}
                >
                  {/* Generous invisible hit area. The visible dot is only a few
                      pixels across, which is not a finger target. */}
                  <circle
                    cx={m.x}
                    cy={m.y}
                    r={34}
                    className="mst-map-pin-hit"
                  />
                  <circle
                    cx={m.x}
                    cy={m.y}
                    r={9}
                    className="mst-map-pin-halo"
                  />
                  <circle
                    cx={m.x}
                    cy={m.y}
                    r={4.5}
                    className="mst-map-pin-dot"
                  />
                </g>
              );
            })}
          </svg>

          {active && (
            <span
              className={`mst-map-label${active.xPct > 62 ? " mst-map-label--left" : ""}`}
              style={{ left: `${active.xPct}%`, top: `${active.yPct}%` }}
            >
              {active.name}
            </span>
          )}
        </div>

        <div className="mst-map-side">
          {/* The heading stays outside the failure branch: it is the section's
              accessible name via aria-labelledby. */}
          <div className="mst-map-key">
            <h2 className="mst-map-title" id="mst-map-title">
              Snow on the ground
            </h2>

            {!failed && (
              <ul className="mst-map-legend">
                {DEPTH_BANDS.map((band) => (
                  <li key={band.label}>
                    <span
                      className="mst-map-swatch"
                      style={{ background: band.color }}
                      aria-hidden="true"
                    />
                    {band.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mst-map-text">
            {failed ? (
              <p className="mst-map-note">
                The snow analysis image is unavailable right now. Resort
                positions are still shown.
              </p>
            ) : (
              <>
                <p className="mst-map-note">
                  Inches of snow on the ground, sourced from the daily models
                  run by NOAA&rsquo;s National Operational Hydrologic Remote
                  Sensing Center. Readings are broad in scope, so specific
                  resorts might see more or less snow than the map shows. This
                  map is best used to get a general understanding of snow
                  coverage across the state.
                </p>

                <p className="mst-map-hint">
                  Tap or hover a dot for the resort name.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

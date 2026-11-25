/**
 * Geometry for the statewide snow map.
 *
 * The NOHRSC snow analysis is served as an ArcGIS map service with an `export`
 * operation that renders an arbitrary bounding box at an arbitrary pixel size.
 * Because WE choose the bounding box, we know exactly which coordinate lands on
 * which pixel, so placing the state outline and the resort markers over the
 * raster is arithmetic rather than a projection problem. No mapping library,
 * no tiles, no runtime dependency.
 *
 * Everything below is locked together and must change as a set:
 *   - BBOX_3857 is what we ask NOHRSC to render.
 *   - VIEW_W / VIEW_H is the SVG viewBox, matching that bbox's aspect ratio.
 *   - MICHIGAN_PATH was generated for exactly this bbox.
 *   - project() maps a lat/lon into the same space.
 *
 * Change the bounding box and the outline no longer lines up with the image.
 *
 * The outline is derived from the US Census cartographic boundary files via the
 * public-domain us-atlas dataset, reprojected to Web Mercator and simplified to
 * the rings visible at display size.
 */

export const VIEW_W = 1000;
export const VIEW_H = 1134;

/** Degrees. The visible window: Michigan plus a margin. */
const WEST = -91.0;
const EAST = -82.0;
const SOUTH = 41.4;
const NORTH = 48.6;

/** The same window in Web Mercator metres, which is what the export wants. */
const BBOX_3857 = "-10130074,5071522,-9128198,6207260";

const SERVICE =
  "https://mapservices.weather.noaa.gov/raster/rest/services/snow/NOHRSC_Snow_Analysis/MapServer/export";

/**
 * Group layer 0 is modelled snow depth, group layer 4 is snow water equivalent.
 *
 * Each group holds a Boundary, a Footprint and an Image sublayer (3 and 7 are
 * the two Image rasters). Asking for the group renders byte-identical output to
 * asking for its Image, verified against the service, so these stay as the
 * group ids. Do not "fix" them to 3 and 7.
 *
 * The two rasters do NOT share a scale. Snow depth is banded 0.39-787 inches,
 * water equivalent 0.04-79 inches, and they use different colour ramps, so each
 * needs its own legend. Showing one layer's legend over the other's image is
 * wrong twice over: wrong colours, and numbers off by a factor of ten.
 */
export const MAP_LAYERS = { depth: 0, swe: 4 } as const;
export type MapLayer = keyof typeof MAP_LAYERS;

/**
 * URL for the rendered raster.
 *
 * `cacheKey` should change about as often as the data does. NOHRSC runs daily,
 * so a date string keeps browsers from holding yesterday's image without
 * defeating caching entirely.
 */
export function snowRasterUrl(layer: MapLayer, cacheKey: string): string {
  const params = new URLSearchParams({
    bbox: BBOX_3857,
    bboxSR: "3857",
    imageSR: "3857",
    size: `${VIEW_W},${VIEW_H}`,
    layers: `show:${MAP_LAYERS[layer]}`,
    format: "png32",
    transparent: "true",
    f: "image",
    _d: cacheKey,
  });

  return `${SERVICE}?${params}`;
}

const mercatorY = (lat: number) =>
  Math.log(Math.tan(((90 + lat) * Math.PI) / 360)) * (180 / Math.PI);

const Y_BOTTOM = mercatorY(SOUTH);
const Y_TOP = mercatorY(NORTH);

/** A coordinate's position inside the viewBox. */
export function project(lat: number, lon: number): { x: number; y: number } {
  return {
    x: ((lon - WEST) / (EAST - WEST)) * VIEW_W,
    y: VIEW_H - ((mercatorY(lat) - Y_BOTTOM) / (Y_TOP - Y_BOTTOM)) * VIEW_H,
  };
}

/**
 * Depth bands as NOHRSC renders them, in inches, with the colours read from the
 * service's own legend so the key matches the image exactly.
 *
 * The published scale runs to 787 inches for the western mountains. Only the
 * bands Michigan can realistically produce are listed; anything deeper than the
 * last entry would be a first for the state.
 */
export type Band = { label: string; color: string };

/**
 * Legend bands, read from the service's own legend endpoint rather than
 * eyeballed, so the swatches match the rendered pixels exactly.
 *
 * Both tables drop the service's lowest class, which renders transparent, and
 * stop where Michigan does: depth above 59 inches and water above 6 inches are
 * rolled into the top band rather than carrying four more classes nobody here
 * will see.
 */
/**
 * Why these numbers are odd: 0.4, 3.9, 9.8, 39, 59.
 *
 * The service bands the raster in centimetres and labels the result in inches,
 * so every boundary is a round metric figure converted: 1cm, 5cm, 10cm, 25cm,
 * 50cm, 100cm, 150cm. 0.4 is one centimetre, and it is simply where the raster
 * first paints anything. Below it the service renders transparent.
 *
 * NOHRSC's own interactive viewer uses a native-inch scale instead (trace-2,
 * 2-4, 4-8, 8-12, 12-16, 16-20, 20-30 ...), which reads far better. We cannot
 * borrow it. The legend has to describe the image we are actually showing, and
 * that image is rasterised server-side with this service's symbology baked in.
 * Relabelling these swatches with the viewer's progression would put the wrong
 * number beside every colour.
 */
export const DEPTH_BANDS: Band[] = [
  { label: "0.4–2", color: "#abc1bf" },
  { label: "2–4", color: "#66c1c4" },
  { label: "4–10", color: "#63a9cb" },
  { label: "10–20", color: "#5079c8" },
  { label: "20–39", color: "#3c3fc2" },
  { label: "39–59", color: "#5720c3" },
  { label: "59+", color: "#7d01bb" },
];

/** Water equivalent runs about a tenth of depth, and on its own colour ramp. */
export const SWE_BANDS: Band[] = [
  { label: "0.04–0.2", color: "#80a5c0" },
  { label: "0.2–0.4", color: "#5f7eb5" },
  { label: "0.4–1", color: "#4448ab" },
  { label: "1–2", color: "#462ca7" },
  { label: "2–4", color: "#501490" },
  { label: "4–6", color: "#8722a4" },
  { label: "6+", color: "#9b3394" },
];

/**
 * Kept, though the component shows depth only. Water equivalent was removed
 * from the UI on purpose: it answers no question a skier has, and this ramp
 * paints 0.04 inches of water a confident blue, so a trace read as snowpack.
 * Everything needed to restore the toggle is here and verified.
 */
export const LAYER_BANDS: Record<MapLayer, Band[]> = {
  depth: DEPTH_BANDS,
  swe: SWE_BANDS,
};

export const MICHIGAN_PATH =
  "M705.3 448.2L708.5 445.9L712.1 454.1L738.0 462.7L731.3 470.7L722.1 468.2L716.5 459.9L705.3 448.2ZM622.8 461.7L624.8 456.2L627.6 458.9L622.8 461.7ZM608.4 453.4L616.8 458.8L615.2 463.7L607.6 458.5L608.4 453.4ZM596.9 490.4L599.6 483.8L600.8 474.4L603.2 472.3L603.6 464.5L610.8 465.5L610.4 477.1L612.0 488.4L604.4 494.4L596.9 490.4ZM588.9 468.4L594.1 467.3L592.1 474.6L589.3 474.5L588.9 468.4ZM568.5 514.9L573.7 517.2L574.1 525.2L568.5 514.9ZM548.2 562.8L550.6 559.7L558.2 563.1L555.8 576.1L549.0 569.0L548.2 562.8ZM538.2 583.2L542.6 577.3L545.0 583.6L538.2 583.2ZM478.8 487.4L486.8 496.1L483.6 499.1L482.0 494.2L476.4 488.3L478.8 487.4ZM464.1 1080.4L476.0 1071.7L486.8 1060.6L501.5 1027.0L515.1 1008.2L522.7 990.9L526.7 978.1L530.7 955.3L530.3 947.8L532.6 936.5L532.2 915.3L529.9 891.5L525.5 875.9L511.5 845.7L507.1 833.4L502.3 815.2L495.6 799.5L495.6 793.2L504.3 779.7L507.1 773.1L507.5 762.9L503.9 745.2L498.4 733.2L499.9 729.0L507.9 722.2L517.5 702.1L525.9 687.2L527.5 670.6L531.1 652.6L526.7 637.6L527.1 633.2L537.8 627.4L545.8 625.4L548.2 612.9L547.4 602.9L551.4 598.1L556.6 600.5L563.0 589.7L570.1 594.4L576.9 592.7L580.1 588.3L583.7 576.7L587.7 574.6L593.7 561.8L598.1 555.5L601.6 556.4L606.4 551.7L607.6 557.0L600.0 561.3L598.9 567.0L603.6 577.9L594.5 588.9L599.6 586.3L599.6 596.3L597.3 597.2L594.1 608.6L596.9 621.4L600.0 621.6L607.6 602.1L608.8 588.9L614.0 586.2L610.8 607.5L604.8 613.4L602.4 622.4L608.0 624.3L611.2 615.6L614.0 613.8L622.8 595.6L624.8 585.1L624.4 577.5L626.0 566.5L623.6 554.9L625.6 542.2L632.4 535.5L636.3 535.1L643.5 528.6L650.7 526.4L660.7 527.4L671.0 525.5L675.8 522.8L675.4 518.3L662.3 516.0L656.7 509.6L653.5 494.0L659.9 483.8L665.1 481.9L673.0 472.5L672.2 468.2L665.1 464.5L689.0 466.6L691.8 459.9L716.1 473.8L726.5 481.8L731.7 479.0L736.0 481.2L741.2 479.8L754.0 484.5L763.6 496.1L764.8 503.9L771.5 507.5L784.7 507.0L787.9 508.2L799.5 518.7L808.6 519.6L822.2 529.3L833.8 528.5L842.1 539.1L846.5 542.5L842.9 546.1L848.9 559.1L853.3 563.2L858.9 581.2L850.9 578.4L844.5 573.8L838.5 579.3L840.1 594.1L844.9 600.1L853.3 603.6L855.3 611.5L855.7 624.7L858.5 629.7L856.9 639.2L853.7 648.2L854.5 656.9L852.5 671.8L852.1 688.0L847.3 690.0L841.7 698.5L832.2 698.2L829.0 702.2L825.8 716.6L824.2 731.9L816.6 732.6L813.4 735.1L813.4 741.6L796.7 742.4L791.5 747.0L787.9 757.1L785.9 773.5L782.7 779.1L787.9 791.1L794.3 795.3L797.9 791.0L799.9 796.0L807.8 798.8L813.0 803.8L817.0 801.7L828.2 785.8L833.8 785.8L836.5 782.5L833.8 775.8L837.3 770.0L840.9 758.4L842.5 765.1L850.1 761.0L852.1 757.1L843.7 753.0L853.3 753.4L857.7 750.2L859.7 744.8L868.8 743.5L882.4 739.7L886.0 733.8L898.4 729.8L902.7 733.8L911.9 737.1L917.9 742.3L924.7 758.6L928.7 763.5L931.5 776.3L933.5 803.8L940.2 827.2L941.8 859.6L945.8 878.3L953.0 892.7L953.8 899.0L949.4 905.0L946.6 923.9L948.2 930.0L943.4 944.7L941.8 953.4L934.6 961.9L928.7 961.4L923.9 966.9L924.3 958.3L920.7 954.8L924.7 952.7L930.7 944.7L925.1 941.3L919.1 941.9L911.5 946.4L908.7 950.5L912.3 954.0L913.1 959.9L907.1 959.3L902.7 966.1L903.1 977.0L900.4 986.9L893.6 993.8L881.6 997.0L874.4 1009.5L875.2 1025.9L874.0 1031.5L868.0 1034.7L867.6 1043.7L861.3 1048.8L858.9 1053.8L853.7 1054.3L850.9 1062.6L846.5 1064.0L839.7 1073.3L841.7 1083.4L838.5 1084.5L838.5 1084.5L804.2 1085.9L737.6 1088.5L688.2 1090.0L688.2 1090.0L688.2 1080.4L653.5 1080.6L578.9 1080.7L499.9 1080.6L464.1 1080.4ZM194.1 120.8L202.4 111.0L240.3 90.8L243.1 91.1L260.3 77.1L272.6 71.1L275.0 72.7L286.2 68.5L285.8 72.5L281.0 74.8L269.0 86.3L269.0 90.6L259.1 98.4L238.7 106.0L222.0 115.4L222.8 118.2L231.9 118.2L208.4 128.6L201.2 128.2L194.1 120.8ZM64.8 335.2L72.4 329.7L77.2 329.2L92.8 322.4L107.9 317.7L120.3 307.0L127.9 298.0L134.2 294.3L147.4 291.9L153.4 294.3L164.9 290.5L173.7 290.9L194.5 280.5L206.4 267.3L215.2 266.6L226.8 263.4L230.7 257.9L232.7 250.8L242.7 241.7L248.3 239.4L260.3 227.9L269.4 224.7L277.8 216.8L282.2 209.2L290.2 201.8L313.3 189.8L335.6 186.3L355.6 187.3L364.7 192.8L365.1 199.2L360.8 198.5L354.0 201.8L346.4 200.0L338.0 201.4L340.0 208.0L327.3 216.1L315.3 229.4L307.7 232.2L305.7 242.6L302.9 241.4L300.1 248.7L294.6 252.3L292.6 261.7L287.8 268.4L284.2 269.3L279.4 292.2L281.8 299.4L278.2 304.3L282.6 303.9L290.6 291.8L291.8 285.6L294.6 287.4L306.1 276.3L317.3 270.2L312.5 277.9L307.7 281.3L301.7 292.0L313.7 280.3L324.1 277.8L329.7 279.6L344.4 279.5L350.4 283.7L353.6 282.6L360.4 287.4L363.6 292.9L369.5 291.4L378.3 300.1L379.5 308.6L386.3 315.5L388.7 322.0L394.3 328.8L401.8 330.9L401.0 341.9L405.4 345.8L415.8 347.8L432.5 346.5L442.5 340.5L446.9 341.6L452.5 351.6L457.3 355.3L464.9 355.9L468.0 349.5L474.4 350.5L478.0 355.7L479.6 346.2L476.8 338.8L483.2 336.0L486.0 340.5L483.6 348.3L490.4 351.9L500.7 341.9L516.7 333.3L540.2 318.0L544.6 320.9L568.9 315.0L587.3 317.3L601.2 317.7L613.2 316.7L637.9 304.9L647.5 303.2L659.5 304.2L672.2 302.2L663.5 313.9L662.7 332.7L663.5 339.0L660.3 341.6L663.9 348.7L670.2 349.8L673.8 347.6L676.2 351.2L682.2 350.7L689.0 354.6L702.5 347.8L707.7 348.4L712.1 354.8L711.7 359.6L721.7 355.7L724.5 356.7L728.5 347.7L736.0 344.4L745.2 347.0L749.6 345.8L752.8 340.3L763.6 341.0L765.6 345.2L761.6 359.1L764.4 375.7L764.8 388.8L753.2 389.1L750.0 398.0L756.0 399.7L758.0 396.8L764.0 397.3L767.1 402.6L774.7 405.2L769.5 410.7L779.1 421.0L783.9 421.2L791.9 427.4L795.1 422.1L800.6 426.9L803.8 423.4L797.5 409.6L803.0 411.7L819.4 409.9L824.2 412.0L829.8 424.5L836.1 428.7L832.2 437.5L826.6 440.3L815.8 434.9L803.4 437.1L791.1 431.3L786.7 433.0L775.9 432.9L765.2 429.7L741.2 433.3L736.0 437.1L721.3 427.6L715.3 421.0L710.1 422.0L704.9 417.9L700.9 423.5L701.7 430.5L695.8 434.9L696.2 441.1L699.8 449.7L695.0 452.5L685.4 446.7L684.2 442.5L675.8 437.4L673.8 433.3L665.1 424.5L649.9 418.1L644.7 419.1L631.6 412.4L624.4 413.1L619.2 409.9L617.2 412.6L609.6 411.1L599.6 421.4L592.9 431.5L589.3 432.6L576.5 429.4L567.3 431.5L564.2 434.5L565.0 439.2L555.8 434.1L547.4 431.8L537.8 433.7L533.8 432.2L524.7 435.5L519.5 441.2L518.7 449.9L515.1 459.7L509.5 459.2L506.7 464.5L498.0 466.6L495.6 472.9L490.4 473.3L490.4 479.4L485.6 480.7L487.2 489.0L479.2 484.6L475.6 479.2L480.4 475.5L480.8 470.8L485.2 466.6L485.6 461.1L490.8 461.7L496.8 449.7L495.6 443.8L490.8 442.5L483.6 452.7L468.4 449.5L469.6 456.4L464.5 462.9L462.5 470.5L450.5 474.8L448.5 478.5L446.1 473.1L447.3 465.6L445.7 456.4L442.5 452.1L438.5 454.7L436.5 471.1L437.7 472.7L425.4 480.3L415.0 497.9L408.2 517.7L400.6 526.6L392.7 541.8L376.3 565.4L378.7 569.8L378.7 569.8L371.1 567.9L367.9 561.6L362.8 557.8L362.0 553.9L367.9 537.9L372.3 531.3L371.5 526.7L367.1 523.3L360.8 529.7L350.0 531.1L350.0 531.1L350.0 531.1L350.0 531.1L347.2 524.7L350.0 521.4L348.8 516.2L354.0 511.6L356.4 506.2L355.2 499.8L358.4 490.4L352.8 480.1L357.6 478.3L354.4 472.3L349.2 469.9L346.8 465.3L337.2 464.8L333.6 458.9L325.3 461.4L318.1 455.2L324.9 448.1L322.1 445.2L322.1 438.8L306.1 432.2L300.5 434.1L291.0 427.6L286.2 429.7L277.8 426.8L277.0 423.4L266.2 423.6L265.0 428.0L259.5 428.0L257.9 424.1L251.1 421.9L246.3 423.6L212.0 404.1L97.5 372.2L97.9 368.5L86.8 345.3L76.0 343.1L72.0 339.8L72.0 339.8L72.0 339.8L72.0 339.8L67.2 340.6L64.8 335.2Z";

import { TrailGuide } from "../../types/Trailguide";
import { timbersGuide } from "./timbers-recreation-area";
import { valleyOfTheGiantsGuide } from "./valley-of-the-giants";

export const trailGuides: TrailGuide[] = [
  timbersGuide,
  valleyOfTheGiantsGuide,
];

export function getGuideBySlug(slug: string): TrailGuide | undefined {
  return trailGuides.find((g) => g.slug === slug);
}

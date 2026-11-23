import { Expedition } from "../../types/Expedition";
import { americanWest2013 } from "./american-west-2013";
import { appalachianTrail2014 } from "./appalachian-trail-2014";

export const expeditions: Expedition[] = [
  americanWest2013,
  appalachianTrail2014,
];

export function getExpeditionBySlug(slug: string): Expedition | undefined {
  return expeditions.find((e) => e.slug === slug);
}

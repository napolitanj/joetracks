import { ManagingOrgKey } from "../data/managingOrganizations";

export type GuideCategory =
  | "hiking"
  | "paddling"
  | "skiing"
  | "biking"
  | "mountain-biking";
export type Difficulty = "easy" | "moderate" | "hard";
export type GuideTier = "free" | "subscriber" | "paid";
export type Activity =
  | "hiking"
  | "backpacking"
  | "fishing"
  | "birding"
  | "hunting"
  | "no-hunting"
  | "paddling"
  | "skiing"
  | "snowshoeing"
  | "mountain-biking"
  | "wildlife-viewing"
  | "universal-access"
  | "swimming"
  | "camping"
  | "cycling"
  | "pets";

export interface GuideSection {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface Trailhead {
  label: string;
  mapUrl: string;
  lat: number;
  lng: number;
  recommended?: boolean;
}

export interface GuideDownload {
  label: string;
  fileUrl: string;
  description?: string; // shown for gated downloads
  gated?: boolean; // default false = plain public link
}

export interface TrailGuide {
  slug: string;
  title: string;
  shortDescription: string; // used on guide cards + meta description
  category: GuideCategory;
  tier: GuideTier;
  location: {
    lat: number;
    lng: number;
    county: string;
    drivingMinutesFromTC: number;
  };
  stats: {
    trailMiles: number;
    suggestedRouteMiles?: number;
    acres?: number;
    elevationGain?: number; // skiing/biking, skip for hiking
    difficulty: Difficulty;
  };
  heroImage: string;
  mapImage: string;
  // single-trailhead guides use `parking` (+ optional `parkingMapUrl`);
  // multi-trailhead guides use `trailheads` instead.
  parking?: string;
  parkingMapUrl?: string;
  trailheads?: Trailhead[];
  sections: GuideSection[]; // the route narrative, split into headed chunks
  knowBeforeYouGo: string[]; // 4-6 tight bullets
  managedBy?: string;
  lastUpdated: string; // "2025-07-01"
  activities: Activity[];
  propertyRules: string[];
  downloads?: GuideDownload[];
  youtubeEmbedId?: string;
  managedByKey: ManagingOrgKey;
}

export type GuideCategory = "hiking" | "paddling" | "skiing" | "biking";
export type Difficulty = "easy" | "moderate" | "hard";
export type GuideTier = "free" | "subscriber" | "paid";
export type Activity =
  | "hiking"
  | "fishing"
  | "birding"
  | "hunting"
  | "no-hunting"
  | "paddling"
  | "skiing"
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
  parking: string;
  sections: GuideSection[]; // the route narrative, split into headed chunks
  knowBeforeYouGo: string[]; // 4-6 tight bullets
  managedBy?: string;
  lastUpdated: string; // "2025-07-01"
  activities: Activity[];
  propertyRules: string[];
  parkingMapUrl?: string;
  youtubeEmbedId?: string;
}

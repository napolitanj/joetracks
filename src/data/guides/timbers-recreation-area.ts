import { TrailGuide } from "../../types/Trailguide";

export const timbersGuide: TrailGuide = {
  slug: "timbers-recreation-area",
  title: "Timbers Recreation Area",
  shortDescription:
    "A 250-acre preserve along Long Lake with 4.5 miles of trails, lake access, and a universally accessible loop.",
  category: "hiking",
  tier: "free",
  location: {
    lat: 44.7223,
    lng: -85.5754,
    county: "Grand Traverse",
    drivingMinutesFromTC: 12,
  },
  stats: {
    trailMiles: 4.5,
    suggestedRouteMiles: 2.1,
    acres: 250,
    difficulty: "easy",
  },
  heroImage:
    "/images/conservancy-natural-areas/timbers-recreation-area/timbers-recreation-area-banner.webp",
  mapImage:
    "/images/conservancy-natural-areas/timbers-recreation-area/timbers-recreation-area-map.png",
  parking: "8195 Timbers Trail, Traverse City, MI 49685",
  parkingMapUrl: "https://maps.app.goo.gl/2nNxBwukikhUUiNB9",
  activities: [
    "hiking",
    "fishing",
    "hunting",
    "paddling",
    "skiing",
    "wildlife-viewing",
    "universal-access",
  ],
  sections: [
    {
      heading: "The Area",
      body: "Timbers Recreation Area sits on 250 acres along the north shore of Long Lake, about 12 miles west of Traverse City. The property holds an unusual amount of water for its size — nearly 9,000 feet of frontage across three lakes, including 2,000 feet on Long Lake and the entirety of Fern Lake, a 20-acre undeveloped lake contained within the preserve boundary. The terrain is a mix of mature northern hardwood forest, open fields, and riparian wetland, with the old barn structures from the original estate still standing near the trailhead. The property has a layered history: it was once the private summer estate of meatpacking magnate J. Ogden Armour, then a Girl Scout camp for over 50 years, before the Grand Traverse Regional Land Conservancy and Long Lake Township secured it for permanent public use in 2014.",
    },
    {
      heading: "The Route",
      body: "The trail network uses 15 numbered intersection markers that correspond to the map. The suggested 2.1-mile route is the main loop — follow the Universally Accessible trail south from the parking area past the historic barn complex near markers 1 and 2, continuing along the west shore of Fern Lake with a long view of Long Lake opening up near marker 4. The fishing dock is just ahead at marker 5. From there the loop circles back north through the interior of the property, returning to the trailhead. For a shorter outing, skip the northern section entirely and simply loop around Fern Lake. In winter, a portion of the trail system is groomed for cross-country skiing — the UA trail, the connector from markers 3 to 10 to 13, and the segment from 5 to 6.",
    },
  ],
  knowBeforeYouGo: [
    "Access is via the parking area on Timbers Trail off North Long Lake Road only — do not enter from adjacent properties.",
    "The Universally Accessible trail is open year-round; outer trails may be soft or flooded in early spring.",
    "Hunting is permitted in season — wear blaze orange during deer season if hiking the outer trails.",
    "No fee, no permit required. Day use only.",
    "Cell service is limited on the south end of the property near Page Lake.",
    "Stop Aquatic Hitchhikers: clean, drain, and dry all watercraft before and after launching on any of the three lakes.",
  ],
  propertyRules: [
    "Property is owned by Long Lake Township and managed with GTRLC. Contact Long Lake Township at (231) 946-2249 with issues.",
    "Access via the parking area on Timbers Trail off North Long Lake Road only — do not enter from other areas.",
    "Stop Aquatic Hitchhikers: clean, drain, and dry all watercraft and equipment before launching or leaving any body of water.",
    "Dispose of bait in the trash — do not release bait into the water.",
    "Special use permits are required for research or other non-recreational activities.",
  ],
  managedBy: "Long Lake Township / Grand Traverse Regional Land Conservancy",
  lastUpdated: "2026-04-17",
};

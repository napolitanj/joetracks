import { TrailGuide } from "../../types/Trailguide";

// TODO: whaleback-natural-area-banner.webp is a placeholder. Drop in a real
// hero photo at public/images/conservancy-natural-areas/whaleback-natural-area/
export const whalebackNaturalAreaGuide: TrailGuide = {
  slug: "whaleback-natural-area",
  title: "Whaleback Natural Area",
  shortDescription:
    "A 40-acre bluff rising 300 feet over Lake Michigan near Leland, with a steep half-mile climb rewarded by sweeping views of the Manitou Passage and a rare stand of thimbleberry.",
  category: "hiking",
  tier: "free",
  location: {
    lat: 45.0060305,
    lng: -85.7699294,
    county: "Leelanau",
    drivingMinutesFromTC: 45,
  },
  stats: {
    trailMiles: 1.25,
    suggestedRouteMiles: 1.6,
    acres: 40,
    difficulty: "moderate",
  },
  heroImage:
    "/images/conservancy-natural-areas/whaleback-natural-area/whaleback-natural-area-banner.webp",
  mapImage:
    "/images/conservancy-natural-areas/whaleback-natural-area/whaleback-natural-area-map.png",
  parking: "1639 N Manitou Trail, Leland, MI 49654",
  parkingMapUrl: "https://maps.app.goo.gl/uaojNFMnq3JLqjNk6",
  activities: [
    "hiking",
    "snowshoeing",
    "hunting",
    "pets",
    "wildlife-viewing",
  ],
  sections: [
    {
      heading: "The Bluff",
      body: "Whaleback earns its name honestly. It's a humpbacked moraine of earth and stone left behind by a retreating glacier some 10,000 years ago, rising over 300 feet above the shoreline just south of Leland. It's one of the largest undeveloped stretches of shoreline left in Leelanau County, with roughly 1,200 feet of Lake Michigan frontage folded into its 40 acres. Mature hemlocks and oaks form a cathedral-like canopy over the bluff top, sheltering nesting bald eagles that are regularly spotted riding the air currents off the water. The understory holds its own surprises: a small patch of thimbleberry grows along the north stretch of the bluff top, a plant almost never found this far from Lake Superior. Spring brings a dense wildflower show, including trillium, Dutchman's breeches, jack-in-the-pulpit, and trout lily, though it also brings sweet woodruff, an invasive but sweet-smelling groundcover the Conservancy is working to manage.",
    },
    {
      heading: "The Route",
      body: "Glacial Hill Trail climbs steadily from the parking area, gaining most of its elevation in a steep half-mile push. There's a bench partway up if you need it, and note that the land flanking the access trail is private property, so stay on the marked path. At the top, the trail levels out into a loop system through second-growth hardwoods: follow Manitou Lookout Loop out to the observation platform for the payoff view, a wide look at the Manitou Passage, Good Harbor Bay, Pyramid Point, and the Manitou Islands, especially good at sunset. From there, Bluff Edge Trail continues north along the top of the bluff to a second, smaller overlook toward Leland, and Birch Valley Loop closes out the northern end of the route through denser woods before you loop back to Glacial Hill Trail and descend the way you came.",
    },
  ],
  knowBeforeYouGo: [
    "The access trail is steep, about a half-mile of steady climbing to reach the bluff top loop.",
    "Dogs are welcome on leash. Leashes are required on the trail; dogs may be off-leash on the beach.",
    "The parking lot holds about six vehicles. It's small and fills up, especially near sunset.",
    "Land on both sides of the access trail is private property. Stay on the marked trail at all times.",
    "Hunting is permitted in season, so wear blaze orange if hiking during deer season.",
    "No fee, no permit required. Plan for about an hour round trip.",
  ],
  propertyRules: [
    "Property is owned and managed by the Leelanau Conservancy.",
    "Stay on the marked trail. Sections of the access trail cross private property to reach the natural area on top.",
    "Dogs must be leashed on the trail; leashed or off-leash pets are allowed on the beach.",
    "Pack out what you pack in. There is no trash service at the trailhead.",
    "Do not disturb or remove plants, wildlife, or natural features, including the thimbleberry patch.",
  ],
  managedBy: "The Leelanau Conservancy",
  managedByKey: "leelanauConservancy",

  lastUpdated: "2026-07-29",
};

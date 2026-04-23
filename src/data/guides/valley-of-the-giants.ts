import { TrailGuide } from "../../types/Trailguide";

export const valleyOfTheGiantsGuide: TrailGuide = {
  slug: "valley-of-the-giants",
  title: "Valley of the Giants",
  shortDescription:
    "A section of the North Country Trail running through one of the few remaining old growth forests in Michigan's Lower Peninsula. Ancient white pines, a creek-carved ravine, and no AllTrails listing.",
  category: "hiking",
  tier: "free",
  location: {
    lat: 44.6419,
    lng: -85.43832,
    county: "Grand Traverse",
    drivingMinutesFromTC: 22,
  },
  stats: {
    trailMiles: 3,
    suggestedRouteMiles: 6,
    acres: 150,
    difficulty: "moderate",
  },
  heroImage:
    "/images/nct/valley-of-the-giants/valley-of-the-giants-banner.webp",
  mapImage: "/images/nct/valley-of-the-giants/valley-of-the-giants-map.png",
  parking: "JHR6+MP Traverse City, Michigan 49686",
  parkingMapUrl: "https://maps.app.goo.gl/QBZ41pw3CxZFuCHw7",
  activities: [
    "hiking",
    "mountain-biking",
    "camping",
    "hunting",
    "wildlife-viewing",
    "pets",
  ],
  sections: [
    {
      heading: "The Valley",
      body: "The ravine holding 22 Mile Creek runs about 3 miles through land that was never commercially logged. The terrain made it impractical — the valley drops steeply from the surrounding plateau, and moving timber out would have cost more than the cut was worth. What the loggers left behind is now one of a small handful of intact old-growth forests remaining in Michigan's Lower Peninsula. The difference from surrounding second-growth is immediate. The trees are massive — white pines pushing 150 feet, with trunks four feet across — and the understory is open and quiet in the way that only old forests get. The shallow creek winds through the valley, and there are several beaver ponds that have flooded sections of the forest.  On a still morning it can feel genuinely remote, though you're less than an hour from downtown Traverse City.",
      image: "/images/nct/valley-of-the-giants/the-valley.png",
      imageAlt: "22 mile creek in the Valley of the Giants",
    },
    {
      heading: "Finding Your Way",
      body: "This route is typically hiked as a 6-mile out-and-back, marked at either end by wooden Valley of the Giants signs. The trail follows North Country Trail blue blazes — bright rectangular marks painted at eye level on trees. A single blaze means continue straight; two blazes indicate a turn, with the higher blaze pointing the direction. Blazes are reliable but not continuous — gaps exist. The open understory of old growth forest means there's less visual definition between trail and off-trail than you might expect, so stay attentive. Cell signal can be spotty on this route — download the map to your phone before departing. A bridge is located near the halfway point where you'll also find an NCT trail log, a designated campsite, and fire pit.",
      image: "/images/nct/valley-of-the-giants/trail-log.png",
      imageAlt: "An NCT trail log",
    },
    {
      heading: "Route Variations",
      body: "Hiking the Valley of the Giants as an 'out-and-back' is recommended, but this route can also be completed as a 6.4-mile loop by following the dirt road along the south end of the map. This alternate route passes through second-growth forest. While less scenic, the contrast between a forest spared from logging and one that wasn't can be a worthwhile observation. There are no trail markers on this variation — download the map to your phone before departing. There is also the option to use the connector trail near the halfway point to create a shorter loop. This trail can be hard to spot. It is on the west side of the creek, just south of the bridge to the campsite at the halfway point (shown in the image below). The connector is marked by white blazes but is poorly maintained and easy to stray from — if you've gone more than 50 feet without seeing a white blaze, you've likely lost the trail. The connector trail crosses the Grand Traverse Motorcycle Trail, which does not permit foot traffic, before merging with the dirt road that leads back to the parking lot.",
      image: "/images/nct/valley-of-the-giants/connector-trail.png",
      imageAlt: "A connector trail ascending a hill from the NCT",
    },
  ],
  knowBeforeYouGo: [
    "No facilities at the trailhead — no restrooms, no water, no trash service.",
    "Cell service is limited to nonexistent for most of the route. Download an offline map before you go.",
    "This trail is not listed on AllTrails or most hiking apps — use the map provided on this page.",
    "Creek crossings in the valley can be wet or washed out in early spring. Waterproof footwear is recommended April through May.",
    "If taking the connector trail variation, note it is marked with white blazes, not blue NCT blazes.",
  ],
  propertyRules: [
    "Leave No Trace — pack out everything you bring in. There is no trash service at the trailhead. Please limit fires to the existing fire ring.",
    "Stay on the marked trail. Short-cutting the route causes erosion and damages root systems in this sensitive old-growth environment. Respect any 'No Trespassing' signs.",
    "Camping is not permitted at the trailhead. vernight camping is permitted only at the designated campsite shown on the map.",
    "Motorized vehicles and e-bikes are prohibited on the North Country Trail.",
    "Foot traffic is not allowed on the Grand Traverse Motorcycle Trail. Limit your travel to roads or designated hiking trails.",
    "Do not disturb or remove any natural, cultural, or historic features along the trail.",
  ],
  managedBy: "North Country Trail Association — Grand Traverse Chapter",
  lastUpdated: "2026-04-23",
};

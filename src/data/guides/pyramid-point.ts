import { TrailGuide } from "../../types/Trailguide";

export const pyramidPointGuide: TrailGuide = {
  slug: "pyramid-point",
  title: "The Complete Pyramid Point Hiking Guide",
  shortDescription:
    "A dune-top overlook inside the Port Oneida Rural Historic District with views of North and South Manitou Island. Covers the full loop through meadows and hardwood forest and the short out-and-back to the point.",
  category: "hiking",
  tier: "free",
  location: {
    lat: 44.962497,
    lng: -85.902181,
    county: "Leelanau",
    drivingMinutesFromTC: 45,
  },
  stats: {
    trailMiles: 6.07,
    suggestedRouteMiles: 3.24,
    acres: 870,
    difficulty: "hard",
  },
  heroImage: "/images/pyramid-point/pyramid-point-hero.webp",
  mapImage: "/images/pyramid-point/pyramid-point-map.png",
  trailheads: [
    {
      label: "Pyramid Point Trailhead",
      mapUrl: "https://maps.app.goo.gl/omEqH5CCozMFYvP89",
      lat: 44.96244534629546,
      lng: -85.92985890381546,
    },
    {
      label: "West Lake Michigan / Road Trailhead",
      mapUrl: "https://maps.app.goo.gl/fi5eA1RNh8C3KvW8A",
      lat: 44.954497,
      lng: -85.909845,
    },
    {
      label: "Good Harbor Drive Trailhead",
      mapUrl: "https://maps.app.goo.gl/Jj7CNM5ZF1k3fJDT8",
      lat: 44.96433,
      lng: -85.907569,
    },
  ],
  activities: ["hiking", "backpacking", "hunting", "wildlife-viewing", "pets"],
  sections: [
    {
      heading: "The Point",
      body: 'Pyramid Point sits inside the Port Oneida Rural Historic District, the largest intact historic farming landscape held in public ownership in the country. The Miller family farmed this ground for years, raising five daughters in a hand-hewn log home near the start of the trail. One of them, Mary, stayed on alone after her parents died and built a small shack further up the trail rather than leave. Farming this glacially scoured, nutrient-poor ground was never easy, but families here got by on wheat, rye, oats, corn, and a few dairy cows and hogs.\n\nFrom the main overlook, on a clear day you can pick out four islands: South Manitou to the west, North Manitou almost directly north, and South and North Fox Island further northeast. Between here and North Manitou you\'ll spot a small white structure that looks like a sail from a distance, locals call it "the Crib," a decommissioned lighthouse now owned and maintained by a nonprofit.\n\nThe National Park Service requests that visitors do not descend the dune to the water to prevent further erosion. The dune is also much steeper and taller than it looks from the top and the return climb up is difficult. If you want to hike to the base of the dune, walk along the shoreline from Good Harbor Beach instead. The shoreline is very rocky, so be sure to bring shoes if you choose to traverse it.',
      image: "/images/pyramid-point/pyramid-point-dunes.webp",
      imageAlt: "Overlook view toward the islands from Pyramid Point",
    },
    {
      heading: "Suggested Long Route",
      body: `The loop I recommend is 3.2 miles and can be started from any of the three trailheads listed. This loop is not listed on AllTrails, and uses official but rarely-used trails that are challenging to find. For this reason, this loop is only recommended for experienced hikers with route finding confidence. I recommend starting from the Good Harbor Drive trailhead and doing the loop clockwise, as it saves the most scenic portions for last and the steepest hills as descents.

Carefully review the details below against the map, as many of these trails are not marked.

From Good Harbor Trailhead, take the obvious trail west and watch carefully for the southern trail (you'll cross two, you're looking for the second one) that appears after 0.5 miles (or 10-12 minutes of hiking). Head south at this intersection for 0.4 miles (or 10 minutes), watching the west side of the trail for where the woods thin and a grassy field appears just beyond the trees. This is where an old path leads you between the two swamps shown on the map. Look carefully, it's very well-hidden but the trail becomes more apparent as you follow it through the trees and into the field.

Follow the trail across the field to an obvious trail running north to south. Follow this trail south until it loops back north up the hill to the west. You'll eventually hit a signpost marked "3." Head north to signpost "2" and then west to "1" where you'll reach the popular main trail that takes you north to Pyramid Point itself.

From the point, head east along the top of the dune and follow a sandy path back into the forest. You'll hit a fork, the one to the right is a social trail. To prevent further erosion (and enjoy better views), take the one to the left. Continuing along the rim, you'll pass a second social trail descending the steep pitch east into the dunes below. Do not take it, this is also a social trail and has caused heavy erosion. Continue along the rim until the forest opens into a spectacular dune bowl with views of Good Harbor Bay and Sugarloaf Mountain in the distance. From here, the official trail continues along the rim, so take care not to follow any social trails through the dune grass or the fork that appears to lead toward Hidden Lake (it's a dead end).

The trail along the rim leads back to an overlook of Lake Michigan. To your right, you'll see a clear, steep official trail descending the dune's east flank, away from the shoreline. Take this trail back to your car.`,
      image: "/images/pyramid-point/pyramid-point-long.webp",
      imageAlt: "The hard-to-spot connector trail junction",
    },
    {
      heading: "Suggested Short Route",
      body: "If you just want the view, you don't need the whole loop. A popular and very well-marked trail ascends from the Pyramid Point Trailhead 0.6 miles up to the main overlook. You'll follow the same trail down, making for a round trip of roughly 1.2 miles with all of the climbing during the first half. That's the version most people do, and it's enough to see the islands and the Crib without the extra mileage.",
      image: "/images/pyramid-point/pyramid-point-overlook.webp",
      imageAlt: "The short overlook trail to Pyramid Point",
    },
    {
      heading: "Wildlife and What You Might See",
      body: "This stretch sees more wildlife activity than its popularity would suggest. I observed a resident red-tailed hawk hunting the dunes just east of the point two-days in a row, and spotted a barred owl and white-tailed deer in the forest near the ponds south of Hidden Lake. Milkweed grows thick through here too, which attracts monarch butterflies for a good portion of the summer. Expect wildflowers in the meadows through spring and summer, strong color in fall, and light use for snowshoeing in winter.",
      image: "/images/pyramid-point/pyramid-point-monarch.webp",
      imageAlt: "Wildlife and monarch butterflies near Pyramid Point",
    },
  ],
  knowBeforeYouGo: [
    "A National Park entrance pass is required for all activities in Sleeping Bear Dunes National Lakeshore, including this hike. See Rules & Regulations below.",
    "Do not descend the dune to Lake Michigan. It's farther and steeper than it looks, the clay base is slick when wet, and this bluff is already heavily eroded.",
    "Mountain bikes are not permitted on any National Park Service trail here.",
    "Dogs are allowed on a leash no longer than 6 feet.",
    "Stay on the marked trail, even where unofficial social trails look tempting — this dune ecosystem is fragile and slow to recover.",
    "Hunting is allowed in this area, so be sure to wear bright orange, especially during deer firearm seasons.",
  ],
  propertyRules: [
    "A federal entrance pass is required for all recreational activity within the Lakeshore, including camping. Michigan Recreation Passport stickers do not cover this, it's a separate federal pass.",
    "Per-person entrance permit (age 16+, valid 1-7 days): $15 walking/biking, $20 motorcycle, $25 private vehicle. Sleeping Bear Dunes annual pass: confirm current price at nps.gov/slbe. Interagency annual pass (all national parks): $80.",
    "Do not feed wildlife.",
    "No speakers or amplified sound, keep voices down out of respect for wildlife and other visitors.",
    'Pack out everything, including food scraps and "biodegradable" waste.',
    "Camping is not permitted along this route.",
  ],
  managedBy: "National Park Service — Sleeping Bear Dunes National Lakeshore",
  managedByKey: "sleepingBearDunes",
  lastUpdated: "2026-07-27",
};

export interface ManagingOrganization {
  name: string;
  shortDescription: string;
  url: string;
  supportUrl: string;
  supportPartner?: string;
}

export type ManagingOrgKey =
  | "leelanauConservancy"
  | "grandTraverseRegionalLandConservancy"
  | "grandTraverseConservationDistrict"
  | "northCountryTrailAssociation"
  | "sleepingBearDunes"
  | "ourayRangerDistrict"
  | "michiganDNR";

export const managingOrganizations: Record<ManagingOrgKey, ManagingOrganization> = {
  leelanauConservancy: {
    name: "Leelanau Conservancy",
    shortDescription:
      "A nonprofit land trust that has preserved over 18,000 acres in Leelanau County since 1988, with 28 natural areas open to the public.",
    url: "https://leelanauconservancy.org/",
    supportUrl: "https://leelanauconservancy.org/donate/",
  },
  grandTraverseRegionalLandConservancy: {
    name: "Grand Traverse Regional Land Conservancy",
    shortDescription:
      "A regional land trust protecting natural, scenic, and farm lands across a five-county area in northwest Michigan, with over 49,000 acres preserved and 80+ properties open to the public.",
    url: "https://www.gtrlc.org/",
    supportUrl: "https://www.gtrlc.org/donate/conservancy-fund/",
  },
  grandTraverseConservationDistrict: {
    name: "Grand Traverse Conservation District",
    shortDescription:
      "A community-serving organization based at the Boardman River Nature Center that manages over 3,000 acres of public parklands and works to protect the Boardman-Ottaway River watershed.",
    url: "https://natureiscalling.org/",
    supportUrl: "https://natureiscalling.org/donate",
  },
  northCountryTrailAssociation: {
    name: "North Country Trail Association",
    shortDescription:
      "The nonprofit steward of the 4,800-mile North Country National Scenic Trail, which stretches across eight states from North Dakota to Vermont. Volunteers maintain and protect the trail in partnership with the National Park Service.",
    url: "https://northcountrytrail.org/",
    supportUrl: "https://northcountrytrail.org/giving-membership/donate/",
  },
  sleepingBearDunes: {
    name: "Sleeping Bear Dunes National Lakeshore (National Park Service)",
    shortDescription:
      "A 71,000-acre national lakeshore on Lake Michigan managed by the National Park Service, including North and South Manitou Islands.",
    url: "https://www.nps.gov/slbe/",
    supportUrl: "https://www.friendsofsleepingbear.org/donate-now",
    supportPartner: "Friends of Sleeping Bear Dunes",
  },
  ourayRangerDistrict: {
    name: "Ouray Ranger District (US Forest Service)",
    shortDescription:
      "A unit of the Grand Mesa, Uncompahgre, and Gunnison National Forest in southwest Colorado, managing public lands including the Mt. Sneffels Wilderness.",
    url: "https://www.fs.usda.gov/recarea/gmug/recarea/?recid=80754",
    supportUrl: "https://ouraytrails.org/support-us",
    supportPartner: "Ouray Trail Group",
  },
  michiganDNR: {
    name: "Michigan Department of Natural Resources",
    shortDescription:
      "The state agency responsible for managing Michigan's natural resources, including public water access sites, boat launches, and state forest campgrounds along the Betsie River corridor.",
    url: "https://www.michigan.gov/dnr",
    // TODO: verify support URL and partner — replace with a local Betsie River watershed org if preferred
    supportUrl: "https://www.michigan.gov/dnr/about/foundation",
    supportPartner: "Michigan DNR Foundation",
  },
};

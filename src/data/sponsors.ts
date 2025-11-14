import { Sponsor, SponsorshipTierBenefit } from "@/types";

export const sponsors: Sponsor[] = [
  // Diamond Sponsors
  {
    id: "iafor",
    name: "The International Academic Forum",
    tier: "diamond",
    logo: "/images/sponsors/iafor.png",
    description: "Organizing global conferences since 2009, fostering knowledge exchange in inclusive settings.",
    website: "https://iafor.org/",
  },
  {
    id: "nual",
    name: "Nagoya University Alumni Association",
    tier: "diamond",
    logo: "/images/sponsors/nual.png",
    description: "Strengthening ties between alumni, students, and society through collaboration and knowledge sharing.",
    website: "https://www.nual.nagoya-u.ac.jp/english/index.html",
  },
  // Gold Sponsors
  {
    id: "asean-nagoya",
    name: "ASEAN-Nagoya Club",
    tier: "gold",
    logo: "/images/sponsors/asean.png",
    description: "Supporting ASEAN talent development and fostering Japan-ASEAN collaboration.",
    website: "https://asean-nagoya-club.com/",
  },
  {
    id: "nufsa",
    name: "Nagoya University Foreign Students Association (NUFSA)",
    tier: "gold",
    logo: "/images/sponsors/nufsa.png",
    description: "An international organization established since 1985, promoting cultural exchange and community building.",
    website: "https://www.instagram.com/nufsa.nagoya_university",
  },
  {
    id: "cofsa",
    name: "Nagoya University Co-op Foreign Student Association",
    tier: "gold",
    logo: "/images/sponsors/cofsa.png",
    description: "An international student organization founded in 2015, dedicated to bridging connections between international and Japanese students.",
    website: "https://www.instagram.com/cofsa.nu",
  },
  // Silver Sponsors
  {
    id: "red-bull",
    name: "Red Bull",
    tier: "silver",
    logo: "/images/sponsors/red_bull.png",
    description: "Globally recognized energy drink brand known for fueling innovation, endurance, and high-performance lifestyles",
    website: "https://www.redbull.com/",
  },
  {
    id: "suntory",
    name: "SUNTORY",
    tier: "silver",
    logo: "/images/sponsors/suntory.png",
    description: "A global leader in the beverage industry, established in 1899.",
    website: "https://www.suntory.com/",
  },
];

export const sponsorshipTiers: SponsorshipTierBenefit[] = [
  {
    tier: "silver",
    benefits: [
      "Booth and workshop opportunities",
      "Logo display on merch, venue, SNS posts, and website",
      "Exposure in highlight video",
      "Distribution of sponsor material",
    ],
  },
  {
    tier: "gold",
    benefits: [
      "Booth and workshop opportunities",
      "Logo display on merch, venue, SNS posts, and website",
      "Exposure in highlight video",
      "Distribution of sponsor material",
      "Advertisement before opening ceremony",
      "Interview video before closing ceremony",
    ],
  },
  {
    tier: "diamond",
    benefits: [
      "Booth and workshop opportunities",
      "Logo display on merch, venue, SNS posts, and website",
      "Exposure in highlight video",
      "Distribution of sponsor material",
      "Advertisement before opening ceremony",
      "Interview video before closing ceremony",
      "Representative's speech in ceremonies",
    ],
  },
];

import { Sponsor, SponsorshipTierBenefit } from "@/types";

export const sponsors: Sponsor[] = [
  // Diamond Sponsors
  {
    id: "iafor",
    name: "The International Academic Forum",
    tier: "diamond",
    logo: "/images/sponsors/iafor.png",
    description: "Organizing global conferences since 2009, fostering knowledge exchange in inclusive settings.",
    website: "#",
  },
  {
    id: "nual",
    name: "Nagoya University Alumni Association",
    tier: "diamond",
    logo: "/images/sponsors/nual.png",
    description: "Strengthening ties between alumni, students, and society through collaboration and knowledge sharing.",
    website: "#",
  },
  // Gold Sponsors
  {
    id: "asean-nagoya",
    name: "ASEAN-Nagoya Club",
    tier: "gold",
    logo: "/images/sponsors/asean-nagoya.png",
    description: "Supporting ASEAN talent development and fostering Japan-ASEAN collaboration.",
    website: "#",
  },
  {
    id: "nufsa",
    name: "Nagoya University International Students Association (NUFSA)",
    tier: "gold",
    logo: "/images/sponsors/nufsa.png",
    description: "An international organization established since 1985, promoting cultural exchange and community building.",
    website: "#",
  },
  {
    id: "cofsa",
    name: "Nagoya University Co-op Foreign Student Association",
    tier: "gold",
    logo: "/images/sponsors/cofsa.png",
    description: "An international student organization founded in 2015, dedicated to bridging connections between international and Japanese students.",
    website: "#",
  },
  // Silver Sponsors
  {
    id: "red-bull",
    name: "Red Bull",
    tier: "silver",
    logo: "/images/sponsors/red-bull.png",
    description: "Globally recognized energy drink brand known for fueling innovation, endurance, and high-performance lifestyles",
    website: "#",
  },
  {
    id: "suntory",
    name: "SUNTORY",
    tier: "silver",
    logo: "/images/sponsors/suntory.png",
    description: "A global leader in the beverage industry, established in 1899.",
    website: "#",
  },
];

export const sponsorshipTiers: SponsorshipTierBenefit[] = [
  {
    tier: "silver",
    price: "30,000円",
    benefits: [
      "Booth and workshop opportunities",
      "Logo display on merch, venue, SNS posts, and website",
      "Exposure in highlight video",
      "Distribution of sponsor material",
    ],
  },
  {
    tier: "gold",
    price: "50,000円",
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
    price: "70,000円",
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

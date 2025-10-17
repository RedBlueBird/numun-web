export type SponsorTier = "diamond" | "gold" | "silver";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo: string;
  description: string;
  website?: string;
}

export interface SponsorshipTierBenefit {
  tier: SponsorTier;
  price: string;
  benefits: string[];
}

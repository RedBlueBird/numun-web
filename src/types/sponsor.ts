export type SponsorTier = "diamond" | "gold" | "silver" | "partner" | "supporter";

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
  benefits: string[];
}

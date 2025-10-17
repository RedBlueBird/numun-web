export type TeamRole = "secretary-general" | "deputy-secretary-general" | "organizing-committee";

export interface TeamMember {
  id: string;
  name: string;
  role: TeamRole;
  affiliation: string;
  photo: string;
  greeting?: string;
}

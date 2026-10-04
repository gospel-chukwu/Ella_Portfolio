export interface Project {
  _id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  thumbnailFit: string;
  thumbnailAlignY: string;
  thumbnailAlignX: string;
  category: string;
  year: number;
  shortDescription: string;
  linkType: string;
  externalUrl?: string;
}

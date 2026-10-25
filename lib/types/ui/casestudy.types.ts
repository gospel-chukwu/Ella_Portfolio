import { PortableTextReactComponents } from 'next-sanity';
import { TocItem } from '../utils/caseStudy.types';

export type CaseStudyProps = {
  toc: TocItem[];
  project: any;
  hasOverview: boolean;
  overview: any[];
  components: Partial<PortableTextReactComponents<any>>;
  rest: any[];
};

export type CaseStudyFooterButtonProps = {
  project: any;
};

export type Slide = {
  _key: string;
  url: string;
  width: number;
  height: number;
  caption?: string;
  alt?: string;
};

export type CaseStudySidebarProps = {
  toc: TocItem[];
};

import { Dispatch, SetStateAction } from 'react';
import { Project } from '../sanity/sanity.types';

export type HeroProps = {
  clients: {
    logoUrl: string;
    name: string;
  }[];
};

export type ClientLogosProps = Pick<HeroProps, 'clients'>;

export type Tab = 'snapshots' | 'projects';

export type ContentToggleProps = {
  active: string;
  setActive: Dispatch<SetStateAction<Tab>>;
};

export type ProjectLinkProps = {
  url: string;
  linkTarget?: string;
  text: string;
};

export type ProjectsFilterProps = {
  projects: Project[];
  active: string;
  handleFilterChange: (category: string) => void;
};

export type ProjectsGridProps = {
  visible: Project[];
  hasMore: boolean;
  handleLoadMore: () => void;
};

export type ProjectsPageProps = { projects: Project[] };
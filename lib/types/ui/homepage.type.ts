import { Dispatch, SetStateAction } from 'react';

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

'use client';

import { useState } from 'react';
import ContentToggle from './ContentToggle';
import Projects from './Projects';
import Snapshots from './Snapshots';
import { Tab } from '@/lib/types/ui/homepage.type';
import { Project, Snapshot } from '@/lib/types/sanity/sanity.types';

const Showcase = ({
  projects,
  snapshots,
}: {
  projects: Project[];
  snapshots: Snapshot[];
}) => {
  const [active, setActive] = useState<Tab>('snapshots');

  return (
    <>
      <ContentToggle active={active} setActive={setActive} />
      {active === 'snapshots' ? (
        <Snapshots snapshots={snapshots} />
      ) : (
        <Projects projects={projects} />
      )}
    </>
  );
};

export default Showcase;

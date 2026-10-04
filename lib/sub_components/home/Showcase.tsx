'use client';

import { useState } from 'react';
import ContentToggle from './ContentToggle';
import Projects from './Projects';
import Snapshots from './Snapshots';
import { Tab } from '@/lib/types/ui/homepage.type';
import { Project } from '@/lib/types/sanity/sanity.types';

const Showcase = ({projects}: {projects: Project[] }) => {
  const [active, setActive] = useState<Tab>('snapshots');

  return (
    <>
      <ContentToggle active={active} setActive={setActive} />
      {active === 'snapshots' ? <Snapshots /> : <Projects projects={projects} />}
    </>
  );
};

export default Showcase;

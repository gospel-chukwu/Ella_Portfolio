'use client';

import { useState } from 'react';
import ContentToggle from './ContentToggle';
import Projects from './Projects';
import Snapshots from './Snapshots';
import { Tab } from '@/lib/types/ui/homepage.type';

const Showcase = () => {
  const [active, setActive] = useState<Tab>('snapshots');

  return (
    <>
      <ContentToggle active={active} setActive={setActive} />
      {active === 'snapshots' ? <Snapshots /> : <Projects />}
    </>
  );
};

export default Showcase;

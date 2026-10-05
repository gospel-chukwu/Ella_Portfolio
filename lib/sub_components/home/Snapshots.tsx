'use client';

import SnapshotCard from '@/lib/reusable_components/SnapshotCard';
import { Snapshot } from '@/lib/types/sanity/sanity.types';
import { Container } from '@/lib/wrappers/Container';

const Snapshots = ({ snapshots }: { snapshots: Snapshot[] }) => {
  console.log(snapshots);
  return (
    <Container size="default" className="flex flex-col gap-2 pt-10 pb-20">
      <div className="grid grid-cols-[0.9fr_1.1fr_1fr] gap-2">
        <SnapshotCard snapshot={snapshots[0]} className="h-72" />
        <SnapshotCard snapshot={snapshots[1]} className="h-72" />
        <SnapshotCard snapshot={snapshots[2]} className="h-72" />
      </div>
      <div className="grid grid-cols-[1.25fr_0.75fr_1fr] gap-2">
        <SnapshotCard snapshot={snapshots[3]} className="h-62" />
        <SnapshotCard snapshot={snapshots[4]} className="col-span-2 h-62" />
      </div>
      <div className="grid grid-cols-[1fr_0.7fr_1.3fr] gap-2">
        <SnapshotCard snapshot={snapshots[5]} className="col-span-2 h-62" />
        <SnapshotCard snapshot={snapshots[6]} className='h-62'/>
      </div>
      <div className="grid grid-cols-[0.8fr_1.3fr_0.9fr] gap-2">
        <SnapshotCard snapshot={snapshots[7]} className='h-90' />
        <SnapshotCard snapshot={snapshots[8]} className='h-90' />
        <SnapshotCard snapshot={snapshots[9]} className='h-90' />
      </div>
    </Container>
  );
};

export default Snapshots;

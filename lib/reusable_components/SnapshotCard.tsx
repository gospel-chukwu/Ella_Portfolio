'use client';

import Image from 'next/image';
import { Snapshot } from '../types/sanity/sanity.types';

const SnapshotCard = ({ snapshot, className }: { snapshot: Snapshot, className?: string }) => {
  return (
    <div
      className={`relative overflow-hidden group ${className}`}
    >
      {snapshot.mediaType === 'video' ? (
        <video
          src={snapshot.videoUrl || ''}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image
          src={snapshot.imageUrl || ''}
          alt={snapshot.title || 'Snapshot'}
          fill
          className="object-cover"
        />
      )}

      <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity items-end p-4">
        <p className="text-white font-medium">{snapshot.title}</p>
      </div>
    </div>
  );
};

export default SnapshotCard;

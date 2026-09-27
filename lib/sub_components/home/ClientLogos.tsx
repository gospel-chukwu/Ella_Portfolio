'use client';
import { ClientLogosProps } from '@/lib/types/ui/homepage.type';
import { motion } from 'framer-motion';

const LOGO_SIZE = 28; // w-7 = 28px
const OVERLAP = 8; // resting overlap in px
const SPACING = LOGO_SIZE - OVERLAP; // 20px distance between origins

export default function ClientLogos({ clients }: ClientLogosProps) {
  return (
    <div className="flex items-center overflow-visible">
      {clients.map((client, i) => (
        <motion.img
          key={i}
          src={client.logoUrl}
          alt={client.name}
          initial={{ x: -i * SPACING }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.2 + (clients.length - 1 - i) * 0.08, // Top card slides off first!
            type: 'spring',
            stiffness: 110,
            damping: 14,
            mass: 0.7,
          }}
          className="w-7 h-7 min-w-7 min-h-7 rounded-full object-cover shadow-sm flex-shrink-0"
          style={{
            marginLeft: i === 0 ? 0 : -OVERLAP,
            zIndex: i + 1, // Last logo on top
          }}
        />
      ))}
    </div>
  );
}

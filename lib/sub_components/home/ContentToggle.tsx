'use client';

import { Container } from '@/lib/wrappers/Container';
import { TABS } from '@/lib/utils/constants';
import { ContentToggleProps } from '@/lib/types/ui/homepage.type';

const ContentToggle = ({active, setActive}: ContentToggleProps) => {

  return (
    <Container
      size="default"
      className="flex items-center justify-center pt-11"
    >
      {/* Track */}
      <div className="relative flex items-center gap-2 bg-[#F5F5F5] px-2 py-2 rounded-full overflow-hidden">
        {/* Sliding pill */}
        <span
          aria-hidden
          className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-[#C3C3C321] shadow-md"
          style={{
            width: 'calc(50% - 6px)',
            left: active === 'snapshots' ? '6px' : 'calc(50% + 0px)',
            transition: 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />

        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative z-10  py-2 text-sm font-light rounded-full cursor-pointer select-none transition-colors duration-300`}
            style={{
              // color: active === tab.id ? '#111' : '#888',
              minWidth: '100px',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default ContentToggle;

'use client';

import { useActiveSection } from '@/lib/hooks/useActiveSection';
import ReturnButton from './ReturnButton';
import { CaseStudySidebarProps } from '@/lib/types/ui/casestudy.types';

const CaseStudySidebar = ({ toc }: CaseStudySidebarProps) => {
  const active = useActiveSection(toc.map(item => item.id));

  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-28 z-20 -ml-3 w-49 rounded-2xl bg-white/70 p-3 text-[0.75rem] backdrop-blur-md">
        <div className="hidden lg:block">
          <ReturnButton />
        </div>
        <ul className="flex flex-col gap-3">
          {toc.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                className={`text-[#11111199] font-normal tracking-[3%] leading-[16px] transition-colors 
                    ${
                      active === item.id
                        ? 'text-neutral-900'
                        : 'text-neutral-400'
                    } hover:text-neutral-900`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default CaseStudySidebar;

'use client';

import { ProjectsFilterProps } from '@/lib/types/ui/homepage.types';
import { CATEGORIES } from '@/lib/utils/constants';
import { useProjectFilter } from '@/lib/hooks/useProjectFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectFilter = ({
  projects,
  active,
  handleFilterChange,
}: ProjectsFilterProps) => {
  const {
    isOpen,
    menuRef,
    activeCategory,
    getCategorySize,
    toggleMenu,
    onSelect,
  } = useProjectFilter({ projects, active, handleFilterChange });

  const categoryButtons = (layout: 'mobile' | 'desktop') =>
    CATEGORIES.map(category => {
      const isActive = active === category.value;
      const isMobile = layout === 'mobile';

      return (
        <motion.button
          key={`${layout}-${category.value}`}
          type="button"
          role="option"
          aria-selected={isActive}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{ touchAction: 'manipulation' }}
          onClick={() => onSelect(category.value)}
          className={`flex w-full items-center justify-between text-[0.85rem] font-light tracking-[1%] leading-[19px] px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors duration-200 ${
            isActive
              ? 'bg-[#F5F5F5] text-[#1E1E1E] shadow-md shadow-neutral-200'
              : `text-[#B3B3B3] ${isMobile ? 'active:bg-[#F1F1F196]' : 'hover:bg-[#F1F1F196]'}`
          }`}
        >
          <span>{category.title}</span>
          <span
            className={`tabular-nums ${
              isActive ? 'text-[#1E1E1E]/60' : 'text-[#B3B3B3]'
            }`}
          >
            {getCategorySize(category.value)}
          </span>
        </motion.button>
      );
    });

  return (
    <>
      {/* Mobile hamburger dropdown */}
      <div ref={menuRef} className="relative lg:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close category filter' : 'Open category filter'}
          aria-expanded={isOpen}
          aria-controls="project-filter-menu"
          className="flex w-full items-center justify-between gap-3 rounded-xl bg-[#F5F5F5] px-4 py-3 text-[0.85rem] font-light tracking-[1%] text-[#1E1E1E] shadow-sm"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="text-sm shrink-0"
            />
            <span className="truncate">{activeCategory.title}</span>
          </span>
          <span className="tabular-nums text-[#1E1E1E]/50 shrink-0">
            {getCategorySize(activeCategory.value)}
          </span>
        </button>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              id="project-filter-menu"
              role="listbox"
              aria-label="Filter projects by category"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 flex flex-col gap-1 rounded-2xl bg-white p-2 shadow-lg border border-black/5"
            >
              {categoryButtons('mobile')}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Desktop sidebar list */}
      <div
        className="hidden lg:flex flex-col gap-2 pt-5"
        role="listbox"
        aria-label="Filter projects by category"
      >
        {categoryButtons('desktop')}
      </div>
    </>
  );
};

export default ProjectFilter;

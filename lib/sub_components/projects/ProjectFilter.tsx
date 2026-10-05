'use client';

import { ProjectsFilterProps } from '@/lib/types/ui/homepage.type';
import { CATEGORIES } from '@/lib/utils/constants';
import { motion } from 'framer-motion';

const ProjectFilter = ({
  projects,
  active,
  handleFilterChange,
}: ProjectsFilterProps) => {
  return (
    <div className="flex flex-col gap-2 pt-5">
      {CATEGORIES.map(category => {
        const categorySize =
          category.value === 'all'
            ? projects.length
            : projects.filter(project =>
                project.category?.includes(category.value),
              ).length;

        return (
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{ touchAction: 'manipulation' }}
            onClick={() => handleFilterChange(category.value)}
            className={`flex justify-between ${
              active === category.value
                ? 'bg-[#F5F5F5] text-[#1E1E1E] shadow-md'
                : `text-[#B3B3B3]`
            }  ${
              active !== category.value ? 'hover:bg-[#F1F1F196]' : ''
            } text-[0.85rem] font-light tracking-[1%] leading-[19px] px-3 py-2.5 rounded-xl cursor-pointer`}
          >
            <span>{category.title}</span>
            <span>{categorySize}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;

'use client';

import ProjectCard from '@/lib/reusable_components/ProjectCard';
import { ProjectsGridProps } from '@/lib/types/ui/homepage.type';
import { motion } from 'framer-motion';
import EmptyProject from './EmptyProject';

const ProjectsGrid = ({
  visible,
  hasMore,
  handleLoadMore,
}: ProjectsGridProps) => {
  return (
    <div>
      {visible.length === 0 ? (
        <EmptyProject/>
      ) : (
        <>
          <div className="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-15">
            {visible.map(project => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
          {hasMore && (
            <div className="flex justify-end gap-2">
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{ touchAction: 'manipulation' }}
                onClick={handleLoadMore}
                className="bg-black text-white text-[0.95rem] font-light tracking-[1%] leading-[23px] px-6 py-3 rounded-2xl cursor-pointer shadow-md"
              >
                Load More
              </motion.button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsGrid;

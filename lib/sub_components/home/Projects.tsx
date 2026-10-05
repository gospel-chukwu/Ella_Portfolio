'use client';
import ProjectCard from '@/lib/reusable_components/ProjectCard';
import { Project } from '@/lib/types/sanity/sanity.types';
import { Container } from '@/lib/wrappers/Container';
import { Fragment } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Projects = ({ projects }: { projects: Project[] }) => {
  const router = useRouter();

  return (
    <Container size="default" className="flex flex-col gap-10 py-20 px-10">
      <div className="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-15">
        {projects.map(project => (
          <Fragment key={project._id}>
            <ProjectCard project={project} />
          </Fragment>
        ))}
      </div>
      <div className="flex justify-end">
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{ touchAction: 'manipulation' }}
          onClick={() => router.push('/projects')}
          className="bg-black text-white text-[0.95rem] font-light tracking-[1%] leading-[23px] px-6 py-3 rounded-full cursor-pointer shadow-md"
        >
          See More
        </motion.button>
      </div>
    </Container>
  );
};

export default Projects;

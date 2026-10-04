'use client';
import ProjectCard from '@/lib/reusable_components/ProjectCard';
import { Project } from '@/lib/types/sanity/sanity.types';
import { Container } from '@/lib/wrappers/Container';
import { Fragment } from 'react/jsx-runtime';

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Container size="default">
      <div className="py-20 grid grid-cols-[1fr_1fr] gap-x-10 gap-y-15 px-10">
        {projects.map((project, i) => (
          <Fragment key={i}>
            <ProjectCard project={project} />
          </Fragment>
        ))}
      </div>
    </Container>
  );
};

export default Projects;

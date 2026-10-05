'use client';

import { useRef, useState } from 'react';
import ProjectFilter from '../sub_components/projects/ProjectFilter';
import ProjectsGrid from '../sub_components/projects/ProjectsGrid';
import { Container } from '../wrappers/Container';
import { PAGE_SIZE } from '../utils/constants';
import { ProjectsPageProps } from '../types/ui/homepage.type';

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const gridRef = useRef<HTMLDivElement>(null);

  // filter projects by category
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category?.includes(activeCategory));

  // Projects User can see
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // There are more projects to show
  const hasMore = visibleCount < filteredProjects.length;

  // handle category buttons onChange
  const handleFilterChange = (category: string | 'all') => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE); // reset pagination whenever the filter changes
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // handle loading more projects
  const handleLoadMore = () => setVisibleCount(count => count + PAGE_SIZE);

  return (
    <Container
      size="wide"
      className="grid grid-cols-[0.25fr_1.75fr] gap-8 py-22"
    >
      <div className="sticky top-[100px] self-start relative">
        <ProjectFilter
          projects={projects}
          active={activeCategory}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div ref={gridRef} className="scroll-mt-[150px]">
        <ProjectsGrid
          visible={visibleProjects}
          hasMore={hasMore}
          handleLoadMore={handleLoadMore}
        />
      </div>
    </Container>
  );
};

export default ProjectsPage;

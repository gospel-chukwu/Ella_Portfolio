import ProjectsPage from '@/lib/components/ProjectsPage';
import { getProjects } from '@/lib/sanity/sanity_queries';

export default async function Projects() {
  const projects = await getProjects();

  return <ProjectsPage projects={projects} />;
}

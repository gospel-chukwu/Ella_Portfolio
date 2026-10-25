import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/sanity/sanity_queries';
import { buildSections } from '@/lib/utils/caseStudy';
import CaseStudyComingSoon from '@/lib/sub_components/projects/casestudy/CaseStudyComingSoon';
import CaseStudyPage from '@/lib/components/CaseStudyPage';
import { makeComponents } from '@/lib/sub_components/projects/casestudy/MakeComponents';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || project.linkType !== 'caseStudy') notFound();
  if (!project.body?.length)
    return <CaseStudyComingSoon title={project.title} />;

  const { toc, idByKey, overview, rest, hasOverview } = buildSections(
    project.body,
    {
      acknowledgement: !!project.acknowledgement,
    },
  );
  const components = makeComponents(idByKey);

  return (
    <CaseStudyPage
      toc={toc}
      project={project}
      hasOverview={hasOverview}
      overview={overview}
      components={components}
      rest={rest}
    />
  );
};

export default ProjectPage;

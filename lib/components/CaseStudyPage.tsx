'use server';
import { Container } from '../wrappers/Container';
import { PortableText } from 'next-sanity';
import { CaseStudyProps } from '../types/ui/casestudy.types';
import CaseStudyFooterButton from '../sub_components/projects/casestudy/CaseStudyFooterButton';
import CaseStudySidebar from '../sub_components/projects/casestudy/CaseStudySidebar';
import ReturnButton from '../sub_components/projects/casestudy/ReturnButton';

const CaseStudyPage = async ({
  toc,
  project,
  hasOverview,
  overview,
  components,
  rest,
}: CaseStudyProps) => {
  return (
    <main className="overflow-x-clip pb-24 pt-5 md:pt-7 lg:pt-28">
      <Container
        size="wide"
        className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,35rem)_1fr]"
      >
        <CaseStudySidebar toc={toc} />
        <article className="min-w-0 mt-4">
          <header className="mb-5 flex flex-col gap-2.5">
            <div className="block lg:hidden">
              <ReturnButton />
            </div>
            <h1 className="text-[0.95rem] font-bold text-[#111111CC] tracking-[3%] leading-[32%]">
              {project.title}
            </h1>
            {project.year && (
              <p className="text-[0.85rem] text-[#11111166] font-light tracking-[3%] leading-[16px]">
                {project.month}, {project.year}
              </p>
            )}
          </header>

          {hasOverview && (
            <div id="overview" className="scroll-mt-43">
              <PortableText value={overview} components={components} />
            </div>
          )}
          <PortableText value={rest} components={components} />
          {project.visitLink?.url && project.visitLink?.label && (
            <CaseStudyFooterButton project={project} />
          )}

          {project.acknowledgement && (
            <section id="acknowledgement" className="mt-16 scroll-mt-28">
              <h2 className="mb-5 text-[1.05rem] text-neutral-400 font-semibold tracking-[3%] leading-[32px]">
                Acknowledgement
              </h2>
              <p className="text-[1.04rem] font-light tracking-[3%] leading-[32px] text-neutral-400 w-[98%]">
                {project.acknowledgement}
              </p>
            </section>
          )}
        </article>
      </Container>
    </main>
  );
};

export default CaseStudyPage;

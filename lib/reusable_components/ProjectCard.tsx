'use client';

import ProjectLink from '../sub_components/home/ProjectLink';
import { Project } from '../types/sanity/sanity.types';
import Image from 'next/image';

const ProjectCard = ({ project }: { project: Project }) => {
  const isContain = project.thumbnailFit === 'contain';

  const alignY = {
    center: 'items-center',
    bottom: 'items-end',
    top: 'items-start',
  }[project.thumbnailAlignY || 'center'];

  const alignX = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end',
  }[project.thumbnailAlignX || 'center'];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div
          className={`relative w-full h-[26rem] overflow-hidden flex items-center justify-center bg-[#F5F5F5]`}
        >
          {isContain ? (
            <div className={`relative w-full h-full flex ${alignY} ${alignX}`}>
              <Image
                src={project.thumbnailUrl}
                alt={project.title || 'Project thumbnail'}
                width={600}
                height={600}
                // most possibly leave max-h-[85%] max-w-[85%] as the max w and h
                className={`${
                  // project.thumbnailAlignY === 'center'
                  //   ? 'max-h-[80%] max-w-[80%]'
                  //   : project.thumbnailAlignY === 'bottom' &&
                  //       project.thumbnailAlignX === 'center'
                  //     ? 'max-h-[90%] max-w-[90%]'
                  //     : 'max-h-full max-w-full'
                  ' max-h-[85%] max-w-[85%]'
                } w-auto h-auto object-contain
                `}
              />
            </div>
          ) : (
            <Image
              src={project.thumbnailUrl}
              alt={project.title || 'Project thumbnail'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
        <div className="flex justify-between items-center tracking-[1%] leading-[20px]">
          <h1 className="text-[#181818] font-light text-[1.3rem]">
            {project.title}
          </h1>
          <p className="font-light text-[#B3B3B3] text-[0.85rem] leading-[16px] tracking-[1%]">
            {project.year}
          </p>
        </div>
      </div>
      <p className="font-light text-[#626262] text-[0.85rem] leading-[23px] tracking-[2%]">
        {project.shortDescription}
      </p>
      {project.linkType === 'external' ? (
        <ProjectLink
          url={project.externalUrl || ''}
          linkTarget="_blank"
          text={
            project.category[0] === 'mobile-apps'
              ? 'Download App'
              : `View Live Site`
          }
        />
      ) : (
        <ProjectLink url={`/projects/${project.slug}`} text="View Case Study" />
      )}
    </div>
  );
};

export default ProjectCard;

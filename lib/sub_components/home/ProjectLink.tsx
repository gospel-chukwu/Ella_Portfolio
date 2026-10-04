'use client';

import { ProjectLinkProps } from "@/lib/types/ui/homepage.type";
import Image from "next/image";
import Link from "next/link";

const ProjectLink = ({ url, linkTarget = '_self', text }: ProjectLinkProps) => (
  <Link
    href={url || ''}
    target={linkTarget}
    className="flex items-center gap-3 font-light text-[#181818] text-[0.95rem] tracking-[1%] leading-[20px]"
  >
    <span>{text}</span>
    <div className="w-3 h-3">
      <Image
        src={'/icons/right_top_arrow.svg'}
        alt="arrow"
        width={600}
        height={600}
        className="w-full h-auto"
      />
    </div>
  </Link>
);
export default ProjectLink;
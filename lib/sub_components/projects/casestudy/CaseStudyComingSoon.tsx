'use client';

import Link from 'next/link';
import { Container } from '@/lib/wrappers/Container';

const CaseStudyComingSoon = ({ title }: { title: string }) => (
  <Container
    size="narrow"
    className="flex min-h-[70vh] flex-col items-center justify-center gap-3 text-center"
  >
    <h1 className="text-2xl">{title}</h1>
    <p className="text-neutral-500">Case study coming soon.</p>
    <Link href="/projects" className="text-sm text-neutral-400 hover:text-neutral-900">
      ← Back to projects
    </Link>
  </Container>
);

export default CaseStudyComingSoon;

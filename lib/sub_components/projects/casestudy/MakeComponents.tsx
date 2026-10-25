import Image from 'next/image';
import type { PortableTextComponents } from '@portabletext/react';
import { ATTACH } from '@/lib/utils/constants';
import Carousel from './Carousel';

const Figure = ({ value }: { value: any }) => {
  if (!value?.url) return null;

  const attach = (
    value.attach in ATTACH ? value.attach : 'none'
  ) as keyof typeof ATTACH;
  const attached = attach !== 'none';

  const img = (className: string) => (
    <Image
      src={value.url}
      alt={value.alt || value.caption || ''}
      width={value.width}
      height={value.height}
      sizes="(min-width: 768px) 640px, 100vw"
      className={className}
    />
  );

  return (
    <figure className="my-10">
      {value.framed ? (
        <div
          className={`overflow-hidden rounded-4xl bg-[#FDFDFD] border border-[#F1F1F1] ${ATTACH[attach]}`}
        >
          {img(`block h-auto w-full ${attached ? '' : 'rounded-xl'}`)}
        </div>
      ) : (
        img('block h-auto w-full')
      )}
    </figure>
  );
};

export const makeComponents = (
  idByKey: Record<string, string>,
): PortableTextComponents => ({
  block: {
    normal: ({ children }) => (
      <p className="text-[1.05rem] text-[#111111CC] font-normal tracking-[3%] leading-[32px]">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h3 className="mb-3 mt-8 text-[1.05rem] font-bold text-[#111111] tracking-[3%] leading-[32px]">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="mb-2 mt-6 text-[1.05rem] font-bold text-[#111111] tracking-[3%] leading-[32px]">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-neutral-200 pl-5 text-[15px] italic leading-7 text-neutral-500">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-1 pl-5 text-[15px] leading-7 text-neutral-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-1 pl-5 text-[15px] leading-7 text-neutral-700">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-[1.05rem] font-bold text-[#111111] tracking-[3%] leading-[32px]">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline underline-offset-4">{children}</span>
    ),
    'strike-through': ({ children }) => (
      <s className="text-neutral-400">{children}</s>
    ),
    code: ({ children }) => (
      <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.9em]">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
  types: {
    sectionMarker: ({ value }: { value: any }) => (
      <h2
        id={idByKey[value._key]}
        className="mb-4 mt-14 scroll-mt-28 text-[1.05rem] font-bold text-[#111111] tracking-[3%] leading-[32px]"
      >
        {value.title}
      </h2>
    ),
    figure: ({ value }: { value: any }) => <Figure value={value} />,
    carousel: ({ value }: { value: any }) => (
      <Carousel slides={value.slides ?? []} layout={value.layout ?? 'column'} />
    ),
  },
});

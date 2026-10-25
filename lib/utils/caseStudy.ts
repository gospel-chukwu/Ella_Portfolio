import { TocItem } from '../types/utils/caseStudy.types';

const slugify = (slug: string) =>
  slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export function buildSections(
  body: any[],
  opts: { acknowledgement?: boolean } = {},
) {
  const firstMarker = body.findIndex(b => b._type === 'sectionMarker');
  const overview = firstMarker === -1 ? body : body.slice(0, firstMarker);
  const rest = firstMarker === -1 ? [] : body.slice(firstMarker);
  const hasOverview = overview.length > 0;

  const used = new Map<string, number>();
  if (hasOverview) used.set('overview', 1);
  if (opts.acknowledgement) used.set('acknowledgement', 1);

  const toc: TocItem[] = hasOverview
    ? [{ id: 'overview', title: 'Overview' }]
    : [];
  const idByKey: Record<string, string> = {};

  rest.forEach(b => {
    if (b._type !== 'sectionMarker' || !b.title) return;
    const base = slugify(b.title) || 'section';
    const n = (used.get(base) ?? 0) + 1;
    used.set(base, n);
    const id = n === 1 ? base : `${base}-${n}`;
    idByKey[b._key] = id;
    toc.push({ id, title: b.title });
  });

  if (opts.acknowledgement) {
    toc.push({ id: 'acknowledgement', title: 'Acknowledgement' });
  }

  return { toc, idByKey, overview, rest, hasOverview };
}

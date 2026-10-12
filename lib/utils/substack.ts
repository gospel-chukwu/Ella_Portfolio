import Parser from 'rss-parser';
import { SubstackPost } from '../types/utils/substack.types';
import { SUBSTACK_URL } from './constants';

const parser = new Parser();

export async function getSubstackPosts(limit = 4): Promise<SubstackPost[]> {
  try {
    const res = await fetch(`${SUBSTACK_URL}/feed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const feed = await parser.parseString(await res.text());

    return feed.items.slice(0, limit).map(item => ({
      id: item.guid ?? item.link ?? item.title ?? '',
      title: item.title ?? '',
      link: item.link ?? '',
      description: item.contentSnippet ?? '',
      image: item.enclosure?.url ?? null,
      date: item.isoDate ?? '',
    }));
  } catch {
    return [];
  }
}

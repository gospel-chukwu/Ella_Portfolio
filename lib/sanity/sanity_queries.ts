import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings"][0]{
    "clients": clients[-5..-1]{
      name,
      "logoUrl": logo.asset->url
    }
  }`;

  return client.fetch(query);
}

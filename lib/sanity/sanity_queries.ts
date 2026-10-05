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

export async function getProjects() {
  const query = groq`*[_type == "project"] | order(year desc){
    _id,
    title,
    "slug": slug.current,
    "thumbnailUrl": thumbnail.asset->url,
    thumbnailFit,
    thumbnailAlignY,
    thumbnailAlignX,
    category,
    year,
    shortDescription,
    linkType,
    externalUrl
  }`;

  return client.fetch(query);
}

export async function getSnapshots() {
  const query = groq`*[_type == "snapshot"] | order(order asc){
    _id,
    title,
    category,
    mediaType,
    "imageUrl": image.asset->url,
    "videoUrl": video.asset->url
  }`;

  return client.fetch(query);
}

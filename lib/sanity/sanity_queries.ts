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
  const query = groq`*[_type == "snapshot"] | order(order asc) [0...10]{
    _id,
    title,
    category,
    mediaType,
    "imageUrl": image.asset->url,
    "videoUrl": video.asset->url
  }`;

  return client.fetch(query);
}

export async function getProjectSlugs(): Promise<string[]> {
  return client.fetch(
    groq`*[_type == "project" && defined(slug.current)].slug.current`,
  );
}

export async function getProjectBySlug(slug: string) {
  const query = groq`*[_type == "project" && slug.current == $slug][0]{
    _id, title, year, month, linkType, visitLink, acknowledgement,
    body[]{
      ...,
      _type == "figure" => {
        ...,
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height
      },
      _type == "carousel" => {
        ...,
        slides[]{
          _key, caption, alt,
          "url": image.asset->url,
          "width": image.asset->metadata.dimensions.width,
          "height": image.asset->metadata.dimensions.height
        }
      }
    }
  }`;

  return client.fetch(query, { slug });
}

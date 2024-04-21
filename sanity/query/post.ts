import { groq } from 'next-sanity';
import { client } from '../lib/client';


export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "categories": categories[]->title,
      body,
      description,
      publishedAt,
    }`
  )
}

export async function getBlog(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "categories": categories[]->title,
      body,
      description,
      publishedAt,
    }`,
    { slug }
  )
}

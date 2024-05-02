import { groq } from 'next-sanity';

import { client } from '../lib/client';
import { type Post } from '../types';

// TODO categories && blog
/**
 * @description 获取所有的blog
 */
export async function getBlogs(): Promise<Post[]> {
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

/**
 * @description 获取某个blog
 */
export async function getBlog(slug: string): Promise<Post> {
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

/**
 * @description 获取最新发布的blog
 */
export async function getLatestBlog(): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && !(_id in path("drafts.**")) && publishedAt <= "${new Date().toISOString()}" && defined(slug.current)] | order(publishedAt desc)[0]{
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

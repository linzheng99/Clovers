import React from 'react';

import { getBlogs } from '~/sanity/query/post';

import MotionCard from './ui/MotionCard';

export default function HomeCard() {
  return (
    <div>
      <LatestBlog />
    </div>
  )
};

// 博客(latest)
async function LatestBlog() {
  const blogs = await getBlogs()

  return (
    <div className='flex flex-col gap-12 mt-12'>
      <h1 className='mx-auto text-3xl'>最新博客</h1>
      {
        blogs.map(blog => <MotionCard key={blog.slug} post={blog} />)
      }
    </div>
  )
}

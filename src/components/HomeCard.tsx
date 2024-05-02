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
    <div className='flex flex-col gap-12'>
      {
        blogs.map(blog => <MotionCard key={blog.slug} post={blog} />)
      }
    </div>
  )
}

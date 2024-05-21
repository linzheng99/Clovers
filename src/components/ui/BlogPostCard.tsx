'use client'

import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { type Post } from "~/sanity/types";

export default function BlogPostCard({ post }: { post: Post }) {
  const { _id, slug, mainImage, title, categories, publishedAt } = post
  const MotionLink = motion(Link)

  return (
    <MotionLink
      key={_id}
      href={`/blogs/${slug}`}
      className='group border border-gray-500 rounded-2xl'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {mainImage &&
        <Image
          src={mainImage}
          alt={title}
          width={750}
          height={250}
          className='object-cover rounded-t-2xl border border-gray-500'
        />
      }
      <div className='flex flex-col p-2'>
        <h2 className='text-base font-bold tracking-tight opacity-70 transition-opacity group-hover:opacity-100 md:text-xl'>
          {title}
        </h2>
        <span className='flex justify-between opacity-50 transition-opacity group-hover:opacity-100'>
          <span>
            {categories}
          </span>
          <span>
            {publishedAt && dayjs(publishedAt).format('YYYY-MM-DD')}
          </span>
        </span>
      </div>
    </MotionLink>
  )
};

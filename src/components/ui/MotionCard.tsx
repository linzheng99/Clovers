'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

import { type Post } from "~/sanity/types";

export default function MotionCard({ post }: { post: Post }) {
  const { slug, mainImage, title, categories, description } = post
  const MotionLink = motion(Link)

  return (
    <MotionLink
      id={slug}
      key={slug}
      href={'#' + slug}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/4 mr-4'>
          <Image src={mainImage} width={220} height={220} alt={title} className='rounded' />
        </div>
        <div className="w-full max-w-xl lg:3/4 flex flex-col justify-between">
          <div>
            <h6 className='mb-2 font-semibold' >{title}</h6>
            <p className='mb-2 text-neutral-400'>{description}</p>
          </div>
          <div className='flex gap-12'>
            {
              categories?.map(
                (i, index) => <span key={index} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{i}</span>
              )
            }
          </div>
        </div>
      </div>
    </MotionLink>
  )
};

'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

import { type Post } from "~/sanity/types";

export default function MotionCard({ post }: { post: Post }) {
  const { slug, mainImage, title, categories, description } = post

  return (
    <Link id={slug} key={slug} href={'blogs/' + slug}>
      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/4 mr-4'
        >
          <Image src={mainImage} width={220} height={220} alt={title} className='rounded' />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 80 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:3/4 flex flex-col justify-between"
        >
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
        </motion.div>
      </div>
    </Link>
  )
};

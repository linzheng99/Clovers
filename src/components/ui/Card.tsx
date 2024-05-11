'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react"

import { type Post } from '~/sanity/types';

export default function CardComp({ card }: { card: Post }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="h-[300px] bg-blue-600 flex items-center justify-center mb-4"
    >
      <section>
        {card.description}
      </section>
    </motion.div>
  )
};

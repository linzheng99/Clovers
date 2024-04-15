'use client'

import { useScroll, motion } from 'framer-motion';
import { useRef } from "react"

export interface Card {
  href: string
}

export default function CardComp({ card }: { card: Card }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress
      }}
      className="h-[300px] bg-blue-600 flex items-center justify-center mb-4"
    >
      <section>
        {card.href}
      </section>
    </motion.div>
  )
};

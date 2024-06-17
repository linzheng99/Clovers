'use client'

import { motion } from 'framer-motion';

export default function EaseInOutTransition({
  children,
  initialY = 20,
}: Readonly<{
  children: React.ReactNode;
  initialY?: number
}>) {
  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
};


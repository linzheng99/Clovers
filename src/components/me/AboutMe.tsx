'use client'
import { motion } from 'framer-motion';

import appConfig from '@/app.config.json';


const container = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay }
  }
})

export default function AboutMeComp() {
  return (
    <div className="flex flex-col lg:mt-20 lg:mx-20 lg:h-svh">
      <motion.div
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h1 className="text-3xl lg:text-6xl font-thin tracking-tighter">
          Hello guys, welcome!
        </h1>
      </motion.div>
      <div className="flex flex-col items-end lg:mt-40">
        <motion.h1
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="text-4xl tracking-tighter flex flex-col"
        >
          <span className='text-end'>
            I&apos;m a
          </span>
          <span className="text-end font-bold bg-gradient-to-r from-[#FF96F9] via-[#d65fcf] to-[#C32BAC] bg-clip-text text-transparent">
            {appConfig.hero.position}
          </span>
        </motion.h1>
        <motion.div
          variants={container(1.2)}
          initial="hidden"
          animate="visible"
          className="max-w-xl mt-8 font-light tracking-tighter float-right"
        >
          {appConfig.hero.description.map((desc, index) => <p key={index} className='float-right'>{desc}</p>)}
        </motion.div>
      </div>
    </div>
  )
};

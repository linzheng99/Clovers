'use client'

interface NavLink {
  name: string
  href: string
  icon: string
}

import type { MotionValue } from 'framer-motion';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "../utils"

const NavLinks: NavLink[] = [
  {
    href: "/",
    icon: "",
    name: '首页 '
  },
  {
    href: "/blogs",
    icon: "",
    name: "博客"
  },
  {
    href: "/life",
    icon: "",
    name: "生活"
  }
]

const mapRange = (
  inputLower: number,
  inputUpper: number,
  outputLower: number,
  outputUpper: number
) => {
  const INPUT_RANGE = inputUpper - inputLower
  const OUTPUT_RANGE = outputUpper - outputLower

  return (value: number) =>
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
}

const setTransform = (
  item: HTMLElement & EventTarget,
  event: React.PointerEvent,
  x: MotionValue,
  y: MotionValue
) => {
  const bounds = item.getBoundingClientRect()
  const relativeX = event.clientX - bounds.left
  const relativeY = event.clientY - bounds.top
  const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
  const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)
  x.set(xRange * 10)
  y.set(yRange * 10)
}

const MotionLink = motion(Link)

export default function FloatNavComp() {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex gap-4 text-sm font-medium text-zinc-200">
        <AnimatePresence>
          {NavLinks.map(link => <NavItem link={link} pathname={pathname} key={link.href} />)}
        </AnimatePresence>
      </ul>
    </nav>
  )
};
// box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
export function NavItem({ link, pathname }: { link: NavLink, pathname: string | null }) {
  const linkStyle = cn(
    "relative rounded-md transition-all duration-500 ease-out hover:shadow-[0px_5px_10px_-3px_rgba(243,237,74,0.3)]",
    pathname === link.href ? "shadow-[0px_5px_10px_-3px_rgba(243,237,74,0.3)]" : ""
  )
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const onPointerLeave = () => {
    x.set(0)
    y.set(0)
  }
  const onPointerMove = (event: React.PointerEvent<HTMLLIElement>) => {
    const item = event.currentTarget
    setTransform(item, event, x, y)
  }
  return (
    <motion.li
      key={link.href}
      onPointerMove={(event) => onPointerMove(event)}
      onPointerLeave={onPointerLeave}
      className={linkStyle}
      style={{ x, y }}
    >
      <MotionLink href={link.href} className=''>
        <motion.div className="z-10 relative py-2 px-4">
          {link.name}
        </motion.div>
        {pathname === link.href ? (
          <motion.div
            transition={{ type: 'just' }}
            layoutId="underline"
            className="absolute w-full h-full rounded-md left-0 bottom-0 shadow-[0px_5px_10px_-3px_rgba(243,237,74,0.3)]]"
          />
        ) : null}
      </MotionLink>
    </motion.li>
  )
};


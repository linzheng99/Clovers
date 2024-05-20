'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import appConfig from '@/app.config.json';

import { CloseIcon, MenuIcon } from "../assets/icons";
import { cn } from "../utils";

const links = appConfig['navigation']

export default function NavigationComp() {
  const [toggle, setToggle] = useState(false)
  const path = usePathname()
  function isActivate(value: string) {
    return path === value.toLocaleLowerCase()
  }

  return (
    <>
      <nav
        className="max-w-screen-2xl relative mx-2 w-full rounded-[36px] items-center border px-4 py-3 border-neutral-700/40 bg-neutral-800/80 backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
      >
        <div className="flex items-center justify-between h-[38px]">
          <Link href="/">
            <span>{appConfig.site}</span>
          </Link>
          <div className="ml-auto md:hidden">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition duration-300 disabled:pointer-events-none disabled:opacity-50 text-neutral-400 hover:bg-neutral-700 focus:outline-none cursor-pointer"
              onClick={() => setToggle(!toggle)}>
              <span className="text-2xl">
                {toggle ? <CloseIcon /> : <MenuIcon />}
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            cn('grow basis-full overflow-hidden transition-all duration-300 md:block', !toggle ? 'hidden' : '')
          }>
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7">
            {links.map(link =>
              <Link href={link.href} key={link.href} onClick={() => setToggle(false)} className="rounded-lg text-base font-medium outline-none  focus-visible:ring text-neutral-400 ring-zinc-200 hover:text-neutral-500 focus:outline-none md:py-3 md:text-sm 2xl:text-base">
                <span className={cn(isActivate(link.href) ? 'text-[#d65fcf]' : '')}>
                  {link.title}
                </span>
              </Link>)}
          </div>
        </div>
      </nav>
    </>
  )
};

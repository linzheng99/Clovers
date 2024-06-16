'use client'

import Link, { type LinkProps } from 'next/link'
import React from 'react'

import { LinkIcon } from '~/src/assets/icons'
import { cn } from '~/src/utils'

type PeekabooLinkProps = LinkProps &
  React.ComponentPropsWithoutRef<'a'> & {
    children: React.ReactNode
  }
export function PeekabooLink({
  href,
  children,
  className,
  ...props
}: PeekabooLinkProps) {
  return (
    <Link
      href={href}
      className={cn('inline-flex place-items-baseline items-baseline gap-0.5 pr-0.5 text-[0.95em] leading-none font-semibold text-zinc-800 dark:text-zinc-100', className)}
      {...props}
    >
      {children}
      <LinkIcon
        width="1rem"
        height="1rem"
        className="inline-block translate-y-0.5"
        aria-hidden="true"
      />
    </Link>
  )

}

'use client'

import { PortableText, type PortableTextComponents } from '@portabletext/react'
import React from 'react'

import { PeekabooLink } from '@/components/links/PeekabooLink'
import {
  PortableTextBlocksBlockquote,
  PortableTextBlocksH1,
  PortableTextBlocksH2,
  PortableTextBlocksH3,
  PortableTextBlocksH4,
  PortableTextBlocksListItem,
  PortableTextBlocksNormal,
} from '@/components/portable-text/PortableTextBlocks'
import { PortableTextCodeBlock } from '@/components/portable-text/PortableTextCodeBlock'
import { PortableTextTweet } from '@/components/portable-text/PortableTextTweet'

const components: PortableTextComponents = {
  block: {
    normal: PortableTextBlocksNormal,
    h1: PortableTextBlocksH1,
    h2: PortableTextBlocksH2,
    h3: PortableTextBlocksH3,
    h4: PortableTextBlocksH4,
    blockquote: PortableTextBlocksBlockquote,
  },
  listItem: PortableTextBlocksListItem,
  types: {
    tweet: PortableTextTweet,
    codeBlock: PortableTextCodeBlock,
  },

  marks: {
    link: ({ children, value }) => {
      return (
        <PeekabooLink href={value.href}>
          {children}
        </PeekabooLink>
      )
    },
  },
}

export function PostPortableText(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  components?: PortableTextComponents
}) {
  return (
    <PortableText
      value={props.value}
      components={props.components ?? components}
    />
  )
}

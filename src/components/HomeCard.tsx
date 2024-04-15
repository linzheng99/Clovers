import CardComp from '@/components/ui/Card';
import type { Card } from '@/components/ui/Card';
import React from 'react';

const cardList: Card[] = [
  {
    href: 'home',
  },
  {
    href: 'about',
  },
  {
    href: 'a',
  },
  {
    href: 'b',
  },
  {
    href: 'blog',
  },
]

export default function HomeCard() {
  return (
    <div>
      {
        cardList.map((card) => (
          <CardComp card={card} key={card.href} />
        ))
      }
    </div>
  )
};

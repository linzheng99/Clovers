import { GithubIcon, TwitterIcon } from '@/components/icons';

export interface Apps {
  name: string
  href: string
  icon: () => JSX.Element
}

export const userInfo: Recordable = {
  name: 'LinZheng',
}

export const apps: Apps[] = [
  {
    name: 'Github',
    href: 'https://github.com/linzhengGithub',
    icon: GithubIcon
  },
  {
    name: 'Twitter',
    href: '',
    icon: TwitterIcon
  },
  // {
  //   name: 'Music',
  //   href: '',
  //   icon: 'icon-[codicon--music]'
  // },
]

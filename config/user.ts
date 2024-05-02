import { GithubIcon, LocalIcon, TwitterIcon } from '~/src/assets/icons';

export interface Apps {
  name: string
  href: string
  icon: () => JSX.Element
}

export interface Info {
  name: string
  content: string
  icon: () => JSX.Element
}

export const userInfo: Info[] = [
  {
    name: 'Local',
    content: 'Wenzhou, Zhejiang, China',
    icon: LocalIcon,
  }
]

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

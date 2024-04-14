export interface Apps {
  name: string
  href: string
  icon: string
}

export const userInfo: Recordable = {
  name: 'LinZheng',
}

export const apps: Apps[] = [
  {
    name: 'Github',
    href: 'https://github.com/linzhengGithub',
    icon: 'icon-[codicon--github-inverted]'
  },
  {
    name: 'Twitter',
    href: '',
    icon: 'icon-[codicon--twitter]'
  },
  {
    name: 'Music',
    href: '',
    icon: 'icon-[codicon--music]'
  },
]

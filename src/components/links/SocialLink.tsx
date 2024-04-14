import { apps } from '~/config';

export default function SocialLinkComp() {
  return (
    <div className='flex gap-4 justify-center'>
      {
        apps.map((app) => (
          <a
            target="_blank"
            href={app.href}
            key={app.name}
            className='text-2xl'
          >
            <app.icon />
          </a>
        ))
      }
    </div>
  )
};

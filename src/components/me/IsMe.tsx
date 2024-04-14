import type { Apps } from '~/config';
import { userInfo, apps } from '~/config';
import { Avatar } from '@radix-ui/themes';

export default function IsMeComp() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Avatar src="/images/avatar.jpg" fallback="Avatar" size="9" radius="full" />
      <UserInfo info={userInfo} />
      <RenderSelfApp apps={apps} />
    </div>
  )
};

function UserInfo({ info }: { info: Recordable }) {
  return (
    <div>
      {Object.keys(info).map((key) => (
        <div key={key}>
          <span className='font-bold text-2xl'>
            {userInfo[key]}
          </span>
        </div>
      ))}
    </div>
  )
}

function RenderSelfApp({ apps }: { apps: Apps[] }) {
  function jump(url: string) {
    window.open(url)
  }
  return (
    <div className='flex gap-4 justify-center'>
      {
        apps.map((app) => (
          <a
            target="_blank"
            href={app.href}
            key={app.name}
          >
            <i className={`text-2xl ${app.icon}`} />
          </a>
        ))
      }
    </div>
  )
}

import type { Apps } from '~/config';
import { userInfo } from '~/config';
import { Avatar } from '@radix-ui/themes';
import SocialLink from '@/components/links/SocialLink';

export default function IsMeComp() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Avatar src="/images/avatar.jpg" fallback="Avatar" size="9" radius="full" />
      <UserInfo info={userInfo} />
      <SocialLink />
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

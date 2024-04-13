import { Avatar } from '@radix-ui/themes';

export default function IsMeComp() {
  return (
    <div>
      <Avatar src="/images/avatar.jpg" fallback="Avatar" size="8" radius="full" />
    </div>
  )
};

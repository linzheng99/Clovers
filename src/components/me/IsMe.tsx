import { Avatar } from '@radix-ui/themes';

export default function IsMeComp() {
  return (
    <div>
      <Avatar src="/images/avatar.jpg" fallback="Avatar" size="9" radius="full" />
    </div>
  )
};

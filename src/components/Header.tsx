import EaseInOut from '@/components/transition/EaseInOut';

import Navigation from './FloatNav';

export default function HeaderComp() {
  return (
    <header className="fixed border-1 w-full h-20 flex items-center justify-center">
      <EaseInOut initialY={-20}>
        <Navigation />
      </EaseInOut>
    </header>
  )
};

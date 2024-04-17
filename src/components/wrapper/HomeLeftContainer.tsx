import EaseInOut from '@/components/transition/EaseInOut';

export default function HomeLeftContainer({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-solid border-zinc-100 lg:border-r lg:my-20 py-20 sm:px-40 text-center">
      <EaseInOut>
        {children}
      </EaseInOut>
    </div>
  )
};

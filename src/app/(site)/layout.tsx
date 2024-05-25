import HeaderComp from '@/components/Header';


// TODO fetch cache
export const revalidate = 500

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <HeaderComp />
      {children}
    </div>
  );
}

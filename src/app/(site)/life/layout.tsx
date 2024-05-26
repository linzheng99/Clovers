export default function LifeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='max-w-5xl mx-auto p-2'>
      <div className="lg:my-10 my-5 mx-4">
        {children}
      </div>
    </div>
  );
}

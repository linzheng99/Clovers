export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='max-w-5xl mx-auto p-2'>
      <div className="lg:my-20 lg:mx-0 my-10 mx-4">
        {children}
      </div>
    </div>
  );
}

export default function HomeLeftContainer({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:my-20 mx-6 lg:mx-8 flex-1 overflow-x-hidden">
      {children}
    </div>
  )
};

export default function HomeLeftContainer({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:my-20 ml-6 lg:ml-8 flex-1">
      {children}
    </div>
  )
};

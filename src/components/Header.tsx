import Navigation from './Navigation';

export default function HeaderComp() {
  return (
    <header className="sticky inset-x-0 top-4 z-50 flex flex-wrap text-sm md:flex-nowrap md:justify-start mx-4 h-16">
      <Navigation />
    </header>
  )
};

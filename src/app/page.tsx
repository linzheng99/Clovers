import IsMeComp from "@/components/me/IsMe";

export default function Home() {
  return (
    <div className="lg:flex h-full">
      <div className="border-r border-solid border-zinc-100 sm:px-48 lg:my-24 py-24 text-center">
        <IsMeComp />
      </div>
      <div>
        Home
      </div>
    </div>
  );
}

import IsMeComp from "@/components/me/IsMe";
import HomeLeftContainer from '@/components/wrapper/HomeLeftContainer';
import HomeRightContainer from '@/components/wrapper/HomeRightContainer';

export default function Home() {
  return (
    <div className="lg:flex h-full">
      <HomeLeftContainer>
        <IsMeComp />
      </HomeLeftContainer>
      <HomeRightContainer>
        Home
      </HomeRightContainer>
    </div>
  );
}

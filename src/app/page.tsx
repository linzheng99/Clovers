import IsMeComp from "@/components/me/IsMe";
import HomeLeftContainer from '@/components/wrapper/HomeLeftContainer';
import HomeRightContainer from '@/components/wrapper/HomeRightContainer';
import FloatNav from '@/components/FloatNav';
import HomeCard from "../components/HomeCard";


export default function Home() {
  return (
    <div className="lg:flex h-full">
      <HomeLeftContainer>
        <IsMeComp />
      </HomeLeftContainer>
      <HomeRightContainer>
        <HomeCard />
      </HomeRightContainer>
      <FloatNav />
    </div>
  );
}

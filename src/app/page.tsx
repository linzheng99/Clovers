import IsMeComp from "@/components/me/IsMe";
import HomeLeftContainer from '@/components/wrapper/HomeLeftContainer';
import HomeRightContainer from '@/components/wrapper/HomeRightContainer';

import HomeCard from "../components/HomeCard";
import AboutMeComp from "../components/me/AboutMe";


export default function Home() {
  return (
    <div className="lg:flex h-full">
      <HomeLeftContainer>
        <IsMeComp />
      </HomeLeftContainer>
      <HomeRightContainer>
        <AboutMeComp />
        <HomeCard />
      </HomeRightContainer>
    </div>
  );
}

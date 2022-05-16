import RxAboutUs from "@/components/rx-about-us/RxAboutUs";
import RxBanner from "@/components/rx-banner/RxBanner";
import RxCuisines from "@/components/rx-cuisines/RxCuisines";
import RxServices from "@/components/rx-services/RxServices";
import RxSponsors from "@/components/rx-sponsors/RxSponsors";
import { useEffect } from "react";

function Home() {
  useEffect(() => {});

  return (
    <div className="rx-home-main">
      <RxBanner></RxBanner>
      <RxCuisines></RxCuisines>
      <RxAboutUs></RxAboutUs>
      <RxServices></RxServices>
      <RxSponsors></RxSponsors>
    </div>
  );
}
export default Home;

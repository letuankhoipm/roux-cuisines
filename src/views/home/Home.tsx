import RxBanner from "@/components/rx-banner/RxBanner";
import RxCuisines from "@/components/rx-cuisines/RxCuisines";
import { useEffect } from "react";

function Home() {
  useEffect(() => {});
  return (
    <div className="rx-home-main">
      <RxBanner></RxBanner>
      <RxCuisines></RxCuisines>
    </div>
  );
}
export default Home;

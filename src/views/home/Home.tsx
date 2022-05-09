import RxAboutUs from "@/components/rx-about-us/RxAboutUs";
import RxBanner from "@/components/rx-banner/RxBanner";
import RxCuisines from "@/components/rx-cuisines/RxCuisines";
import RxSulfate from "@/components/rx-sulfate/RxSulfate";
import RxSulfateWrapper from "@/components/rx-sulfate/RxSulfateWrapper";
import { useEffect } from "react";

function Home() {
  useEffect(() => {});

  const data: any[] = [
    {
      id: 1,
      title: "Testing 1",
      src: `${process.env.PUBLIC_URL}/assets/images/rx.jpg`,
    },
    {
      id: 2,
      title: "Testing 2",
      src: `${process.env.PUBLIC_URL}/assets/images/rx_1.jpg`,
    },
    {
      id: 3,
      title: "Testing 3",
      src: `${process.env.PUBLIC_URL}/assets/images/ra.jpg`,
    },
  ];
  return (
    <div className="rx-home-main">
      <RxBanner></RxBanner>
      <RxCuisines></RxCuisines>
      <RxAboutUs></RxAboutUs>
      <div className="container-fluid">
        <RxSulfate>
          {data.map((d: any) => (
            <RxSulfateWrapper key={d.id} slot="template">
              <div className="abc">
                <img className="rx-arrow" src={d.src} alt="arrow_down" />
              </div>
            </RxSulfateWrapper>
          ))}
        </RxSulfate>
      </div>
    </div>
  );
}
export default Home;

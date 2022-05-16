import { RxSulfateConfig, RxSulfateMode } from "@/types/rx-sulfate.type";
import RxSulfate from "../rx-sulfate/RxSulfate";
import RxSulfateWrapper from "../rx-sulfate/RxSulfateWrapper";
import "./RxSponsors.scss";

function RxSponsors() {
  const data: any[] = [
    {
      id: 1,
      title: "Testing 1",
      src: `${process.env.PUBLIC_URL}/assets/logo/a.png`,
    },
    {
      id: 2,
      title: "Testing 2",
      src: `${process.env.PUBLIC_URL}/assets/logo/b.png`,
    },
    {
      id: 3,
      title: "Testing 3",
      src: `${process.env.PUBLIC_URL}/assets/logo/c.png`,
    },
    {
      id: 4,
      title: "Testing 3",
      src: `${process.env.PUBLIC_URL}/assets/logo/d.png`,
    },
    {
      id: 5,
      title: "Testing 3",
      src: `${process.env.PUBLIC_URL}/assets/logo/e.png`,
    },
    {
      id: 6,
      title: "Testing 3",
      src: `${process.env.PUBLIC_URL}/assets/logo/f.png`,
    },
  ];

  const config: RxSulfateConfig = {
    items: 5,
    mode: RxSulfateMode.MULTIPLE,
    height: 250,
    navigate: false,
  };
  return (
    <div className="rx-sponsor mt-4 pt4">
      <div className="container rx-sponsor-img">
        <RxSulfate config={config}>
          {data.map((d: any) => (
            <RxSulfateWrapper key={d.id} slot="template">
              <div className="rx-sponsor-wrapper">
                <img
                  className="rx-sponsor-img p-4 align-self-center"
                  src={d.src}
                  alt="#"
                />
              </div>
            </RxSulfateWrapper>
          ))}
        </RxSulfate>
      </div>
    </div>
  );
}
export default RxSponsors;

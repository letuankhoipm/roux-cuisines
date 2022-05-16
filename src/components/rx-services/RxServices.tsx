import { RxSulfateConfig, RxSulfateMode } from "@/types/rx-sulfate.type";
import RxItem from "../rx-item/RxItem";
import RxSulfate from "../rx-sulfate/RxSulfate";
import RxSulfateWrapper from "../rx-sulfate/RxSulfateWrapper";

function RxServices() {
  const data: any[] = [
    {
      id: 1,
      title: "Testing 1",
      src: `${process.env.PUBLIC_URL}/assets/images/f1.png`,
    },
    {
      id: 2,
      title: "Testing 2",
      src: `${process.env.PUBLIC_URL}/assets/images/f2.png`,
    },
    {
      id: 3,
      title: "Testing 3",
      src: `${process.env.PUBLIC_URL}/assets/images/f3.png`,
    },
    {
      id: 4,
      title: "Testing 3",
      src: `${process.env.PUBLIC_URL}/assets/images/f4.png`,
    },
  ];

  const config: RxSulfateConfig = {
    items: 1,
    mode: RxSulfateMode.FULL_SCREEN,
  };
  return (
    <div className="rx-sevices mt-4 pt4">
      <div className="container">
        <h1 className=" rx-cookie rx-7rem">Service</h1>
      </div>
      <div className="container-fluid">
        <RxSulfate config={config}>
          {data.map((d: any) => (
            <RxSulfateWrapper key={d.id} slot="template">
              <RxItem id={d.id} title={d.title} src={d.src}></RxItem>
            </RxSulfateWrapper>
          ))}
        </RxSulfate>
      </div>
    </div>
  );
}

export default RxServices;

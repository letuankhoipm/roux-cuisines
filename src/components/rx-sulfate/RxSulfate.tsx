import "./RxSulfate.scss";
import { RxSulfateChildrenProps } from "@/types/rx-sulfate.type";
import { useCallback, useEffect, useRef, useState } from "react";

import RxSulfateProvider from "./RxSulfateProvider";

function RxSulfate(props: RxSulfateChildrenProps) {
  const initStyleValue = "0px";
  const initPosition = 0;
  const childLenDefault = props.children ? props.children.length : 0;
  const [styleState, setStyleState] = useState(initStyleValue);
  const [maxWidth, setMaxWidth] = useState(0);
  const [currPosition, setCurrPosition] = useState(initPosition);
  const [offsetWidth, setOffsetWidth] = useState(0);
  let applidStyleValue = { transform: `translateX(${styleState})` };
  let templateRendered: any = [];
  const { children } = props;

  if (children) {
    templateRendered = children.map((child: any, index: number) => (
      <div key={index} className="rx-item">
        {child}
      </div>
    ));
  }

  const getOffsetWidth = useCallback(() => {
    let offsetWidth = 0;
    const refDiv: any = wrapperRef.current;
    if (!refDiv) return;
    offsetWidth = parseInt(refDiv.offsetWidth);
    setOffsetWidth(offsetWidth);
    setMaxWidth(offsetWidth * (childLenDefault - 1));
  }, [childLenDefault]);

  useEffect(() => {
    console.log(currPosition, -maxWidth);
    getOffsetWidth();

    setStyleState(`${currPosition}px`);
  }, [currPosition, getOffsetWidth, maxWidth]);

  const wrapperRef = useRef(null);

  const handleWraperEffect = (state: string) => {
    if (state === "next" && currPosition > -maxWidth) {
      calDistance("next");
    }
    if (state === "prev" && currPosition < 0) {
      calDistance("prev");
    }
  };

  const calDistance = (state: string): number => {
    if (state === "prev") {
      setCurrPosition(currPosition + offsetWidth);
    }
    if (state === "next") {
      setCurrPosition(currPosition - offsetWidth);
    }

    return currPosition;
  };

  return (
    <div className="rx-sulfate">
      <RxSulfateProvider
        slots={{
          template: {
            className: "rx-sulfate-template",
          },
        }}
      >
        <div className="rx-wrapper">
          <div
            ref={wrapperRef}
            style={applidStyleValue}
            className="d-flex rx-item-main"
          >
            {templateRendered}
          </div>
        </div>
        <div className="rx-indicator"></div>
        <div className="rx-navigation">
          <button onClick={() => handleWraperEffect("prev")}>prev</button>
          <button onClick={() => handleWraperEffect("next")}>next</button>
        </div>
      </RxSulfateProvider>
    </div>
  );
}

export default RxSulfate;

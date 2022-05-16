import "./RxSulfate.scss";
import { RxSulfateChildrenProps, RxSulfateMode } from "@/types/rx-sulfate.type";
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

  const { children, config } = props;
  const wrapperRef = useRef(null);

  let applidStyleValue = { transform: `translateX(${styleState})` };
  let templateRendered: any = [];
  let navigateStyle = {};

  const getOffsetWidth = useCallback(() => {
    let offsetWidth = 0;
    const refDiv: any = wrapperRef.current;
    if (!refDiv) return;
    offsetWidth = parseInt(refDiv.offsetWidth);

    const itemWidth = offsetWidth / config.items;
    setOffsetWidth(itemWidth);
    setMaxWidth(itemWidth * (childLenDefault - 1));
  }, [childLenDefault, config]);

  const renderStyle = () => {
    navigateStyle = {
      display: config.navigate ? "inherit" : "none",
    };
  };

  const renderSlide = useCallback(
    (renderMode: RxSulfateMode) => {
      const renderClass = `rx-item rx-multi-${config.items}`;

      const renderedStyle = {
        height: `${config.height}px`,
      };

      if (renderMode) {
        return children.map((child: any, index: number) => (
          <div key={index} className="rx-item rx-flex-default">
            {child}
          </div>
        ));
      } else {
        return children.map((child: any, index: number) => (
          <div key={index} style={renderedStyle} className={renderClass}>
            {child}
          </div>
        ));
      }
    },
    [children, config]
  );

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

  const configInitSlider = useCallback(() => {
    const { mode } = config;
    if (!children) return;
    return renderSlide(mode);
  }, [config, children, renderSlide]);

  templateRendered = configInitSlider();

  useEffect(() => {
    getOffsetWidth();
    setStyleState(`${currPosition}px`);
  }, [currPosition, getOffsetWidth, maxWidth, configInitSlider]);

  renderStyle();

  return (
    <div className="rx-sulfate">
      <RxSulfateProvider
        slots={{
          template: {
            className: "rx-sulfate-template d-flex",
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
        <div style={navigateStyle}>
          <div className="rx-navigation justify-content-between d-flex">
            <button
              className="rx-prev"
              onClick={() => handleWraperEffect("prev")}
            >
              <img
                className="rx-cover-content"
                src={`${process.env.PUBLIC_URL}/assets/icons/chevron-left-solid.svg`}
                alt="cover_img"
              />
            </button>
            <button
              className="rx-next"
              onClick={() => handleWraperEffect("next")}
            >
              <img
                className="rx-cover-content"
                src={`${process.env.PUBLIC_URL}/assets/icons/chevron-right-solid.svg`}
                alt="cover_img"
              />
            </button>
          </div>
        </div>
      </RxSulfateProvider>
    </div>
  );
}

export default RxSulfate;

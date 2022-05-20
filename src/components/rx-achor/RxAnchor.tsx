import MainRouters from "@/router/mainRouter";
import animateService from "@/services/animate.service";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RxAnchor.scss";

function RxAchor() {
  let isVisible = false;
  const sidebarRef = useRef(null);
  const anchorRef = useRef(null);

  const navigate = useNavigate();
  const handleClick = (link: string) => {
    emitTransformRequest(false);
    handleAnchorClass("");
    handleClass("");
    navigate(`/${link}`, { replace: true });
  };

  const handleClickArrow = () => {
    isVisible = !isVisible;
    if (isVisible) {
      handleClass("rx-visibility");
      handleAnchorClass("rx-anchor-visibility");
      emitTransformRequest(true);
    } else {
      handleClass("");
      handleAnchorClass("");
      emitTransformRequest(false);
    }
  };

  const handleClass = (className: string) => {
    const refDiv: any = sidebarRef.current;
    if (!refDiv) return;
    refDiv.className = `rx-sidebar ${className}`;
  };

  const handleAnchorClass = (className: string) => {
    const refDiv: any = anchorRef.current;
    if (!refDiv) return;
    refDiv.className = `rx-vertical d-flex justify-content-center ${className}`;
  };

  const emitTransformRequest = (value: boolean): void => {
    animateService.requestTransform(value);
  };
  return (
    <div className="rx-anchor-main">
      <div
        ref={anchorRef}
        className="rx-vertical d-flex justify-content-center"
      >
        <img
          onClick={() => handleClickArrow()}
          className="rx-logo align-self-center"
          src={`${process.env.PUBLIC_URL}/assets/icons/chevron.png`}
          alt="logo"
        />
      </div>
      <div ref={sidebarRef} className="rx-sidebar">
        <div className="rx-sign-logo">
          <img
            className="rx-sign"
            src={`${process.env.PUBLIC_URL}/assets/images/rx_3.png`}
            alt="sign"
          />
        </div>
        <div className="d-flex justify-content-end h-100">
          <div className="rx-ul align-self-center w-100">
            <ul className="rx-ul d-block navbar-nav rx-list w-100">
              <li className="rx-menu-item py-2" onClick={() => handleClick("")}>
                Home
              </li>
              <li className="rx-menu-item py-2">About Us</li>
              <li className="rx-menu-item py-2">Recipe</li>
              <li className="rx-menu-item py-2">Menu</li>
              <li className="rx-menu-item py-2">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <MainRouters></MainRouters>
    </div>
  );
}
export default RxAchor;

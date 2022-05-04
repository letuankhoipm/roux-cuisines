import { useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { MainRouters } from "@/router/index";
import { useRef } from "react";

function Navigation() {
  const navigate = useNavigate();
  const mobileRef = useRef(null);
  const arrowRef = useRef(null);
  const logoRef = useRef(null);

  let isStretch = false;

  const handleClick = (link: string) => {
    navigate(`/${link}`, { replace: true });
  };

  const handleOpenMenu = () => {
    isStretch = !isStretch;
    if (isStretch) {
      handleClass("rx-expand");
      handleArrowState("rx-reverse");
      handleLogoState("rx-logo-animate");
    } else {
      handleClass("rx-collapse");
      handleArrowState("");
      handleLogoState("");
    }
  };

  const handleClass = (className: string) => {
    const refDiv: any = mobileRef.current;
    if (!refDiv) return;
    refDiv.className = `rx-mobile-navbar d-flex align-items-center justify-content-end ${className}`;
  };

  const handleArrowState = (className: string) => {
    const refDiv: any = arrowRef.current;
    if (!refDiv) return;
    refDiv.className = `rx-arrow-button rx-left-arrow ${className}`;
  };

  const handleLogoState = (className: string) => {
    const refDiv: any = logoRef.current;
    if (!refDiv) return;
    refDiv.className = `rx-logo ${className}`;
  };

  handleClass("rx-collapse");

  return (
    <div className="rx-navbar-container">
      <div className="rx-navbar py-2 d-none">
        <div className="container">
          <div className="row">
            <div className="navbar navbar-expand-lg navbar-light">
              <div className="col-12 d-lg-none d-flex justify-content-end">
                <img
                  ref={logoRef}
                  className="rx-logo"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                  alt="logo"
                />
              </div>
              <div className="col-2 d-none d-lg-flex justify-content-start">
                <img
                  className="rx-logo"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo_w.png`}
                  alt="logo"
                />
              </div>
              <div className="col-lg-10 d-none d-lg-block align-self-center d-flex justify-content-end rx-desktop-navbar">
                <ul className="rx-ul navbar-nav mr-auto">
                  <li
                    className="rx-menu-item nav-item align-self-center"
                    onClick={() => handleClick("")}
                  >
                    Home
                  </li>
                  <li
                    className="rx-menu-item align-self-center"
                    onClick={() => handleClick("about-us")}
                  >
                    About Us
                  </li>
                  <li className="rx-menu-item align-self-center">Recipe</li>
                  <li className="rx-menu-item align-self-center">Menu</li>
                  <li className="rx-menu-item align-self-center">Contact Us</li>
                </ul>
              </div>
              <div className="col-2 d-none d-lg-block">
                {/* <img
                  ref={logoRef}
                  className="rx-logo"
                  src={`${process.env.PUBLIC_URL}/assets/icons/arrow-left-solid.svg`}
                  alt="logo"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="rx-nd-menu">
        <img
          ref={logoRef}
          className="rx-logo"
          src={`${process.env.PUBLIC_URL}/assets/icons/arrow-left-solid.svg`}
          alt="logo"
        />
      </div> */}
      <div className="rx-main">
        <div
          ref={mobileRef}
          className="rx-mobile-navbar d-flex align-items-center justify-content-end"
        >
          <img
            ref={arrowRef}
            onClick={() => handleOpenMenu()}
            className="rx-arrow-button rx-left-arrow"
            src={`${process.env.PUBLIC_URL}/assets/icons/arrow-left-solid.svg`}
            alt="arrow-sign"
          />
          <ul className="rx-ul navbar-nav text-right">
            <li
              className="rx-menu-item nav-item py-2"
              onClick={() => handleClick("")}
            >
              Home
            </li>
            <li
              className="rx-menu-item py-2"
              onClick={() => handleClick("about-us")}
            >
              About Us
            </li>
            <li className="rx-menu-item py-2">Recipe</li>
            <li className="rx-menu-item py-2">Menu</li>
            <li className="rx-menu-item  py-2">Contact Us</li>
          </ul>
        </div>
      </div>

      <MainRouters></MainRouters>
    </div>
  );
}
export default Navigation;

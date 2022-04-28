import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { MainRouters } from "@/router/index";

function Navigation() {
  const navigate = useNavigate();
  const handleClick = React.useCallback(
    (link: string) => navigate(`/${link}`, { replace: true }),
    [navigate]
  );
  return (
    <div className="rx-navbar-container">
      <div className="rx-navbar py-4 ">
        <div className="container">
          <div className="row">
            <div className="navbar navbar-expand-lg navbar-light">
              <div className="col-2 text-left">
                <img
                  className="rx-logo"
                  src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                  alt="logo"
                />
              </div>
              <div className="col-10 align-self-center d-flex justify-content-end">
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
                  <li className="rx-menu-item align-self-center">
                    <button className="rx-button">Sign-in</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes> */}
      <MainRouters></MainRouters>
    </div>
  );
}
export default Navigation;

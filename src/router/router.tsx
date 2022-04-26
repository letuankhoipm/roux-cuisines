import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("src/views/home/Home"));

const Routers: React.FC<any> = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Routers;

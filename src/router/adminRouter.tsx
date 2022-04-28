import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("@/views/home/Home"));

const AdminRouters: React.FC<any> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default AdminRouters;

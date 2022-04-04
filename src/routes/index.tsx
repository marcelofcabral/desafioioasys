import React from "react";

import { Routes as RouterDOMRoutes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes: React.FC = () => (
  <RouterDOMRoutes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
  </RouterDOMRoutes>
);

export default Routes;

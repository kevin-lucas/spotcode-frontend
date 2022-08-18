import React, { Fragment } from "react";
import "bulma/css/bulma.min.css";
import RoutesApp from "./routes";

import {
    BrowserRouter,
  } from "react-router-dom";
import HomeScreen from "./screens/home";

const App = () => {
  return (
    <HomeScreen />
  );
};

export default App;

import React from "react";
import "bulma/css/bulma.min.css";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

import HomeScreen from "./screens/home";
import DiscoveryScreen from "./screens/discovery";
import SearchScreen from "./screens/search";
import AlbumScreen from "./screens/album";
import FavoritesScreen from "./screens/favorites";
import Menu from "./components/common/menu";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/discovery" element={<DiscoveryScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="album/:id" element={<AlbumScreen />} />
      <Route path="/favorites" element={<FavoritesScreen />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

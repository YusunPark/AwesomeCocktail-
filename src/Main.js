import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;

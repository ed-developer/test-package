import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about.page";
import MyPage from "./test.page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

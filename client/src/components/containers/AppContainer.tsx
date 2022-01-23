import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { AboutPage } from "../../pages/AboutPage";

export const AppContainer = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/courses"} element={<AboutPage />} />
        <Route path={"/guide"} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
});

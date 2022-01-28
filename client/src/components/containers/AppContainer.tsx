import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { AboutPage } from "../../pages/AboutPage";
import {Header} from "../headers/Header";
import {Footer} from "../footers/Footer";
import {Container} from "@mui/material";
import {CoursesPage} from "../../pages/CoursesPage";
import {GuidePage} from "../../pages/GuidePage";

export const AppContainer = observer(() => {
  return (
      <Container>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path={"/"} element={<MainPage />} />
                  <Route path={"/about"} element={<AboutPage />} />
                  <Route path={"/courses"} element={<CoursesPage />} />
                  <Route path={"/guide"} element={<GuidePage />} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </Container>

  );
});

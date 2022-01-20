import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../../routes";
import { IBrowserRoute } from "../../interfaces/IBrowserRoute";
import { MainPage } from "../../pages/MainPage";

export const AppContainer = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
          {routes.map((route: IBrowserRoute) => {
              const element = route.component
              return <Route
                  path={route.path}
                  element={ element as React.ComponentClass}
              />
          })}
      </Routes>
    </BrowserRouter>
  );
});

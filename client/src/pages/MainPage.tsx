import React from "react";
import { observer } from "mobx-react";
import { Header } from "../components/headers/Header";
import { Footer } from "../components/footers/Footer";
import {strings} from "../locale";

export const MainPage = observer(() => {


    return (
    <div className="MainPage">
      <Header />
      <Footer />
    </div>
  );
});

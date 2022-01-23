import React from "react";
import logoIcon from "../../images/Logo.svg";
import {Icon} from "../Icon/Icon";
import style from "./style.module.css";

export const Logo = () => {
  return (
    <div className={style.logoWrap}>
        <Icon icon={logoIcon}/>
    </div>
  );
};

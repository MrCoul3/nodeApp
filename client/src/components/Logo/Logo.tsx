import React, { useState } from "react";
import logoIcon from "../../images/Logo.svg";
import { Icon } from "../Icon/Icon";
import style from "./style.module.css";

export const Logo = () => {
  const initState = {
    width: "149px",
    height: "108px",
  };
  const modifiedState = {
    width: "160px",
    height: "118px",
  };
  const [state, setState] = useState(initState);

  function onMouseOver() {
    setState((prevState) => ({
      ...prevState,
      ...modifiedState,
    }));
  }
  function onMouseOut() {
    setState((prevState) => ({ ...prevState, ...initState }));
  }
  return (
      <div className={style.LogoContainer}>
          <div
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              className={style.Logo}
          >
              <Icon width={state.width} height={state.height} icon={logoIcon} />
          </div>
      </div>

  );
};

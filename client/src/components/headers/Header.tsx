import { observer } from "mobx-react";
import React from "react";
import { InstaIcon } from "../icons/InstaIcon";
import { IconButton } from "@mui/material";
import { TikTokIcon } from "../icons/TikTokIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo/Logo";
import style from "./style.module.css";

export const Header = observer(() => {
  return (
    <div className="Header">
      <div className={style.HeaderInterface}>
        <div>
          <IconButton onClick={() => console.log("click")}>
            <InstaIcon width="35" height="35" fill="#EC3E37" />
          </IconButton>
          <IconButton onClick={() => console.log("click")}>
            <TikTokIcon width="35" height={"35"} fill="#BDE3ED" />
          </IconButton>
        </div>
        <Logo />
      </div>
    </div>
  );
});

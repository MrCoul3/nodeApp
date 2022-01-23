import { observer } from "mobx-react";
import React from "react";
import { IconButton } from "@mui/material";
import instaIcon from "../../images/insta-icon.svg";
import tikTokIcon from "../../images/tiktok.svg";
import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo/Logo";
import style from "./style.module.css";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Header = observer(() => {
  return (
    <div className="Header">
      <div className={style.HeaderInterface}>
        <div>
          <IconButton onClick={() => console.log("click")}>
            <Icon icon={instaIcon} />
          </IconButton>
          <IconButton onClick={() => console.log("click")}>
            <Icon icon={tikTokIcon} />
          </IconButton>
        </div>
        <Logo />
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
});

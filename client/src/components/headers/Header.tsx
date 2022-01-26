import { observer } from "mobx-react";
import React from "react";
import { IconButton } from "@mui/material";
import instaIcon from "../../images/insta-icon.svg";
import tikTokIcon from "../../images/tiktok.svg";
import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo/Logo";
import style from "./style.module.css";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import {useStore} from "../../hooks/useStore";
import {LoginButton} from "../buttons/LoginButton/LoginButton";
import {FlexContainer} from "../containers/flex/FlexContainer";

export const Header = observer(() => {
  const store = useStore();

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
        <FlexContainer alignItems={'center'}>
          <LanguageSwitcher />
          <LoginButton value={store.dict.header.login} />
        </FlexContainer>
      </div>
    </div>
  );
});

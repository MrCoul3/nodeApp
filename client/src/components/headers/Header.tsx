import { observer } from "mobx-react";
import React from "react";
import { IconButton } from "@mui/material";
import instaIcon from "../../images/insta-icon.svg";
import tikTokIcon from "../../images/tiktok.svg";
import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo/Logo";
import style from "./style.module.css";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useStore } from "../../hooks/useStore";
import { LoginButton } from "../buttons/LoginButton/LoginButton";
import { FlexContainer } from "../containers/flex/FlexContainer";
import { NavigationMenu } from "../Navigations/NavigationMenu";
import {useNavigate} from "react-router";

export const Header = observer(() => {
  const store = useStore();
  const navigate = useNavigate();

  const data = {
    name: "coul",
  };
  return (
    <div className="Header">
      <div className={style.HeaderInterface}>
        <FlexContainer width={"165px"}>
          <IconButton onClick={() => console.log("click")}>
            <Icon icon={instaIcon} />
          </IconButton>
          <IconButton onClick={() => console.log("click")}>
            <Icon icon={tikTokIcon} />
          </IconButton>
        </FlexContainer>

        <Logo onClick={()=>navigate('/')} />

        <FlexContainer alignItems={"center"}>
          <LanguageSwitcher />
          <LoginButton data={data} value={store.dict.header.login} />
        </FlexContainer>
      </div>
      <NavigationMenu />
    </div>
  );
});

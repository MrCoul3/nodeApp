import React, {useState} from "react";
import style from "./style.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
import russianFlag from "../../images/RussianFlag.svg";
import englishFlag from "../../images/united-kingdom 1.svg";
import { IconWithText } from "../Icon/IconWithText";
import { FlexContainer } from "../containers/flex/FlexContainer";
import { strings } from "../../locale";
import { observer } from "mobx-react";

export const LanguageSwitcher = observer(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const languageInitialState = {icon: englishFlag, text: 'En'};
  const [languageIcon, setLanguageIcon] = useState(languageInitialState);
  const handleChangeLanguage = (lang: string) => {
    handleClose();
    strings.setLanguage(lang);
    if (lang === 'ru') {
      setLanguageIcon({icon: russianFlag, text: 'Ru'})
    } else {
      setLanguageIcon(languageInitialState)
    }
  };

  return (
    <div>
      <Button
        startIcon={<IconWithText icon={languageIcon.icon} />}
        size={"large"}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {languageIcon.text}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleChangeLanguage("ru")}>
          <FlexContainer gap={"5px"}>
            <IconWithText icon={russianFlag} />
            <span>RU</span>
          </FlexContainer>
        </MenuItem>
        <MenuItem onClick={() => handleChangeLanguage("en")}>
          <FlexContainer gap={"5px"}>
            <IconWithText icon={englishFlag} />
            <span>EN</span>
          </FlexContainer>
        </MenuItem>
      </Menu>
    </div>
  );
});

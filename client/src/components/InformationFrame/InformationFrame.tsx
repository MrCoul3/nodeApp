import { observer } from "mobx-react";
import React from "react";
import style from "./style.module.css";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { strings } from "../../locale";
import { FlexContainer } from "../containers/flex/FlexContainer";
import classNames from "classnames";
import { useStore } from "../../hooks/useStore";
interface IProps {
  onClick?(): void;
}
export const InformationFrame = observer((props: IProps) => {
  const store = useStore();
  return (
    <div className={style.infoFrameWrap}>
      <div className={style.infoFrame}>
        <header className={style.header}>
          <span>{strings.infoFrame.ingoAboutGroup}</span>
          <IconButton onClick={props.onClick}>
            <CloseOutlinedIcon />
          </IconButton>
        </header>
        <main className={style.main}>


          <FlexContainer>
            <div className={style.leftSide}>
              <FlexContainer fDirection={"column"}>
                <div className={classNames(style.border, style.cell)}>
                  <span className={classNames(style.firstCol, style.text)}>
                    {strings.infoFrame.name}
                  </span>
                </div>
                <div className={style.cell}>
                  <span className={classNames(style.firstCol, style.text)}>
                    {strings.infoFrame.description}
                  </span>
                </div>
              </FlexContainer>
            </div>
            <div>
              <FlexContainer fDirection={"column"}>
                <div className={classNames(style.border, style.cell)}>
                  <span className={style.text}>
                    {" "}
                    {store.groupAppStore.selectedGroupElement?.name}
                  </span>
                </div>
                <div className={style.cell}>
                  <span className={style.text}>
                    {store.groupAppStore.selectedGroupElement?.description}
                  </span>
                </div>
              </FlexContainer>
            </div>
          </FlexContainer>
        </main>
      </div>
    </div>
  );
});

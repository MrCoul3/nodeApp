import { observer } from "mobx-react";
import React from "react";
import style from "./style.module.css";
import { Button, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { strings } from "../../locale";
import { FlexContainer } from "../containers/flex/FlexContainer";
import { useStore } from "../../hooks/useStore";
import {SelectedObjectsBar} from "./SelectedObjectsBar/SelectedObjectsBar";
import {SelectedObjectsList} from "./SelectedObjectsList/SelectedObjectsList";

interface IProps {
  onClick?(): void;
}

export const AddObjectFrame = observer((props: IProps) => {
  const store = useStore();
  return (
    <div className={style.addObjectFrameWrap}>
      <div className={style.addObjectFrame}>
        <header className={style.header}>
          <span>{strings.addObjects}</span>
          <IconButton onClick={props.onClick}>
            <CloseOutlinedIcon />
          </IconButton>
        </header>

        <main className={style.main}>
          {/*  выбранные объекты SelectedObjectsBar */}
          <FlexContainer>
            <SelectedObjectsBar />
            <SelectedObjectsList />
          </FlexContainer>

          {/*  список выбираемых объектов SelectedObjectsList  */}
            {/*  SelectedObjectsListHeader + меню выбора класса + поиск  */}
            {/*  ObjectsList + функция выбора   */}
          <footer>
            <FlexContainer padding={"0 20px"} jContent={"flex-end"}>
              <Button
                  onClick={props.onClick}
              >
                {strings.cancel}
              </Button>
              <Button>{strings.add}</Button>
            </FlexContainer>
          </footer>
        </main>
      </div>
    </div>
  );
});

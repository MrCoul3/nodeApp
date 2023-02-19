import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";
import {useTranslation} from "react-i18next";
import {FlexContainer} from "n7-flexcontainer";
import Draggable from "react-draggable";
export const MainPage = observer(() => {
  const store = useStore();
  const { t, i18n } = useTranslation();


  return (
    <div className="MainPage">
        <FlexContainer>

            <Draggable>
                <div style={{width: "100px", height: "100px", background: "beige"}}>div</div>
            </Draggable>

        </FlexContainer>
    </div>
  );
});

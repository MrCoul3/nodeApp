import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";
import {useTranslation} from "react-i18next";
import Draggable from "react-draggable";
import {FlexContainer} from "react-flxcontainer"
import {DateTimeRangePicker} from "../../tsdxLib/src";
export const MainPage = observer(() => {
  const store = useStore();
  const { t, i18n } = useTranslation();

  return (
    <div className="MainPage">
        <FlexContainer>
        <DateTimeRangePicker setDateValue={(newValue) => {}} value={[]} />


        </FlexContainer>
    </div>
  );
});

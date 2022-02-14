import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { IconWithText } from "../../Icon/IconWithText";
import { Checkbox } from "@mui/material";
import classNames from "classnames";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react";
import { IWindowElement } from "../../../stores/GroupAppStore";
import { toJS } from "mobx";
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
interface IProps {
  children?: string | React.ReactNode;
  icon?: string | undefined;
  inputData?: IWindowElement;
  isCheckAble: boolean;
}

export const GroupWindowElement = observer((props: IProps) => {
  const store = useStore();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    if (!store.groupAppStore.selectedElementsIDs.length) {
      setChecked(false);
    }
  }, [store.groupAppStore.selectedElementsIDs]);

  function setSelectionList() {
    checked ? setChecked(false) : setChecked(true);
    if (!checked) {
      store.groupAppStore.setSelectElementsIDs(props.inputData?.id);
    } else {
      store.groupAppStore.removeSelectElementsIDs(props.inputData?.id);
    }
  }

  function handleClick(e: any) {
    if (e.target.tagName !== "INPUT") {
      if (props.inputData && props.inputData.name) {
        if (!store.groupAppStore.selectedElementsIDs.length) {
          store.groupAppStore.setSelectedGroupElement(props.inputData);
          store.groupAppStore.fetchObjectsForGroupID(props.inputData.id);
        } else {
          setSelectionList();
        }
      } else {
        setSelectionList();
      }
    }
    console.log(toJS(store.groupAppStore.selectedElementsIDs));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (!checked) {
      store.groupAppStore.setSelectElementsIDs(props.inputData?.id);
    } else {
      store.groupAppStore.removeSelectElementsIDs(props.inputData?.id);
    }
    console.log(toJS(store.groupAppStore.selectedElementsIDs));
  };

  return (
    <div
      className={classNames(style.GroupWindowElementWrap, "GroupWindowElement")}
    >
      <div
        onClick={handleClick}
        className={
          checked
            ? classNames(
                style.GroupWindowElementChecked,
                style.GroupWindowElement
              )
            : style.GroupWindowElement
        }
      >
        <div
          className={
            props.isCheckAble ?
            (checked
              ? classNames(style.checkBoxChecked, style.checkBox)
              : style.checkBox) : style.unCheckAble
          }
        >
          <Checkbox
            key={props.inputData?.id}
            checked={checked}
            icon={<CircleOutlinedIcon  />}
            checkedIcon={<CheckCircleOutlinedIcon />}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>

        <IconWithText width={"32px"} icon={props.icon} />
      </div>
      <div>{props.children}</div>
    </div>
  );
});

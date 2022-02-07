import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import { IGroupList } from "../../stores/GroupAppStore";
import style from "./style.module.css";
import { toJS } from "mobx";
import { ObjectElement } from "../ObjectElement/ObjectElement";
import GroupIcon from "../../images/groupIcons/group.svg";
import { IconWithText } from "../Icon/IconWithText";
import classNames from "classnames";

type IProps = {
  selected?:boolean;
  description: string;
  onHandleClick?(e: any): void;
};

export const GroupBarElement = (props: IProps) => {
  // const [expanded, setExpanded] = useState<boolean>(false);

  /*  function sortObjectList() {
    return store.groupAppStore.objectIDsList.map((obj, i, array) => {
      store.groupAppStore.groupList.forEach((g) => {
        if (g.id === obj) {
          array.splice(i, 1);
          array.unshift(obj);
        }
      });
    });
  }*/

  /* function onHandleClick(event: React.MouseEvent) {
    event.stopPropagation();
    // store.groupAppStore.fetchObjectsIDsList(props.inputData.id);
    // store.groupAppStore.setSelectedElementData(props.inputData);
    // expanded ? setExpanded(false) : setExpanded(true);
    // sortObjectList();
    console.log(toJS(store.groupAppStore.objectIDsList));
    console.log(
      "store.groupAppStore.selectedElementData",
      toJS(store.groupAppStore.selectedElementData)
    );
  }*/

  /*  function renderExpanded() {
    return store.groupAppStore.objectIDsList.map((item, i, array) => {
      const group = store.groupAppStore.groupList.find((g) => item === g.id);
      if (group) {
        return <GroupBarElement key={item} inputData={group} />;
      } else {
        return <ObjectElement key={item} inputData={item} />;
      }
    });
  }*/
  function isSelected() {
    if (props.selected) {
      return style.selected
    }
  }

  return (
    <div
      className={classNames(style.groupBarElement, isSelected())}
      onClick={props.onHandleClick}
    >
      <IconWithText
        margin={"0 0 0 10px"}
        width={"21px"}
        icon={GroupIcon}
        text={props.description}
      />
      {/*<div className={style.group}>{props.inputData.description}</div>*/}
      {/*<div className={style.groupExpand}>*/}
      {/*  {expanded ? renderExpanded() : ""}*/}
      {/*</div>*/}
    </div>
  );
};

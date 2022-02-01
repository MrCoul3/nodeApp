import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import { IGroupList } from "../../stores/GroupAppStore";
import style from "./style.module.css";
import { toJS } from "mobx";
import { ObjectElement } from "../ObjectElement/ObjectElement";

type IProps = {
  inputData: IGroupList;
};

export const GroupElement = (props: IProps) => {
  const store = useStore();
  const [expanded, setExpanded] = useState<boolean>(false);

  function sortObjectList() {
    return store.groupAppStore.objectIDsList.map((obj, i, array) => {
      store.groupAppStore.groupList.forEach((g) => {
        if (g.id === obj) {
          array.splice(i, 1);
          array.unshift(obj);
        }
      });
    });
  }

  function onHandleClick(event: React.MouseEvent) {
    event.stopPropagation();
    store.groupAppStore.fetchObjectsIDsList(props.inputData.id);
    store.groupAppStore.setSelectedElementData(props.inputData);
    expanded ? setExpanded(false) : setExpanded(true);
    sortObjectList();
    console.log(toJS(store.groupAppStore.objectIDsList));
    console.log(
      "store.groupAppStore.selectedElementData",
      toJS(store.groupAppStore.selectedElementData)
    );
  }

  function renderExpanded() {
    return store.groupAppStore.objectIDsList.map((item, i, array) => {
      const group = store.groupAppStore.groupList.find((g) => item === g.id);
      if (group) {
        return <GroupElement key={item} inputData={group} />;
      } else {
        return <ObjectElement key={item} inputData={item} />;
      }
    });
  }

  return (
    <div className={style.groupAppElement} onClick={onHandleClick}>
      <div className={style.group}>{props.inputData.name}</div>
      <div className={style.groupExpand}>
        {expanded ? renderExpanded() : ""}
      </div>
    </div>
  );
};

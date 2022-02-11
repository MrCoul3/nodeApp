import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import { IGroupList, IObject } from "../../stores/GroupAppStore";
import style from "./style.module.css";
import { toJS } from "mobx";
import { IconWithText } from "../Icon/IconWithText";
import classNames from "classnames";
import { observer } from "mobx-react";
import { GroupIcon } from "../../icons/GroupIcon";

type IProps = {
  inputData: IGroupList;
  // selected?: boolean;
  // description?: string;
  // onHandleClick?(e: any): void;
};

export const GroupBarElement = observer((props: IProps) => {
  const store = useStore();

  const [expanded, setExpanded] = useState<boolean>(false);
  const [objectList, setObjectList] = useState<any>([]);

  function onHandleClick(event: React.MouseEvent) {
    event.stopPropagation();

    store.groupAppStore.fetchObjectsIDsList(props.inputData.id);
    setObjectList(store.groupAppStore.objectIDsList);
    store.groupAppStore.setSelectedGroupElement(props.inputData);
    expanded ? setExpanded(false) : setExpanded(true);
  }

  function renderExpanded() {
    return objectList.map((objectList: IObject) => {
      const group = store.groupAppStore.groupList.find(
        (groupList) => objectList.id === groupList.id
      );
      if (group) {
        return (
          <div key={objectList.id}>
            <GroupBarElement inputData={group} />
          </div>
        );
      }
    });
  }

  function isSelected() {
    if (props.inputData.selected) {
      return style.selected;
    }
  }

  return (
    <div className={style.groupBarElementWrap}>
      <div
        className={classNames(style.groupBarElement, isSelected())}
        onClick={onHandleClick}
      >
        <GroupIcon
          width={"20"}
          height={"20"}
          fill={props.inputData.selected ? "#fff" : "black"}
        />
        <div>{props.inputData.description}</div>
      </div>
      {expanded ? (
        <div className={style.groupExpand}>{renderExpanded()}</div>
      ) : null}
    </div>
  );
});

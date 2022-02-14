import React from "react";
import { useStore } from "../../hooks/useStore";
import { IconWithText } from "../Icon/IconWithText";
import GroupIcon from "../../images/groupIcons/group.svg";
import WindowGroupIcon from "../../images/groupIcons/windowGroupIcon.svg";
import WindowObjectIcon from "../../images/groupIcons/windowObjectIcon.svg";
import style from "./style.module.css";
import { observer } from "mobx-react";
import { Button, IconButton } from "@mui/material";
import NewGroupIcon from "../../images/groupIcons/newGroup.svg";
import { GroupWindowElement } from "./GroupWindowElement/GroupWindowElement";
import { IGroupList } from "../../stores/GroupAppStore";
import { InfoButtonIcon } from "../../icons/InfoButtonIcon";
import { FlexContainer } from "../containers/flex/FlexContainer";
import { GroupWindowHead } from "./GroupWindowHead/GroupWindowHead";
import { GroupBarElement } from "../GroupBarElement/GroupBarElement";
import { toJS } from "mobx";

export const GroupWindow = observer(() => {
  const store = useStore();

  function renderObjects() {
    console.log(
      "store.groupAppStore.objectIDsList",
      toJS(store.groupAppStore.objectIDsList)
    );

    return store.groupAppStore.objectIDsList.map((object, i, array) => {
      const group = store.groupAppStore.groupList.find(
        (group) => object.id === group.id
      );

      if (group) {
        return (
          <GroupWindowElement
            isCheckAble={true}
            inputData={group}
            icon={WindowGroupIcon}
            key={group.id}
          >
            {group.name}
          </GroupWindowElement>
        );
      } else {
        return (
          <GroupWindowElement
            isCheckAble={true}
            inputData={object}
            icon={WindowObjectIcon}
            key={object.id}
          >
            {object.object_name}
          </GroupWindowElement>
        );
      }
    });
  }

  function renderGroupsInStartWindow() {
    return store.groupAppStore.groupList.map((group) => {
      const rootGroup = store.groupAppStore.allGroups.find(
        (rootGroup) => rootGroup.id === group.id
      );
      if (rootGroup) {
        return (
          <GroupWindowElement
            isCheckAble={false}
            inputData={group}
            icon={WindowGroupIcon}
            key={group.id ? group.id : ""}
          >
            {group.name}
          </GroupWindowElement>
        );
      }
    });
  }

  return (
    <div className={style.groupWindow}>
      <GroupWindowHead />
      {store.groupAppStore.selectedGroupElement ? (
        <>
          <div className={style.groupWindowBody}>
            {store.groupAppStore.objectIDsList.length ? (
              renderObjects()
            ) : (
              <div className={style.emptyText}><span>В выбранной группе нет содержимого</span></div>
            )}
          </div>
        </>
      ) : (
        <div className={style.groupWindowBody}>
          {renderGroupsInStartWindow()}
        </div>
      )}
    </div>
  );
});

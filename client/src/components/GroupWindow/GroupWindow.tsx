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

export const GroupWindow = observer(() => {
  const store = useStore();

  function renderObjects() {
    return store.groupAppStore.objectIDsList.map((object, i, array) => {
      const group = store.groupAppStore.groupList.find(
        (group) => object.id === group.id
      );
      if (group) {
        return (
          <GroupWindowElement
            inputData={group}
            icon={WindowGroupIcon}
            key={object.id}
          >
            {group.description}
          </GroupWindowElement>
        );
      } else {
        return (
          <GroupWindowElement
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

  function renderGroups() {
    return store.groupAppStore.groupList.map((group) => {
      return (
        <GroupWindowElement
          inputData={group}
          icon={WindowGroupIcon}
          key={group.id ? group.id : ''}
        >
          {group.description}
        </GroupWindowElement>
      );
    });
  }

  return (
    <div className={style.groupWindow}>
      <GroupWindowHead />
      {store.groupAppStore.selectedGroupElement ? (
        <>
          <div className={style.groupWindowBody}>{renderObjects()}</div>
        </>
      ) : (
        <div className={style.groupWindowBody}>{renderGroups()}</div>
      )}
    </div>
  );
});

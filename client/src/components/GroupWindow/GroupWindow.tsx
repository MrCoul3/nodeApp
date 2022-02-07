import React from "react";
import { useStore } from "../../hooks/useStore";
import { IconWithText } from "../Icon/IconWithText";
import GroupIcon from "../../images/groupIcons/group.svg";
import WindowGroupIcon from "../../images/groupIcons/windowGroupIcon.svg";
import WindowObjectIcon from "../../images/groupIcons/windowObjectIcon.svg";
import style from "./style.module.css";
import { observer } from "mobx-react";
import { Button } from "@mui/material";
import NewGroupIcon from "../../images/groupIcons/newGroup.svg";
import { GroupWindowElement } from "../GroupWindowElement/GroupWindowElement";
import { IGroupList } from "../../stores/GroupAppStore";

export const GroupWindow = observer(() => {
  const store = useStore();

  function onDoubleClick(data: IGroupList) {
    store.groupAppStore.setSelectedElementData(data);
    store.groupAppStore.fetchObjectsIDsList(data.id);
    store.groupAppStore.setSelectedGroup(data.id)
  }

  function renderObjects() {
    return store.groupAppStore.objectIDsList.map((item, i, array) => {
      const group = store.groupAppStore.groupList.find((g) => item === g.id);
      if (group) {
        return (
          <GroupWindowElement
            onDoubleClick={() => onDoubleClick(group)}
            icon={WindowGroupIcon}
            key={item}
          >
            {group.description}
          </GroupWindowElement>
        );
      } else {
        return (
          <GroupWindowElement icon={WindowObjectIcon} key={item}>
            {item}
          </GroupWindowElement>
        );
      }
    });
  }

  return (
    <div className={style.groupWindow}>
      {store.groupAppStore.selectedElementData ? (
        <>
          <div className={style.groupWindowHead}>
            <IconWithText
              icon={GroupIcon}
              text={store.groupAppStore.selectedElementData?.description}
            />
          </div>
          <div className={style.groupWindowBody}>{renderObjects()}</div>
        </>
      ) : (
        <div className={style.groupWindowNewGroupWrap}>
          <div className={style.button}>
            <div>
              <Button size={"large"} variant={"contained"} color={"primary"}>
                <IconWithText width={"24px"} icon={NewGroupIcon} />
              </Button>
            </div>
            <span className={style.buttonDescription}>Создать группу</span>
          </div>
        </div>
      )}
    </div>
  );
});

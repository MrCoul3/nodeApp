import React, { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react";

import style from "./style.module.css";
import { GroupBarElement } from "../GroupBarElement/GroupBarElement";
import { Button } from "@mui/material";
import { CreateGroupIcon } from "../../icons/CreateGroupIcon";
import { CreateGroupWindow } from "../CreateGroupWindow/CreateGroupWindow";
import {strings} from "../../locale";

export const GroupBar = observer(() => {
  const store = useStore();

  useEffect(() => {}, []);

  function onHandleClick() {
    store.groupAppStore.setCreatedMode(true);
    store.groupAppStore.setIsRootDirectory(true);
  }

  return (
    <div className={style.groupBar}>
      <div className={style.groupBarElements}>
        {store.groupAppStore.groupList.map((groupList) => {
          const rootGroup = store.groupAppStore.allGroups.find(
            (rootGroup) => rootGroup.id === groupList.id
          );
          if (rootGroup) {
            return <GroupBarElement key={groupList.id} inputData={groupList} />;
          }
        })}
      </div>
      <div className={style.button}>
        <Button
          onClick={onHandleClick}
          title={"Создать группу в корневом каталоге"}
          startIcon={
            <CreateGroupIcon width={"20px"} height={"20px"} fill={"white"} />
          }
          variant="contained"
          color="primary"
          value="new_group"
        >
          <span className={style.buttonText}>{strings.buttons.newGroup}</span>
        </Button>
      </div>
      {store.groupAppStore.isCreatedMode || store.groupAppStore.isEditMode ? (
        <CreateGroupWindow />
      ) : null}
    </div>
  );
});

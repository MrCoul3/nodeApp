import React, { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import style from "./style.module.css";
import { GroupBarElement } from "../GroupBarElement/GroupBarElement";
import { IGroupList } from "../../stores/GroupAppStore";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {InstanceContextMenu} from "../ContextMenu/InstanceContextMenu";

export const GroupBar = observer(() => {
  const store = useStore();

  useEffect(() => {

  }, []);



  function onHandleClick(e: any, data: IGroupList) {
   /* const groupBarElements = document.querySelectorAll(".groupBarElement");
    groupBarElements.forEach((value) => {
      value.classList.remove("selected");
    });
    e.target.closest(".groupBarElement").classList.add("selected");*/

    store.groupAppStore.fetchObjectsIDsList(data.id);
    store.groupAppStore.setSelectedElementData(data);
    store.groupAppStore.setSelectedGroup(data.id)

  }

  return (
    <div className={style.groupBar}>
      {store.groupAppStore.groupList.map((item) => (
          <ContextMenuTrigger  id={item.id} >
          <InstanceContextMenu id={item.id} />

          <GroupBarElement
          onHandleClick={(e: any) => {
            onHandleClick(e, item);
          }}
          selected={item.selected}
          key={item.id}
          description={item.description}
        />
          </ContextMenuTrigger>
      ))}
    </div>
  );
});

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import style from "./style.module.css";

import React from "react";
interface IProps {
  id: string;
}
export const InstanceContextMenu = (props: IProps) => {
  return (
    <>
      <ContextMenu id={props.id}>
        <div className={style.menuFrame}>
          <div className={style.menuItem}>
            <MenuItem data={{ foo: "bar" }}>ContextMenu Item 1</MenuItem>
          </div>
          <div className={style.menuItem}>
            <MenuItem data={{ foo: "bar" }}>ContextMenu Item 2</MenuItem>

          </div>

          <div className={style.menuItem}>
            <MenuItem data={{ foo: "bar" }}>ContextMenu Item 3</MenuItem>

          </div>
        </div>
      </ContextMenu>
    </>
  );
};

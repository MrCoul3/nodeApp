import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { IconWithText } from "../Icon/IconWithText";
interface IProps {
  children?: string | React.ReactNode;
  icon?: string | undefined;
  onDoubleClick?(): void;
}
export const GroupWindowElement = (props: IProps) => {
  return (
    <div className={style.GroupWindowElementWrap}>
      <div
        onDoubleClick={props.onDoubleClick}
        className={style.GroupWindowElement}
      >
        <IconWithText icon={props.icon} />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

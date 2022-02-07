import React from "react";
import style from "./style.module.css";

export const IconWithText = (props: {
  icon: string | undefined;
  width?: string;
  height?: string;
  text?: string;
  margin?: string;
}) => {
  return (
    <div className={style.iconWrapper}>
      <img
        className={style.img}
        style={{ width: props.width, height: props.height, margin: props.margin }}
        src={props.icon}
        alt="icon"
      />
      {props.text ? <span>{props.text}</span> : null}
    </div>
  );
};

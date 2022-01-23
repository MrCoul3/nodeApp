import React from "react";
import style from "./style.module.css";

export const Icon = (props: {
  icon: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div>
      <img className={style.img}
        style={{ width: props.width, height: props.height }}
        src={props.icon}
        alt="icon"
      />
    </div>
  );
};

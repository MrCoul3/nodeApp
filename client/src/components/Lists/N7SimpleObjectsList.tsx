import React, { ReactNode } from "react";

import style from "./style.module.css";

// ВАРИАНТЫ
// с хедером / без хедера
// с поиском / без поиска
// возможность поменять вид (список, плитка)

interface IProps<T> {
  objectsListArray: T[];
  keys(data: T): string;
  firstLine(data: T): string | ReactNode;
  type?: "list" | "plate";
  secondLine?(data: T): string;
  onItemClick?(data: T): any;
}

export const N7SimpleObjectsList = <T,>(props: IProps<T>) => {
  const type = props.type ? props.type : "list";

  const renderList = () => {
    if (type === "list") {
      return props.objectsListArray.map((object: T) => (
        <div
          className={style.listElement}
          key={props.keys(object)}
          onClick={() => (props.onItemClick ? props.onItemClick(object) : null)}
        >
          <div className={style.listElementContent}>
            <span>{props.firstLine(object)}</span>
            {props.secondLine ? <span>{props.secondLine(object)}</span> : null}
          </div>
        </div>
      ));
    }
    if (type === "plate") {
      return props.objectsListArray.map((object: T) => (
        <div key={props.keys(object)} className={style.plateElement}>
          {props.firstLine(object)}
        </div>
      ));
    }
  };

  return (
    <div>
      <div>{renderList()}</div>
    </div>
  );
};

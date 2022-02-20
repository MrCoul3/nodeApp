import React from "react";

import style from "./style.module.css";

// ВАРИАНТЫ
// с хедером / без хедера
// с поиском / без поиска
// возможность поменять вид (список, плитка)

interface IProps<T> {
  objectsListArray: T[];
  keys(data: T): string;
  firstLine(data: T): string;
  type?: "list" | "plate";
  secondLine?(data: T): string;
}

export const SimpleObjectsList = <T,>(props: IProps<T>) => {
  const type = props.type ? props.type : "list";

  const renderList = () => {
    if (type === "list") {
      return props.objectsListArray.map((object: T) => (
        <div key={props.firstLine(object)} className={style.listElement}>
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

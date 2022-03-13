import React, { ReactNode, useEffect, useState } from "react";

import style from "./style.module.css";
import classNames from "classnames";

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
  onItemClick(data: T): any;
}

export const N7SimpleObjectsList = <T,>(props: IProps<T>) => {
  const type = props.type ? props.type : "list";
  const [selected, setSelected] = useState<number>();

  const renderList = () => {
    if (type === "list") {
      return props.objectsListArray.map((object: T, index) => (
        <div
          className={classNames(style.listElement)}
          key={props.keys(object)}
          onClick={() => {
            setSelected(index);
            props.onItemClick(object);
          }}
        >
          <div
            className={classNames(
              style.listElementContent,
              index === selected ? style.selected : null,
            )}
          >
            <span className={style.firstLine}>{props.firstLine(object)}</span>
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

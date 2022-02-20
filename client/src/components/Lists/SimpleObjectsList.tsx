import React from "react";
import style from './styles.module.css';
// ВАРИАНТЫ
// с хедером / без хедера
// с поиском / без поиска
// возможность поменять вид (список, плитка)

interface IProps<T> {
  type?: "list" | "plate";
  objectsListArray: T[];
  firstLine(data: T): string;
}

export const SimpleObjectsList = <T,>(props: IProps<T>) => {
  const type = props.type ? props.type : "list";

  const renderList = () => {
    if (type === 'list') {
      return props.objectsListArray.map((object: T) => (
          <div>{props.firstLine(object)}</div>
      ));
    }
    if (type === 'plate') {
      return props.objectsListArray.map((object: T) => (
          <div >{props.firstLine(object)}</div>
      ));
    }

  };



  return (
    <div>
      <div>
        {renderList()}
      </div>
    </div>
  );
};

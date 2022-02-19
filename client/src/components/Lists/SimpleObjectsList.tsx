import React from "react";

// ВАРИАНТЫ
// с хедером / без хедера
// с поиском / без поиска
// возможность поменять вид (список, плитка)

interface IProps<T> {
  type?: "list" | "plate";
  objectsListArray: T[];
}

export const SimpleObjectsList = <T,>(props: IProps<T>) => {
  const type = props.type ? props.type : "list";

  const renderList = () => {
    return props.objectsListArray.map((object) => (
      <div>{Object.values(object)[0]}</div>
    ));
  };
  return (
    <div>
      <div>{renderList()}</div>
    </div>
  );
};

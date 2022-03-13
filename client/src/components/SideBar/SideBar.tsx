import { N7SimpleObjectsList } from "../Lists/N7SimpleObjectsList";
import { toJS } from "mobx";
import React from "react";
import { useStore } from "../../hooks/useStore";

export const SideBar = () => {
  const store = useStore();

  return (
    <div style={{ width: "200px", padding: "0 10px" }}>
      <N7SimpleObjectsList
        keys={(data) => data.id}
        objectsListArray={store.fetchData.exampleData}
        firstLine={(data) => data.name}
        onItemClick={(data) => {
          return console.log(toJS(data));
        }}
        // secondLine={(data) => data.id}
        // type={'plate'}
      />
    </div>
  );
};

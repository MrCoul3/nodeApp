import React, { useState } from "react";
import { observer } from "mobx-react";
import { exampleList, IExampleList } from "../constants/constants";
import { SimpleSearch } from "../components/Search/SimpleSearch";
import { SimpleObjectsList } from "../components/Lists/SimpleObjectsList";
import { useStore } from "../hooks/useStore";

export const MainPage = observer(() => {
  const store = useStore();

  return (
    <div className="MainPage">
      <SimpleObjectsList
        keys={(data) => data.id}
        objectsListArray={store.fetchData.exampleData}
        firstLine={(data) => data.name}
        // secondLine={(data) => data.id}
        // type={'plate'}
      />
    </div>
  );
});
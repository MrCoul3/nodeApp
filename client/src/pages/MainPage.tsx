import React, { useState } from "react";
import { observer } from "mobx-react";
import { exampleList, IExampleList } from "../constants/constants";
import { SimpleSearch } from "../components/Search/SimpleSearch";
import { SimpleObjectsList } from "../components/Lists/SimpleObjectsList";
import { useStore } from "../hooks/useStore";

export const MainPage = observer(() => {
  const store = useStore();

  const [filteredData, setFilteredData] = useState<IExampleList[]>(
    store.fetchData.exampleData
  );
  function onFilterInput(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    if (target.value === "") {
      // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
      setFilteredData(store.fetchData.exampleData);
    } else {
      setFilteredData(
        // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
        store.fetchData.exampleData.filter((data) =>
          data.name.toLowerCase().includes(target.value.toLowerCase().trim())
        )
      );
    }
  }
  return (
    <div className="MainPage">
      <SimpleSearch
        filters={true}
        filterTypes={["VS", "WS", "VM"]}
        filterLabels={["vs", "ws", "vm"]}
        onFilterInput={onFilterInput}
      />
      <SimpleObjectsList
        keys={(data) => data.id}
        objectsListArray={filteredData}
        firstLine={(data) => data.name}
        // secondLine={(data) => data.id}
        // type={'plate'}
      />
    </div>
  );
});

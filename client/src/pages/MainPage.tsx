import React, { useState } from "react";
import { observer } from "mobx-react";
import { exampleList, IExampleList } from "../constants/constants";
import { SimpleSearch } from "../components/Search/SimpleSearch";
import { SimpleObjectsList } from "../components/Lists/SimpleObjectsList";
import { useStore } from "../hooks/useStore";

export const MainPage = observer(() => {
  const store = useStore();

  // добавить отображаемые данные и их тип в хук useState
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
          // выбрать фильтруемые данные -> (data.name)
          data.name.toLowerCase().includes(target.value.toLowerCase().trim())
        )
      );
    }
  }

  return (
    <div className="MainPage">
      <SimpleSearch onFilterInput={onFilterInput} />
      {/*<SimpleObjectsList<IExampleList> objectsListArray={exampleList} />*/}

      <div>
        {filteredData.map((element) => {
          return <div key={element.name}>{element.name}</div>;
        })}
      </div>
    </div>
  );
});

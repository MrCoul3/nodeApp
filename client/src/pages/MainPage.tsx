import React, { useState } from "react";
import { observer } from "mobx-react";
import { exampleList, IExampleList } from "../constants/constants";
import { N7SimpleSearch } from "../components/Search/N7SimpleSearch";
import { N7SimpleObjectsList } from "../components/Lists/N7SimpleObjectsList";
import { useStore } from "../hooks/useStore";
import { toJS } from "mobx";
import { SideBar } from "../components/SideBar/SideBar";

export const MainPage = observer(() => {
  const store = useStore();

  // const [filteredData, setFilteredData] = useState<IExampleList[]>(
  //   store.fetchData.exampleData
  // );
  // function onFilterInput(e: React.ChangeEvent) {
  //   const target = e.target as HTMLInputElement;
  //   if (target.value === "") {
  //     // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
  //     setFilteredData(store.fetchData.exampleData);
  //   } else {
  //     setFilteredData(
  //       // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
  //       store.fetchData.exampleData.filter((data) =>
  //         data.name.toLowerCase().includes(target.value.toLowerCase().trim())
  //       )
  //     );
  //   }
  // }

  function onItemClick(data: IExampleList) {
    console.log(data);
  }

  return (
    <div className="MainPage">
      {/*<N7SimpleSearch onFilterInput={onFilterInput} />*/}
      <SideBar />
    </div>
  );
});

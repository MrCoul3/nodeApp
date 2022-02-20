import React, {FormEvent, useState} from "react";
import {IExampleList} from "../../constants/constants";
/**
 добавить отображаемые данные и их тип в хук useState
const [filteredData, setFilteredData] = useState < <IExampleList[]> > (
    < store.fetchData.exampleData >
);

function onFilterInput(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    if (target.value === "") {
        // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
        setFilteredData(< store.fetchData.exampleData >);
    } else {
        setFilteredData(
            // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
            < store.fetchData.exampleData >.filter((data) =>
                // выбрать фильтруемые данные -> (data.name)
                < data.name >.toLowerCase().includes(target.value.toLowerCase().trim())
            )
        );
    }
}

 // Добавить на страницу компонент SimpleSearch -> <SimpleSearch onFilterInput={onFilterInput} />
 **/

interface IProps {
    onFilterInput?(e: FormEvent): void;
}



export const SimpleSearch = (props: IProps) => {
  return (
    <div>
      <input onInput={props.onFilterInput} type="text" />
    </div>
  );
};

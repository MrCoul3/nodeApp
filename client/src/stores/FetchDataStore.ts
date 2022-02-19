import {makeAutoObservable} from "mobx";
import {exampleList, IExampleList} from "../constants/constants";

export class FetchDataStore {

    constructor() {
        makeAutoObservable(this);
    }

    exampleData: IExampleList[] = exampleList;

    // написать компонент для fetch функции
    data: any[] = [];
    fetchData() {

    }
    setData(values: any[]) {
        this.data = values;
    }
    // updateData
}
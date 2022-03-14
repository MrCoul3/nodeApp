import { makeAutoObservable } from "mobx";
import { exampleList, IExampleList } from "../constants/constants";

export class FetchDataStore {
  constructor() {
    makeAutoObservable(this);
  }

  exampleData: IExampleList[] = exampleList;

  // написать компонент для fetch функции
  data: any[] = [];
  async fetchData() {
    const sendedData = {
      name: "тест 1",
    };

    const response = await fetch("/api/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendedData),
    });
    const data = await response;
    console.log("status: ", data.status);
  }
  setData(values: any[]) {
    this.data = values;
  }

  async fetchJsonRpc() {
    try {
      const response = fetch("/jsonrpc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "add_content",
          params: {
            name: 'N7SimpleObjectList'
          },
        }),
      });
    } catch (e) {}
  }
  // updateData
}

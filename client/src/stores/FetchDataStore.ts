import { makeAutoObservable } from "mobx";
import { exampleList, IExampleList } from "../constants/constants";
interface IUsersData {
_id: string, name: string
}
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

  usersData: IUsersData[] = [];
  setUsersData(value: IUsersData[]) {
    this.usersData = [...this.usersData, ...value]
  }
  async fetchJsonRpc(limit: number, offset?: number, ) {
    try {
      const response = fetch("/jsonrpc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "get_users",
          params: {
            offset: offset ? offset : 0,
            limit: limit,
          },
        }),
      });
      response
        .then((data) => data.json())
        .then((data) => {
          console.log(data.result);
          if (data.result) {
            this.setUsersData(data.result)
          }
        });
    } catch (e) {}
  }
  // updateData
}

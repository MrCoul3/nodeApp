import { makeAutoObservable } from "mobx";

export interface IParams {
  name: string;
}

export class Storage {
  constructor() {
    makeAutoObservable(this);
  }

  async fetchGetData(url: string, params: IParams) {
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      throw new Error();
    }
  }

}

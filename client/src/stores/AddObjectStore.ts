import { makeAutoObservable } from "mobx";
import { AppStore } from "./AppStore";
import { OBJECTS_CLASSES } from "../constants/config";

export interface IObjectClasses {
  id: string;
  name: string;
  description: string;
  objectClassId: string | null;
}
export class AddObjectStore {
  private store: AppStore;

  objectClassIds: string[] = [];
  setObjectClassIds(values: string[]) {
    this.objectClassIds = values;
  }

  objectClassesList: IObjectClasses[] = [];
  setObjectClassesList(values: IObjectClasses[]) {
    this.objectClassesList = values;
  }

  constructor(store: AppStore) {
    this.store = store;
    makeAutoObservable(this);
  }

  async fetchClassIDs(length = 50) {
    try {
      const response = fetch(OBJECTS_CLASSES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.store.groupAppStore.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getObjectClassIds",
          params: {
            length: length,
          },
        }),
      });
      return response
        .then((response) => response.json())
        .then((data) => {
          this.setObjectClassIds(data.result);
        });
    } catch (e) {
      console.log(e);
    }
  }

  async fetchClasses(arrayOfIds: string[]) {
    try {
      const response = fetch(OBJECTS_CLASSES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.store.groupAppStore.token,
        },
        mode: "no-cors",
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getObjectClasses",
          params: [arrayOfIds],
        }),
      });
      return response
        .then((response) => response.json())
        .then((data) => {
          this.setObjectClassesList(data.result);
        });
    } catch (e) {
      console.log(e);
    }
  }
}

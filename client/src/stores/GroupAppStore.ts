import { makeAutoObservable, toJS } from "mobx";
import { data, objectIDsList, objectIDsList2 } from "../constants/config";

export interface IGroupList {
  id: string;
  name: string;
  description: string;
  date: string;
  params?: any;
  selected?: boolean;
}

export class GroupAppStore {
  groupList: IGroupList[] = [];
  selectedElementData: IGroupList | null = null;
  objectIDsList: Array<string> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchGroupList() {
    this.setGroupList(data);
  }

  async fetchObjectsIDsList(id: string) {
    if (id === "1111") {
      this.setObjectIDsList(objectIDsList);
    }
    if (id === "2222") {
      this.setObjectIDsList(objectIDsList2);
    }
  }

  setGroupList(value: IGroupList[]) {
    this.groupList = value;
  }

  setSelectedElementData(value: IGroupList) {
    this.selectedElementData = value;
  }

  setObjectIDsList(value: Array<string>) {
    this.objectIDsList = value;
  }

  setSelectedGroup(id: string) {
    this.groupList.forEach((group) => {
      if (group.id === id) {
        group.selected = true;
      } else {
        group.selected = false;
      }
    });
  }
}

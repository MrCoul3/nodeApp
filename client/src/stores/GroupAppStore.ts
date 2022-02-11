import { makeAutoObservable, toJS } from "mobx";
import {
  data,
  GROUPS_APP_ENDPOINT,
  objectIDsList,
  objectIDsList2,
  objectIDsList3,
} from "../constants/config";
import { IFieldsValue } from "../components/CreateGroupWindow/CreateGroupWindow";

export interface IGroupList {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  date?: string;
  params?: any;
  selected?: boolean;
}

export interface IObject {
  id: string;
  object_name?: string;
  object_class?: string;
}
export interface IWindowElement {
  id: string | undefined;
  object_name?: string;
  object_class?: string;
  name?: string;
  description?: string;
  date?: string;
  params?: any;
  selected?: boolean;
}

export class GroupAppStore {
  groupList: IGroupList[] = [];

  selectedGroupElement: IWindowElement | null = null;
  objectIDsList: IObject[] = [];

  selectedElementsIDs: Array<string> = [];

  isCreatedMode: boolean = false;
  isEditMode: boolean = false;
  isRootDirectory: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // объекты
  async fetchObjectsIDsList(id: string | undefined) {
    if (id === "1111") {
      this.setObjectIDsList(objectIDsList);
    }
    if (id === "2222") {
      this.setObjectIDsList(objectIDsList2);
    }
    if (id === "3333") {
      this.setObjectIDsList(objectIDsList3);
    }
  }

  setSelectElementsIDs(value: string | undefined) {
    if (value) this.selectedElementsIDs.push(value);
  }

  removeSelectElementsIDs(value: string | undefined) {
    if (value) {
      this.selectedElementsIDs = this.selectedElementsIDs.filter(
        (id) => id !== value
      );
    }
  }

  clearSelectedElementsIDs() {
    this.selectedElementsIDs = [];
  }

  setObjectIDsList(value: IObject[]) {
    this.objectIDsList = value;
  }

  token =
    "eyJ0eXAiOiAiTTdUIiwgImFsZyI6ICJTSEEyNTZ3aXRoRFNBIn0=.eyJsZXZlbCI6IDAsICJsb2dpbiI6ICJhbGdvbnQiLCAiaWQiOiAiYmQ0ZWVkZTczZjAxNDI0MDgwNzU1ZDcyZWY5YzQyNTQiLCAiY3JlYXRlZCI6ICIyMDIyLTAyLTExVDExOjUzOjA4KzAwOjAwIiwgImhvc3QiOiAiMTkyLjE2OC4xLjEiLCAiZXhwaXJlIjogIjIwMjItMDItMTFUMTI6MjM6MDgrMDA6MDAiLCAicm9sZXMiOiBbIlJPTEVfQURNSU4iLCAiUk9MRV9FVkVSWU9ORSJdfQ==.MDwCHGywTqyQF5XlGQ+Zpr9ngOyN5OjtGNRCc0mvz/gCHBKCErdmJ/tUEvg5XVpFGBobYfBUqcbzQ1YW3UU=";
  // группы
  async fetchGroupList() {
    const response = fetch(GROUPS_APP_ENDPOINT, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "X-M7-Authorization-Token": this.token,
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "get_groups",
        "params": {
          search_filter: {
            root: true,
            order_by: {
              date: "ASC",
            },
          },
        },
      }),
    });
    response
      .then((response) => response.json())
      .then((data) => {
        this.setGroupList(data.result);
      });
  }

  setGroupList(value: IGroupList[]) {
    console.log(value)
    this.groupList = value;
  }

  // изменить список групп при создании группы
  localyUpdateGroupList(value: IGroupList) {
    this.groupList = [...this.groupList, value];
  }

  createGroup(values: IFieldsValue): string | void {
    console.log(values);
  }

  createGroupInRoot(values: IFieldsValue) {
    console.log(values);
  }

  createGroupInGroup(values: IFieldsValue) {
    console.log("createGroupInGroup", values);
    // ??? как создать группу внутри другой группы
  }

  async getGroupByID(id: string | undefined) {
    // return ( result as IGroupList)
  }

  // обновляет данные о группе на сервере
  updateGroup(values: IFieldsValue) {
    //update_group
    console.log("updateGroupList", values);
  }

  deleteGroup(group_id: string | undefined) {
    console.log(group_id);
  }

  setSelectedGroupElement(value: IWindowElement) {
    this.selectedGroupElement = value;
    this.setSelectAttributeToGroup(value.id);
    this.clearSelectedElementsIDs();
  }

  setSelectAttributeToGroup(id: string | undefined) {
    this.groupList.forEach((group) => {
      if (group.id === id) {
        group.selected = true;
      } else {
        group.selected = false;
      }
    });
  }

  // режимы
  setCreatedMode(value: boolean) {
    this.isCreatedMode = value;
  }
  setIsRootDirectory(value: boolean) {
    this.isRootDirectory = value;
  }
  setEditMode(value: boolean) {
    this.isEditMode = value;
  }

  closeCreateEditGroupWindow() {
    this.setCreatedMode(false);
    this.setEditMode(false);
    this.setIsRootDirectory(false);
  }
}

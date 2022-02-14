import { makeAutoObservable, toJS } from "mobx";
import { GROUPS_APP_ENDPOINT } from "../constants/config";
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
  allGroups: IGroupList[] = [];

  selectedGroupElement: IWindowElement | null = null;
  objectIDsList: IObject[] = [];

  selectedElementsIDs: Array<string> = [];

  isCreatedMode: boolean = false;
  isEditMode: boolean = false;

  isRootDirectory: boolean = false;

  token: string;

  constructor() {
    this.token = "";
    makeAutoObservable(this);
  }

  // объекты
  // получить объекты по id группы

  async fetchObjectsForGroupID(id: string | undefined) {
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "get_objects_for_group_id",
          params: {
            group_id: id,
          },
        }),
      });
      return response
        .then((response) => response.json())
        .then((data) => {
          this.setObjectIDsList(data.result);
          return data.result;
        });
    } catch (e) {
      console.log(e);
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

  async fetchToken() {
    const response = fetch("http://accounts.develop-opo/jsonrpc/auth/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "X-M7-Authorization-Token": this.token,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        params: {
          login: "algont",
          password: "algont",
        },
        id: "cad524bc-e225-4976-abb6-b60a8cc5ca7e",
        method: "login",
      }),
    });
    response
      .then((response) => response.json())
      .then((data) => {
        this.setToken(data.result.access_token);
        // console.log(this.token)
        // this.fetchGroupList();
        // this.fetchGroupListInRoot()
      });
    return "tokenIsReceived";
  }

  // группы
  async setToken(token: string) {
    this.token = token;
  }

  fetchGroupList() {
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "get_groups",
          params: {
            search_filter: {
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
    } catch (e) {
      console.log(e);
    }
  }
  setGroupList(value: IGroupList[]) {
    this.groupList = value;
  }

  // получаю список всех групп
  async fetchAllGroups() {
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "get_groups",
          params: {
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
          this.setAllGroups(data.result);
        });
    } catch (e) {
      console.log(e);
    }
  }

  setAllGroups(value: IGroupList[]) {
    this.allGroups = value;
  }

  // изменить список групп при создании группы
  localyUpdateGroupList(value: IGroupList) {
    if (this.isCreatedMode) {
      this.groupList = [...this.groupList, value];
      this.allGroups = [...this.allGroups, value];
    }
    if (this.isEditMode) {
      this.groupList.map((group) => {
        if (group.id === value.id) {
          group.name = value.name;
          group.description = value.description;
        }
      });
    }
  }

  createGroup(values: IFieldsValue) {
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "create_group",
          params: {
            group: {
              name: values.name,
              description: values.description,
            },
          },
        }),
      });
      return response
        .then((response) => response.json())
        .then((data) => {
          return data.result as string;
        });
    } catch (e) {
      console.log(e);
    }
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
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "update_group",
          params: {
            group: {
              id: values.id,
              name: values.name,
              description: values.description,
            },
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    console.log("updateGroupList", values);
  }

  deleteGroup(group_id: string | undefined) {
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "remove_group",
          params: {
            group_id: group_id,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }

  deleteGroupContent(values: {
    group_id: string | undefined;
    object_ids: Array<string>;
  }) {
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "remove_group_content",
          params: {
            group_id: values.group_id,
            object_ids: values.object_ids,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }

  locallyDeleteGroup(id: string | undefined) {
    this.groupList = this.groupList.filter((group) => group.id !== id);
  }

  locallyDeleteGroupContent(object_ids: string[]) {
    this.objectIDsList = this.objectIDsList.filter(
      (object) => !object_ids.includes(object.id)
    );
  }

  // добавить элементы в группу
  async addGroupContent(createdGroupInOtherGroupData: IFieldsValue) {
    try {
      const response = fetch(GROUPS_APP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-M7-Authorization-Token": this.token,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "add_group_content",
          params: {
            group_id: createdGroupInOtherGroupData.group_id,
            objects: [
              {
                id: createdGroupInOtherGroupData.id,
                object_name: createdGroupInOtherGroupData.name,
                object_class: "algont.video.Group",
              },
            ],
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }

  setSelectedGroupElement(value: IWindowElement | null) {
    this.selectedGroupElement = value;
    this.setSelectAttributeToGroup(value?.id);
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

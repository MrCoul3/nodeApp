import { Storage } from "./Storage";
import { ModeStore } from "./ModeStore";
import { FetchDataStore } from "./FetchDataStore";
import {UpdateDataStore} from "./UpdateDataStore";

export class AppStore {

  fetchData: FetchDataStore;
  updateData: UpdateDataStore;
  storage: Storage;
  modes: ModeStore;

  constructor() {
    this.storage = new Storage();
    this.modes = new ModeStore();
    this.fetchData = new FetchDataStore();
    this.updateData = new UpdateDataStore();
  }
}

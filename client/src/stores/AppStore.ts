import {Storage} from "./Storage";
import {strings} from "../locale";
import {dictionaries} from "../locale";
import {GroupAppStore} from "./GroupAppStore";
import {AddObjectStore} from "./AddObjectStore";

type IDictionariesEn = typeof dictionaries.en;
type IDictionariesRu = typeof dictionaries.ru;

export class AppStore {
    storage: Storage;
    groupAppStore: GroupAppStore;
    addObjectStore: AddObjectStore;
    dict: IDictionariesEn | IDictionariesRu;

    constructor() {
        this.storage = new Storage();
        this.groupAppStore = new GroupAppStore();
        this.addObjectStore = new AddObjectStore(this);
        this.dict = dictionaries.en
    }

}

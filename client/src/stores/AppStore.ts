import {Storage} from "./Storage";
import {strings} from "../locale";
import {dictionaries} from "../locale";
import {GroupAppStore} from "./GroupAppStore";

type IDictionariesEn = typeof dictionaries.en;
type IDictionariesRu = typeof dictionaries.ru;

export class AppStore {
    storage: Storage;
    groupAppStore: GroupAppStore;
    dict: IDictionariesEn | IDictionariesRu;

    constructor() {
        this.storage = new Storage();
        this.groupAppStore = new GroupAppStore();
        this.dict = dictionaries.en
    }

    setLanguage(lang: string) {
        if (lang === 'ru') {
            this.dict = dictionaries.ru
        } else {
            this.dict = dictionaries.en
        }
    }

}

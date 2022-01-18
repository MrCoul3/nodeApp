import {Storage} from "./Storage";

export class AppStore {
    storage: Storage;

    constructor() {
        this.storage =new Storage();
    }
}
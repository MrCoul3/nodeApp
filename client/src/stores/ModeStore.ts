import {makeAutoObservable} from "mobx";

export class ModeStore {

    constructor() {
        makeAutoObservable(this);
    }

    closeAllModal() {

    }
}
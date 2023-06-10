import { makeAutoObservable } from "mobx";

export class GameStore {
    private sceneIndex: number = 1;

    // TODO: different stores for universal properties, Fight, and Story?
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public setSceneIndex(index: number): void {
        this.sceneIndex = index;
    }

    public incrementSceneIndex() {
        this.sceneIndex++;
    }

    public getSceneIndex(): number {
        return this.sceneIndex;
    }
}
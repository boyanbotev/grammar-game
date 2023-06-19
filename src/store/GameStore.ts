import { makeAutoObservable } from "mobx";

export class GameStore {
    sceneIndex: number = 0;
    private isCanvasLoaded: boolean = false;
    
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

    public setCanvasLoaded(isLoaded: boolean): void {
        this.isCanvasLoaded = isLoaded;
    }

    public getCanvasLoaded(): boolean {
        return this.isCanvasLoaded;
    }
}

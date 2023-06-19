import { makeAutoObservable } from "mobx";

export class StorySceneStore {
    private backgroundIndex: number = 0;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    public setBackgroundIndex(index: number): void {
        console.log(this.backgroundIndex);
        this.backgroundIndex = index;
    }

    public getBackgroundIndex(): number {
        return this.backgroundIndex;
    }

    public incrementBackgroundIndex(): void {
        this.backgroundIndex++;
    }
}
import { makeAutoObservable } from "mobx";

export class StorySceneStore {
    private textIndex: number = 0;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    public setBackgroundIndex(index: number): void {
        console.log(this.textIndex);
        this.textIndex = index;
    }

    public getBackgroundIndex(): number {
        return this.textIndex;
    }

    public incrementBackgroundIndex(): void {
        this.textIndex++;
    }
}
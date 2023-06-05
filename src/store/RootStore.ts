import { makeAutoObservable } from "mobx";

export class RootStore {
    private questionIndex: number = 0;
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public setQuestionIndex(index: number): void {
        this.questionIndex = index;
    }

    public getQuestionIndex(): number {
        return this.questionIndex;
    }
}
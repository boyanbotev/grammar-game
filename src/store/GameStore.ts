import { makeAutoObservable, observable } from "mobx";

export class GameStore {
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
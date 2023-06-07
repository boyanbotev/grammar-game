import { makeAutoObservable } from "mobx";

export class GameStore {
    private questionIndex: number = 0;
    private playerHearts: number = 0;
    private enemyHearts: number = 0;
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public setQuestionIndex(index: number): void {
        this.questionIndex = index;
    }

    public setPlayerHearts(hearts: number): void {
        this.playerHearts = hearts;
    }

    public setEnemyHearts(hearts: number): void {
        this.enemyHearts = hearts;
    }

    public deincrementPlayerHearts() {
        this.playerHearts--;
    }
    
    public deincrementEnemyHearts() {
        this.enemyHearts--;
    }

    public getPlayerHearts(): number {
        return this.playerHearts;
    }

    public getEnemyHearts(): number {
        return this.enemyHearts;
    }

    public getQuestionIndex(): number {
        return this.questionIndex;
    }
}
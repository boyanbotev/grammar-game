import { makeAutoObservable } from "mobx";

export class GameStore {
    private questionIndex: number = 0;
    private playerHearts: number = 0;
    private enemyHearts: number = 0;
    private sceneIndex: number = 1;

    // TODO: different stores for universal properties, Fight, and Story?
    
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

    public setSceneIndex(index: number): void {
        this.sceneIndex = index;
    }

    public deincrementPlayerHearts() {
        if (this.playerHearts <= 0) throw new Error("Hearts must be positive integer");
        this.playerHearts--;
    }
    
    public deincrementEnemyHearts() {
        if (this.enemyHearts <= 0) throw new Error("Hearts must be positive integer");
        this.enemyHearts--;
    }

    public incrementSceneIndex() {
        this.sceneIndex++;
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

    public getSceneIndex(): number {
        return this.sceneIndex;
    }
}
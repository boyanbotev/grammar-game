import { makeAutoObservable } from "mobx";
import { FightSceneState } from "../common/types";

export class FightSceneStore {
    private questionIndex: number = 0;
    private playerHearts: number = 0;
    private enemyHearts: number = 0;
    private currentState: FightSceneState = FightSceneState.initializing;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    public setQuestionIndex(index: number): void {
        console.log("setQuestionIndex: ", index);
        this.questionIndex = index;
    }

    public setPlayerHearts(hearts: number): void {
        this.playerHearts = hearts;
    }

    public setEnemyHearts(hearts: number): void {
        this.enemyHearts = hearts;
    }

    public setCurrentState(state: FightSceneState): void {
        this.currentState = state;
    }

    public deincrementPlayerHearts() {
        if (this.playerHearts <= 0) throw new Error("Hearts must be positive integer");
        this.playerHearts--;
    }
    
    public deincrementEnemyHearts() {
        if (this.enemyHearts <= 0) throw new Error("Hearts must be positive integer");
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

    public getCurrentState(): FightSceneState {
        return this.currentState;
    }
}
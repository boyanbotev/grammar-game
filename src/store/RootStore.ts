import { FightSceneStore } from "./FightSceneStore";
import { GameStore } from "./GameStore";

export class RootStore {
    game: GameStore;
    fightScene: FightSceneStore;

    constructor() {
        this.game = new GameStore();
        this.fightScene = new FightSceneStore();
    }
}
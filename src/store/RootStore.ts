import { FightSceneStore } from "./FightSceneStore";
import { GameStore } from "./GameStore";
import { StorySceneStore } from "./StorySceneStore";

export class RootStore {
    gameStore: GameStore;
    fightSceneStore: FightSceneStore;
    storySceneStore: StorySceneStore;

    constructor() {
        this.gameStore = new GameStore();
        this.fightSceneStore = new FightSceneStore();
        this.storySceneStore = new StorySceneStore();
    }
}
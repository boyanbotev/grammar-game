import { FightSceneStore } from "./fightSceneStore";
import { GameStore } from "./gameStore";
import { StorySceneStore } from "./storySceneStore";

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
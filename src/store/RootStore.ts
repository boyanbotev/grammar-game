import { GameStore } from "./GameStore";

export class RootStore {
    game: GameStore;

    constructor() {
        this.game = new GameStore();
    }
}
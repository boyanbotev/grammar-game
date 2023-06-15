import { describe, it, expect } from "vitest";

import { GameStore } from "../store/GameStore";

describe("GameStore", () => {

    it ("sets sceneIndex", () => {
       const gameStore = new GameStore();
       gameStore.setSceneIndex(0);
       
       const sceneIndex = gameStore.getSceneIndex();
       expect(sceneIndex).toBe(0);
    });

    it("increments scene index", () => {
        const gameStore = new GameStore();
        gameStore.incrementSceneIndex();

        const sceneIndex = gameStore.getSceneIndex();
        expect(sceneIndex).toBe(1);
    });

    it("sets isCanvasLoaded", () => {
        const gameStore = new GameStore();
        gameStore.setCanvasLoaded(true);

        const isCanvasLoaded = gameStore.getCanvasLoaded();
        expect(isCanvasLoaded).toBe(true);
    });
});

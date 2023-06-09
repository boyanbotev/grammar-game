import { describe, it, expect } from "vitest";

import { GameStore } from "../store/GameStore";

describe("GameStore", () => {

    it ("increments questionIndex", () => {
        const gameStore = new GameStore();

        const questionIndex = gameStore.getQuestionIndex();

        expect(questionIndex).toBe(0);

        gameStore.setQuestionIndex(questionIndex + 1);

        expect(gameStore.getQuestionIndex()).toBe(1);
    });

    it ("deincrements playerHearts", () => {
        const gameStore = new GameStore();

        gameStore.setPlayerHearts(3);

        gameStore.deincrementPlayerHearts();

        expect(gameStore.getPlayerHearts()).toBe(2);
    });

    it ("decrements enemyHearts", () => {
        const gameStore = new GameStore();
        gameStore.setEnemyHearts(3);
        gameStore.deincrementEnemyHearts();
        expect(gameStore.getEnemyHearts()).toBe(2);
    });

    it ("does not deincrement hearts below 0", () => {
        const gameStore = new GameStore();
        gameStore.setPlayerHearts(-1);
        expect(() => gameStore.deincrementPlayerHearts()).toThrowError();
    });

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
});

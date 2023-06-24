import { describe, it, expect } from "vitest";

import { FightSceneStore } from "../store/fightSceneStore"; 

describe("GameStore", () => {

    it ("increments questionIndex", () => {
        const fightSceneStore = new FightSceneStore();

        const questionIndex = fightSceneStore.getQuestionIndex();

        expect(questionIndex).toBe(0);

        fightSceneStore.setQuestionIndex(questionIndex + 1);

        expect(fightSceneStore.getQuestionIndex()).toBe(1);
    });

    it ("deincrements playerHearts", () => {
        const fightSceneStore = new FightSceneStore();

        fightSceneStore.setPlayerHearts(3);

        fightSceneStore.deincrementPlayerHearts();

        expect(fightSceneStore.getPlayerHearts()).toBe(2);
    });

    it ("decrements enemyHearts", () => {
        const fightSceneStore = new FightSceneStore();
        fightSceneStore.setEnemyHearts(3);
        fightSceneStore.deincrementEnemyHearts();
        expect(fightSceneStore.getEnemyHearts()).toBe(2);
    });

    it ("does not deincrement hearts below 0", () => {
        const fightSceneStore = new FightSceneStore();
        fightSceneStore.setPlayerHearts(-1);
        expect(() => fightSceneStore.deincrementPlayerHearts()).toThrowError();
    });
});

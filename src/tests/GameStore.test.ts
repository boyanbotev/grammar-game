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
});

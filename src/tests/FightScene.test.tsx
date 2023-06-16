import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from '@testing-library/react';

import FightScene from "../components/scenes/fight-scene/FightScene";
import { RootStore } from "../store/RootStore";
import { RootStoreContext } from "../useGame";
import { FightSceneCanvasData, SceneType } from "../common/types";

const rootStore =  new RootStore();

const canvasData: FightSceneCanvasData = {
    sceneType: SceneType.fight,
    backGroundImageID: 0,
    playerHearts: {
        number: 1,
    },
    opponentHearts: {
        number: 1,
    }
}

const mockSetCanvasData = vi.fn();

const renderFightScene = () => {
    render(
        <RootStoreContext.Provider value={rootStore}>
            <FightScene canvasData={canvasData} setCanvasData={mockSetCanvasData}/>
        </RootStoreContext.Provider>
    )
}

describe("FightScene", () => {

    it("restarts scene when player hearts are 0", () => {
        renderFightScene();
        // get question

        // trigger right answer

        // trigger wrong answer many times

        // wait
        // question should be back to original
    });

    it("moves to next scene when enemy hearts are 0", () => {

    });
});
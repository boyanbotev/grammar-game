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

    it("sets initial heart values correctly when the component mounts.", () => {
        expect.assertions(1);

        renderFightScene();
    
        // Assertions
        // Check that the initial heart values are set correctly
        expect(mockSetCanvasData).toHaveBeenCalledWith(canvasData);
    });

    it("setFightCanvasData function updates the canvas data correctly.", () => {
        expect.assertions(1);
    });

    it("restarts scene when player hearts are 0", () => {
        renderFightScene();
        expect.assertions(1);
        // get question

        // trigger right answer

        // trigger wrong answer many times

        // wait
        // question should be back to original
    });

    it("moves to next scene when enemy hearts are 0", () => {
        expect.assertions(1);
    });
});

// c. Test that the checkGameConditions function correctly detects when the player loses and resets the scene.

// d. Test that the checkGameConditions function correctly detects when the enemy loses and moves to the next scene.

// e. Test that the goToNextScene function increments the scene index correctly.

// f. Test that the resetScene function resets the heart values and question index correctly.

// g. Test that the component renders the <GrammarContent /> component.

// h. Test any other specific functionality or interactions present in the component.
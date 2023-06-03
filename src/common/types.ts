import { Vector2 } from './Vector2';

type SceneType = "home" | "settings" |  "story" | "learning" | "fight" | "challenge";
// can be toggled in MobX state?
// each connects to a React component

export type CanvasSceneData = {
    backGroundImageID: number;
    playerHearts?: {
        number: number;
        position: Vector2;
    };
    opponentHearts?: {
        number: number;
        position: Vector2;
        colour: number;
    };
};

export type Question = {
    question: string;
    answers: Answer[];
}

export type Answer = {
    content: string;
    correct: boolean;
}
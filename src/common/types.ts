import { Vector2 } from './Vector2';

//type SceneType = "home" | "settings" |  "story" | "learning" | "fight" | "challenge";
// can be toggled in MobX state?
// each connects to a React component

export enum SceneType {
    "home" = "home",
    "settings" = "settings",
    "story" = "story",
    "learning" = "learning",
    "fight" = "fight",
    "challenge" = "challenge"
}

// export type CanvasSceneData = {
//     sceneType: SceneType;
//     backGroundImageID: number;
//     playerHearts?: {
//         number: number;
//         position?: Vector2;
//     };
//     opponentHearts?: {
//         number: number;
//         position?: Vector2;
//         colour?: number;
//     };
// };

export type CanvasSceneData = FightSceneCanvasData | StorySceneCanvasData;

export type FightSceneCanvasData = {
    sceneType: SceneType.fight;
    backGroundImageID: number;
    playerHearts: {
        number: number;
        position?: Vector2;
    };
    opponentHearts: {
        number: number;
        position?: Vector2;
    };
}

export type HeartData = {
    number: number;
    position?: Vector2;
}

export type StorySceneCanvasData = {
    sceneType: SceneType.story;
    backGroundImageID: number;
}

export type Question = {
    question: string;
    answers: Answer[];
}

export type Answer = {
    content: string;
    correct: boolean;
}
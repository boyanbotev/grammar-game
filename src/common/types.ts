import { Vector2 } from './vector2';

export enum SceneType {
    "home" = "home",
    "settings" = "settings",
    "story" = "story",
    "learning" = "learning",
    "fight" = "fight",
    "challenge" = "challenge"
}

export enum FightSceneState {
    "initializing" = "initializing",
    "playing" = "playing",
    "won" = "won",
    "lost" = "lost",
}

export type SceneData = FightSceneData | StorySceneData;

export type FightSceneData = {
    canvasData: FightSceneCanvasData,
    textData: FightSceneTextData,
}

export type StorySceneData = {
    canvasData: StorySceneCanvasData,
    textData: StorySceneTextData,
}

export type TextSceneData = FightSceneTextData | StorySceneTextData;

export type FightSceneTextData = {
    questionIDs: number[];
}

export type StorySceneTextData = {
    storyText: string[];
}

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

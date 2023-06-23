import { DisplayObject } from "pixi.js";
import { CanvasSceneData } from "../../common/types";

export interface Scene extends DisplayObject{
    update(canvasSceneData: CanvasSceneData): void;
    fadeIn(): void;
}

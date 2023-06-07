import { CanvasSceneData } from "../../common/types";

export interface Scene {
    update(canvasSceneData: CanvasSceneData): void;
}

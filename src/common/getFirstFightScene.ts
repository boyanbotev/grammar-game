import scenesData from "./scenesData";
import { SceneType } from "./types";

export function getFirstFightSceneIndex() {
    let fightSceneIndex;
    for (let i = 0; i < scenesData.length; i++) {
        if (scenesData[i].canvasData.sceneType === SceneType.fight) {
            fightSceneIndex = i;
            break;
        }
    }
    return fightSceneIndex !== undefined ? fightSceneIndex : 1;
}

import { Assets, Container } from "pixi.js";

import { Background } from "../pixi-components/background";
import { Scene } from "./Scene";
import { HeartContainer } from "../pixi-components/heartContainer";
import { CanvasSceneData, SceneType } from "../../common/types";
import { BaseScene } from "./baseScene";

export class FightScene extends BaseScene implements Scene {
    private playerHeartContainer: HeartContainer;
    private enemyHeartContainer: HeartContainer;

    constructor() {
        super();

        const heartSize = window.innerWidth/15;

        this.enemyHeartContainer = new HeartContainer(heartSize, this);
        this.playerHeartContainer = new HeartContainer(heartSize, this);
    }

    async update(canvasSceneData: CanvasSceneData): Promise<void> {

        if (canvasSceneData.sceneType !== SceneType.fight) {
            return;
        }
        
        await this.changeBackground(canvasSceneData.backGroundImageID);

        this.playerHeartContainer.update(canvasSceneData.playerHearts)
        this.enemyHeartContainer.update(canvasSceneData.opponentHearts);
    }
}

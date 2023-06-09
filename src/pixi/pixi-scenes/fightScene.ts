import { Assets, Container } from "pixi.js";

import { Background } from "../pixi-components/background";
import { Scene } from "./Scene";
import { HeartContainer } from "../pixi-components/heartContainer";
import { CanvasSceneData, SceneType } from "../../common/types";

export class FightScene extends Container implements Scene {
    private background: Background;
    private playerHeartContainer: HeartContainer;
    private enemyHeartContainer: HeartContainer;

    constructor() {
        super();

        const heartSize = window.innerWidth/15;

        this.background = new Background(null, this);

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

    async changeBackground(backgroundID: number): Promise<void>{

        const backGroundsBundle = await Assets.loadBundle("backgroundsBundle");

        const backgroundTexture = backGroundsBundle[backgroundID];

        if (this.background.texture !== backgroundTexture){
            this.background.texture = backgroundTexture;
        }
    };
}

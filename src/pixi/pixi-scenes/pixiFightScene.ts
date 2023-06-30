import { Scene } from "./scene";
import { HeartContainer } from "../pixi-components/hearts/heartContainer";
import { CanvasSceneData, SceneType } from "../../common/types";
import { PixiBaseScene } from "./pixiBaseScene";
// import { WoundManager } from "../pixi-components/wound/woundManager";

export class PixiFightScene extends PixiBaseScene implements Scene {
    private playerHeartContainer: HeartContainer;
    private enemyHeartContainer: HeartContainer;
    //private woundManager: WoundManager;

    constructor() {
        super();

        const heartSize = window.innerWidth/15;

        this.enemyHeartContainer = new HeartContainer(heartSize, this);
        this.playerHeartContainer = new HeartContainer(heartSize, this);
        //this.woundManager = new WoundManager(this);
    }

    async update(canvasSceneData: CanvasSceneData): Promise<void> {
        console.log("update", canvasSceneData);
        if (canvasSceneData.sceneType !== SceneType.fight) {
            return;
        }
        
        await this.changeBackground(canvasSceneData.backGroundImageID);

        this.playerHeartContainer.update(canvasSceneData.playerHearts)
        this.enemyHeartContainer.update(canvasSceneData.opponentHearts);
        //this.woundManager.update(canvasSceneData);
    }
}

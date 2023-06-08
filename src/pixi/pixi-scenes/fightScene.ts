import { Container } from "pixi.js";

import imgUrl from '../../assets/fight-bear.jpg';
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

        // TODO: use background id to get img
        this.background = new Background(imgUrl, this);

        const heartSize = window.innerWidth/15;
        const enemyHeartSize = window.innerWidth/15;

        this.enemyHeartContainer = new HeartContainer(enemyHeartSize, this);
        this.playerHeartContainer = new HeartContainer(heartSize, this);
    }

    update(canvasSceneData: CanvasSceneData): void {
        if (canvasSceneData.sceneType !== SceneType.fight) 
            return;
        this.playerHeartContainer.update(canvasSceneData.playerHearts)
        this.enemyHeartContainer.update(canvasSceneData.opponentHearts);
    }
}

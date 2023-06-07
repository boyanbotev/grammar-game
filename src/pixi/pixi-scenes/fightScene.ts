import { Container } from "pixi.js";

import imgUrl from '../../assets/fight-bear.jpg';
import { Background } from "../pixi-components/background";
import { Scene } from "./Scene";
import { HeartContainer } from "../pixi-components/heartContainer";
import { Vector2 } from "../../common/Vector2";
import { CanvasSceneData, SceneType } from "../../common/types";

export class FightScene extends Container implements Scene {
    private background: Background;
    private screenHeight: number
    private screenWidth: number
    private playerHeartContainer: HeartContainer;
    private enemyHeartContainer: HeartContainer;

    constructor(
        screenHeight: number,
        screenWidth: number,
    ) {
        super();
        this.screenHeight = screenHeight;
        this.screenWidth = screenWidth;

        this.background = new Background(imgUrl, this);

        const heartSize = window.innerWidth/10;
        this.enemyHeartContainer = new HeartContainer(new Vector2(window.innerWidth/2,0), heartSize, this);
        this.playerHeartContainer = new HeartContainer(new Vector2(window.innerWidth/1.25,window.innerHeight/2.5), heartSize, this);

    }

    update(canvasSceneData: CanvasSceneData): void {
        if (canvasSceneData.sceneType !== SceneType.fight) 
            return;
        this.playerHeartContainer.update(canvasSceneData.playerHearts.number)
        this.enemyHeartContainer.update(canvasSceneData.opponentHearts.number);
    }
}

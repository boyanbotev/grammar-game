import { Assets, Container } from "pixi.js";

import { Background } from "../pixi-components/background";
import { Scene } from "./Scene";
import { CanvasSceneData } from "../../common/types";

export class BaseScene extends Container implements Scene {
    private background: Background;

    constructor() {
        super();
        this.background = new Background(null, this);
        console.log("base scene");
    }

    async update(canvasSceneData: CanvasSceneData): Promise<void> {  
        await this.changeBackground(canvasSceneData.backGroundImageID);
    }

    async changeBackground(backgroundID: number): Promise<void>{

        const backGroundsBundle = await Assets.loadBundle("backgroundsBundle");

        const backgroundTexture = backGroundsBundle[backgroundID];

        if (this.background.texture !== backgroundTexture){
            this.background.texture = backgroundTexture;
        }
    };
}

import { Assets, Container } from "pixi.js";
import { gsap } from "gsap";

import { Background } from "../pixi-components/background";
import { Scene } from "./scene";
import { CanvasSceneData } from "../../common/types";
import config from "../../common/config";

export class PixiBaseScene extends Container implements Scene {
    private background: Background;

    constructor() {
        super();
        this.background = new Background(null, this);

        this.fadeIn();
    }

    async update(canvasSceneData: CanvasSceneData): Promise<void> {  
        await this.changeBackground(canvasSceneData.backGroundImageID);
    }

    async changeBackground(backgroundID: number): Promise<void>{
        console.log("changeBackground, backgroundID: ", backgroundID);
        const backGroundsBundle = await Assets.loadBundle("backgroundsBundle");

        const backgroundTexture = backGroundsBundle[backgroundID];

        if (this.background.texture !== backgroundTexture){
            this.background.texture = backgroundTexture;
        }
    };

    private fadeIn(): void {
        this.alpha = 0;
        gsap.to(this, { alpha: 1, duration: config.fadeTimeMillis/1000});
    }
}

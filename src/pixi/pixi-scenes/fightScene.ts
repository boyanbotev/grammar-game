import { Container } from "pixi.js";

import imgUrl from '../../assets/fight-bear.jpg';
import { Background } from "../pixi-components/background";
import { Scene } from "./Scene";
import { HeartContainer } from "../pixi-components/heartContainer";
import { Vector2 } from "../../common/Vector2";

export class FightScene extends Container implements Scene {
    private background: Background;
    private screenHeight: number
    private screenWidth: number

    constructor(
        screenHeight: number,
        screenWidth: number,
    ) {
        super();
        this.screenHeight = screenHeight;
        this.screenWidth = screenWidth;

        this.background = new Background(imgUrl, this);

        const heartSize = window.innerWidth/10;
        const enemyHeartContainer = new HeartContainer(new Vector2(window.innerWidth/2,0), heartSize, 9, this);
        const boyHeartContainer = new HeartContainer(new Vector2(window.innerWidth/1.25,window.innerHeight/2.5), heartSize, 4, this);

        setInterval(() => enemyHeartContainer.removeHeart(), 1000);
    }

    public changeBackground(backgroundID: number): void {
        this.background.tint = backgroundID * 0xFFFFFF;
        // should be done in background?
    }
}

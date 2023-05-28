import { Container } from "pixi.js";
import imgUrl from '../../assets/fight-bear.jpg';
import { Background } from "../pixi-components/background";
import { Scene } from "./Scene";

export class GameScene extends Container implements Scene {
    private background: Background;

    constructor() {
        super();
        this.background = new Background(imgUrl, this);
    }

    public changeBackground(backgroundID: number): void {
        this.background.tint = backgroundID * 0xFFFFFF;
        // should be done in background?
    }
}
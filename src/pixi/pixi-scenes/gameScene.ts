import { Container, Sprite } from "pixi.js";
import imgUrl from '../../assets/fight-bear.jpg';

export class GameScene extends Container {
    constructor() {
        super();

        const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        // this should be done in one place

        const remainingWidth = screenWidth - screenHeight;

        const sprite = Sprite.from(imgUrl);
        sprite.width = screenHeight;
        sprite.height = screenHeight;
        this.addChild(sprite);
        sprite.x = remainingWidth - remainingWidth/2;

        sprite.tint = '0x999999';
    }
}
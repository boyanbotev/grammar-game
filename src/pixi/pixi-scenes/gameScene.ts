import { Container, Sprite } from "pixi.js";
import imgUrl from '../../assets/fight-bear.jpg';

export class GameScene extends Container {
    constructor() {
        super();

        const screenHeight = screen.height;
        const screenWidth = screen.width;
        const remainingWidth = screenWidth - screenHeight;

        const sprite = Sprite.from(imgUrl);
        sprite.width = screenHeight;
        sprite.height = screenHeight;
        this.addChild(sprite);
        sprite.x = remainingWidth - remainingWidth/2;

        sprite.tint = '0x999999';
    }
}
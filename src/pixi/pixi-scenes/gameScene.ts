import { Container, Sprite } from "pixi.js";
import imgUrl from '../../assets/fight bear.jpg';

export class GameScene extends Container {
    constructor() {
        super();
        const screenHeight = 280;
        const screenWidth = 653;
        const sprite = Sprite.from(imgUrl);
        console.log(sprite);
        sprite.width = screenHeight;
        sprite.height = screenHeight;
        this.addChild(sprite);
        sprite.x = screenWidth - screenHeight;

    }
}
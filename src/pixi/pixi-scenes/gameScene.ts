import { Container, Sprite } from "pixi.js";
import imgUrl from '../../assets/fight-bear.jpg';

export class GameScene extends Container {
    constructor() {
        super();

        const sprite = Sprite.from(imgUrl);
        this.addChild(sprite);
        sprite.tint = '0x999999';

        this.resize(sprite);
        window.addEventListener('resize', () => this.resize(sprite));
    }

    resize(sprite: Sprite): void {
        const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        sprite.height = screenHeight;
        sprite.width = screenHeight;

        const remainingWidth = screenWidth - screenHeight;
        sprite.x = remainingWidth - remainingWidth/2;
    }
}
import { Container, Sprite, Texture } from "pixi.js";

export class Background extends Sprite {
    constructor(texture: Texture | null, parent: Container) {
        super();

        if (texture) this.texture = texture;
        this.tint = '0x999999';

        parent.addChild(this);

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    // TODO?: make base class to reuse resize functionality
    resize(): void {
        const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        this.height = screenHeight;
        this.width = screenHeight;

        const remainingWidth = screenWidth - screenHeight;
        this.x = remainingWidth/2;
    }
}
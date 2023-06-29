import { Sprite, Assets } from "pixi.js";
import { Vector2 } from "../../common/vector2";
import { gsap } from "gsap";

export class Wound extends Sprite {
    constructor(
        size: number, 
        position: Vector2,

        ) {
        super();

        this.width = size;
        this.height = size * 1.6;

        this.anchor.set(0.5);

        this.x = position.x
        this.y = position.y

        this.rotation = 1.5708;

        this.asyncConstructor();
        console.log("Wound");

        this.animate();
    }

    private async asyncConstructor(): Promise<void> {
        const uiBundle = await Assets.loadBundle("uiBundle");
        this.texture = uiBundle["wound"];
    }

    private animate(): void {
        this.alpha = 0;
        const tl = gsap.timeline();
        tl.to(this, {alpha: 1, duration: 0.04});
        tl.to(this, {alpha: 0, width: this.width*2, height: this.height*2, duration: 1});

        setTimeout(() => {
            this.destroy();
        }, 3000);
    }
}

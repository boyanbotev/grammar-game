import { Sprite, Assets } from "pixi.js";
import { Vector2 } from "../../common/vector2";
import { gsap } from "gsap";
import config from "../../common/config";

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

        this.rotation = degreesToRadians(90);

        this.asyncConstructor();
        this.animate();
    }

    private async asyncConstructor(): Promise<void> {
        const uiBundle = await Assets.loadBundle("uiBundle");
        this.texture = uiBundle["wound"];
    }

    private animate(): void {
        this.alpha = 0;
        const tl = gsap.timeline();
        
        tl.to(this, {
            alpha: 1, 
            duration: config.woundAppearDuration
        });

        tl.to(this, {
            alpha: 0, 
            width: this.width * config.woundScaleMultiplier, 
            height: this.height * config.woundScaleMultiplier, 
            duration: config.woundFadeDuration
        });

        setTimeout(() => {
            this.destroy();
        }, config.woundDestroyTimeMillis);
    }
}

function degreesToRadians(degrees: number): number {
  var pi = Math.PI;
  return degrees * (pi/180);
}

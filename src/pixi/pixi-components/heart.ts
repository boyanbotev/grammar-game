import { Sprite, Assets } from "pixi.js";
import gsap from 'gsap';

import { Vector2 } from "../../common/vector2";

export class Heart extends Sprite {
    constructor(
        position: Vector2,
        size: number,
    ){
        super();

        this.width = size;
        this.height = size;

        this.x = position.x
        this.y = position.y

        this.asyncConstructor();
    }

    async asyncConstructor() {
        const uiBundle = await Assets.loadBundle("uiBundle");
        this.texture = uiBundle["heart"];
        this.tint = 0xff5500;
    }

    public pulse() {
        const tl = gsap.timeline();
        tl.to(this,{alpha: 0, duration: 0.1,});
        tl.to(this,{alpha: 1, duration: 0.1,});
    }
}

import { Sprite, Assets } from "pixi.js";

import { Vector2 } from "../../common/Vector2";

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
        //this.tint = 0xff8888;
        this.tint = 0xff5500;
        // this.tint = 0xffeeee;
    }
}

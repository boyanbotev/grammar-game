import { Sprite, Texture } from "pixi.js";

import { Vector2 } from "../../common/Vector2";
import imgUrl from '../../assets/heart pinker pxlr.png';
// TODO: Refactor with Asset Loading

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

        this.texture = Texture.from(imgUrl);
        this.tint = 0xff8888;
    }
}

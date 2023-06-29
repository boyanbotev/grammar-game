import { Assets } from 'pixi.js';

import { Wound } from "./wound";
import { Vector2 } from "../../common/vector2";

export class PlayerWound extends Wound {
    constructor(
        size: number, 
        position: Vector2,
    ) {
        super(size, position);
    }

    async asyncConstructor(): Promise<void> {
        const uiBundle = await Assets.loadBundle("uiBundle");
        this.texture = uiBundle["wound-fat"];
    }
}
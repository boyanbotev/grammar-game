import { Assets } from 'pixi.js';

import { Wound } from "./wound";
import { Vector2 } from "../../../common/vector2";

export class EnemyWound extends Wound {
    constructor(
        size: number, 
        position: Vector2,
    ) {
        super(size, position);
    }

    async asyncConstructor(): Promise<void> {
        this.height = this.height * 1.6;

        const uiBundle = await Assets.loadBundle("uiBundle");
        this.texture = uiBundle["wound-enemy"];
    }
}

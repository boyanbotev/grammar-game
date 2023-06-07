import { Container } from "pixi.js";

import { Vector2 } from "../../common/Vector2";
import { Heart } from "./heart";

export class HeartContainer extends Container {
    private hearts: Heart[] = [];
    private heartCount: number = 0;
    private heartSize: number;

    constructor(
        position: Vector2,
        heartSize: number,
        parent: Container,
    ) {
        super();
        this.x = position.x;
        this.y = position.y;
        parent.addChild(this);

        this.heartSize = heartSize;
    }

    calculateHeartPosition(i: number) {
        const centerXAdjustment = this.heartCount * this.heartSize/2;
        const xOffset = this.heartSize * i - centerXAdjustment;
        return new Vector2(xOffset, 0);
    }

    public update(heartCount: number) {
        if (heartCount === this.heartCount) return;
        else if (heartCount < this.heartCount) {
            this.removeHearts(heartCount);
        } else {
            this.heartCount = heartCount;
            this.clearHearts();
            this.createHearts();
        }
    }

    createHearts(): void {
        for (let i = this.heartCount-1; i >= 0; i--) {
            const heartPosition  = this.calculateHeartPosition(i);
            const heart = new Heart(heartPosition, this.heartSize);
            this.addChild(heart);
            this.hearts.push(heart);
        }
    }

    clearHearts() {
        for (let i = 0; i < this.hearts.length; i++) {
            this.hearts[i].destroy();
        }
        this.hearts = [];
    }

    public removeHearts(heartCount: number) {
        this.heartCount = heartCount;
        for (let i = this.heartCount; i >= 0; i--) {
            const heart = this.hearts[i];

            this.resetHeartPosition(i, heart);  

            if (i === this.heartCount) {
                heart.destroy();
                this.hearts.pop();
            }
        }
    }

    private resetHeartPosition(index: number, heart: Heart) {
        const heartPosition = this.calculateHeartPosition(index);
        heart.x = heartPosition.x;
        heart.y = heartPosition.y;
    }
}

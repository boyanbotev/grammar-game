import { Container } from "pixi.js";

import { Vector2 } from "../../common/Vector2";
import { Heart } from "./heart";
import { HeartData } from "../../common/types";

export class HeartContainer extends Container {
    private hearts: Heart[] = [];
    private heartCount: number = 0;
    private heartSize: number;

    constructor(
        heartSize: number,
        parent: Container,
    ) {
        super();
        parent.addChild(this);
        this.heartSize = heartSize;
    }

    calculateHeartPosition(i: number) {
        const centerXAdjustment = this.heartCount * this.heartSize/2;
        const xOffset = this.heartSize * i - centerXAdjustment;
        return new Vector2(xOffset, 0);
    }
    
    public update(data: HeartData) {
        this.updateHeartCount(data.number);
        if (data.position) {
            this.updatePosition(data.position);
        }
    }

    updatePosition(position: Vector2) { 
        this.x = position.x;
        this.y = position.y;
    }

    public updateHeartCount(heartCount: number) {
        if (heartCount === this.heartCount) return;
        else {
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
}

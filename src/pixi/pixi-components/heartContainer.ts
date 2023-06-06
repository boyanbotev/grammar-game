import { Container } from "pixi.js";
import { Vector2 } from "../../common/Vector2";
import { Heart } from "./heart";

export class HeartContainer extends Container {
    private hearts: Heart[] = [];
    private heartCount: number;
    private heartSize: number;

    constructor(
        position: Vector2,
        heartSize: number,
        initialHeartCount: number,
        parent: Container,
    ) {
        super();
        this.x = position.x;
        this.y = position.y;
        parent.addChild(this);

        this.heartSize = heartSize;
        this.heartCount = initialHeartCount;

        this.createHearts();
    }

    createHearts(): void {
        for (let i = this.heartCount-1; i >= 0; i--) {
            const heartPosition  = this.calculateHeartPosition(i);
            const heart = new Heart(heartPosition, this.heartSize);
            this.addChild(heart);
            this.hearts.push(heart);
        }
    }

    calculateHeartPosition(i: number) {
        const centerXAdjustment = this.heartCount * this.heartSize/2;
        const xOffset = this.heartSize * i - centerXAdjustment;
        return new Vector2(xOffset, 0);
    }

    public update(heartCount: number) {
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

    public removeHeart() {
        this.update(this.heartCount - 1);
    }
}

import { Container } from "pixi.js";
import { CanvasSceneData, FightSceneCanvasData, SceneType } from "../../common/types";
import { Vector2 } from "../../common/vector2";
import { Wound } from "./wound";
import config from "../../common/config";
import { PlayerWound } from "./playerWound";

export class WoundManager {
    private playerHeartCount = 0;
    private enemyHeartCount = 0;
    private parent;

    constructor(parent: Container) {
        this.parent = parent;
    }

    update(data: CanvasSceneData) {
        if (data.sceneType !== SceneType.fight) {
            throw new Error("Invalid scene type: " + data.sceneType);
        }

        if (data.playerHearts.number < this.playerHeartCount) {
            this.createPlayerWound(data);
        }

        if (data.opponentHearts.number < this.enemyHeartCount) {
            this.createEnemyWound(data);
        }

        this.playerHeartCount = data.playerHearts.number;
        this.enemyHeartCount = data.opponentHearts.number;
    }

    private createEnemyWound(data: FightSceneCanvasData) {
        const pos = data.opponentHearts.position;
        if (!pos) {
            throw new Error("Invalid position: " + data.playerHearts);
        }

        const midY = window.innerHeight / 2;

        //this.createWound(config.enemyWoundSize, new Vector2(pos.x, midY));
        const wound = new Wound(config.enemyWoundSize, new Vector2(pos.x, midY));
        this.parent.addChild(wound);
    }

    private createPlayerWound(data: FightSceneCanvasData) {
        const pos = data.playerHearts.position;
        if (!pos) {
            throw new Error("Invalid position: " + data.playerHearts);
        }

        //this.createWound(config.playerWoundSize, new Vector2(pos.x, pos.y + 100));

        const wound = new PlayerWound(config.playerWoundSize, new Vector2(pos.x, pos.y + 100));
        this.parent.addChild(wound);
    }

    // createWound(size: number, position: Vector2): void {
    //     const wound = new Wound(size, position);
    //     this.parent.addChild(wound);
    // }
}

import { Container } from "pixi.js";
import { CanvasSceneData, FightSceneCanvasData, SceneType } from "../../common/types";
import { Vector2 } from "../../common/vector2";
import { Wound } from "./wound";

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
            console.log("create player wound");
            this.createPlayerWound(data);
        }

        if (data.opponentHearts.number < this.enemyHeartCount) {
            console.log("create enemy wound");
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
        this.createWound(window.innerWidth / 2, new Vector2(pos.x, window.innerHeight/2)); //was 1.4
    }

    private createPlayerWound(data: FightSceneCanvasData) {
        const pos = data.playerHearts.position;
        if (!pos) {
            throw new Error("Invalid position: " + data.playerHearts);
        }
        this.createWound(window.innerWidth / 3, new Vector2(pos.x, pos.y + 100));
    }

    createWound(size: number, position: Vector2): void {
        const wound = new Wound(size, position);
        this.parent.addChild(wound);
    }
}
